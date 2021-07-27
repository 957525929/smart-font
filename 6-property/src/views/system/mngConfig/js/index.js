import { devStatus, devType } from "@/utils/dataDictionary.js";
import {
    data as facData
} from "@/views/person/devFactory/js/index.js";

export const devColumns = [{
    dataIndex: 'devId',
    title: '零件编号',
    width: 40,
    key: 'devId',
    hideInLogin: true
},
{
    title: '零件名称',
    dataIndex: 'devName',
    width: 80,
    key: 'devName'
},
{
    title: '零件状态',
    key: 'devStatus',
    dataIndex: 'devStatus',
    width: 50,
    type: 'a-select',
    valueEnum: devStatus,
},
{
    title: '零件型号',
    key: 'devModel',
    dataIndex: 'devModel',
    width: 50,
},
{
    dataIndex: 'manufacturer',
    title: '零件厂商单位',
    width: 80,
},
{
    title: '厂商联系方式',
    dataIndex: 'devPhone',
    width: 80,
},
{
    title: '登记时间',
    key: 'loginTime',
    dataIndex: 'loginTime',
    scopedSlots: {
        customRender: 'tags'
    },
    width: 80,
    type: 'a-range-picker',
},
{
    title: '操作',
    key: 'action',
    scopedSlots: {
        customRender: 'action'
    },
    width: 80,
    hideInSearch: true
},
]
export const data = [{
    key: 0,
    devId: 1001,
    devName: "日丰给排水管",
    devModel: "M689f",
    devStatus: "在用",
    loginTime: '2021-06-22 17:55:55',
    manufacturer: "日丰企业集团有限公司",
    devPhone: "18259529231",
    action: [{
        tagName: "删除",
        com: "TableDelete"
    }]
},
{
    key: 1,
    devId: 2001,
    devName: "公牛电线",
    devModel: "E689f",
    devStatus: '在修',
    loginTime: '2021-06-21 10:55:55',
    manufacturer: "国网福建省电力有限公司",
    devPhone: "18259529231",
    action: [{
        tagName: "删除",
        com: "TableDelete"
    }]
},
{
    key: 2,
    devId: 3001,
    devName: "格力巨型冷水机",
    devModel: "P689f",
    devStatus: "在用",
    loginTime: '2021-06-29 08:55:55',
    manufacturer: "珠海格力电器股份有限公司",
    devPhone: "18259529231",
    action: [{
        tagName: "删除",
        com: "TableDelete"
    }]
}
]
export const groupInfo = [{
    title: '分组名',
    key: 'name',
    value: "",
}, {
    title: '分组类型',
    key: 'name',
    value: "",
    type: 'a-select',
    valueEnum: devType
}]

export const devInfo = [{
    title: '目录名',
    key: 'name',
    value: "",
}
]

export const areadata = [
    {
        key: 1,
        name: '中国烟草总公司福建省公司机关',
        type: '公司',
        value: 1,
        children: [
            {
                key: 101,
                name: 'A区域',
                type: '区域',
                value: 2,
                upName: '中国烟草总公司福建省公司机关',
                children: [
                    {
                        key: 1001,
                        name: '1号楼',
                        type: '楼房',
                        value: 3,
                        upName: '中国烟草总公司福建省公司机关A区域',
                    },
                    {
                        key: 1002,
                        name: '2号楼',
                        type: '楼房',
                        value: 3,
                        upName: '中国烟草总公司福建省公司机关A区域',
                    },
                ],
            },
            {
                key: 102,
                name: 'B区域',
                type: '区域',
                value: 2,
                upName: '中国烟草总公司福建省公司机关',
                children: [
                    {
                        key: 1003,
                        name: '1号楼',
                        type: '楼房',
                        value: 3,
                        upName: '中国烟草总公司福建省公司机关B区域',
                    },
                    {
                        key: 1004,
                        name: '2号楼',
                        type: '楼房',
                        value: 3,
                        upName: '中国烟草总公司福建省公司机关B区域',
                    },
                ],
            },
        ],
    },
]
