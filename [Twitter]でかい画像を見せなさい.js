// ==UserScript==
// @name			[Twitter]でかい画像を見せなさい
// @name:ja			[Twitter]でかい画像を見せなさい
// @name:en			[Twitter]Show me big pics.
// @version			1145141919810.0.4
// @description			TLとクリックしたあとの画像の解像度を上げます。
// @description:ja			TLとクリックしたあとの画像の解像度を上げます。
// @description:en			Increase the resolution of the image on TL and clicked.
// @author			ゆにてぃー
// @match			https://twitter.com/*
// @match			https://mobile.twitter.com/*
// @match			https://x.com/*
// @match			https://X.com/*
// @icon			data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJkSURBVHgB7VZBbtpQEH3zIW0WVYuXVaH4Bs0NSk4AOUFhEarskhMknIDsqkKlcIT0BNAT1D1B3ZJK3dmVuirwp/MhVmzAxiagKBJv9+ePZ97M/JkxsMMODwzChlD84FWQp3MxeCDHAhiumB+MJrr1+8Ryw3p/9+H4DctfIPCq49Xlw8Kv99YlMuB19885gy/i7llziwGfFFWJyR02XzSCuwiBUse7BlFVaz5LS8KQVkRXaXRJsqImfDjKSZBNyzEyFWFKVJ4KFbWLElUao6KbSk8i9TXgTPaorxTskPwOxa7/9baGt4zg8oQbNyfWYJlRU0/KUx9ZwNwYNq1ecFRzl18QpW0bB0Ks//KjV1uwlbuLJA3GxEdh5wb5yGEPl3qMd2xecYQHKnlFlVLX95kxYCFKGg5IlU2a0uLpCM68LEJA+sJ/Dm6Jy3aMjQIRakRUm+UuvfOp/X34iQSejeFo0Hdx4optG5uFH/R+GHNvANcm3VtwLs+Lvy2TRwhIOnrYHhysIuDKcCDwGbYAjglOzQt+HssElF6dvoNNOZeuCSbfSgIGMjILMo4/ExZf7TqghNLmlwm1gpSC2tmaLAZMvWGz0Iu7XpqBm2NrQNN5cD+Y5ZOTdZyok3RZMusZOJUN+QZrQFb0oQkG6xIIYHe8A03Unx/Ryd6jS2ctAsbxmFRVynGKlM5na5ePVkUe0p+h9MmraS2zXqYgmSWjOPtElHbLTVB3Q79gqQlMScxqXpeav0UWiGMmXKSNOpZAAPvKs/U/1MRoxRxl+5WD+psUy2D5IdmRVoWjnqDnLlkyO+zwaPAf1zXwZL751PUAAAAASUVORK5CYII=
// @license			MIT
// @namespace			https://greasyfork.org/ja/users/1023652
// ==/UserScript==
(function() {
    'use strict';
	var desktop_selector = {
		'time_line_media_field': '.css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-11wrixw.r-61z16t.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'click_media_field': '.css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-dnmrzs.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010'
	};
	var mobile_selector = {
		'time_line_media_field': '.css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'click_media_field': '.css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-dnmrzs.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010'
	};
	var env_selector;
    if(document.location.href.match(/https?:\/\/mobile\.twitter\.com.*/)){
		if(window.navigator.connection.type == "wifi"){
			env_selector = mobile_selector;
			locationChange();
			init(1);
			window.addEventListener("scroll", update);
		}else{
			console.log("wifiじゃないと通信が多くなっちゃうから機能をオフにするね。")
		}
    }else{
		env_selector = desktop_selector;
		locationChange();
		init(1);
		window.addEventListener("scroll", update);
    }
	let currentUrl = document.location.href;
	let updating = false;

	function init(times) {
		for(let i = 0; i < times; i++) {
				setTimeout(() => findTarget(`${env_selector.time_line_media_field}`), 500 * i);
		}
	}
	function findTarget(target){
		document.querySelectorAll(`${target}`).forEach(t => {
			if(! t.querySelector('.fixed_image_uri') && t.getElementsByTagName('img')){
				var new_content = document.createElement("dev");
				new_content.classList.add("fixed_image_uri");
				t.appendChild(new_content);
				fix_image_uri(t.childNodes);
			}
		});
	}
	function fix_image_uri(target_node){
		//console.log(target_node)
		try{
			target_node[0].style.backgroundImage = `${target_node[0].style.backgroundImage.replace(/&name=.*"/,'&name=orig"')},${target_node[0].style.backgroundImage}`;
			target_node[1].src = target_node[1].src.replace(/&name=.*/,'&name=orig');
		}catch{}
	}
	function update() {
		if(updating) return;
		updating = true;
		init(1);
		setTimeout(() => {updating = false;}, 1000);
	}

	function locationChange() {
		const observer = new MutationObserver(mutations => {
			mutations.forEach(() => {
				if(currentUrl !== document.location.href) {
					currentUrl = document.location.href;
					init(1);
					wait_load_Element_and_do_function(`${env_selector.click_media_field}`,findTarget,env_selector.click_media_field);
				}
			});
		});
		const target = document.getElementById("react-root");
		const config = {childList: true,subtree: true};
		observer.observe(target, config);
	}
	function wait_load_Element_and_do_function(Element_Name,func,func_argument){
		const MAX_RETRY_COUNT = 5;
		var retry_counter = 0;
		var set_interval_id = setInterval(find_target_element, 200);
		function find_target_element() {
			retry_counter++;
			if(retry_counter > MAX_RETRY_COUNT) {
			clearInterval(set_interval_id);
                return;
			}
			var target_elements = document.querySelectorAll(`${Element_Name}`);
			if(target_elements.length > 0) {
				if(typeof(set_interval_id) != 'undefined') {
					clearInterval(set_interval_id);
					func(func_argument);
				}else {
					return target_elements;
				}
			}
		}
		find_target_element();
	}
})();
