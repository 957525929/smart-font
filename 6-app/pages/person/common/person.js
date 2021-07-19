module.exports = {
	// 主页
	// #ifdef APP-PLUS
	content: [{
			imgUrl: 'iconfont iconzhangdan',
			title: '我的账单',
			url: 'myBill'
		}, {
			imgUrl: 'iconfont iconchengyuan',
			title: '成员绑定',
			url: 'memberBind'
		}, {
			imgUrl: 'iconfont iconquestion-circle',
			title: '帮助中心',
			url: 'help'
		},
		{
			imgUrl: 'iconfont iconguanyuwomen',
			title: '关于我们',
			url: 'about'
		}, {
			imgUrl: 'iconfont iconyijianfankui',
			title: '版本更新',
			url: '',
		}, {
			imgUrl: 'iconfont iconset-copy-copy',
			title: '系统设置',
			url: 'sysSetting'
		}
	],	
	// #endif
	// #ifdef MP-WEIXIN
	content: [
		{
			imgUrl: 'iconfont iconzhangdan',
			title: '我的账单',
			url: 'myBill'
		},
		{
			imgUrl: 'iconfont iconchengyuan',
			title: '垃圾袋绑定',
			url: 'submitBags'
		}, {
			imgUrl: 'iconfont iconquestion-circle',
			title: '帮助中心',
			url: 'help'
		},
		{
			imgUrl: 'iconfont iconguanyuwomen',
			title: '关于我们',
			url: 'about'
		}, 
		// {
		// 	imgUrl: 'iconfont iconyijianfankui',
		// 	title: '版本更新',
		// 	url: ''
		// },
		{
			imgUrl: 'iconfont iconset-copy-copy',
			title: '系统设置',
			url: 'sysSetting'
		}
	],
	// #endif
	perStat: [{
		title: '当前积分',
		key: 'integral',
		num: '0.00',
		Company: '积分'
	}, {
		title: '投递重量',
		key: 'deliveryWeight',
		num: '0.00',
		Company: 'kg'
	}, {
		title: '投递次数',
		key: 'deliveryNum',
		num: '0',
		Company: '次'
	}],
	// 关于我们
	aboutList: [{
		title: '产品说明',
		url: 'getAppIntro',
		key: 'aboutDetail'
	}, {
		title: '合作伙伴',
		url: 'getPartner',
		key: 'aboutDetail'
	}, {
		title: '隐私协议',
		url: 'getPrivacy',
		key: 'aboutDetail'
	}, {
		title: '联系我们',
		url:'getContact',
		key: 'contact'
	}],

	faceItem: [{
			value: "Eye",
			name: "眨眨眼",
			checked: "true",
		},
		{
			value: "Mouth",
			name: "张张嘴",
			checked: "true",
		},
		{
			value: "HeadLeftOrRight",
			name: "左右摇头",
		},
	],

	// 成员绑定
	mem_menu: [{
			id: '0',
			title: '领取垃圾袋',
			imgUrl: '/pages/component/person/static/person/garbage-bag.png'
		},
		{
			id: '1',
			title: '投递垃圾',
			imgUrl: '/pages/component/person/static/person/dustbin.png'
		}
	],
	menbindMenu:{
		1:"addMem",
		2:"editMem"
	},
	memList:['父亲', '母亲', '爱人', '兄弟姐妹', '儿子', '女儿', '奶奶', '爷爷', '外祖父', '外祖母', '其他'],
	contact: [{
			imgUrl: 'iconfont icondianhua1',
			title: '联系电话',
			content: '021-2631478\n周一到周日9：00-18：00',
			url: ''
		},
		// {
		// 	imgUrl: 'iconfont iconhezuo',
		// 	title: '品牌合作',
		// 	content: 'www.123.com',
		// 	url: ''
		// }, 
		{
			imgUrl: 'iconfont iconweixin',
			title: '官方微信',
			content: '1.打开微信输入XXX\n2.搜索\n3.关注公众号gfhcws2631478',
			url: ''
		}, {
			imgUrl: 'iconfont iconsina',
			title: '新浪微博',
			content: '点击关注XXXXX新浪微博',
			url: ''
		}, {
			imgUrl: 'iconfont iconsend',
			title: '联系地址',
			content: '福建省福州市仓山区上三路8号',
			url: ''
		}
	],
	sysSettingMenu: [{
		key: "ableGetNewMessage",
		title: "接受新消息通知"
	}, {
		key: "voice",
		title: "提示声音"
	}, {
		key: "vibrate",
		title: "提示震动"
	}],
	storageMenu: [{
		key: "storage",
		title: "清除缓存"
	}],
	storageSize: [
		[
			[0, 1024], "KB"
		],
		[
			[1024, 1048576], "MB"
		]
	]
}
