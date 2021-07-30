import {
    devType
} from "@/utils/dataDictionary.js";
// 待审核
export const columns = [{
    dataIndex: 'orderId',
    title: '工单编号',
    width: 80,
    key: 'orderId',
    value: "",
    hideInSearch: true
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
    width: 80,
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
    orderTime: '2021-07-22 17：55：55',
    description: "18楼停电",
    imgs: ['assets/logo.png']
}]

export const searchCon = {}

export const taskList = [{
    title: '反馈回复',
    key: 'feedback',
    value: "",
    type: 'a-textarea'
}]

