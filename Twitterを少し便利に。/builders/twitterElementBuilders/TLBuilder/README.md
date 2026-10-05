# TLBuilder（2026-09-17）

`TLBuilder()`はDOM容器を作り、`append(tweetData, tweetOptions)`でTweetElementBuilderのviewを追加します。取得・操作API・画面遷移は行いません。`items`には追加したviewを保持し、`clear()`/`dispose()`はviewを破棄して容器を空にします。

仮想スクロールは既定で有効です。`TLBuilder({virtualScroll:false})`で従来の通常フローにできます。第二TLのような独立スクロール領域では、その要素を`scrollElement`に渡してください。`setVirtualScroll(boolean)`で実行中にも切り替えられ、`getVirtualState()`で表示中のブロック数を確認できます。DOM接続後は自動で再計算され、`refresh()`で手動再計算もできます。`overscan`（px、既定600）と`estimatedTweetHeight`（px、既定180）も指定できます。

仮想化の単位は単独ポストまたは会話モジュール全体です。表示範囲外のDOMを外し、前後に高さを持つスペーサーを置きます。表示中の高さは`ResizeObserver`で再測定し、画面より上の項目が増減した分だけスクロール位置を補正します。仮想スクロールが有効なときは、TweetElementBuilderのviewも表示範囲へ入るまで生成しません。`items`、`append()`、`appendConversation()`、`appendResponse().views`は安定したハンドルで、`isMaterialized`を読めます。`element`・`parts`など実viewのプロパティへアクセスするか`materialize()`を呼ぶと、そのブロックを生成します。`virtualScroll:false`では追加時に全viewが生成されます。

画面外へ出たブロックのviewは既定で破棄し、戻ったときに再生成します。`evictOffscreen:false`で破棄だけを無効にできます。測定済みの高さとハンドルは保持し、TweetElementBuilderの`getSnapshot()`で本文・操作件数・テーマ・翻訳表示などの状態を退避します。`getVirtualState()`は現在の生成数と累計破棄数も返します。実DOMや`parts`の参照は再生成後に新しくなるため、長期間保持せずハンドルから取り直してください。動画の再生位置や開いたメニューなど一時的なUIは復元しません。

上位層が各viewに処理を付けるときは、`timeline.element`の`tlb:materialize`イベントを購読できます。`event.detail.views`が生成された実viewです。これなら画面外ハンドルの`parts`に触れて全件を先に生成せずに済みます。
破棄直前には`tlb:evict`が発火します。両イベントの`detail`には`entryId`と`views`を含みます。上位層独自の状態がある場合は、この境界で退避・再接続してください。

ホームTLのGraphQLレスポンスは`appendResponse(response)`で渡せます。`data.home.home_timeline_urt.instructions`の`TimelineAddEntries`から`TimelineTimelineItem`/`TimelineTweet`を順序どおり描画し、`promotedMetadata`をTEBの`promotedContent`へ渡します。戻り値は`{tweets, views, cursors, skipped}`で、上下カーソルは保持しますがDOMには描画しません。`TimelineShowAlert`など未対応instructionも`skipped`に残します。ホームTLの隣接投稿から縦線は推測しません。

前のページは`prependResponse(response)`で先頭へ追加できます。表示中の投稿を基準にスクロール位置を補正します。両メソッドは既出の`entryId`を重複追加せず、戻り値の`views`には新規追加分だけを含め、`duplicates`と`addedBlocks`も返します。重複判定は投稿IDではなくTLエントリID単位です。会話モジュールの一部の子が既出ならモジュール全体をスキップし、会話線を壊しません。`clear()`で重複履歴も消去します。

既存の単独投稿・ユーザーカードは`updateEntry(entryId, tweetOrUser, tweetOptions?)`で内容を更新、`replaceEntry(oldEntryId, tweetOrUser, {entryId, tweetOptions}?)`でIDごと差し替え、`removeEntry(entryId)`で削除できます。更新・差し替えは同じviewハンドルを返し、対象がなければ`false`を返します。削除後は同じエントリIDを再追加できます。`TimelineReplaceEntry`の投稿・ユーザー差し替えと`TimelineRemoveEntries`は`appendResponse`/`prependResponse`でも適用し、結果の`replaced`・`removed`・`missing`で確認できます。カーソルの差し替えは従来どおり`cursors`へ入ります。会話モジュール全体とその子の個別変更は、接続線の整合性を保つため、現時点ではこの単独エントリAPIで受け付けません。

カーソルと通信状態はUIBuilderの`createTimelineController(timeline,{loadPage,queryKey,tweetOptions,maxCachedQueries})`で管理します。初回レスポンスが既にある場合は`controller.ingest(response)`、取得から始める場合は`await controller.load('bottom')`を使います。`loadPage`には`{direction,cursor,queryKey,signal}`が渡され、レスポンスを返してください。上方向は`load('top')`です。同時取得は1件に制限し、同方向の重複呼び出しは同じPromiseを返します。`getState()`から両カーソル、取得中状態、終端、エラーを読めます。取得を開始するタイミング（端へのスクロール検出など）は呼び出し側が決めます。

検索語・検索タブ・並び順などを含む一意の`queryKey`を渡し、切り替えには`controller.switchQuery(nextQueryKey)`を使います。検索語ごとに上下カーソルと取得済みレスポンスを保持し、戻ったときは通信せず投稿を再構築します。進行中の古い取得は中断されます。保持する検索条件は既定で最大5件（`maxCachedQueries`で変更可能）で、超過時は最近使っていないものから破棄します。`reset(newQueryKey)`は全条件のキャッシュを捨ててTLを初期化する操作です。キャッシュはメモリ内のみで、ページ再読み込み後には残りません。スクロール位置は検索条件ごとには保存しません。

`artifacts/tests/fixtures/arr.json`のようなツイートオブジェクトの配列も、そのまま`appendResponse(tweets)`に渡せます。TweetResultと旧形式のツイートを混在させても、各要素を独立した投稿として順番に描画します。配列入力にはカーソルや会話モジュールの情報がないため、`cursors`は空で、隣接投稿から会話線は推測しません。不正な項目は`skipped`に記録します。

検索レスポンス（`data.search_by_raw_query.search_timeline.timeline.instructions`）も受け付けます。話題・最新のTweetエントリを描画し、`TimelineReplaceEntry`で差し替えられた上下カーソルも読み取ります。同じ方向のカーソルが複数ある場合は最後の値を採用します。`TLBuilder.parseResponse(response)`で描画前に解析結果を確認できます。`artifacts/tests/fixtures/search`の6例で検証しています。メディア検索の`TimelineAddToModule`は`modules`に記録し、その子Tweetも表示対象に含めます。アカウント検索の`TimelineUser`は`users`に保持し、ユーザーカードとして描画します。カードも通常のTLブロックと同じ仮想スクロール・重複排除の対象です。

ユーザーカードの操作は通信・遷移を行わず、`tlb:user-open`と`tlb:user-follow`イベントに`user`、`userId`、`screenName`を渡します。前者には`href`、後者には現在の`following`も含まれます。フォローボタンは`viewerId`指定時に表示し、文言は共通`builderI18n`の`follow`/`following`を参照します。認証バッジはTEBと同じアイコン定義・判定を使用し、紹介文はTEBのentity分割を通してURLとハッシュタグを表示します。リンク操作はキャンセル可能な`tlb:user-link`イベントでも受け取れます。アバター・名前・IDのホバーにはTEBの`profile-hover.js`を共用し、仮想スクロールによる破棄時にはポータルも破棄します。`artifacts/demo/user-search-demo.html`で`account01.json`/`account02.json`の実レスポンスを切り替えて確認できます。フォロー関係や強調ラベルなど、検索カード固有の細部は引き続き照合が必要です。

メディア投稿だけを並べるTLには`TLBuilder({mediaLayout:'grid'})`を指定できます。既定は`list`で、`setMediaLayout('grid'|'list')`または`toggleMediaLayout()`で取得済みの同じ投稿を再通信なしに切り替えます。TLBuilderはXの`ui_moduleVerticalGridTimelineRow`に合わせて3件ずつ行にまとめ、上下4pxの間隔を管理します。投稿からのプレビュー抽出・正方形タイルのDOMとスタイルはTEBバージョンの`mediaGridPreview()`と`createMediaGridTile()`へ委譲します。各投稿の先頭メディアを使い、動画は再生時間、GIFはラベル、複数メディアは重なりアイコンを表示します。メディアがない場合はカード画像の候補を調べます。タイルの画像は`background-image`で表示し、`img`は元のプレビューとALTを保持します。

タイルは原版のメディアURLへリンクし、クリック時にはキャンセル可能な`tlb:media-open`イベントに`{entryId,tweetId,mediaIndex,media,view,href}`を渡します。ユーザースクリプト内で遷移する場合はイベントをキャンセルし、上位層で`navigateTo`などを接続してください。グリッドも行単位の仮想スクロールと画像の遅延読み込みに対応します。表示切り替え時のスクロール位置は保持しません。`artifacts/demo/media-demo.html`で検索メディアとプロフィールのメディア投稿を試せます。

プロフィールTLも`appendResponse(response)`で受け取ります。`data.user.result.timeline.timeline.instructions`の`VerticalConversation`モジュールはグループ容器として保持し、子のTweetを順に描画します。親子IDが一致する箇所にだけ線を出します。`who-to-follow`などTweet以外のモジュールは`skipped`に残します。保存した実レスポンスの構造は`artifacts/analysis/profile-timeline-port.md`に記載しています。

プロフィール会話では`appendConversation([parentTweet, replyTweet, ...])`を使用します。配列内で直後の投稿の`in_reply_to_status_id_str`が直前の`rest_id`と一致する場合にだけ、親のアバター下の縦線を表示し、子の「返信先」ラベルを省きます。隣接していてもIDがつながらない投稿には線を出しません。各入力はTweetResultそのもの、または`tweet_results.result`を含む項目を受け付けます。関係判定は配列内の隣接要素だけに限定し、別のタイムライン項目をまたいで推測しません。

TEBは`parts.author.conversationBottomLine`と`setConversationBottomLine(boolean)`を公開します。線の色はテーマ別の`--teb-conversation-line`を使います。これは保存済み984627の`withBottomLine`/`lineBottom`に対応する最初の移植です。`withTopLine`、`withElbow`、階層インデント、GraphQLのプロフィール会話エントリの展開規則は未実装で、データ例を使って続けて定義します。

TLの編集元は`versions/2026-09-17/tl-builder.js`、ユーザーカードの編集元は`versions/2026-09-17/user-element-builder.js`です。後者は単独で`UserElementBuilder(user, options)`としても利用でき、公開用TLBバージョンへ同梱されるため追加の`@require`は不要です。TEB側のメディアタイルは`tweetElementBuilder/versions/2026-09-17/rich.js`で編集します。`bun builders/twitterElementBuilders/TLBuilder/build-versions.cjs`で公開用の`versions/2026-09-17/TLB-v2026-09-17.js`を生成します。ブラウザの回帰テストは`artifacts/tests/tl-conversation.html`と`artifacts/tests/tl-virtual.html`です。
