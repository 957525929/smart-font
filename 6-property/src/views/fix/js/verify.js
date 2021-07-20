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
        slots: { title: '业主单位' },
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
    {
        title: '维修类型',
        dataIndex: 'devType',
        width: 100,
        key: 'devType',
        type:'a-select',
        valueEnum:devType
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
        taskStatus:0,
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
            tagName:"通过",
            com:"TableDelete"
        },{
            tagName:"忽略",
            com:"TableModal"
        }]
    }
]

export const searchCon={}

export const taskList=[
    {
        title: '反馈回复',
        key: 'feedback',
        value:"",
        type:'a-textarea'
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