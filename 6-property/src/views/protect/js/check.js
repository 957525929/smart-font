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
    title: '计划编号',
    width: 30,
    key: 'taskId',
    value: "",
    hideInSearch: true
},
{
    dataIndex: 'taskName',
    title: '计划名',
    width: 70,
    key: 'taskName',
    value: "",
    hideInSearch: true
},
{
    dataIndex: 'records',
    title: '保养记录',
    width: 40,
    key: 'records',
    scopedSlots: {
        customRender: 'records'
    },
    hideInTable: true
},
{
    title: '区域Id',
    dataIndex: 'areaKey',
    key: 'areaKey',
    width: 100,
    value: "",
    hideInTable: true,
    hideInSearch: true,
    hideInDetail: true
},
{
    title: '养护范围',
    dataIndex: 'address',
    key: 'address',
    width: 100,
    value: "",
    valueEnum: groupTree,
    type: 'a-cascader',
},

{
    title: '任务数',
    key: 'taskNum',
    dataIndex: 'taskNum',
    width: 20,
    value: "",
    hideInSearch: true
},
{
    title: '计划完成状态',
    key: 'ifPlanDone',
    dataIndex: 'ifPlanDone',
    width: 30,
    value: "",
    type: 'a-select',
    valueEnum: {
        0: { tableValue: "全部完成", searchValue: "全部完成", code: 0 },
        1: { tableValue: "部分完成", searchValue: "部分完成", code: 1 },
        2: { tableValue: "未完成", searchValue: "未完成", code: 2 },
    }
},
{
    title: '计划生效时间',
    key: 'dispatchTime',
    dataIndex: 'dispatchTime',
    width: 100,
    type: 'a-date-picker',
    value: "",
},
{
    title: '计划结束时间',
    key: 'expectTime',
    dataIndex: 'expectTime',
    width: 80,
    type: 'a-date-picker',
    value: "",
},
{
    dataIndex: 'taskPeriod',
    title: '养护周期',
    width: 40,
    key: 'taskPeriod',
    value: "",
    type: 'a-select',
    valueEnum: proPeriod
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
    title: '计划描述',
    dataIndex: 'description',
    width: 100,
    key: 'description',
    hideInSearch: true,
    hideInTable: true,
    value: ""
}, {
    title: '保养上报图片',
    dataIndex: 'proimgs',
    width: 100,
    key: 'proimgs',
    hideInSearch: true,
    hideInTable: true,
    scopedSlots: {
        customRender: 'proimgs'
    },
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
    taskPeriod: "每周",
    taskNum: "1",
    ifPlanDone: "全部完成",
    records: [{
        recordId: 0,
        ifRun: 0,
        ifnormal: 0,
        proDesc: "一切正常",
        proimgs: ["/assets/logo.png"],
        proTime: "2021-07-22 10:55:11",
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "通过",
            com: "TableDelete"
        },
        {
            tagName: "不通过",
            com: "TableModal"
        }
        ]
    }],
    dispatchTime: '2021-07-21 10:55:11',
    areaKey: '1-2-3',
    address: "中国烟草总公司福建省公司机关-B区域-3号楼",
    proStaff: '张英',
    phone: '13332145698',
    expectTime: '2021-07-31 00：00：00',
    description: "维养检查"
}]

export const taskList = [{
    title: '反馈回复',
    key: 'feedback',
    value: "",
    type: 'a-textarea'
}]