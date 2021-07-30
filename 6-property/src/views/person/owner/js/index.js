import { devType, devStatus, techSituation } from "@/utils/dataDictionary.js";
export const columns = [
    {
        dataIndex: 'devId',
        slots: { title: '业主编号' },
        scopedSlots: { customRender: 'devId' },
        title: '业主编号',
        width: 40,
        key: 'devId',
        hideInSearch: true
    },
    {
        title: '业主名称',
        dataIndex: 'devName',
        width: 80,
        key: 'devName'
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
    }
]

export const data = [
    {
        key: 0,
        devId: '1001',
        devName: "福建烟草有限公司",
        devType: 0,
        phone: '18259529231',
        principal: '乔峰',
        loginTime: '2021-04-11 08：55：55',
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
        devName: "福建聚星园餐饮有限公司",
        devType: 1,
        devStatus: 1,
        phone: '18259529299',
        principal: '段誉',
        loginTime: '2021-04-11 10：55：55',
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