import {
    devType,
    devStatus,
    DepartTree,
    groupTree
} from "@/utils/dataDictionary.js";
import {
    handleTreeToCascade
} from "@/utils/util.js";
import { data as manufacturer } from "@/views/person/devFactory/js/index.js";

function handle(manu) {
    return {
        ...manu.map(item => ({
            tableValue: item.devName,
            searchValue: item.devName,
            code: item.key
        })
        )
    }
}

export const devColumns = [{
    dataIndex: 'devId',
    title: '设备编号',
    width: 40,
    key: 'devId',
    value: "",
    hideInEdit: true,
    hideInSearch: true
},
{
    title: '设备名称',
    dataIndex: 'devName',
    width: 50,
    key: 'devName',
    value: "",
    hideInSearch: true
},
{
    title: '设备类型',
    dataIndex: 'devType',
    key: 'devType',
    width: 100,
    valueEnum: devType,
    type: 'a-select',
    value: "",
},
{
    title: '区域Id',
    dataIndex: 'groupKey',
    key: 'groupKey',
    width: 100,
    value: "",
    hideInTable: true,
    hideInSearch: true,
    hideInEdit: true
},
// {
//     title: '区域组别',
//     dataIndex: 'groupDetail',
//     key: 'groupDetail',
//     width: 100,
//     valueEnum: handleTreeToCascade(groupTree),
//     type: 'a-cascader',
//     value: "",
//     hideInTable: true,
// },
{
    title: '区域组别',
    dataIndex: 'groupDetail',
    key: 'groupDetail',
    width: 100,
    valueEnum: groupTree,
    type: 'a-cascader',
    value: "",
    hideInDetail: true
},
{
    title: '实际状态',
    key: 'devStatus',
    dataIndex: 'devStatus',
    width: 50,
    type: 'a-select',
    valueEnum: devStatus,
    value: "",
},
{
    dataIndex: 'manufacturer',
    key: "manufacturer",
    title: '厂商单位',
    width: 80,
    value: "",
    type: 'a-select',
    valueEnum: handle(manufacturer),
},
{
    title: '登记时间',
    key: 'loginTime',
    dataIndex: 'loginTime',
    width: 80,
    type: 'a-range-picker',
    value: "",
    hideInEdit: true
},
{
    title: '操作',
    key: 'action',
    dataIndex: "action",
    scopedSlots: { customRender: 'action' },
    width: 80,
    hideInSearch: true,
    hideInDetail: true,
    hideInEdit: true
},
]


export const data = [{
    key: 0,
    devId: 1001,
    devName: "给水设备_1001",
    devType: "给排水系统",
    devStatus: "在用",
    areaGroup: "区域",
    groupKey: "1-1-2",
    groupDetail: "中国烟草总公司福建省公司机关·A区域·2号楼",
    loginTime: '2021-06-22 17:55:55',
    manufacturer: "日丰企业集团有限公司",
    batch: "M127894",
    devPhone: "18259529231"
},
{
    key: 1,
    devId: 2001,
    devName: "供电设备_2001",
    devType: "电器系统",
    devStatus: '在修',
    areaGroup: "区域",
    groupKey: "1-2-1",
    groupDetail: "中国烟草总公司福建省公司机关·B区域·1号楼",
    loginTime: '2021-06-21 10:55:55',
    manufacturer: "国网福建省电力有限公司",
    batch: "N2169",
    devPhone: "18259529299"
},
{
    key: 2,
    devId: 3001,
    devName: "空调_3001",
    devType: "空调、通风系统",
    devStatus: '闲置',
    areaGroup: "区域",
    groupKey: "1-2-3",
    groupDetail: "中国烟草总公司福建省公司机关·B区域·3号楼",
    loginTime: '2021-06-19 08:55:55',
    manufacturer: "珠海格力电器股份有限公司",
    batch: "A2421",
    devPhone: "18259529290"
}, {
    key: 3,
    devId: 4001,
    devName: "给水管网_4001",
    devType: "给排水系统 - 给排水系统",
    devStatus: '停用',
    areaGroup: "区域",
    groupKey: "1-2-2",
    groupDetail: "中国烟草总公司福建省公司机关-B区域-2号楼",
    loginTime: '2021-06-12 17:55:55',
    manufacturer: "日丰企业集团有限公司",
    batch: "M127894",
    devPhone: "18259529231"
},
{
    key: 4,
    devId: 5001,
    devName: "供电线路_5001",
    devType: "电器系统 - 供电设备",
    devStatus: '库存封存',
    areaGroup: "区域",
    groupKey: "1-1-1",
    groupDetail: "中国烟草总公司福建省公司机关·A区域·1号楼",
    loginTime: '2021-06-11 10:55:55',
    manufacturer: "国网福建省电力有限公司",
    batch: "N2169",
    devPhone: "18259529299"
},
{
    key: 5,
    devId: 6001,
    devName: "冷水机组_6001",
    devType: "空调、通风系统 - 空调设备",
    devStatus: "在用",
    areaGroup: "区域",
    groupKey: "1-2-3",
    groupDetail: "中国烟草总公司福建省公司机关·B区域·3号楼",
    loginTime: '2021-06-11 08:55:55',
    manufacturer: "珠海格力电器股份有限公司",
    batch: "A2421",
    devPhone: "18259529290"
}
]

export const infoDetail = [{
    title: '设备编号',
    key: 'devId',
    value: "",
    hideInLogin: true
},
{
    title: '设备名称',
    value: "",
    key: 'devName'
},
{
    title: '设备类型',
    value: "",
    key: 'devType',
    type: "a-select",
    valueEnum: devType,
},
{
    title: '实际状态',
    key: 'devStatus',
    value: "",
    type: "a-select",
    valueEnum: devStatus,
},
{
    title: '维修员',
    key: 'fixStaff',
    value: "",
},
{
    title: '登记时间',
    key: 'loginTime',
    value: "",
    type: "a-date-picker",
    hideInDetail: true
}
]

export const loginInfo = [{
    title: '设备编号',
    key: 'devId',
    value: "",
    hideInLogin: true,
    hideInDetail: true
},
{
    title: '设备类型',
    value: "",
    key: 'devType',
    type: "a-cascader",
    valueEnum: handleTreeToCascade(DepartTree)
},
{
    title: '设备名称',
    value: "",
    key: 'devName'
},
{
    title: '实际状态',
    key: 'devStatus',
    value: "在用",
    type: "a-select",
    valueEnum: devStatus
},
{
    title: '区域组别',
    key: 'devGroup',
    value: "",
    type: "a-cascader",
    valueEnum: handleTreeToCascade(groupTree)
},
{
    key: 'manufacturer',
    title: '设备厂商单位',
    value: "",
    type: "a-select",
    valueEnum: {
        ...manufacturer.map(item => {
            return {
                tableValue: item.devName,
                searchValue: item.devName,
                code: item.key
            }
        })
    }
}
]