// 路由封装
var router = {
	chat: '/pages/notice/chat',
};

function goTo(url, data) {
	const urlIs = router[url] + (url.indexOf('?') < 0 ? '?' : '&') + param(data)
	uni.navigateTo({
		url: urlIs
	})	
	}


module.exports = {
	goTo
}
