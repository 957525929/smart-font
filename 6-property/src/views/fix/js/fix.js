import { devType, devStatus } from "@/utils/dataDictionary.js";
// 待维修
export const columns = [
    {
        dataIndex: 'devId',
        slots: { title: '问题编号' },
        scopedSlots: { customRender: 'devId' },
        title: '问题编号',
        width: 80,
        key: 'devId'
    },
    {
        title: '问题描述',
        dataIndex: 'devName',
        width: 100,
        key: 'devName',
    },
    {
        title: '维修类型',
        dataIndex: 'devType',
        width: 100,
        key: 'devType',
        type: 'a-select',
        valueEnum: devType
    },
    {
        title: '报修时间',
        key: 'deliveryTime',
        dataIndex: 'deliveryTime',
        scopedSlots: { customRender: 'tags' },
        width: 100,
        type: 'a-range-picker',
    },
    {
        dataIndex: 'institution',
        key: 'institution',
        title: '业主单位',
        width: 80,
    },
    {
        title: '业主联系方式',
        dataIndex: 'phone',
        key: 'phone',
        width: 80,
    },
    {
        title: '维修员',
        key: 'fixStaff',
        dataIndex: 'fixStaff',
        scopedSlots: { customRender: 'tags' },
        width: 80,
    },
    {
        title: '期望完成时间',
        key: 'fixedTime',
        dataIndex: 'fixedTime',
        scopedSlots: { customRender: 'tags' },
        width: 80,
        type: 'a-range-picker',
    },
    {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        hideInSearch: true
    },
]
export const data = [
    {
        key: '2',
        devId: '2',
        devName: "18楼频繁断电停电",
        devType: 1,
        taskStatus: 2,
        devStatus: '在修',
        address: '烟草大厦18楼',
        institution: '福建烟草公司',
        phone: '18232145698',
        fixStaff: '刘涛',
        deliveryTime: "2021-06-22 10:55:55",
        fixedTime: '2021-06-22 20:00:00',
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }]
    }
]
export const searchCon = {}
export const infoDetail = [
    {
        title: '问题编号',
        key: 'devId',
        value: ""
    },
    {
        title: '问题描述',
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
    // {
    //     title: '实际状态',
    //     key: 'devStatus',
    //     value:"",
    //     type:"a-select",
    //     valueEnum:devStatus
    // },
    {
        key: 'institution',
        title: '业主单位',
        value: "",
    },
    {
        title: '业主联系方式',
        key: 'phone',
        value: "",
    },
    // {
    //     title: '技术状况',
    //     key: 'techSituation',
    //     value:"",
    //     type:"a-select"
    // },
    {
        title: '维修员',
        key: 'fixStaff',
        value: ""
    },
    {
        title: '报修时间',
        key: 'deliveryTime',
        value: "",
        type: "a-range-picker"
    }
]