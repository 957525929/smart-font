const fixBasic = [{
	key: "address",
	label: "问题地点",
	value: ""
}, {
	key: "devType",
	label: "问题设备类型",
	value: ""
}, {
	key: "owner",
	label: "上报人",
	value: ""
}, {
	key: "ownerPhone",
	label: "上报人联系方式",
	value: ""
}, {
	key: "complaintTime",
	label: "问题上报时间",
	value: ""
}, {
	key: "description",
	label: "问题描述",
	value: ""
}]
const fixRun = []
const fixForm = [{
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

//保养
const proBasic = [{
	key: "taskId",
	label: "任务编号",
	value: ""
}, {
	key: "devType",
	label: "保养设备类型",
	value: ""
}, {
	key: "proType",
	label: "保养类型",
	value: ""
}, {
	key: "range",
	label: "保养范围",
	value: ""
}, {
	key: "address",
	label: "保养设备组",
	value: ""
}, {
	key: "devType",
	label: "保养周期",
	value: ""
}, {
	key: "admin",
	label: "下发人",
	value: ""
}, {
	key: "adminPhone",
	label: "下发人联系方式",
	value: ""
}, {
	key: "startTime",
	label: "任务下发时间",
	value: ""
}, {
	key: "endTime",
	label: "任务截止时间",
	value: ""
}, {
	key: "description",
	label: "任务描述",
	value: ""
}]
const proDev=[]
const proPlan=[]
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
	fixBasic,
	fixRun,
	fixForm,
	proBasic,
	proDev,
	proPlan,
	proForm
}
