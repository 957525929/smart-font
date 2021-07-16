
import {
    taskType,
    period
  } from "@/utils/dataDictionary.js";
// 全部
export const proMenu = [
    {
    key:0,
    title:"全部",
    content:"all"
},
{
    key:1,
    title:"待保养",
    content:"protect"
},{
    key:2,
    title:"待核查",
    content:"check"
},{
    key:3,
    title:"待评估",
    content:"evaluation"
}]
export const loginInfo = [{
    title: '设备编号',
    key: 'devId',
    value:"",
    hideInLogin:true
},
{
    title: '养护周期',
    value:"",
    key: 'devName',
    type:"a-select",
    valueEnum:period
},
{
    title: '任务类型',
    value:"",
    key: 'proType',
    type:"a-select",
    valueEnum:taskType
},
{
    title: '执行人',
    key: 'person',
    value:""
},
]
