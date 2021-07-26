import { devType, devStatus, techSituation } from "@/utils/dataDictionary.js";
export const columns = [
    {
        dataIndex: 'devId',
        slots: { title: '厂商编号' },
        scopedSlots: { customRender: 'devId' },
        title: '厂商编号',
        width: 40,
        key: 'devId'
    },
    {
        title: '厂商名称',
        dataIndex: 'devName',
        width: 80,
        key: 'devName'
    },
    {
        title: '厂商类型',
        dataIndex: 'devType',
        key: 'devType',
        width: 50,
        valueEnum: devType,
        type: 'a-select',
    },
    {
        dataIndex: 'principal',
        title: '负责人',
        width: 80,
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        width: 80,
    },
    {
        title: '登记时间',
        key: 'loginTime',
        dataIndex: 'loginTime',
        width: 80,
        type: 'a-range-picker',
        hideInDetail: true
    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        hideInSearch: true
    },
]

export const data = [
    {
        key: 0,
        devId: '1001',
        devName: "日丰企业集团有限公司",
        devType: 0,
        phone: '18259529231',
        principal: '马梓荣',
        loginTime: '2021-04-22 17：55：55',
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "删除",
            com: "TableDelete"
        }],
        euips: [{
            tagName: "水管",
            com: "TableDrawer"
        }, {
            tagName: "水泵",
            com: "TableDelete"
        }, {
            tagName: "水阀",
            com: "TableDelete"
        }]
    },
    {
        key: 1,
        devId: '2001',
        devName: "国网福建省电力有限公司",
        devType: 1,
        devStatus: "在用",
        phone: '18259529299',
        principal: '郭靖',
        loginTime: '2021-04-21 10：55：55',
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "删除",
            com: "TableDelete"
        }],
        euips: [{
            tagName: "电线",
            com: "TableDrawer"
        }, {
            tagName: "变压器",
            com: "TableDelete"
        }, {
            tagName: "电闸",
            com: "TableDelete"
        }]
    }, {
        key: 2,
        devId: '3001',
        devName: "珠海格力电器股份有限公司",
        devType: 2,
        devStatus: '在修',
        phone: '18232145690',
        principal: '黄蓉',
        loginTime: '2021-04-29 08：55：55',
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "删除",
            com: "TableDelete"
        }],
        euips: [{
            tagName: "冷凝管",
            com: "TableDrawer"
        }, {
            tagName: "空调主机",
            com: "TableDelete"
        }]
    }
]

export const infoDetail = [
    {
        title: '厂商编号',
        key: 'devId',
        value: "",
        hideInLogin: true
    },
    {
        title: '厂商名称',
        value: "",
        key: 'devName'
    },
    {
        title: '厂商类型',
        value: "",
        key: 'devType',
        type: "a-select",
        valueEnum: devType
    },
    {
        title: '提供设备/零件',
        key: 'equips',
        value: "",
        type: "a-select",
        hideInLogin: true
    },
    {
        title: '负责人',
        key: 'principal',
        value: "",
    },
    {
        title: '联系方式',
        key: 'phone',
        value: "",
    },
    {
        title: '登记时间',
        key: 'loginTime',
        value: "",
        type: "a-range-picker",
        hideInLogin: true
    }
]

export const loginInfo = [{
    title: '设备编号',
    key: 'devId',
    value: ""
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
    valueEnum: devType
},
{
    title: '实际状态',
    key: 'devStatus',
    value: "",
    type: "a-select",
    valueEnum: devStatus
}]