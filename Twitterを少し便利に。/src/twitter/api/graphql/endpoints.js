export const graphqlBaseUrl = `https://${window.location.hostname}/i/api/graphql`;
export const graphqlGenericFeatures = {};

export const endpoints = {
	TweetDetail: { // ツイートの詳細を取得するエンドポイント
		method: ['GET'],
		url: '/XMOz5h24KAZ86qKffKTLdQ/TweetDetail',
		variables: {
			"focalTweetId": "", // ツイートのid_strを指定する
			"referrer": "home",
			"with_rux_injections": false,
			"rankingMode": "Relevance", // "Relevance" , "Recency", "Likes" リプ欄の並び順
			"includePromotedContent": true,
			"withCommunity": true,
			"withQuickPromoteEligibilityTweetFields": true,
			"withBirdwatchNotes": true,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {
			"withArticleRichContentState": true,
			"withArticlePlainText": false,
			"withArticleSummaryText": true,
			"withArticleVoiceOver": true,
			"withGrokAnalyze": false,
			"withDisallowedReplyControls": false
		},
		version: '20260831',
	},
	UserTweets: {
		method: ['GET'], // プロフィールのツイートタブのタイムラインを取得するエンドポイント
		url: '/SXVCYB8XHSS25nzIljNtZA/UserTweets',
		variables: {
			"userId": "",
			"count": 40,
			"includePromotedContent": true,
			"withQuickPromoteEligibilityTweetFields": true,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {
			"withArticlePlainText": false,
		},
		version: '20260831',
	},
	UserOriginalsTimeline: {
		method: ['GET'], // プロフィールのリツイートを除いたツイートタブのタイムラインを取得するエンドポイント
		url: '/F3G579cN5xm0xa_j76q08Q/UserOriginalsTimeline',
		variables: {
			"userId": "",
			"count": 20,
			"includePromotedContent": true,
			"withQuickPromoteEligibilityTweetFields": true,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {
			"withArticlePlainText": false
		},
		version: '20260904',
	},
	UserByScreenName: { // ユーザーデータをスクリーンネームから取得するエンドポイント
		method: ['GET'],
		url: '/Gb-d6r0vxPOADdG62OEBpQ/UserByScreenName',
		variables: {
			"screen_name": '',
			"withGrokTranslatedBio": true,
		},
		features: {
			"hidden_profile_subscriptions_enabled": true,
			"profile_label_improvements_pcf_label_in_post_enabled": true,
			"responsive_web_profile_redirect_enabled": true,
			"rweb_tipjar_consumption_enabled": false,
			"verified_phone_label_enabled": false,
			"subscriptions_verification_info_is_identity_verified_enabled": true,
			"subscriptions_verification_info_verified_since_enabled": true,
			"highlights_tweets_tab_ui_enabled": true,
			"responsive_web_twitter_article_notes_tab_enabled": true,
			"subscriptions_feature_can_gift_premium": true,
			"creator_subscriptions_tweet_preview_api_enabled": true,
			"responsive_web_graphql_timeline_navigation_enabled": true
		},
		fieldToggles: {
			"withPayments": false,
			"withAuxiliaryUserLabels": false,
		},
		version: '20260831',
	},
	UserMedia: { // ユーザーのメディアタブのタイムラインを取得するエンドポイント
		method: ['GET'],
		url: '/y4E0HTZKPhAOXewRMqMqgw/UserMedia',
		variables: {
			"userId": '',
			"count": 20,
			"includePromotedContent": false,
			"withClientEventToken": false,
			"withBirdwatchNotes": false,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {"withArticlePlainText":false},
		version: '20260410', // 画像, 動画両方を同時に取得できるこのバージョンを残している。
	},
	Likes: {
		method: ['GET'],
		url: '/xA8fDIbrJfy4ojjjXmSR-A/Likes',
		variables: {
			"userId": "",
			"count": 20,
			"includePromotedContent": false,
			"withClientEventToken": false,
			"withBirdwatchNotes": false,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {"withArticlePlainText":false},
		version: '20260831',
	},
	HomeLatestTimeline: { // フォロー欄のタイムラインを取得するエンドポイント
		method: ['GET', 'POST'],
		url: '/BLQWpfVqtgBqAqwRRJcJjA/HomeLatestTimeline',
		variables: {
			"count": 40,
			// "cursor": "",
			"enableRanking": false,
			"includePromotedContent": true,
			"requestContext": "ptr"
		},
		features: graphqlGenericFeatures,
		version: '20260831',
	},
	HomeTimeline: { // おすすめ欄のタイムラインを取得するエンドポイント
		method: ['GET', 'POST'],
		url: '/wp06oo3fRGU4P1sK8rECqQ/HomeTimeline',
		variables: {
			"count": 20,
			"includePromotedContent": true,
			"requestContext": "launch",
			"withCommunity": true,
			"seenTweetIds": [
				// id_str
				// おすすめTLの一番上のツイートのidを入れればOK
			]
		},
		features: graphqlGenericFeatures,
		version: '20260831',
	},
	/*
	UserTweetsAndReplies: { // ユーザーの返信欄を取得するエンドポイント
		method: ['GET'],
		url: '/Yt1JzwcBsBWYEEi3jMTe2Q/UserTweetsAndReplies',
		version: '20260410',
	},
	*/
	UserRepliesTimeline: { // ユーザーが返信したツイートツリーのみを取得するエンドポイント
		method: ['GET'],
		url: '/dRUXRSlEIPlVmPgOQ8Z43g/UserRepliesTimeline',
		variables: {
			"userId": "",
			"count": 20,
			"includePromotedContent": true,
			"withCommunity": true,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {"withArticlePlainText":false},
		version: '20260831',
	},
	UserRepostsTimeline: { // ユーザーのリツイートしたツイートを取得するエンドポイント
		method: ['GET'],
		url: '/bV_DHAIvQ945LAA1-eIIow/UserRepostsTimeline',
		variables: {
			"userId": "",
			"count": 20,
			"includePromotedContent": true,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {"withArticlePlainText":false},
		version: '20260831',
	},
	UserPhotoTimeline: {
		method: ['GET'],
		url: '/XIHPPDFf0sv_vq-jGY2R6A/UserPhotoTimeline',
		variables: {
			"userId": "",
			"count": 20,
			"includePromotedContent": false,
			"withClientEventToken": false,
			"withBirdwatchNotes": false,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {"withArticlePlainText":false},
		version: '20260831',
	},
	UserVideoTimeline: {
		method: ['GET'],
		url: '/nQtJBz_PX3Dr8Erk3oyhuA/UserVideoTimeline',
		variables: {
			"userId": "",
			"count": 20,
			"includePromotedContent": false,
			"withClientEventToken": false,
			"withBirdwatchNotes": false,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {"withArticlePlainText":false},
		version: '20260831',
	},
	UserHighlightsTweets: { // ユーザーのハイライトツイートを取得するエンドポイント
		method: ['GET'],
		url: '/ryXhzHPlD6YJE137gSf7mQ/UserHighlightsTweets',
		variables: {
			"userId": "",
			"count": 20,
			"includePromotedContent": true,
			"withVoice": true
		},
		features: graphqlGenericFeatures,
		fieldToggles: {"withArticlePlainText":false},
		version: '20260831',
	},
	BookmarksTimeline: { // ブックマークのタイムラインを取得するエンドポイント
		method: ['GET'],
		url: '/iblrFnKr6PZUR-dWpfXG6g/Bookmarks',
		variables: {
			"count": 20,
			"includePromotedContent": true
		},
		features: graphqlGenericFeatures,
		version: '20260831',
	},
	ListLatestTweetsTimeline: { // リストの最新ツイートを取得するエンドポイント
		method: ['GET'],
		url: '/1LE3u14FJjPZUHKFGzos2g/ListLatestTweetsTimeline',
		variables: {
			"listId": "2020379482247606392",
			"count": 20
		},
		version: '20260831',
	},
	ListsManagementPageTimeline: { // リスト管理ページのリスト一覧を取得するエンドポイント
		method: ['GET'],
		url: '/oJzDnoFH4Jd00gNaossiQQ/ListsManagementPageTimeline',
		version: '20260410',
	},
	CombinedLists: { //ユーザーのリスト一覧を取得するエンドポイント
		method: ['GET'],
		url: '/rGMu90eAOCEVRbybd_qzFw/CombinedLists',
		version: '20260410',
	},
	// actions
	FavoriteTweet: {
		method: ['POST'],
		url: '/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet',
		version: '20260410',
	},
	UnfavoriteTweet: {
		method: ['POST'],
		url: '/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet',
		version: '20260410',
	},
	CreateRetweet: {
		method: ['POST'],
		url: '/mbRO74GrOvSfRcJnlMapnQ/CreateRetweet',
		version: '20260410',
	},
	DeleteRetweet: {
		method: ['POST'],
		url: '/ZyZigVsNiFO6v1dEks1eWg/DeleteRetweet',
		version: '20260410',
	},
	CreateBookmark: {
		method: ['POST'],
		url: '/aoDbu3RHznuiSkQ9aNM67Q/CreateBookmark',
		version: '20260410',
	},
	DeleteBookmark: {
		method: ['POST'],
		url: '/Wlmlj2-xzyS1GN3a6cj-mQ/DeleteBookmark',
		version: '20260410',
	},
}

Object.assign(graphqlGenericFeatures, {
	"rweb_video_screen_enabled": false,
	"rweb_cashtags_enabled": true,
	"profile_label_improvements_pcf_label_in_post_enabled": true,
	"responsive_web_profile_redirect_enabled": true,
	"rweb_tipjar_consumption_enabled": false,
	"verified_phone_label_enabled": false,
	"creator_subscriptions_tweet_preview_api_enabled": true,
	"responsive_web_graphql_timeline_navigation_enabled": true,
	"premium_content_api_read_enabled": false,
	"communities_web_enable_tweet_community_results_fetch": true,
	"c9s_tweet_anatomy_moderator_badge_enabled": true,
	"responsive_web_grok_analyze_button_fetch_trends_enabled": false,
	"responsive_web_grok_analyze_post_followups_enabled": true,
	"rweb_cashtags_composer_attachment_enabled": true,
	"responsive_web_jetfuel_frame": true,
	"responsive_web_grok_share_attachment_enabled": true,
	"responsive_web_grok_annotations_enabled": true,
	"articles_preview_enabled": true,
	"responsive_web_edit_tweet_api_enabled": true,
	"rweb_conversational_replies_downvote_enabled": false,
	"graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
	"view_counts_everywhere_api_enabled": true,
	"longform_notetweets_consumption_enabled": true,
	"responsive_web_twitter_article_tweet_consumption_enabled": true,
	"content_disclosure_indicator_enabled": true,
	"content_disclosure_ai_generated_indicator_enabled": true,
	"responsive_web_grok_show_grok_translated_post": true,
	"responsive_web_grok_analysis_button_from_backend": true,
	"post_ctas_fetch_enabled": false,
	"freedom_of_speech_not_reach_fetch_enabled": true,
	"standardized_nudges_misinfo": true,
	"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true,
	"longform_notetweets_rich_text_read_enabled": true,
	"longform_notetweets_inline_media_enabled": false,
	"responsive_web_grok_image_annotation_enabled": true,
	"responsive_web_grok_imagine_annotation_enabled": true,
	"responsive_web_grok_community_note_auto_translation_is_enabled": true,
	"responsive_web_enhance_cards_enabled": false
});
