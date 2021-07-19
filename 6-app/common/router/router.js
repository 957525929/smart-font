// import MPRouter from './routeTo.js'
// 路由封装
const baseWorkplace = "/pages/workplace"
const basePerson = "/pages/person"
const router = [{
		name: "home",
		path: '/pages/index/index'
	}, {
		name: "noNetwork",
		path: "/pages/index/noNetwork",
	}, {
		name: "noResult",
		path: "/pages/index/noResult",
	},
	// 工作台
	{
		name: "workplace",
		path: baseWorkplace+"/index",
	}, {
		name: "checkTask",
		path: baseWorkplace+"/checkTask/checkTask",
	},{
		name: "checkTaskDetail",
		path: baseWorkplace+"/checkTask/checkTaskDetail",
	},  {
		name: "fixReport",
		path: baseWorkplace+"/fixReport/fixReport",
	}, {
		name: "fixReportList",
		path: baseWorkplace+"/fixReport/fixReportList",
	}, {
		name: "fixTask",
		path: baseWorkplace+"/fixTask/fixTask"
	},{
		name: "fixTaskDetail",
		path: baseWorkplace+"/fixTask/fixTaskDetail"
	},  {
		name: "protectTask",
		path: baseWorkplace+"/protectTask/protectTask"
	},{
		name: "protectTaskDetail",
		path: baseWorkplace+"/protectTask/protectTaskDetail"
	},
	// 个人中心
	{
		name: "person",
		path: basePerson+"/index",
	}, {
		name: "myInfo",
		path: basePerson+"/myInfo/myInfo"
	}, {
		name: "infoDetail",
		path: basePerson+"/myInfo/infoDetail"
	}, {
		name: "help",
		path: basePerson+"/help/help"
	}, {
		name: "helpType",
		path: basePerson+"/help/helpType"
	}, {
		name: "feedback",
		path: basePerson+"/feedback"
	}, {
		name: "feedBackList",
		path: basePerson+"/feedback/feedBackList"
	}, {
		name: "about",
		path: basePerson+"/about/about"
	}, {
		name: "aboutDetail",
		path: basePerson+"/about/aboutDetail"
	}, {
		name: "contact",
		path: basePerson+"/about/contact"
	}, {
		name: "sysSetting",
		path: basePerson+"/sysSetting"
	}
]

export default router;
// function goTo(url, data) {
// 	const urlIs = router[url] + (url.indexOf('?') < 0 ? '?' : '&') + param(data)
// 	uni.navigateTo({
// 		url: urlIs
// 	})
// }

// function param(data) {
// 	let url = ''
// 	// encodeURIComponent(
// 	for (var j in data) {
// 		let value = data[j] !== undefined ? data[j] : ''
// 		url += '&' + j + '=' + JSON.stringify(value)
// 	}
// 	return url ? url.substring(1) : ''
// }
