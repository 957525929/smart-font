import {
  taskType,
  proPeriod,
  groupTree
} from "@/utils/dataDictionary.js";
import {
  data as facData
} from "@/views/person/staff/js/index.js";
import {
  data as devData
} from "@/views/device/deviceList/js/index.js";
import {
  handleTreeToCascade
} from "@/utils/util.js";
// 全部
export const proMenu = [
  //     {
  //     key:0,
  //     title:"全部",
  //     content:"all"
  // },
  {
    key: 0,
    title: "待保养",
    content: "protect"
  }, {
    key: 1,
    title: "待核查",
    content: "check"
  }, {
    key: 2,
    title: "已完成",
    content: "done"
  }
]
export const loginInfo = [{
    title: '设备编号',
    key: 'devId',
    value: "",
    hideInLogin: true
  },
  {
    title: '养护周期',
    value: "",
    key: 'devName',
    type: "a-select",
    valueEnum: proPeriod
  },
  {
    title: '请选择时间范围',
    value: "",
    key: 'range',
    type: "a-range-picker"
  },
  {
    title: '养护组别',
    value: "",
    key: 'devGroupType',
    type: "a-select",
    valueEnum: [{
      tableValue: "空调管理组别1",
      code: 0
    }]
  },
  {
    title: '养护范围',
    value: "",
    key: 'devGroup',
    type: "a-cascader",
    valueEnum: handleTreeToCascade(groupTree)
  },
  {
    title: '养护设备',
    value: "全部",
    key: 'devData',
    type: "a-select",
    valueEnum: {
      ...devData.filter(item => item.devType == 0).map(item => {
        return {
          tableValue: item.devName,
          searchValue: item.devName,
          code: item.key
        }
      }),
      4: {
        tableValue: "全部",
        searchValue: "全部",
        code: 4
      },
    }
  },
  {
    title: '任务类型',
    value: "",
    key: 'proType',
    type: "a-select",
    valueEnum: taskType
  },
  {
    title: '执行人',
    key: 'person',
    value: "",
    type: "a-select",
    valueEnum: {
      ...facData.map(item => {
        return {
          tableValue: item.devName,
          searchValue: item.devName,
          code: item.key
        }
      })
    }

  }
  // ,{
  //     title: '执行地点',
  //     key: 'address',
  //     value:""
  // },
]