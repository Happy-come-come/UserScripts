export const userAgent = navigator.userAgent || navigator.vendor || window.opera;

function isMobileDevice(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}
export const isMobile = isMobileDevice();
export const isPC = !isMobile;
export const debugging = true; // デバッグログを有効にするかどうか

const commonSelectors = {
	'tweetField': 'article[data-testid="tweet"]',
	'retweeted': '[data-testid="socialContext"]',
	'likedColor': 'r-vkub15',
	'liked': 'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z',
	'infoField': '.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2',
	'clickMediaField': '.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-dnmrzs.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
	'profileFieldHeaderItems': '[data-testid="UserProfileHeader_Items"]',
	'link': {
		"nomal": 'css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21',
		"hovered": 'css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1ny4l3l r-1ddef8g r-tjvw6i r-1loqt21'
	},
};
const desktopSelectors = {
	'timeLineMediaField': '.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-11wrixw.r-61z16t.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
	'mediaField': '.r-9aw3ui.r-1s2bzr4',
	'profileField': '.r-1ifxtd0.r-ymttw5.r-ttdzmv',
	'followersLink': '.r-bcqeeo.r-qvutc0.r-1tl8opc.r-a023e6.r-rjixqe.r-16dba41.r-1loqt21',
};
const mobileSelectors = {
	'timeLineMediaField': '.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
	'mediaField': '.r-9aw3ui.r-a1ub67 > .r-9aw3ui',
	'profileField': '.r-ku1wi2.r-1j3t67a.r-1b3ntt7',
	'followersLink': '.r-bcqeeo.r-qvutc0.r-1tl8opc.r-1b43r93.r-hjklzo.r-16dba41.r-1loqt21',
};
export const envSelector = isMobile ? {...commonSelectors,...mobileSelectors} : {...commonSelectors,...desktopSelectors};
