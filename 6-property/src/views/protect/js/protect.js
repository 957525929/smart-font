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
    title: '计划编号',
    width: 50,
    key: 'taskId',
    value: "",
    hideInSearch: true
},
{
    dataIndex: 'taskName',
    title: '计划名',
    width: 80,
    key: 'taskName',
    value: "",
    hideInSearch: true
},
{
    dataIndex: 'taskType',
    key: 'taskType',
    title: '养护类型',
    width: 80,
    type: 'a-select',
    valueEnum: taskType,
    value: ""
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
    title: '计划生效时间',
    key: 'dispatchTime',
    dataIndex: 'dispatchTime',
    width: 100,
    type: 'a-range-picker',
    value: ""
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
    title: '计划描述',
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
    title: '养护范围',
    value: "",
    key: 'devGroup',
    type: "a-cascader",
    valueEnum: groupTree
},
{
    title: '养护设备',
    value: "全部",
    key: 'devData',
    type: "a-tree-select",
    valueEnum: devData
},
{
    title: '养护类型',
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