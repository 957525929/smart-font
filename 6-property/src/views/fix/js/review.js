// 待评价
import { devType,devStatus} from "@/utils/dataDictionary.js";
// 待维修
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
        title: '维修类型',
        dataIndex: 'devType',
        width: 100,
        key: 'devType',
        type:'a-select',
        valueEnum:devType
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
        title: '维修员',
        key: 'fixStaff',
        dataIndex: 'fixStaff',
        scopedSlots: { customRender: 'tags' },
        width: 80,
    },
    {
        title: '预计完成时间',
        key: 'fixedTime',
        dataIndex: 'fixedTime',
        scopedSlots: { customRender: 'tags' },
        width: 80,
        type: 'a-range-picker',
    },
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
        key: '1',
        devId: '4',
        devName:"空调调控温度无反应",
        taskStatus:4,
        devType:0,
        devStatus: 5,
        address: '烟草大厦6楼',
        institution: '福建聚星园餐饮有限公司',
        phone: '18232145698',
        fixStaff: '张英',
        deliveryTime:"2021-06-19 17：55：55",
        fixedTime: '2021-06-22 20：00：00',
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    }
]
export const searchCon={}
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