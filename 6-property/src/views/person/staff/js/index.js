import { devType ,devStatus,staffStatus,techSituation} from "@/utils/dataDictionary.js";
export const columns = [
    {
        dataIndex: 'devId',
        scopedSlots: { customRender: 'devId' },
        title: '员工编号',
        width: 80,
        key: 'devId'
    },
    {
        title: '姓名',
        dataIndex: 'devName',
        width: 80,
        key: 'devName'
    },
    {
        title: '维修类别',
        dataIndex: 'devType',
        key: 'devType',
        width: 50,
        valueEnum: devType,
        type: 'a-select',
    },
    {
        title: '工作状态',
        key: 'staffStatus',
        dataIndex: 'staffStatus',
        scopedSlots: { customRender: 'staffStatus' },
        width: 50,
        type: 'a-select',
        valueEnum:staffStatus
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
        width: 80,
    },
    // {
    //     title: '所绑资产',
    //     key: 'assets',
    //     width: 80,
    //     type: 'a-select',
    //     dataIndex:'assets'
    // },
    {
        title: '入职时间',
        key: 'loginTime',
        dataIndex: 'loginTime',
        width: 80,
        type: 'a-range-picker',
    },
    {
        title: '服务综合评价',
        key: 'evaluation',
        dataIndex: 'evaluation',
        scopedSlots: { customRender: 'eva' },
        width: 80,
        hideInSearch:true
    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        hideInSearch:true
    },
]

export const data = [
    {
        key: 0,
        devId: '1',
        devName: "刘涛",
        devType: 1,
        staffStatus: 0,
        assets: '烟草大厦',
        phone: '18232145698',
        loginTime: '2021-05-21 17：55：55',
        eva:4.5,
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    },
    {
        key: 1,
        devId: '2',
        devName: "张英",
        devType: 0,
        staffStatus: 1,
        assets: '烟草大厦',
        phone: '13332145698',
        loginTime: '2021-05-21 17：55：55',
        eva:4,
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    },
    {
        key: 2,
        devId: '3',
        devName: "王翔",
        devType: 2,
        staffStatus: 2,
        assets: '烟草大厦',
        phone: '18832149956',
        loginTime: '2021-05-20 17：55：55',
        eva:5,
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    },
]
export const infoDetail =[
    {
        title: '员工编号',
        key: 'devId',
        value:"",
        hideInLogin:true,
        hideInDetail:true
    },
    {
        title: '姓名',
        value:"",
        key: 'devName'
    },
    {
        title: '手机号',
        value:"",
        key: 'phone'
    },
    {
        title: '维养类型',
        value:"",
        key: 'devType',
        type:"a-select",
        valueEnum:devType      
    },
    {
        title: '工作状态',
        key: 'devStatus',
        value:"",
        type:"a-select",
        valueEnum:devStatus,
        hideInLogin:true,
        hideInDetail:true
    },
    {
        title: '负责资产',
        key: 'assets',
        value:"",
        hideInLogin:true,
    },
    {
        title: '入职时间',
        key: 'loginTime',
        value:"",
        type:"a-range-picker",
        hideInLogin:true,
        hideInDetail:true
    },
    {
        title: '评价',
        key: 'evaluation',
        value:"",
        hideInLogin:true,
        hideInDetail:true
    }
]
export const devDetail =[
    {
        title: '设备编号',
        key: 'Id',
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
        type:"a-select",
        valueEnum:devType
    },
    {
        title: '实际状态',
        key: 'devStatus',
        value:"",
        type:"a-select"
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
    {
        title: '技术状况',
        key: 'techSituation',
        value:"",
        type:"a-select",
        valueEnum:techSituation
    },
    {
        title: '维修员',
        key: 'devId',
        value:"",
        hideInDetail:true
    },
    {
        title: '登记时间',
        key: 'loginTime',
        value:"",
        type:"a-range-picker",
        hideInDetail:true
    }
]
export const detailDevData = [
    {
        key: 0,
        Id: '1001',
        devName: "waterPipe_1001",
        devType: 0,
        devStatus: 0,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        devId: '张英',
        loginTime: '2021-06-22 17：55：55'
    },
    {
        key: 1,
        Id: '2001',
        devName: "wire_2001",
        devType: 1,
        devStatus: 1,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 1,
        devId: '刘涛',
        loginTime: '2021-06-21 10：55：55'
    },    {
        key: 2,
        Id: '3001',
        devName: "air_3001",
        devType: 2,
        devStatus: 2,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 2,
        devId: '王翔',
        loginTime: '2021-06-29 08：55：55'
    }
]