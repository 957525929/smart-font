import {
    devType,
    taskStatus
} from "@/utils/dataDictionary.js";

export const columns = [{
    dataIndex: 'orderId',
    title: '工单编号',
    width: 60,
    key: 'orderId',
    value: ""
},
{
    title: '工单类型',
    dataIndex: 'devType',
    width: 60,
    key: 'devType',
    type: 'a-select',
    valueEnum: devType,
    value: ""
},
{
    title: '工单状态',
    dataIndex: 'taskStatus',
    width: 60,
    key: 'taskStatus',
    type: 'a-select',
    valueEnum: taskStatus,
    value: ""
},
{
    title: '报修时间',
    key: 'orderTime',
    dataIndex: 'orderTime',
    width: 100,
    type: 'a-range-picker',
    value: ""
},
{
    dataIndex: 'orderPerson',
    key: 'orderPerson',
    title: '报修人',
    width: 60,
    value: ""
},
{
    title: '报修人联系方式',
    dataIndex: 'phone',
    key: 'phone',
    width: 80,
    value: "",
    hideInSearch: true
},
{
    title: '报修地址',
    dataIndex: 'address',
    key: 'address',
    width: 80,
    value: "",
    hideInSearch: true
},

{
    title: '报修描述',
    dataIndex: 'description',
    width: 100,
    key: 'description',
    hideInSearch: true,
    hideInTable: true,
    value: ""
}, {
    title: '报修图片',
    dataIndex: 'imgs',
    width: 100,
    key: 'imgs',
    hideInSearch: true,
    hideInTable: true,
    scopedSlots: {
        customRender: 'imgs'
    },
    value: ""
},
{
    title: '电子签名',
    dataIndex: 'writingimgs',
    key: 'writingimgs',
    value: "",
    hideInSearch: true,
    hideInTable: true,
    scopedSlots: {
        customRender: 'writingimgs'
    },
},
{
    title: '操作',
    dataIndex: 'action',
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
    taskStatus: 0,
    orderId: '1',
    devType: 1,
    orderPerson: '赵敏',
    phone: '18232145698',
    address: '烟草大厦18楼',
    orderTime: '2021-07-22 17:55:55',
    description: "18楼停电",
    imgs: ['assets/logo.png'],
    action: [{
        tagName: "详情",
        com: "TableDrawer"
    }]
},
{
    key: 1,
    taskStatus: 1,
    orderId: '2',
    devType: 0,
    orderPerson: '周芷若',
    phone: '18232145698',
    address: '烟草大厦6楼',
    orderTime: '2021-07-19 17:55:55',
    description: "空调调控温度无反应",
    imgs: ['assets/logo.png'],
    action: [{
        tagName: "详情",
        com: "TableDrawer"
    }]
},
{
    key: 2,
    taskStatus: 2,
    orderId: '3',
    devType: 1,
    fixStaff: '刘涛',
    fixPhone: "18232145698",
    expectTime: "2021-07-22 10:55:55",
    orderPerson: '赵敏',
    phone: '18232145698',
    address: '烟草大厦18楼',
    orderTime: '2021-07-20 17:55:55',
    description: "18楼频繁断电停电",
    imgs: ['/assets/logo.png'],
    handleimgs: ['/assets/logo.png'],
    action: [{
        tagName: "详情",
        com: "TableDrawer"
    }]
},
{
    key: 3,
    taskStatus: 3,
    orderId: '4',
    devType: 2,
    fixStaff: '王翔',
    fixPhone: "18254621147",
    fixAddition: "已维修",
    expectTime: "2021-07-22 20:00:00",
    orderPerson: '阿蛛',
    phone: '18232145694',
    address: '烟草大厦3楼卫生间',
    orderTime: '2021-07-20 17:55:55',
    description: "卫生间停水",
    imgs: ['/assets/logo.png'],
    handleimgs: ['/assets/logo.png'],
    writingimgs: ['/assets/logo.png'],
    action: [{
        tagName: "详情",
        com: "TableDrawer"
    }]
},
{
    key: 4,
    taskStatus: 4,
    orderId: '5',
    devType: 1,
    fixStaff: '刘涛',
    fixPhone: "18232145698",
    expectTime: "2021-07-23 17：55：55",
    orderPerson: '小昭',
    phone: '18232145694',
    address: '烟草大厦18楼',
    orderTime: '2021-07-18 17:55:55',
    description: "18楼停电",
    imgs: ['/assets/logo.png'],
    handleimgs: ['/assets/logo.png'],
    writingimgs: ['/assets/logo.png'],
    action: [{
        tagName: "详情",
        com: "TableDrawer"
    }]
}
]
export const searchCon = {}
export const infoDetail = [{
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
    value: "",
},
{
    title: '登记时间',
    key: 'fixedTime',
    value: "",
    type: "a-range-picker",
    hideInDetail: true
}
]