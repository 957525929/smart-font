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
        valueEnum: {
            0: { tableValue: '空调', searchValue: '空调', code: 0 },
            1: { tableValue: '管网', searchValue: '管网', code: 1 },
        },
        type: 'a-select',
    },
    {
        title: '工作状态',
        key: 'devStatus',
        dataIndex: 'devStatus',
        scopedSlots: { customRender: 'devStatus' },
        width: 50,
        type: 'a-select',
        valueEnum: {
            0: { tableValue: '休假', searchValue: '休假', code: 0 },
            1: { tableValue: '在岗', searchValue: '在岗', code: 1 },
            2: { tableValue: '离职', searchValue: '离职', code: 2 }
        }
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
        width: 80,
    },
    {
        title: '所绑资产',
        key: 'assets',
        width: 80,
        type: 'a-select',
        dataIndex:'assets'
    },
    {
        dataIndex: 'institution',
        slots: { title: '业主单位' },
        title: '业主单位',
        width: 80,
    },
    {
        title: '入职时间',
        key: 'loginTime',
        dataIndex: 'loginTime',
        width: 80,
        type: 'a-range-picker',
    },
    {
        title: '服务综合评价',
        key: 'evalueation',
        dataIndex: 'evalueation',
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
        key: '1',
        devId: '0001',
        devName: "刘能",
        devType: 0,
        devStatus: 0,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        loginTime: '2021-05-22 17：55：55',
        eva:4,
        action:[{
            tagName:"设备信息",
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