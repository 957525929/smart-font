// 待核查
import {
    devType,
    devStatus
} from "@/utils/dataDictionary.js";
// 待维修
export const columns = [{
    dataIndex: 'orderId',
    title: '工单编号',
    width: 80,
    key: 'orderId',
    value: ""
},
{
    title: '工单类型',
    dataIndex: 'devType',
    width: 100,
    key: 'devType',
    type: 'a-select',
    valueEnum: devType,
    value: ""
},
{
    dataIndex: 'fixStaff',
    key: 'fixStaff',
    title: '维修员',
    width: 50,
    value: ""
},
{
    title: '维修员联系方式',
    dataIndex: 'fixPhone',
    key: 'fixPhone',
    width: 80,
    value: "",
    hideInSearch: true,
},
{
    title: '维修备注',
    dataIndex: 'fixAddition',
    key: 'fixAddition',
    width: 80,
    value: "",
    hideInSearch: true,
    hideInTable: true
},
{
    title: '预计完成时间',
    key: 'expectTime',
    dataIndex: 'expectTime',
    width: 100,
    type: 'a-range-picker',
    value: ""
},
{
    title: '维修地址',
    dataIndex: 'address',
    key: 'address',
    width: 100,
    value: "",
    hideInSearch: true,
},
{
    dataIndex: 'orderPerson',
    key: 'orderPerson',
    title: '报修人',
    width: 80,
    value: ""
},
{
    title: '报修人联系方式',
    dataIndex: 'phone',
    key: 'phone',
    width: 80,
    value: "",
    hideInSearch: true,
    hideInTable: true,
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
}, {
    title: '处理图片',
    dataIndex: 'handleimgs',
    width: 100,
    key: 'handleimgs',
    hideInSearch: true,
    hideInTable: true,
    scopedSlots: {
        customRender: 'handleimgs'
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
    key: 3,
    taskStatus: 3,
    orderId: '4',
    devType: 2,
    fixStaff: '王翔',
    fixPhone: "18254621147",
    fixAddition: "已维修",
    expectTime: "2021-07-22 20:00: 00",
    orderPerson: '小昭',
    phone: '18232145694',
    address: '烟草大厦3楼卫生间',
    orderTime: '2021-07-20 17:55:55',
    description: "卫生间停水",
    imgs: ['/assets/logo.png'],
    handleimgs: ['/assets/logo.png'],
    writingimgs: ['/assets/logo.png']
}]
export const searchCon = {}
export const infoDetail = [{
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

export const taskList = [{
    title: '反馈回复',
    key: 'feedback',
    value: "",
    type: 'a-textarea'
}]