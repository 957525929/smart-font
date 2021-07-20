// 待核查
import {
    taskType,
    protaskStatus
  } from "@/utils/dataDictionary.js";
export const columns = [{
    dataIndex: 'devId',
    slots: {
      title: '任务编号'
    },
    scopedSlots: {
      customRender: 'devId'
    },
    title: '设备编号',
    width: 80,
    key: 'devId'
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
    scopedSlots: {
      customRender: 'tags'
    },
    width: 80,
    type: 'a-range-picker',
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: {
      customRender: 'action'
    },
    width: 80,
    hideInSearch: true
  }
]
export const data = [{
  key: 1,
  devId: '2',
  devName: "空调漏水",
  taskType: 1,
  taskStatus: 1,
  devStatus: 0,
  assets: '烟草大厦',
  institution: '福建烟草公司',
  phone: '13332145698',
  fixStaff: '张英',
  fixedTime: '2021-06-24 10：55：11',
  expectTime: '2021-06-24 14：25：12',
  action: [{
    tagName: "详情",
    com: "TableDrawer"
  }]
}]
export const searchCon = {}

export const infoDetail =[{

  title: '设备编号',
  width: 80,
  key: 'devId',
  value:""
},
{
  title: '任务描述',
  dataIndex: 'devName',
  width: 100,
  key: 'devName',
  value:""
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
  value:""
},
{
  title: '任务地点',
  key: 'assets',
  dataIndex: 'assets',
  width: 80,
  value:""
},
{
  dataIndex: 'taskType',
  key: 'taskType',
  title: '任务类型',
  width: 80,
  type: 'a-select',
  valueEnum: taskType,
  value:""
},
{
  title: '保养员',
  key: 'fixStaff',
  dataIndex: 'fixStaff',
  scopedSlots: {
    customRender: 'tags'
  },
  width: 80,
  value:""
},
{
  title: '联系方式',
  dataIndex: 'phone',
  key: 'phone',
  width: 80,
  value:""
},

{
  title: '预计完成时间',
  key: 'expectTime',
  dataIndex: 'expectTime',
  scopedSlots: {
    customRender: 'tags'
  },
  width: 80,
  type: 'a-range-picker',
  value:""
}]