import {
	proPeriod,
	proTaskType,
	devTypeTree
} from "@/common/public.js"
//保养
const proBasic = [{
		label: '任务编号',
		key: 'taskId',
		value: ""
	},
	{
		label: '任务名',
		key: 'taskName',
		value: ""
	},
	{
		key: 'taskType',
		label: '任务类型',
		valueEnum: proTaskType,
		value: ""
	},
	{
		label: '任务周期',
		key: 'taskPeriod',
		value: "",
		// valueEnum: proPeriod
	},
	{
		label: '任务下发时间',
		key: 'dispatchTime',
		type: 'a-range-picker',
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
		label: '任务结束时间',
		key: 'expectTime',
		value: ""
	},
	{
		label: '任务描述',
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
		title: '保养记录编号',
		key: 'recordId',
		value: ""
	}, {
		title: '任务是否按期执行',
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
		value: ""
	},
	{
		title: '设备是否正常',
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
		value: ""
	},
	{
		title: '保养描述',
		key: 'proDesc',
		value: "",
	},
	{
		title: '保养图片',
		key: 'proimgs',
		value: "",
	},
	{
		title: '保养时间',
		key: 'proTime',
		value: ""
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

module.exports = {
	proBasic,
	proDev,
	proPlan,
	proForm
}