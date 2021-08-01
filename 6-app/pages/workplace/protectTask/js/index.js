

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
	protaskStatus,
	proTaskType,
	proPeriod
}
