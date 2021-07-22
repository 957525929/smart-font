import {
  devType
} from "@/utils/dataDictionary.js";
// 待审核
export const columns = [{
    dataIndex: 'orderId',
    title: '工单编号',
    width: 80,
    key: 'orderId',
    value:""
  },
  {
    title: '工单类型',
    dataIndex: 'devType',
    width: 100,
    key: 'devType',
    type: 'a-select',
    valueEnum: devType,
    value:""
  },
  {
    title: '上报时间',
    key: 'orderTime',
    dataIndex: 'orderTime',
    width: 100,
    type: 'a-range-picker',
    value:""
  },
  {
    dataIndex: 'orderPerson',
    key: 'orderPerson',
    title: '上报人',
    width: 80,
    value:""
  },
  {
    title: '上报人联系方式',
    dataIndex: 'phone',
    key: 'phone',
    width: 80,
    value:"",
    hideInSearch:true
  },
  {
    title: '上报地址',
    dataIndex: 'address',
    key: 'address',
    width: 80,
    value:"",
    hideInSearch:true
  },
 {
    title: '上报描述',
    dataIndex: 'description',
    width: 100,
    key: 'description',
    hideInSearch: true,
    hideInTable: true,
    value:""
  }, {
    title: '上报图片',
    dataIndex: 'imgs',
    width: 100,
    key: 'imgs',
    hideInSearch: true,
    hideInTable: true,
    scopedSlots: {
      customRender: 'imgs'
    },
    value:""
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: {
      customRender: 'action'
    },
    width: 80,
    hideInSearch: true,
    hideInDetail:true
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
  imgs: ['assets/logo.png'],
  action: [{
    tagName: "详情",
    com: "TableDrawer"
  }, {
    tagName: "通过",
    com: "TableDelete"
  }, {
    tagName: "不通过",
    com: "TableModal"
  }]
}]

export const searchCon = {}

export const taskList = [{
  title: '反馈回复',
  key: 'feedback',
  value: "",
  type: 'a-textarea'
}]

// export const infoDetail = [{
//     title: '工单编号',
//     key: 'devId',
//     value: ""
//   },
//   {
//     title: '工单描述',
//     value: "",
//     key: 'devName'
//   },
//   {
//     key: 'institution',
//     title: '业主单位',
//     value: "",
//   },
//   {
//     title: '业主联系方式',
//     key: 'phone',
//     value: "",
//   },
//   {
//     title: '上报时间',
//     key: 'deliveryTime',
//     value: "",
//     type: "a-range-picker"
//   }, {
//     title: '上报描述',
//     dataIndex: 'devName',
//     width: 100,
//     key: 'devName',
//     hideInSearch: true
//   },
// ]