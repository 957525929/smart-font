import {
  devType,
  devStatus,
  DepartTree,
  groupTree
} from "@/utils/dataDictionary.js";
import {
  handleTreeToCascade
} from "@/utils/util.js";
export const devColumns = [{
    dataIndex: 'devId',
    title: '设备编号',
    width: 40,
    key: 'devId',
    value: "",
  },
  {
    title: '设备名称',
    dataIndex: 'devName',
    width: 50,
    key: 'devName',
    value: "",
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
    title: '区域组别',
    dataIndex: 'groupDetail',
    key: 'groupDetail',
    width: 100,
    valueEnum: handleTreeToCascade(groupTree),
    type: 'a-cascader',
    value: "",
    hideInTable:true,
    
  },
  {
    title: '区域组别',
    dataIndex: 'groupDetail',
    key: 'groupDetail',
    width: 100,
    valueEnum: handleTreeToCascade(groupTree),
    type: 'a-cascader',
    value: "",
    hideInDetail:true
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
    title: '厂商单位',
    width: 80,
    value: "",
  },
  {
    title: '登记时间',
    key: 'loginTime',
    dataIndex: 'loginTime',
    width: 80,
    type: 'a-range-picker',
    value: "",
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: {
      customRender: 'action'
    },
    width: 80,
    hideInSearch: true,
    hideInDetail: true
  },
]

export const data = [{
    key: 0,
    devId: 1001,
    devName: "给水设备_1001",
    devType: 2,
    devStatus: 4,
    areaGroup:"区域",
    groupDetail:"中国烟草总公司福建省公司机关-A区域-2号楼",
    loginTime: '2021-06-22 17:55:55',
    manufacturer: "日丰企业集团有限公司",
    batch: "M127894",
    devPhone: "18259529231",
    action: [{
      tagName: "详情",
      url: "device-DevDetail",
      com: "router-link"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "删除",
      com: "TableDelete"
    }]
  },
  {
    key: 1,
    devId: 2001,
    devName: "供电设备_2001",
    devType: 1,
    devStatus: 5,
    areaGroup:"区域",
    groupDetail:"中国烟草总公司福建省公司机关-B区域-1号楼",
    loginTime: '2021-06-21 10:55:55',
    manufacturer: "国网福建省电力有限公司",
    batch: "N2169",
    devPhone: "18259529299",
    action: [{
      tagName: "详情",
      url: "device-DevDetail",
      com: "router-link"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "删除",
      com: "TableDelete"
    }]
  },
  {
    key: 2,
    devId: 3001,
    devName: "空调_3001",
    devType: 0,
    devStatus: 7,
    areaGroup:"区域",
    groupDetail:"中国烟草总公司福建省公司机关-B区域-3号楼",
    loginTime: '2021-06-19 08:55:55',
    manufacturer: "珠海格力电器股份有限公司",
    batch: "A2421",
    devPhone: "18259529290",
    action: [{
      tagName: "详情",
      url: "device-DevDetail",
      com: "router-link"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "删除",
      com: ""
    }]
  }, {
    key: 3,
    devId: 4001,
    devName: "给水管网_4001",
    devType: "给排水系统 - 给排水系统",
    devStatus: 6,
    areaGroup:"区域",
    groupDetail:"中国烟草总公司福建省公司机关-B区域-2号楼",
    loginTime: '2021-06-12 17:55:55',
    manufacturer: "日丰企业集团有限公司",
    batch: "M127894",
    devPhone: "18259529231",
    action: [{
      tagName: "详情",
      url: "device-DevDetail",
      com: "router-link"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "删除",
      com: "TableDelete"
    }]
  },
  {
    key: 4,
    devId: 5001,
    devName: "供电线路_5001",
    devType: "电器系统 - 供电设备",
    devStatus: 8,
    areaGroup:"区域",
    groupDetail:"中国烟草总公司福建省公司机关-A区域-1号楼",
    loginTime: '2021-06-11 10:55:55',
    manufacturer: "国网福建省电力有限公司",
    batch: "N2169",
    devPhone: "18259529299",
    action: [{
      tagName: "详情",
      url: "device-DevDetail",
      com: "router-link"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "删除",
      com: "TableDelete"
    }]
  },
  {
    key: 5,
    devId: 6001,
    devName: "冷水机组_6001",
    devType: "空调、通风系统 - 空调设备",
    devStatus: 4,
    areaGroup:"区域",
    groupDetail:"中国烟草总公司福建省公司机关-B区域-3号楼",
    loginTime: '2021-06-11 08:55:55',
    manufacturer: "珠海格力电器股份有限公司",
    batch: "A2421",
    devPhone: "18259529290",
    action: [{
      tagName: "详情",
      url: "device-DevDetail",
      com: "router-link"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "删除",
      com: ""
    }]
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
  // {
  //     key: 'institution',
  //     title: '业主单位',
  //     value:"",
  // },
  // {
  //     title: '业主联系方式',
  //     key: 'phone',        
  //     value:"",
  // },
  // {
  //     title: '技术状况',
  //     key: 'techSituation',
  //     value:"",
  //     type:"a-select" ,
  //     valueEnum: techSituation,
  // },
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
    type: "a-cascader",
    valueEnum: handleTreeToCascade(DepartTree)
  },
  {
    title: '实际状态',
    key: 'devStatus',
    value: "",
    type: "a-select",
    valueEnum: devStatus
  },
  {
    title: '设备组别',
    key: 'devGroupType',
    value: "",
    type: "a-select",
    valueEnum: [{
      tableValue: "空调管理组别1",
      searchValue: "空调管理组别1",
      code: 0
    }]
  },
  {
    title: '设备分类',
    key: 'devGroup',
    value: "",
    type: "a-cascader",
    valueEnum: handleTreeToCascade(groupTree)
  },
  // {
  //     key: 'manufacturer',
  //     title: '生产厂家',
  //     value:"",
  //     type:"a-select",
  //     valueEnum:manufacturer
  // }
]