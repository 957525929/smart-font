import { devType } from "@/utils/dataDictionary.js";
// 待审核
export const columns=[
    {
        dataIndex: 'devId',
        slots: { title: '问题编号' },
        scopedSlots: { customRender: 'devId' },
        title: '问题编号',
        width: 80,
        key: 'devId'
    },
    {
        title: '问题描述',
        dataIndex: 'devName',
        width: 100,
        key: 'devName',
    },
    {
        title: '问题上报时间',
        key: 'deliveryTime',
        dataIndex: 'deliveryTime',
        scopedSlots: { customRender: 'tags' },
        width: 100,
        type: 'a-range-picker',
    },
    {
        dataIndex: 'institution',
        key:'institution',
        slots: { title: '设备编号' },
        scopedSlots: { customRender: 'name' },
        title: '业主单位',
        width: 80,
    },
    {
        title: '业主联系方式',
        dataIndex: 'phone',
        key:'phone',
        width: 80,
    },
    // {
    //     title: '维修员',
    //     key: 'fixStaff',
    //     dataIndex: 'fixStaff',
    //     scopedSlots: { customRender: 'tags' },
    //     width: 80,
    // },
    // {
    //     title: '维修完成时间',
    //     key: 'fixedTime',
    //     dataIndex: 'fixedTime',
    //     scopedSlots: { customRender: 'tags' },
    //     width: 80,
    //     type: 'a-range-picker',
    // },
    {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        hideInSearch:true
    },
]
export const data=[
    {
        key: 0,
        devId: '1',
        devName: "18楼停电",
        devType: 1,
        taskStatus:1,
        devStatus: 0,
        address: '烟草大厦18楼',
        institution: '福建烟草公司',
        phone: '18232145698',
        fixStaff: '刘涛',
        deliveryTime: '2021-06-22 17：55：55',
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        },{
            tagName:"审核下发",
            com:"TableModal"
        },{
            tagName:"忽略",
            com:""
        }]
    }
]

export const searchCon={}

export const taskList = [
    {
        title: '维修类型',
        key: 'devType',
        value:"电网"
    },
    {
        title: '执行人',
        key: 'staffId',
        value:"",
        type:'a-select',
        valueEnum:{0:{tableValue:"刘涛"}}
    },
    {
        title: '预计完成时间',
        value:"",
        key: 'expectTime',
        type:"a-date-picker"
    },
    {
        title: '任务地点',
        value:"",
        key: 'taskPlace'
    },
    // {
    //     title: '审核意见',
    //     key: 'addition',
    //     value:"通过"
    // }
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
    // {
    //     title: '设备类型',
    //     value:"",
    //     key: 'devType',
    //     type:"a-select"
    // },
    // {
    //     title: '实际状态',
    //     key: 'devStatus',
    //     value:"",
    //     type:"a-select"
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
    {
        title: '维修员',
        key: 'fixStaff',
        value:"",
        hideInDetail:true
    },
    {
        title: '上报时间',
        key: 'deliveryTime',
        value:"",
        type:"a-range-picker"
    }
]