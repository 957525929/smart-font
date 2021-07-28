const taskList = {
	0: [{
		taskType: 0,
		taskId: 0,
		type: 0,
		titleLeft: "烟草大厦18楼",
		titleRight: "查看",
		content: "18楼停电，请尽快修复",
		footerRight: "2021-06-22 17:55:55"
	}, {
		taskType: 0,
		taskId: 1,
		type: 1,
		titleLeft: "烟草大厦6楼",
		titleRight: "查看",
		content: "空调调控温度无反应",
		footerRight: "2021-06-22 10:55:55"
	}, {
		taskType: 0,
		taskId: 2,
		type: 2,
		titleLeft: "烟草大厦18楼",
		titleRight: "查看",
		content: "18楼频繁断电停电",
		footerRight: "2021-06-20 17:55:55"
	}, {
		taskType: 0,
		taskId: 0,
		type: 3,
		titleLeft: "烟草大厦3楼卫生间",
		titleRight: "查看",
		content: "卫生间停水",
		footerRight: "2021-06-22 17:55:55"
	}],
	1: [{
		taskType: 0,
		taskId: 0,
		type: 4,
		titleLeft: "烟草大厦18楼",
		titleRight: "查看",
		content: "18楼停电",
		footerRight: "2021-06-22 17:55:55"
	}]
}
const img = ["/static/logo.png", "/static/tabbar/plugin.png"]
const taskAllBasicData = [{
	taskType: 0,
	taskId: 0,
	taskState: 0,
	devType: 0,
	address: "烟草大厦18楼",
	description: "18楼停电，请尽快修复",
	complaintTime: "2021-06-22 17:55:55",
	devType: 2,
	owner: "乔峰",
	ownerPhone: "18259529231",
	img: ["/static/logo.png", "/static/tabbar/plugin.png"]
}, {
	taskType: 0,
	taskId: 1,
	taskState: 1,
	address: "烟草大厦6楼",
	description: "空调调控温度无反应",
	complaintTime: "2021-06-22 10:55:55",
	owner: "乔峰",
	ownerPhone: "18259529231",
	devType: 3,
	img: ["/static/logo.png"]
}, {
	taskType: 0,
	taskId: 2,
	taskState: 2,
	address: "烟草大厦18楼",
	description: "18楼频繁断电停电",
	complaintTime: "2021-06-20 17:55:55",
	owner: "乔峰",
	ownerPhone: "18259529231",
	devType: 2,
}, {
	taskType: 0,
	taskId: 0,
	taskState: 3,
	address: "烟草大厦3楼卫生间",
	description: "卫生间停水",
	complaintTime: "2021-06-22 17:55:55",
	owner: "乔峰",
	ownerPhone: "18259529231",
	devType: 1,
}, {
	taskType: 0,
	taskId: 0,
	taskState: 4,
	address: "烟草大厦18楼",
	description: "18楼停电",
	complaintTime: "2021-06-22 17:55:55",
	owner: "乔峰",
	ownerPhone: "18259529231",
	devType: 2,
}]

const proTaskList = {
	0: [{
		taskType: 1,
		key: 0,
		taskId: 1,
		content: "中国烟草总公司福建省公司机关-A区域-1号楼,例行养护",
		taskType: "一级保养",
		type: 0,
		titleLeft: '1号楼月度巡养计划',
		titleRight: "查看",
		footerRight: '2021-06-22 18：55：55',
	}],
	1: [{
		taskType: 1,
		key: 1,
		taskId: 2,
		content: "中国烟草总公司福建省公司机关-B区域-3号楼",
		taskType: "设备点检",
		type: 1,
		titleLeft: '空调维修检查',
		titleRight: "查看",
		footerRight: '2021-07-31 00：00：00'
	}],
	2: [{
		taskType: 1,
		key: 2,
		taskId: 2,
		content: "中国烟草总公司福建省公司机关-B区域-2号楼",
		taskType: "设备巡检",
		type: 2,
		titleLeft: '电路老化检查',
		titleRight: "查看",
		footerRight: '2021-07-31 00：00：00'
	}]
}
//详情数据
const proAllBasicData = [{
		key: 0,
		taskId: '1',
		taskName: "1号楼月度巡养计划",
		taskType: 0,
		taskStatus: 0,
		taskPeriod: "每月",
		dispatchTime: '2021-06-22 18：55：55',
		areaKey: '1-1-1',
		address: "中国烟草总公司福建省公司机关-A区域-1号楼",
		proStaff: '刘涛',
		phone: '18232145698',
		admin: "管理员",
		adminPhone: "2321475",
		expectTime: '2021-07-31 00：00：00',
		description: "例行养护"
	},
	{
		key: 1,
		taskId: '2',
		taskName: "空调维修检查",
		taskType: 1,
		taskStatus: 1,
		taskPeriod: "每天",
		dispatchTime: '2021-07-21 10:55:11',
		areaKey: '1-2-3',
		address: "中国烟草总公司福建省公司机关-B区域-3号楼",
		proStaff: '张英',
		phone: '13332145698',
		admin: "管理员",
		adminPhone: "2321475",
		expectTime: '2021-07-31 00：00：00',
		description: "维养检查"
	},
	{
		key: 2,
		taskId: '3',
		taskName: "电路老化检查",
		taskType: 4,
		taskStatus: 2,
		taskPeriod: "每周",
		dispatchTime: '2021-06-19 10:55:55',
		areaKey: '1-2-2',
		address: "中国烟草总公司福建省公司机关-B区域-2号楼",
		proStaff: '刘涛',
		phone: '18232145698',
		admin: "管理员",
		adminPhone: "2321475",
		expectTime: '2021-07-31 00：00：00',
		description: "电路老化检查"
	}
]

//=============================================device=============
const devData = [{
		key: 0,
		devId: 1001,
		devName: "给水设备_1001",
		areaKey: "1-1-2",
		address: "中国烟草总公司福建省公司机关-A区域-2号楼",
		// devStatus: 4,
		devType:"给排水系统",
		loginTime: '2021-06-22 17:55:55',
		manufacturer: "日丰企业集团有限公司",
		batch: "M127894",
	},
	{
		key: 1,
		devId: 2001,
		devName: "供电设备_2001",
		areaKey: "1-2-1",
		address: "中国烟草总公司福建省公司机关-B区域-1号楼",
		// devStatus: 5,
		devType: "电器系统",
		loginTime: '2021-06-21 10:55:55',
		manufacturer: "国网福建省电力有限公司",
		batch: "N2169"
	},
	{
		key: 2,
		devId: 3001,
		devName: "空调_3001",
		areaKey: "1-2-3",
		address: "中国烟草总公司福建省公司机关-B区域-3号楼",
		// devStatus: 7,
		devType:"空调、通风系统",
		loginTime: '2021-06-19 08:55:55',
		manufacturer: "珠海格力电器股份有限公司",
		batch: "A2421"
	}, {
		key: 3,
		devId: 4001,
		devName: "给水管网_4001",
		areaKey: "1-2-2",
		address: "中国烟草总公司福建省公司机关-B区域-2号楼",
		devType: "给排水系统 - 给排水系统",
		loginTime: '2021-06-12 17:55:55',
		manufacturer: "日丰企业集团有限公司",
		batch: "M127894"
	},
	{
		key: 4,
		devId: 5001,
		devName: "供电线路_5001",
		areaKey: "1-1-1",
		address: "中国烟草总公司福建省公司机关-A区域-1号楼",
		devType: "电器系统 - 供电设备",
		loginTime: '2021-06-11 10:55:55',
		manufacturer: "国网福建省电力有限公司",
		batch: "N2169"
	},
	{
		key: 5,
		devId: 6001,
		devName: "冷水机组_6001",
		areaKey: "1-2-3",
		address: "中国烟草总公司福建省公司机关-B区域-3号楼",
		devType: "空调、通风系统 - 空调设备",
		loginTime: '2021-06-11 08:55:55',
		manufacturer: "珠海格力电器股份有限公司",
		batch: "A2421"
	}
]


const devTypeTree = [{
		children: [{
				key: '1-1',
				title: '给水设备',
				value: 'water-in',
				children: [{
						key: '1-1-1',
						title: '贮水池 (箱)',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-1-2',
						title: '给水泵',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1001',
						title: '给水管网',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-1-4',
						title: '水表',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
				],
			},
			{
				children: [{
						key: '1-2-1',
						title: '排水管道',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-2-2',
						title: '通气管',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-2-3',
						title: '清通设备',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-2-4',
						title: '抽升设备',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-2-5',
						title: '室外排水管道',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				],
				key: '1-2',
				title: '排水设备',
				value: 'water-out',
			},
			{
				key: '1-3',
				title: '房屋卫生设备',
				value: 'water-in',
				children: [{
						key: '1-3-1',
						title: '洗脸盆',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-3-2',
						title: '浴盆',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-3-3',
						title: '大便器',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-3-4',
						title: '小便器',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				],
			},
			{
				key: '1-4',
				title: '房屋热水供应设备',
				value: 'water-in',
				children: [{
						key: '1-4-1',
						title: '给水泵',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-4-2',
						title: '热水管道',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-4-3',
						title: '热水表',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '1-4-4',
						title: '水加热器',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				],
			},
		],
		key: '1',
		title: '给排水系统',
		value: 'water',
	},
	{
		children: [{
				key: '2-1',
				title: '供电设备',
				value: 'water-in',
				children: [{
						key: '2001',
						title: '供电线路',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '2-1-2',
						title: '变配电装置',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '2-1-3',
						title: '高低压电器',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				],
			},
			{
				children: [{
						key: '2-2-1',
						title: '机房',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '2-2-2',
						title: '轿厢',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '2-2-3',
						title: '井道',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				],
				key: '2-2',
				title: '电梯设备',
				value: 'water-out',
			},
			{
				key: '2-3',
				title: '电气照明系统',
				value: 'water-in',
				children: [{
						key: '2-3-1',
						title: '照明供电线路',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '2-3-2',
						title: '照明器具',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				],
			}
		],
		key: '2',
		title: '电器系统',
		value: 'electricity',
	},
	{
		children: [{
				key: '3-1',
				title: '空调设备',
				value: 'water-out',
				children: [{
						key: '3001',
						title: '冷水机组',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '3-1-2',
						title: '水泵',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '3-1-3',
						title: '空调机组',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}, {
						key: '3-1-1',
						title: '风机',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '3-1-2',
						title: '冷却塔',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '3-1-3',
						title: '风机盘管',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				]
			},
			{
				key: '3-2',
				title: '通风设备',
				value: 'water-in',
				children: [{
						key: '3-2-1',
						title: '风机',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '3-2-2',
						title: '通风管道',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}, {
						key: '3-2-1',
						title: '风口',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					},
					{
						key: '3-2-2',
						title: '空气净化',
						value: '2ea16c76c6e14d7d80e734af209916d3',
					}
				],
			}
		],
		key: '3',
		title: '空调、通风系统',
		value: 'warm-wind',
	},
	{
		key: '4',
		title: '其他',
		value: 'other',
	},
]

const proAllDevData = []
const proAllPlanData = [{
	taskId: 2,
	recordId: 4,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-07-22 10:55:11",
}, {
	taskId: 3,
	recordId: 0,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-06-24 10:55:11",
}, {
	taskId: 3,
	recordId: 1,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-07-01 10:55:11",
}, {
	taskId: 3,
	recordId: 2,
	ifRun: 1,
	ifnormal: 1,
	proDesc: "-",
	proimgs: [],
	proTime: "-",

}, {
	taskId: 3,
	recordId: 3,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-07-19 10:55:11",
}]
const groupTree = [{
	children: [{
		children: [{
				key: '1-1-1',
				title: '1号楼',
				value: 'water-in'
			},
			{
				key: '1-1-2',
				title: '2号楼',
				value: 'water-out',
			}
		],
		key: '1-1',
		title: 'A区域',
		value: 'water',
	}, {
		key: '1-2',
		title: 'B区域',
		value: 'water',
		children: [{
				key: '1-2-1',
				title: '1号楼',
				value: 'water-in',
			},
			{
				key: '1-2-2',
				title: '2号楼',
				value: 'water-in',
			},
			{
				key: '1-2-3',
				title: '3号楼',
				value: 'water-in',
			}
		]
	}],
	key: '1',
	title: '中国烟草总公司福建省公司机关',
	value: 'water',
}]
/*保养任务类型proTaskType*/
const proTaskType = {
	0: {
		tableValue: '设备巡检',
		searchValue: '巡检',
		code: 0
	},
	1: {
		tableValue: '设备点检',
		searchValue: '点检',
		code: 1
	},
	2: {
		tableValue: '维修中保养',
		searchValue: '维修中保养',
		code: 2
	},
	3: {
		tableValue: '日常维护',
		searchValue: '日常维护',
		code: 3
	},
	4: {
		tableValue: '一级保养',
		searchValue: '一级保养',
		code: 4
	},
	5: {
		tableValue: '二级保养',
		searchValue: '二级保养',
		code: 5
	},
}
/*保养任务状态protaskStatus*/
const protaskStatus = {
	0: {
		tableValue: '待保养',
		searchValue: '待保养',
		code: 0
	},
	1: {
		tableValue: '待核查',
		searchValue: '待核查',
		code: 1
	},
	2: {
		tableValue: '已完成',
		searchValue: '已完成',
		code: 2
	}
}
/*养护周期 proPeriod*/
const proPeriod = {
	0: {
		tableValue: '每日',
		searchValue: '每日',
		code: 0
	},
	1: {
		tableValue: '每周',
		searchValue: '每周',
		code: 1
	},
	2: {
		tableValue: '每月',
		searchValue: '每月',
		code: 2
	},
	3: {
		tableValue: '每季度',
		searchValue: '每季度',
		code: 3
	},
	4: {
		tableValue: '每年',
		searchValue: '每年',
		code: 4
	},
	5: {
		tableValue: '自定义',
		searchValue: '自定义',
		code: 5
	},
}
module.exports = {
	taskList,
	proTaskList,
	taskAllBasicData,
	proAllBasicData,
	proAllDevData,
	proAllPlanData,
	img,
	devData,
	protaskStatus,
	proTaskType,
	proPeriod
}
