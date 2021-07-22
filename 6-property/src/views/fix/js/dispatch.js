import { devType,devStatus} from "@/utils/dataDictionary.js";
// 待维修
export const columns=[{
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
export const data=[{
    key: 1,
    taskStatus: 1,
    orderId: '2',
    devType: 0,
    orderPerson: '周芷若',
    phone: '18232145698',
    address: '烟草大厦6楼',
    orderTime: '2021-07-19 17：55：55',
    description: "空调调控温度无反应",
    imgs: ['assets/logo.png'],
    action: [{
        tagName:"详情",
        com:"TableDrawer"
    },{
        tagName:"派单",
        com:"TableModal"
    }]
  }
]
export const searchCon={}

export const taskList = [
    {
        title: '维修员',
        key: 'staffId',
        value:"",
        type:'a-select',
        valueEnum:{0:{tableValue:"张英"}}
    },
    {
        title: '预计完成时间',
        value:"",
        key: 'expectTime',
        type:"a-date-picker"
    }
]

export const infoDetail =[
    {
        title: '问题编号',
        key: 'devId',
        value:""
    },
    {
        title: '问题描述',
        value:"",
        key: 'devName'
    },
    {
        title: '设备类型',
        value:"",
        key: 'devType',
        type:"a-select",
        valueEnum:devType
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
        value:"",
    },
    {
        title: '业主联系方式',
        key: 'phone',        
        value:"",
    },
    // {
    //     title: '技术状况',
    //     key: 'techSituation',
    //     value:"",
    //     type:"a-select"
    // },
    // {
    //     title: '维修员',
    //     key: 'fixStaff',
    //     value:""
    // },
    {
        title: '上报时间',
        key: 'deliveryTime',
        value:"",
        type:"a-range-picker"
    }
]