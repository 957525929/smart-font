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

export const proRecord = [{
    dataIndex: 'recordId',
    title: '保养记录编号',
    width: 40,
    key: 'recordId',
    value: "",
    hideInSearch: true
  },{
    dataIndex: 'ifRun',
    title: '任务是否按期执行',
    width: 40,
    key: 'ifRun',
    type: 'a-select',
    scopedSlots: {
        customRender: 'ifRun'
      },
    valueEnum: {
      0: {
        tableValue: "是",
        searchValue: "是",
        code: 'success'
      },
      1: {
        tableValue: "否",
        searchValue: "否",
        code:'error'
      }
    },
    value: ""
  },
  {
    dataIndex: 'ifnormal',
    title: '设备是否正常',
    width: 40,
    key: 'ifnormal',
    type: 'a-select',
    scopedSlots: {
        customRender: 'ifnormal'
      },
    valueEnum: {
      0: {
        tableValue: "是",
        searchValue: "是",
        code: 'success'
      },
      1: {
        tableValue: "否",
        searchValue: "否",
        code: 'error'
      }
    },
    value: ""
  },
  {
    dataIndex: 'proDesc',
    title: '保养描述',
    width: 80,
    key: 'proDesc',
    value: "",
    hideInSearch: true
  },
  {
    dataIndex: 'proimgs',
    title: '保养图片',
    width: 80,
    key: 'proimgs',
    value: "",
    hideInTable: true,
    hideInSearch: true,
    scopedSlots: {
      customRender: 'proimgs'
    }
  },
  {
    dataIndex: 'proTime',
    title: '保养时间',
    width: 80,
    key: 'proTime',
    type: "a-range-picker",
    value: ""
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: "action",
    scopedSlots: {
      customRender: 'action'
    },
    width: 80,
    hideInSearch: true,
    hideInDetail: true
  }
]

//-------------------------------以下废弃---------------------------------------------
// 全部
export const proMenu = [
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
    title: '时间范围',
    value: "",
    key: 'range',
    type: "a-range-picker"
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