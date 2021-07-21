// 待保养
import {
    taskType,
    proPeriod,
    groupTree
} from "@/utils/dataDictionary.js";
import {
    handleTreeToCascade
} from "@/utils/util.js";
import {
    data as facData
} from "@/views/person/staff/js/index.js";
import {
    data as devData
} from "@/views/device/deviceList/js/index.js";
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
// {
//   title: '任务状态',
//   dataIndex: 'taskStatus',
//   width: 60,
//   key: 'taskStatus',
//   type: 'a-select',
//   valueEnum: protaskStatus,
//   value: ""
// },
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
    key: 0,
    taskId: '1',
    taskName: "1号楼月度巡养计划",
    taskType: 0,
    taskStatus: 0,
    taskPeriod: 2,
    dispatchTime: '2021-06-22 18：55：55',
    address: "中国烟草总公司福建省公司机关-A区域-1号楼",
    proStaff: '刘涛',
    phone: '18232145698',
    expectTime: '2021-07-31 00：00：00',
    description: "例行养护",
    action: [{
        tagName: "详情",
        com: "router-link"
    }]
}]
export const searchCon = {}
export const infoDetail = [{
    dataIndex: 'devId',
    value: "",
    title: '设备编号',
    width: 80,
    key: 'devId'
},
{
    title: '任务描述',
    dataIndex: 'devName',
    value: "",
    key: 'devName',
    hideInSearch: true
},
{
    title: '任务下发时间',
    key: 'fixedTime',
    value: "",
    type: 'a-range-picker',
},
{
    title: '任务地点',
    key: 'assets',
    value: "",
},
{
    dataIndex: 'taskType',
    key: 'taskType',
    title: '任务类型',
    value: "",
    type: 'a-select',
    valueEnum: taskType
},
{
    title: '保养员',
    key: 'fixStaff',
    value: "",
},
{
    title: '预计完成时间',
    key: 'expectTime',
    value: "",
    type: 'a-range-picker',
}
]

export const addplan = [{
    title: '设备编号',
    key: 'devId',
    value: "",
    hideInModal: true
},
{
    title: '养护周期',
    value: "",
    key: 'devName',
    type: "a-select",
    valueEnum: proPeriod
},
{
    title: '时间范围',
    value: "",
    key: 'range',
    type: "a-range-picker"
},
{
    title: '养护组别',
    value: "",
    key: 'devGroupType',
    type: "a-select",
    valueEnum: [{
        tableValue: "空调管理组别1",
        searchValue: "空调管理组别1",
        code: 0
    }]
},
{
    title: '养护范围',
    value: "",
    key: 'devGroup',
    type: "a-cascader",
    valueEnum: handleTreeToCascade(groupTree)
},
{
    title: '养护设备',
    value: "全部",
    key: 'devData',
    type: "a-select",
    valueEnum: {
        ...devData.filter(item => item.devType == 0).map(item => {
            return {
                tableValue: item.devName,
                searchValue: item.devName,
                code: item.key
            }
        }),
        4: {
            tableValue: "全部",
            searchValue: "全部",
            code: 4
        },
    }
},
{
    title: '任务类型',
    value: "",
    key: 'proType',
    type: "a-select",
    valueEnum: taskType
},
{
    title: '养护人',
    key: 'person',
    value: "",
    type: "a-select",
    valueEnum: {
        ...facData.map(item => {
            return {
                tableValue: item.devName,
                searchValue: item.devName,
                code: item.key
            }
        })
    }

}
]