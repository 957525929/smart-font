import { devType ,devStatus,techSituation} from "@/utils/dataDictionary.js";
export default {
    basicInfo,
    basicData
}
const basicInfo = [
    {
        title: '设备编号',
        key: 'devId',
        value:"",
        hideInLogin:true
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
        title: '实际状态',
        key: 'devStatus',
        value:"",
        type:"a-select"
    },
    {
        title: '所属资产',
        key: 'assets',
        value:"",
    },
    {
        title: '技术状况',
        key: 'techSituation',
        value:"",
        type:"a-select"
    },
    {
        title: '维修员',
        key: 'fixStaff',
        value:"",
    },
    {
        title: '登记时间',
        key: 'loginTime',
        value:"",
        type:"a-range-picker"
    },
    {
        title: '生产厂家',
        key: 'manufacturer',
        value:"",
    },
    {
        title: '生产批次',
        key: 'batch',
        value:"",
        type:"a-range-picker"
    }
]

const basicData = [
    {
        key: 0,
        devId: 1001,
        devName: "waterPipe_1001",
        devType: 2,
        devStatus: 0,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '张英',
        loginTime: '2021-06-22 17：55：55',
        manufacturer:"日丰企业集团有限公司",
        batch:"M127894",
        action:[{
            tagName:"详情",
            url:"device-DevDetail",
            com:"router-link"
        },{
            tagName:"基本信息",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"维修记录",
            com:"TableDrawer"
        },{
            tagName:"保养记录",
            com:"TableDrawer"
        },{
            tagName:"运行参数",
            com:"TableDrawer"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    },
    {
        key: 1,
        devId: 2001,
        devName: "wire_2001",
        devType: 1,
        devStatus: 1,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 1,
        fixStaff: '刘涛',
        loginTime: '2021-06-21 10：55：55',
        manufacturer:"国网福建省电力有限公司",
        batch:"N2169",
        action:[{
            tagName:"基本信息",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"维修记录",
            com:"TableDrawer"
        },{
            tagName:"保养记录",
            com:"TableDrawer"
        },{
            tagName:"运行参数",
            com:"TableDrawer"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    }, {
        key: 2,
        devId: 3001,
        devName: "air_3001",
        devType: 0,
        devStatus: 2,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 2,
        fixStaff: '王翔',
        loginTime: '2021-06-29 08：55：55',
        manufacturer:"珠海格力电器股份有限公司",
        batch:"A2421",
        action:[{
            tagName:"基本信息",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"维修记录",
            com:"TableDrawer"
        },{
            tagName:"保养记录",
            com:"TableDrawer"
        },{
            tagName:"运行参数",
            com:"TableDrawer"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    }
]

export const loginInfo = [{
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
    type:"a-select",
    valueEnum:devType
},
{
    title: '实际状态',
    key: 'devStatus',
    value:"",
    type:"a-select",
    valueEnum:devStatus
},
// {
//     key: 'manufacturer',
//     title: '生产厂家',
//     value:"",
//     type:"a-select",
//     valueEnum:manufacturer
// }
]
export const fixColumns = [
    {
        dataIndex: 'devId',
        slots: { title: '设备编号' },
        scopedSlots: { customRender: 'devId' },
        title: '设备编号',
        width: 40,
        key: 'devId'
    },
    {
        title: '设备名称',
        dataIndex: 'devName',
        width: 80,
        key: 'devName'
    },
    {
        title: '设备类型',
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
        scopedSlots: { customRender: 'devStatus' },
        width: 50,
        type: 'a-select',
        valueEnum:devStatus ,
    },
    {
        title: '所属资产',
        key: 'assets',
        width: 80,
        type: 'a-select',
        dataIndex:'assets'
    },
    {
        dataIndex: 'institution',
        slots: { title: '设备编号' },
        scopedSlots: { customRender: 'name' },
        title: '业主单位',
        width: 80,
    },
    {
        title: '业主联系方式',
        dataIndex: 'phone',
        width: 80,
    },
    {
        title: '技术状况',
        dataIndex: 'techSituation',
        width: 80,
        type: 'a-select',
        valueEnum: techSituation,
    },
    {
        title: '维修员',
        key: 'fixStaff',
        dataIndex: 'fixStaff',
        scopedSlots: { customRender: 'tags' },
        width: 50,
    },
    {
        title: '登记时间',
        key: 'loginTime',
        dataIndex: 'loginTime',
        scopedSlots: { customRender: 'tags' },
        width: 80,
        type: 'a-range-picker',
    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        ifHideInSearch:true
    },
]

export const data = [
    {
        key: 0,
        devId: 1001,
        devName: "waterPipe_1001",
        devType: 2,
        devStatus: 0,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '张英',
        loginTime: '2021-06-22 17：55：55',
        action:[{
            tagName:"详情",
            url:"device-DevDetail",
            com:"router-link"
        },{
            tagName:"基本信息",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"维修记录",
            com:"TableDrawer"
        },{
            tagName:"保养记录",
            com:"TableDrawer"
        },{
            tagName:"运行参数",
            com:"TableDrawer"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    },
    {
        key: 1,
        devId: 2001,
        devName: "wire_2001",
        devType: 1,
        devStatus: 1,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 1,
        fixStaff: '刘涛',
        loginTime: '2021-06-21 10：55：55',
        action:[{
            tagName:"基本信息",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"维修记录",
            com:"TableDrawer"
        },{
            tagName:"保养记录",
            com:"TableDrawer"
        },{
            tagName:"运行参数",
            com:"TableDrawer"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    },    {
        key: 2,
        devId: 3001,
        devName: "air_3001",
        devType: 1,
        devStatus: 2,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 2,
        fixStaff: '王翔',
        loginTime: '2021-06-29 08：55：55',
        action:[{
            tagName:"基本信息",
            com:"TableDrawer"
        },{
            tagName:"编辑",
            com:"TableModal"
        },{
            tagName:"维修记录",
            com:"TableDrawer"
        },{
            tagName:"保养记录",
            com:"TableDrawer"
        },{
            tagName:"运行参数",
            com:"TableDrawer"
        },{
            tagName:"删除",
            com:"TableDelete"
        }]
    }
]
