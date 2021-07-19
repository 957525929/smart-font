import { msg,judgeNull } from '@/common/util.js'
const myInfo = () => {
	function showMsg(val) {
		msg(`抱歉，${val.title}不能更改`)
	}

	function showActions(val) {
		let self = this
		let promise = new Promise((resolve, reject) => {
			uni.showActionSheet({
				itemList: val.children,
				success: function(res) {
					resolve(val.children[res.tapIndex])
				},
				fail: function(res) {
					msg(`抱歉，${val.title}不能更改`)
					// uni.showToast({
					// 	title: `抱歉，${val.title}修改失败`,
					// 	duration: 2000,
					// 	icon: 'none'
					// })
				}
			});
		})
		return promise
	}

	function showForm(val) {
		this.$refs.edit.show();
		return true
	}

	function goto(val) {
		this.$navTo.goTo(val.url, {
			infoIs: val.title,
		})
	}

	function handleText(val) {
		if (judgeNull(val)) {			
			return val
		}
	}

	function handleBool(val, keyy) {
		if (val) {
			return keyy.children[1]
		} else{
			return  keyy.children[0]
		}
	}
			// #ifndef MP-WEIXIN
	return new Map([
		[{
				key: 'telephone',
				content: '',
				title: '登录手机号',
				url: ''
			},
			[showMsg, handleText]
		],
		[{
				key: 'userName',
				content: '环保用户',
				title: '用户名',
				url: ''
			},
			[showForm, handleText]
		],
		[{
				key: 'sex',
				content: '',
				title: '性别',
				url: '男',
				children: ["男", "女"]
			},
			[showActions, handleText]
		],
		[{
				key: 'address',
				content: '待填写',
				title: '家庭地址',
				url: 'infoDetail',
				children: ["待填写", "已填写"]
			},
			[goto, handleBool]
		],
		[{
				key: 'isExitface',
				content: '待采集',
				title: '人脸采集',
				url: 'infoDetail',
				children: ["待采集", "已采集"]
			},
			[goto, handleBool]
		],		
		
		[{
				key: 'idNumber',
				content: '未认证',
				title: '身份认证',
				url: 'infoDetail',
				children: ["待认证", "已认证"]
			},
			[goto, handleBool]
		]
	])
	// #endif
	// #ifdef MP-WEIXIN
	return new Map([
	[{
				key: 'telephone',
				content: '',
				title: '登录手机号',
				url: ''
			},
			[showMsg, handleText]
		],
		[{
				key: 'userName',
				content: '环保用户',
				title: '用户名',
				url: ''
			},
			[showForm, handleText]
		],
		[{
				key: 'sex',
				content: '',
				title: '性别',
				url: '男',
				children: ["男", "女"]
			},
			[showActions, handleText]
		],
		[{
				key: 'address',
				content: '待填写',
				title: '家庭地址',
				url: 'infoDetail',
				children: ["待填写", "已填写"]
			},
			[goto, handleBool]
		],		
		[{
				key: 'idNumber',
				content: '未认证',
				title: '身份认证',
				url: 'infoDetail',
				children: ["待认证", "已认证"]
			},
			[goto, handleBool]
		]
	])
	// #endif
}
module.exports = {
	myInfo,
	infoList:{
		"家庭地址":"infoAddress",
		"人脸采集":"face",
		"身份认证":"infoIDCard"
	}
}