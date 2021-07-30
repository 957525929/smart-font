import { devType, devStatus, staffStatus, techSituation } from "@/utils/dataDictionary.js";
export const columns = [
    {
        dataIndex: 'devId',
        scopedSlots: { customRender: 'devId' },
        title: '员工编号',
        width: 40,
        key: 'devId',
        hideInLogin: true,
        hideInEdit: true,
        hideInLogin: true,
        hideInSearch: true
    },
    {
        title: '姓名',
        dataIndex: 'devName',
        width: 40,
        key: 'devName'
    },
    {
        title: '角色',
        dataIndex: 'role',
        width: 40,
        key: 'role',
        type: "a-select",
        valueEnum: {
            0: { tableValue: "保养", searchValue: "保养", code: 0 },
            1: { tableValue: "维修", searchValue: "维修", code: 1 }
        }
    },
    {
        title: '维修类别',
        dataIndex: 'devType',
        key: 'devType',
        width: 50,
        valueEnum: devType,
        type: 'a-select',
        hideInTable: true
    },
    {
        title: '工作状态',
        key: 'staffStatus',
        dataIndex: 'staffStatus',
        scopedSlots: { customRender: 'staffStatus' },
        width: 50,
        type: 'a-select',
        valueEnum: staffStatus
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
        width: 70,
        hideInSearch: true
    },
    {
        title: '入职时间',
        key: 'loginTime',
        dataIndex: 'loginTime',
        width: 80,
        type: 'a-range-picker',
        hideInLogin: true,
        hideInEdit: true
    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        hideInSearch: true,
        hideInDetail: true,
        hideInEdit: true,
        hideInLogin: true
    },
]

export const data = [
    {
        key: 0,
        devId: '1',
        devName: "刘涛",
        role: "维修",
        devType: "电器系统",
        staffStatus: '请假',
        assets: '烟草大厦',
        phone: '18232145698',
        loginTime: '2021-05-21 17：55：55',
        eva: 4.5,
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "编辑",
            com: "TableModal"
        }, {
            tagName: "删除",
            com: "TableDelete"
        }]
    },
    {
        key: 1,
        devId: '2',
        devName: "张英",
        role: "养护",
        staffStatus: "在职",
        assets: '烟草大厦',
        phone: '13332145698',
        loginTime: '2021-05-21 17：55：55',
        eva: 4,
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "编辑",
            com: "TableModal"
        }, {
            tagName: "删除",
            com: "TableDelete"
        }]
    },
    {
        key: 2,
        devId: '3',
        devName: "王翔",
        role: "维修",
        devType: "给排水系统",
        staffStatus: "待工",
        assets: '烟草大厦',
        phone: '18832149956',
        loginTime: '2021-05-20 17：55：55',
        eva: 5,
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "编辑",
            com: "TableModal"
        }, {
            tagName: "删除",
            com: "TableDelete"
        }]
    },
    {
        key: 3,
        devId: '4',
        devName: "李明",
        role: "养护",
        staffStatus: "待工",
        assets: '烟草大厦',
        phone: '18832149956',
        loginTime: '2021-05-20 17：55：55',
        eva: 5,
        action: [{
            tagName: "详情",
            com: "TableDrawer"
        }, {
            tagName: "编辑",
            com: "TableModal"
        }, {
            tagName: "删除",
            com: "TableDelete"
        }]
    },
]

export const loginInfo = [
    {
        title: '姓名',
        value: "",
        key: 'devName'
    },
    {
        title: '角色',
        dataIndex: 'role',
        width: 40,
        key: 'role',
        type: "a-select",
        valueEnum: {
            0: { tableValue: "保养", searchValue: "保养", code: 0 },
            1: { tableValue: "维修", searchValue: "维修", code: 1 }
        },
        value: "",
    },
    {
        title: '维修类别',
        dataIndex: 'devType',
        key: 'devType',
        width: 50,
        valueEnum: devType,
        type: 'a-select',
        value: "",
    },
    {
        title: '工作状态',
        key: 'staffStatus',
        dataIndex: 'staffStatus',
        width: 50,
        type: 'a-select',
        valueEnum: staffStatus,
        value: ""
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
        width: 70,
        value: "",
    }
]

export const devDetail = [
    {
        title: '设备编号',
        key: 'Id',
        value: ""
    },
    {
        title: '设备名称',
        value: "",
        key: 'devName'
    },
    {
        title: '设备类型',
        value: "",
        key: 'devType',
        type: "a-select",
        valueEnum: devType
    },
    {
        title: '实际状态',
        key: 'devStatus',
        value: "",
        type: "a-select"
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
        value: "",
        type: "a-select",
        valueEnum: techSituation
    },
    {
        title: '维修员',
        key: 'devId',
        value: "",
        hideInDetail: true
    },
    {
        title: '登记时间',
        key: 'loginTime',
        value: "",
        type: "a-range-picker",
        hideInDetail: true
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
    }, {
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