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
const img = ["/static/logo.png","/static/tabbar/plugin.png"]
const taskAllBasicData = [{
		taskType: 0,
		taskId: 0,
		taskState: 0,
		devType:0,
		address: "烟草大厦18楼",
		description: "18楼停电，请尽快修复",
		complaintTime: "2021-06-22 17:55:55",
		devType:2,
		owner:"乔峰",
		ownerPhone:"18259529231",
		img:["/static/logo.png","/static/tabbar/plugin.png"]
	}, {
		taskType: 0,
		taskId: 1,
		taskState: 1,
		address: "烟草大厦6楼",
		description: "空调调控温度无反应",
		complaintTime: "2021-06-22 10:55:55",
		owner:"乔峰",
		ownerPhone:"18259529231",
		devType:3,
		img:["/static/logo.png"]
	}, {
		taskType: 0,
		taskId: 2,
		taskState: 2,
		address: "烟草大厦18楼",
		description: "18楼频繁断电停电",
		complaintTime: "2021-06-20 17:55:55",
		owner:"乔峰",
		ownerPhone:"18259529231",
		devType:2,
	}, {
		taskType: 0,
		taskId: 0,
		taskState: 3,
		address: "烟草大厦3楼卫生间",
		description: "卫生间停水",
		complaintTime: "2021-06-22 17:55:55",
		owner:"乔峰",
		ownerPhone:"18259529231",
		devType:1,
	},{
		taskType: 0,
		taskId: 0,
		taskState: 4,
		address: "烟草大厦18楼",
		description: "18楼停电",
		complaintTime: "2021-06-22 17:55:55",
		owner:"乔峰",
		ownerPhone:"18259529231",
		devType:2,
	}]

const proTaskList = {
	0: [{
		taskType: 1,
		key: 0,
		taskId: 1,
		content: "烟草大厦18楼频繁断电",
		taskType: "一级保养",
		type: 0,
		titleLeft: '烟草大厦',
		titleRight: "查看",
		footerRight: '2021-06-23 14:25:35'
	}],
	1: [{
		taskType: 1,
		key: 1,
		taskId: 2,
		content: "空调漏水",
		taskType: "设备点检",
		type: 1,
		titleLeft: '烟草大厦',
		titleRight: "查看",
		footerRight: '2021-06-24 14:25:12'
	}],
	2: [{
		taskType: 1,
		key: 2,
		taskId: 2,
		content: "电路老化检查",
		taskType: "设备巡检",
		type: 2,
		titleLeft: '烟草大厦',
		titleRight: "查看",
		footerRight: '2021-06-19 14:25:35'
	}]
}

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
module.exports = {
	taskList,
	proTaskList,
	taskAllBasicData,
	img
}
