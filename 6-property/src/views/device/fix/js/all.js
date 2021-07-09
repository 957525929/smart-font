import { devType ,taskStatus} from "@/utils/dataDictionary.js";
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
        dataIndex: 'taskStatus',
        title: '任务状态',
        width: 80,
        key: 'taskStatus',
        type:"a-select",
        valueEnum:taskStatus
    },
    {
        title: '问题类型',
        dataIndex: 'devName',
        width: 100,
        key: 'devName'
    },
    {
        title: '问题类型',
        dataIndex: 'devType',
        width: 100,
        key: 'devType',
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
        ifHideInSearch:true
    },
]
export const data=[
    {
        key: 0,
        devId: '1',
        devName: "18楼停电",
        taskStatus:1,
        devType: 1,
        assets: '烟草大厦',
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
            tagName:"不通过",
            com:""
        }]
    },
    {
        key: 1,
        devId: '2',
        devName: "18楼频繁断电停电",
        taskStatus:2,
        devType: 1,
        deliveryTime:"2021-06-22 10：55：55",
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '刘涛',
        fixedTime: "2021-06-22 20：00：00",
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    },
    {
        key: 2,
        devId: '3',
        devName: "卫生间停水",
        taskStatus:3,
        devType: 2,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        fixStaff: '王翔',
        deliveryTime: '2021-06-20 17：55：55',
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    },
    {
        key: 3,
        devId: '4',
        devName: "空调调控温度无反应",
        taskStatus:4,
        devType: 0,
        deliveryTime:"2021-06-19 17：55：55",
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '刘涛',
        fixedTime: "2021-06-22 20：00：00",
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    },{
        key:4,
        devId: '5',
        devName: "18楼停电",
        taskStatus:5,
        devType: 1,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        fixStaff: '刘涛',
        deliveryTime: '2021-06-18 17：55：55',
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    }
]
export const searchCon={}
export const infoDetail =[
    {
        title: '设备编号',
        key: 'devId',
        value:""
    },
    {
        title: '设备名称',
        value:"",
        key: 'devName'
    },
    {
        title: '设备类型',
        value:"",
        key: 'devType',
        type:"a-select"
    },
    {
        title: '所属资产',
        key: 'assets',
        value:"",
    },
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
    },
    {
        title: '登记时间',
        key: 'fixedTime',
        value:"",
        type:"a-range-picker"
    }
]