# Twitter element builders

ツイート要素の公開用ファイルは、次の順にTampermonkeyのメタデータへ指定します。公開入口はバージョンファイルより先に読み込んでもよく、バージョンファイルが後から実装を登録します。共通i18nはTLBuilderやUIBuilderからも利用できます。

```javascript
// @require https://raw.githubusercontent.com/Happy-come-come/UserScripts/main/Twitter%E3%82%92%E5%B0%91%E3%81%97%E4%BE%BF%E5%88%A9%E3%81%AB%E3%80%82/builders/twitterElementBuilders/builderI18n.js
// @require https://raw.githubusercontent.com/Happy-come-come/UserScripts/main/Twitter%E3%82%92%E5%B0%91%E3%81%97%E4%BE%BF%E5%88%A9%E3%81%AB%E3%80%82/builders/twitterElementBuilders/tweetElementBuilder.js
// @require https://raw.githubusercontent.com/Happy-come-come/UserScripts/main/Twitter%E3%82%92%E5%B0%91%E3%81%97%E4%BE%BF%E5%88%A9%E3%81%AB%E3%80%82/builders/twitterElementBuilders/tweetElementBuilder/versions/2026-09-17/TEB-v2026-09-17.js
```

`tweetElementBuilder(data, {uiVersion: '2026-09-17'})`で使用します。バージョン指定を省略すると現行版が使われます。`builderI18n.js`は独立した共有モジュールであり、TEBのバージョンファイルには同梱しません。

共通i18nは`builderI18n.js`を直接編集します。ツイート実装の編集元は`tweetElementBuilder/versions/YYYY-MM-DD/`内です。編集後、リポジトリのルートから`bun builders/twitterElementBuilders/tweetElementBuilder/build-versions.cjs`を実行すると、同じ日付ディレクトリに`TEB-vYYYY-MM-DD.js`を生成します。生成ファイルは直接編集しません。

`tweetElementBuilder/versions/YYYY-MM-DD/`に編集元と生成済みの公開ファイルを置きます。
