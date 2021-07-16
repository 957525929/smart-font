import {
  devType,
  devStatus,
  techSituation,
  taskStatus,
  protaskStatus,
  taskType
} from "@/utils/dataDictionary.js";
export const basicInfo = [{
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
  // {
  //     title: '设备类型',
  //     value:"",
  //     key: 'devType',
  //     type:"a-select",
  //     valueEnum:devType
  // },
  {
    title: '实际状态',
    key: 'devStatus',
    value: "",
    type: "a-select"
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
  //     value:"",
  // },
  {
    title: '登记时间',
    key: 'loginTime',
    value: "",
    type: "a-range-picker",
    hideInDetail: true
  },
  {
    title: '生产厂家',
    key: 'manufacturer',
    value: "",
  },
  {
    title: '生产批次',
    key: 'batch',
    value: "",
    type: "a-range-picker"
  }
]

export const fixInfo = [{
    dataIndex: 'id',
    title: '设备编号',
    width: 50,
    key: 'id'
  },
  {
    dataIndex: 'devId',
    slots: {
      title: '问题编号'
    },
    scopedSlots: {
      customRender: 'devId'
    },
    title: '问题编号',
    width: 50,
    key: 'devId'
  },
  {
    dataIndex: 'taskStatus',
    title: '任务状态',
    width: 80,
    key: 'taskStatus',
    type: "a-select",
    valueEnum: taskStatus
  },
  {
    title: '问题描述',
    dataIndex: 'devName',
    width: 100,
    key: 'devName'
  },
  {
    title: '问题类型',
    dataIndex: 'devType',
    width: 100,
    key: 'devType',
    valueEnum: devType
  },
  {
    title: '问题上报时间',
    key: 'deliveryTime',
    dataIndex: 'deliveryTime',
    scopedSlots: {
      customRender: 'tags'
    },
    width: 100,
    type: 'a-range-picker',
  },
  // {
  //     dataIndex: 'institution',
  //     key:'institution',
  //     slots: { title: '业主单位' },
  //     scopedSlots: { customRender: 'name' },
  //     title: '业主单位',
  //     width: 80,
  // },
  // {
  //     title: '业主联系方式',
  //     dataIndex: 'phone',
  //     key:'phone',
  //     width: 80,
  // },
  {
    title: '维修员',
    key: 'fixStaff',
    dataIndex: 'fixStaff',
    scopedSlots: {
      customRender: 'tags'
    },
    width: 80,
  },
  {
    title: '维修完成时间',
    key: 'fixedTime',
    dataIndex: 'fixedTime',
    scopedSlots: {
      customRender: 'tags'
    },
    width: 80,
    type: 'a-range-picker',
  },
]

export const proInfo = [{
    dataIndex: 'id',
    title: '设备编号',
    width: 50,
    key: 'id',
  }, {
    dataIndex: 'devId',
    title: '任务编号',
    width: 50,
    key: 'devId'
  },
  {
    title: '任务状态',
    key: 'taskStatus',
    dataIndex: 'taskStatus',
    width: 80,
    type: 'a-select',
    valueEnum: protaskStatus
  },
  {
    title: '任务描述',
    dataIndex: 'devName',
    width: 100,
    key: 'devName',
    hideInSearch: true
  },
  {
    title: '任务下发时间',
    key: 'fixedTime',
    dataIndex: 'fixedTime',
    scopedSlots: {
      customRender: 'tags'
    },
    width: 100,
    type: 'a-range-picker',
  },
  {
    title: '任务地点',
    key: 'assets',
    dataIndex: 'assets',
    width: 80,
  },
  {
    dataIndex: 'taskType',
    key: 'taskType',
    title: '任务类型',
    width: 80,
    type: 'a-select',
    valueEnum: taskType
  },
  {
    title: '保养员',
    key: 'fixStaff',
    dataIndex: 'fixStaff',
    scopedSlots: {
      customRender: 'tags'
    },
    width: 80,
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
    width: 80,
  },

  {
    title: '预计完成时间',
    key: 'expectTime',
    dataIndex: 'expectTime',
    width: 80,
    type: 'a-range-picker',
  }
]

export const runInfo = []

export const toolInfo = [{
    dataIndex: 'devId',
    slots: {
      title: '部件编号'
    },
    scopedSlots: {
      customRender: 'devId'
    },
    title: '部件编号',
    width: 40,
    key: 'devId'
  },
  {
    title: '部件名称',
    dataIndex: 'devName',
    width: 80,
    key: 'devName'
  },
  {
    title: '部件类型',
    dataIndex: 'devType',
    key: 'devType',
    width: 50,
  },
  {
    title: '实际状态',
    key: 'devStatus',
    dataIndex: 'devStatus',
    width: 50,
  },
  {
    dataIndex: 'manufacturer',
    title: '厂商单位',
    width: 80,
  },
  {
    title: '登记时间',
    key: 'loginTime',
    dataIndex: 'loginTime',
    width: 80,
    type: 'a-range-picker',
  }
]

export const innerColumns = [
    {
        dataIndex: 'devId',
        slots: { title: '编号' },
        scopedSlots: { customRender: 'devId' },
        title: '编号',
        width: 40,
        key: 'devId'
    },
    {
        title: '零件名称',
        dataIndex: 'devName',
        width: 80,
        key: 'devName'
    },
    {
        title: '零件类型',
        dataIndex: 'devType',
        key: 'devType',
        width: 50,
        valueEnum: devType,
        type: 'a-select',
    },
    {
        title: '实际状态',
        key: 'devStatus',
        dataIndex: 'devStatus',
        width: 50,
        type: 'a-select',
        valueEnum:devStatus,
    },
    {
        dataIndex: 'manufacturer',
        title: '厂商单位',
        width: 80,
    },
    {
        title: '登记时间',
        key: 'loginTime',
        dataIndex: 'loginTime',
        scopedSlots: { customRender: 'tags' },
        width: 80,
        type: 'a-range-picker',
    }
];

export const data = [{
    key: 0,
    devId: 1001,
    devName: "waterPipe_1001",
    devType: 2,
    devStatus: 4,
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    techSituation: 0,
    fixStaff: '张英',
    loginTime: '2021-06-22 17：55：55',
    action: [{
      tagName: "详情",
      url: "device-DevDetail",
      com: "router-link"
    }, {
      tagName: "基本信息",
      com: "TableDrawer"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "维修记录",
      com: "TableDrawer"
    }, {
      tagName: "保养记录",
      com: "TableDrawer"
    }, {
      tagName: "运行参数",
      com: "TableDrawer"
    }, {
      tagName: "删除",
      com: "TableDelete"
    }]
  },
  {
    key: 1,
    devId: 2001,
    devName: "wire_2001",
    devType: 1,
    devStatus: 5,
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    techSituation: 1,
    fixStaff: '刘涛',
    loginTime: '2021-06-21 10：55：55',
    action: [{
      tagName: "基本信息",
      com: "TableDrawer"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "维修记录",
      com: "TableDrawer"
    }, {
      tagName: "保养记录",
      com: "TableDrawer"
    }, {
      tagName: "运行参数",
      com: "TableDrawer"
    }, {
      tagName: "删除",
      com: "TableDelete"
    }]
  }, {
    key: 2,
    devId: 3001,
    devName: "air_3001",
    devType: 1,
    devStatus: 6,
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    techSituation: 2,
    fixStaff: '王翔',
    loginTime: '2021-06-29 08：55：55',
    action: [{
      tagName: "基本信息",
      com: "TableDrawer"
    }, {
      tagName: "编辑",
      com: "TableModal"
    }, {
      tagName: "维修记录",
      com: "TableDrawer"
    }, {
      tagName: "保养记录",
      com: "TableDrawer"
    }, {
      tagName: "运行参数",
      com: "TableDrawer"
    }, {
      tagName: "删除",
      com: "TableDelete"
    }]
  }
]