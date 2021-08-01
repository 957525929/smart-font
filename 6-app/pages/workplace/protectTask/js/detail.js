import {proTaskType } from "./index.js"
//保养
const proBasic = [{
		label: '计划编号',
		key: 'taskId',
		value: ""
	},
	{
		label: '养护计划名',
		key: 'taskName',
		value: ""
	},
	{
		key: 'taskType',
		label: '保养类型',
		valueEnum: proTaskType,
		value: ""
	},
	{
		label: '养护周期',
		key: 'taskPeriod',
		value: "",
		// valueEnum: proPeriod
	},
	{
		label: '计划起始时间',
		key: 'dispatchTime',
		type: 'a-range-picker',
		value: ""
	},
	{
		label: '计划终止时间',
		key: 'expectTime',
		value: ""
	},
	{
		label: '区域Id',
		key: 'areaKey',
		value: "",
		hideInDetail: true
	},
	{
		label: '保养区域',
		key: 'address',
		value: "",
	},
	{
		key: "admin",
		label: "下发人",
		value: ""
	}, {
		key: "adminPhone",
		label: "下发人联系方式",
		value: ""
	},
	{
		label: '计划描述',
		key: 'description',
		value: ""
	}
]

const proDev = [{
		title: '设备编号',
		key: 'devId',
		value: "",
	},
	{
		title: '设备名称',
		key: 'devName',
		value: "",
	},
	{
		title: '设备类型',
		key: 'devType',
		value: "",
		// valueEnum:devTypeTree
	},
	{
		key: 'manufacturer',
		title: '厂商单位',
		value: "",
	}
]

const proPlan = [{
		label: '保养记录编号',
		key: 'recordId',
		value: "",
		hideInForm:true
	}, {
		label: '任务是否执行',
		key: 'ifRun',
		valueEnum: {
			0: {
				tableValue: "是",
				searchValue: "是",
				code: 'success'
			},
			1: {
				tableValue: "否",
				searchValue: "否",
				code: 'error'
			}
		},
		type:"a-select",
		value: "",
		hideInForm:true
	},
	{
		label: '设备是否正常',
		key: 'ifnormal',
		valueEnum: {
			0: {
				tableValue: "是",
				searchValue: "是",
				code: 'success'
			},
			1: {
				tableValue: "否",
				searchValue: "否",
				code: 'error'
			}
		},
		type:"a-select",
		value: ""
	},
	{
		label: '保养描述',
		key: 'proDesc',
		value: "",
	},
	{
		label: '保养图片',
		key: 'proimgs',
		value: "",
		hideInForm:true
	},
	{
		label: '保养时间',
		key: 'proTime',
		value: "",
		hideInForm:true
	}
]

const proForm = [{
	key: "devName",
	label: "故障设备",
	value: ""
}, {
	key: "address",
	label: "故障位置",
	value: ""
}, {
	key: "reason",
	label: "故障原因描述",
	value: "",
	type: "textarea"
}, {
	key: "handle",
	label: "处理方法及结果",
	value: "",
	type: "textarea"
}, {
	key: "ficDoneDate",
	label: "维修结束日期",
	value: "",
	type: "picker",
	valueEnum: ""
}, {
	key: "ficDoneTime",
	label: "维修结束时间",
	value: "",
	type: "picker",
	valueEnum: ""
}]
//详情数据
const proAllBasicData = [{
		key: 0,
		taskId: 1,
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
		taskId: 2,
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
		description: "养护检查"
	},
	{
		key: 2,
		taskId: 3,
		taskName: "电路老化检查",
		taskType: 4,
		taskStatus: 2,
		taskPeriod: "每周",
		dispatchTime: '2021-06-30 10:55:55',
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

const proAllPlanData = [{
	taskId: 1,
	recordId: 2,
	ifRun: 1,
	ifnormal: 1,
	proDesc: "",
	proimgs: [],
	proTime: "",
	startTime:"2021-06-22",
	endTime:"2021-06-31"
}, {
	taskId: 1,
	recordId: 4,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-07-22 10:55:11",
	startTime:"2021-07-01",
	endTime:"2021-07-31"
}, {
	taskId: 2,
	recordId: 0,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-06-24 10:55:11",
	startTime:"2021-06-24 00:00:00",
	endTime:"2021-06-24 23:59:59"
}, {
	taskId: 3,
	recordId: 1,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-07-01 10:55:11",
	startTime:"2021-07-01",
	endTime:"2021-07-07"
}, {
	taskId: 2,
	recordId: 3,
	ifRun: 0,
	ifnormal: 0,
	proDesc: "一切正常",
	proimgs: ["/assets/logo.png"],
	proTime: "2021-07-19 10:55:11",
	startTime:"2021-07-01",
	endTime:"2021-07-31"
}]

module.exports = {
	proBasic,
	proDev,
	proPlan,
	proForm,
	proAllBasicData,
	devData,
	proAllPlanData
}