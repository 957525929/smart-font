// 待核查
import {
    taskType,
    proPeriod,
    groupTree
} from "@/utils/dataDictionary.js";
import {
    handleTreeToCascade
} from "@/utils/util.js";
export const columns = [{
    dataIndex: 'taskId',
    title: '任务编号',
    width: 40,
    key: 'taskId',
    value: ""
},
{
    dataIndex: 'taskName',
    title: '任务名',
    width: 70,
    key: 'taskName',
    value: ""
},
{
    dataIndex: 'taskType',
    key: 'taskType',
    title: '任务类型',
    width: 50,
    type: 'a-select',
    valueEnum: taskType,
    value: ""
},
{
    dataIndex: 'taskPeriod',
    title: '任务周期',
    width: 40,
    key: 'taskPeriod',
    value: "",
    type: 'a-select',
    valueEnum: proPeriod
},
{
    dataIndex: 'ifnormal',
    title: '是否出现异常',
    width: 40,
    key: 'ifnormal',
    type: 'a-select',
    valueEnum: {
        0: { tableValue: "是", searchValue: "是", code: 0 },
        1: { tableValue: "否", searchValue: "否", code: 1 }
    },
    value: ""
},
{
    dataIndex: 'proDesc',
    title: '保养描述',
    width: 80,
    key: 'proDesc',
    value: "",
    hideInTable: true,
    hideInSearch: true
},
{
    dataIndex: 'proPics',
    title: '保养图片',
    width: 80,
    key: 'proPics',
    value: "",
    hideInTable: true,
    hideInSearch: true

},
{
    dataIndex: 'proTime',
    title: '保养时间',
    width: 80,
    key: 'proTime',
    type: "a-range-picker",
    value: ""
},
{
    title: '任务下发时间',
    key: 'dispatchTime',
    dataIndex: 'dispatchTime',
    width: 100,
    type: 'a-range-picker',
    value: "",
    hideInTable: true,
    hideInSearch: true
},
{
    title: '区域',
    dataIndex: 'address',
    key: 'address',
    width: 100,
    value: "",
    valueEnum: handleTreeToCascade(groupTree),
    type: 'a-cascader',
},
{
    title: '保养员',
    key: 'proStaff',
    dataIndex: 'proStaff',
    width: 50,
    value: ""
},
{
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
    width: 80,
    value: "",
    hideInTable: true,
    hideInSearch: true
},
{
    title: '结束时间',
    key: 'expectTime',
    dataIndex: 'expectTime',
    width: 80,
    type: 'a-range-picker',
    value: "",
    hideInTable: true,
    hideInSearch: true
},
{
    title: '任务描述',
    dataIndex: 'description',
    width: 100,
    key: 'description',
    hideInSearch: true,
    hideInTable: true,
    value: ""
},
{
    title: '操作',
    dataIndex: 'action',
    key: "action",
    scopedSlots: {
        customRender: 'action'
    },
    width: 80,
    hideInSearch: true,
    hideInDetail: true
}
]
export const data = [{
    key: 1,
    taskId: '2',
    taskName: "空调维修检查",
    taskType: 1,
    taskStatus: 1,
    taskPeriod: 1,
    ifnormal: 1,
    proDesc: "一切正常",
    proPics: ["/static/logo.png"],
    proTime: "2021-07-22 10:55:11",
    dispatchTime: '2021-07-21 10:55:11',
    address: "中国烟草总公司福建省公司机关-A区域-1号楼",
    proStaff: '张英',
    phone: '13332145698',
    expectTime: '2021-07-31 00：00：00',
    description: "维养检查",
    action: [{
        tagName: "详情",
        com: "TableDrawer"
    },
    {
        tagName: "通过",
        com: "TableDelete"
    },
    {
        tagName: "不通过",
        com: "TableDelete"
    }]
}]
export const searchCon = {}

export const infoDetail = [{

    title: '设备编号',
    width: 80,
    key: 'devId',
    value: ""
},
{
    title: '任务描述',
    dataIndex: 'devName',
    width: 100,
    key: 'devName',
    value: ""
},
{
    title: '任务下发时间',
    key: 'fixedTime',
    dataIndex: 'fixedTime',
    scopedSlots: {
        customRender: 'tags'
    },
    width: 100,
    type: 'a-range-picker',
    value: ""
},
{
    title: '任务地点/范围',
    key: 'assets',
    dataIndex: 'assets',
    width: 80,
    value: ""
},
{
    dataIndex: 'taskType',
    key: 'taskType',
    title: '任务类型',
    width: 80,
    type: 'a-select',
    valueEnum: taskType,
    value: ""
},
{
    title: '保养员',
    key: 'fixStaff',
    dataIndex: 'fixStaff',
    scopedSlots: {
        customRender: 'tags'
    },
    width: 80,
    value: ""
},
{
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
    width: 80,
    value: ""
},

{
    title: '预计完成时间',
    key: 'expectTime',
    dataIndex: 'expectTime',
    scopedSlots: {
        customRender: 'tags'
    },
    width: 80,
    type: 'a-range-picker',
    value: ""
}]