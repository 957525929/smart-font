import {
    taskType,
    protaskStatus,
    proPeriod,
    groupTree
} from "@/utils/dataDictionary.js";
import {
    handleTreeToCascade
} from "@/utils/util.js";
export const columns = [{
    dataIndex: 'taskId',
    title: '任务编号',
    width: 50,
    key: 'taskId',
    value: ""
},
{
    dataIndex: 'taskName',
    title: '任务名',
    width: 80,
    key: 'taskName',
    value: ""
},
{
    title: '任务状态',
    dataIndex: 'taskStatus',
    width: 60,
    key: 'taskStatus',
    type: 'a-select',
    valueEnum: protaskStatus,
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
    dataIndex: 'taskPeriod',
    title: '任务周期',
    width: 40,
    key: 'taskPeriod',
    value: "",
    type: 'a-select',
    valueEnum: proPeriod
},
{
    title: '任务下发时间',
    key: 'dispatchTime',
    dataIndex: 'dispatchTime',
    width: 100,
    type: 'a-range-picker',
    value: ""
},
{
    title: '养护范围',
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
    hideInSearch: true,
},
{
    title: '预计完成时间',
    key: 'expectTime',
    dataIndex: 'expectTime',
    width: 80,
    type: 'a-range-picker',
    value: ""
},
{
    title: '任务描述',
    dataIndex: 'description',
    width: 100,
    key: 'description',
    value: "",
    hideInSearch: true,
    hideInTable: true
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
    key: 0,
    taskId: '1',
    taskName: "1号楼月度巡养计划",
    taskType: 0,
    taskStatus: 0,
    taskPeriod: 2,
    dispatchTime: '2021-06-22 18：55：55',
    areaKey: '1-1-1',
    address: "中国烟草总公司福建省公司机关-A区域-1号楼",
    proStaff: '刘涛',
    phone: '18232145698',
    expectTime: '2021-07-31 00：00：00',
    description: "例行养护",
    action: [{
        tagName: "详情",
        com: "router-link",
        url: "device-proDetail"
    }]
},
{
    key: 1,
    taskId: '2',
    taskName: "空调维修检查",
    taskType: 1,
    taskStatus: 1,
    taskPeriod: 0,
    dispatchTime: '2021-07-21 10:55:11',
    areaKey: '1-2-3',
    address: "中国烟草总公司福建省公司机关-B区域-3号楼",
    proStaff: '张英',
    phone: '13332145698',
    expectTime: '2021-07-31 00：00：00',
    description: "维养检查",
    action: [{
        tagName: "详情",
        com: "router-link",
        url: "device-proDetail"
    }, {
        tagName: "通过",
        com: "TableDelete"
    },
    {
        tagName: "不通过",
        com: "TableModal"
    }],
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

},
{
    key: 2,
    taskId: '3',
    taskName: "电路老化检查",
    taskType: 4,
    taskStatus: 2,
    taskPeriod: 1,
    records: [{
        recordId: 0,
        ifRun: 0,
        ifnormal: 0,
        proDesc: "一切正常",
        proimgs: ["/assets/logo.png"],
        proTime: "2021-06-24 10:55:11",
        action: [{
            tagName: "详情",
            com: "TableModal"
        }]
    }, {
        recordId: 1,
        ifRun: 0,
        ifnormal: 0,
        proDesc: "一切正常",
        proimgs: ["/assets/logo.png"],
        proTime: "2021-07-01 10:55:11",
        action: [{
            tagName: "详情",
            com: "TableModal"
        }]
    }, {
        recordId: 2,
        ifRun: 1,
        ifnormal: 1,
        proDesc: "-",
        proimgs: [],
        proTime: "-",
        action: [{
            tagName: "详情",
            com: "TableModal"
        }]
    }, {
        recordId: 3,
        ifRun: 0,
        ifnormal: 0,
        proDesc: "一切正常",
        proimgs: ["/assets/logo.png"],
        proTime: "2021-07-19 10:55:11",
        action: [{
            tagName: "详情",
            com: "TableModal"
        }]
    }],
    dispatchTime: '2021-06-19 10:55:55',
    areaKey: '1-2-2',
    address: "中国烟草总公司福建省公司机关-B区域-2号楼",
    proStaff: '刘涛',
    phone: '18232145698',
    expectTime: '2021-07-31 00：00：00',
    description: "电路老化检查",
    action: [{
        tagName: "详情",
        com: "router-link",
        url: "device-proDetail"
    }]
}
]
export const searchCon = {}
export const infoDetail = [{
    title: '设备编号',
    width: 80,
    key: 'devId',
    value: ""
},
{
    title: '任务状态',
    key: 'taskStatus',
    dataIndex: 'taskStatus',
    width: 80,
    type: 'a-select',
    valueEnum: protaskStatus,
    value: ""
},
{
    title: '任务描述',
    key: 'devName',
    value: ""
},
{
    title: '任务下发时间',
    key: 'fixedTime',
    type: 'a-range-picker',
    value: ""
},
{
    title: '任务地点',
    key: 'assets',
    value: ""
},
{
    key: 'taskType',
    title: '任务类型',
    type: 'a-select',
    valueEnum: taskType,
    value: ""
},
{
    title: '保养员',
    key: 'fixStaff',
    value: ""
},
{
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
    value: ""
},

{
    title: '预计完成时间',
    key: 'expectTime',
    type: 'a-range-picker',
}
]