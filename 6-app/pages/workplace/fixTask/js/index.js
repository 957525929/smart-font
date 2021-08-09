
const taskAllBasicData = [{
	taskType: 0,
	taskId: 0,
	taskState: 0,
	devType: 0,
	address: "烟草大厦18楼",
	description: "18楼停电，请尽快修复",
	complaintTime: "2021-06-22 17:55:55",
	devType: "电器系统",
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
	devType: "房屋、通风系统",
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
	devType: "电器系统",
}, {
	taskType: 0,
	taskId: 4,
	taskState: 3,
	address: "烟草大厦3楼卫生间",
	description: "卫生间停水",
	complaintTime: "2021-06-22 17:55:55",
	owner: "乔峰",
	ownerPhone: "18259529231",
	devType: "给排水系统",
}, {
	taskType: 0,
	taskId: 5,
	taskState: 4,
	area: "中国烟草总公司福建省公司机关-B区域-1号楼",
	address: "烟草大厦18楼",
	description: "18楼停电",
	complaintTime: "2021-06-22 17:55:55",
	owner: "乔峰",
	ownerPhone: "18259529231",
	devType: "电器设备",
	devName: "供电设备_2001",
	reason: "发生短路",
	handle: "更换线路",
	ficDoneDate: "2021-06-22",
	ficDoneTime: "19:00:06",
	ownerWrite: "/static/writer.png"
}]

const fixBasic = [{
	key: "address",
	label: "报修地点",
	value: ""
}, {
	key: "devType",
	label: "报修设备类型",
	value: ""
}, {
	key: "owner",
	label: "报修人",
	value: ""
}, {
	key: "ownerPhone",
	label: "报修人联系方式",
	value: ""
}, {
	key: "complaintTime",
	label: "报修时间",
	value: ""
}, {
	key: "description",
	label: "报修描述",
	value: ""
}]

const fixRecord = [{
	key: "area",
	label: "设备区域",
	value: ""
}, {
	key: "devName",
	label: "维修设备",
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
}, {
	key: "ownerWrite",
	label: "报修人签名",
	value: "",
	type: "image",
	valueEnum: ""
}]
module.exports = {
	taskAllBasicData,
	fixBasic,
	fixRecord
}
