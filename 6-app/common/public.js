const taskList = {
	0: [{
		taskId: 0,
		type: 0,
		titleLeft: "烟草大厦18楼",
		titleRight: "查看",
		content: "18楼停电，请尽快修复",
		footerRight: "2021-06-22 17:55:55"
	}, {
		taskId: 1,
		type: 1,
		titleLeft: "烟草大厦6楼",
		titleRight: "查看",
		content: "空调调控温度无反应",
		footerRight: "2021-06-22 10:55:55"
	}, {
		taskId: 2,
		type: 2,
		titleLeft: "烟草大厦18楼",
		titleRight: "查看",
		content: "18楼频繁断电停电",
		footerRight: "2021-06-20 17:55:55"
	},{
		taskId: 0,
		type: 3,
		titleLeft: "烟草大厦3楼卫生间",
		titleRight: "查看",
		content: "卫生间停水",
		footerRight: "2021-06-22 17:55:55"
	}],
	1: [{
		taskId: 0,
		type: 4,
		titleLeft: "烟草大厦18楼",
		titleRight: "查看",
		content: "18楼停电",
		footerRight: "2021-06-22 17:55:55"
	}]
}
const proTaskList = {
	0: [{
		key: 0,
		taskId: 1,
		content: "烟草大厦18楼频繁断电",
		taskType:"维修中保养",
		type: 0,
		titleLeft: '烟草大厦',
		titleRight:"查看",
		footerRight: '2021-06-23 14:25:35'
	}],
	1: [{
		key: 1,
		taskId: 2,
		content: "空调漏水",
		taskType: "设备点检",
		type: 1,
		titleLeft: '烟草大厦',
		titleRight:"查看",
		footerRight: '2021-06-24 14:25:12'
	}],
	2: [{
		key: 2,
		taskId: 2,
		content: "电路老化检查",
		taskType: "设备巡检",
		type: 2,
		titleLeft: '烟草大厦',
		titleRight:"查看",
		footerRight: '2021-06-19 14:25:35'
	}]
}
module.exports = {
	taskList,
	proTaskList
}
