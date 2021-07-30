
export const columns = [
    {
        dataIndex: 'comId',
        title: '投诉编号',
        width: 40,
        key: 'comId',
        hideInSearch: true
    },
    {
        title: '投诉工单',
        dataIndex: 'comTaskId',
        width: 40,
        key: 'comTaskId',
        hideInSearch: true
    },
    {
        title: '投诉人',
        dataIndex: 'comPerson',
        key: 'comPerson',
        width: 50,
        hideInSearch: true
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
        width: 70,
        hideInSearch: true
    },
    {
        title: '投诉状态',
        dataIndex: 'comStatus',
        key: 'comStatus',
        scopedSlots: { customRender: 'comStatus' },
        width: 50,
        type: 'a-select',
        valueEnum: {
            0: { tableValue: "未处理", searchValue: "未处理", code: 0 },
            1: { tableValue: "已处理", searchValue: "已处理", code: 1 }
        }
    },
    {
        title: '投诉时间',
        key: 'comTime',
        dataIndex: 'comTime',
        width: 80,
        type: 'a-range-picker'
    },
    {
        title: '维修人',
        dataIndex: 'fixPerson',
        key: 'fixPerson',
        width: 50,
        hideInTable: true
    },
    {
        title: '维修人联系方式',
        dataIndex: 'fixphone',
        key: 'fixphone',
        width: 70,
        hideInSearch: true,
        hideInTable: true
    },

    {
        title: '投诉内容',
        key: 'description',
        dataIndex: 'description',
        width: 80,
        hideInSearch: true,
        hideInTable: true
    },
    {
        title: '处理回复',
        key: 'feedback',
        dataIndex: 'feedback',
        width: 80,
        hideInSearch: true,
        hideInTable: true
    },
    {
        title: '投诉图片',
        key: 'comimgs',
        dataIndex: 'comimgs',
        width: 80,
        hideInSearch: true,
        hideInTable: true
    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        hideInSearch: true,
        hideInDetail: true
    },
]

export const data = [
    {
        key: 0,
        comId: '1',
        comTaskId: 3,
        comPerson: "孙军",
        phone: '18232145698',
        comStatus: "未处理",
        comTime: '2021-07-26 17：55：55',
        description: "报修了，至今无人来修理，打电话也不接",
        comimgs: ["/assets/logo.png"],
        action: []
    },
    {
        key: 1,
        comId: '2',
        comTaskId: 5,
        comPerson: "林慧",
        phone: '13332145698',
        fixPerson: "刘涛",
        fixphone: "18232145698",
        comStatus: "已处理",
        comTime: '2021-07-21 17：55：55',
        description: "服务态度差",
        comimgs: [],
        feedback: "感谢您的投诉，我们会加强管理",
        action: []
    }
]

export const taskList = [{
    title: '反馈回复',
    key: 'feedback',
    value: "",
    type: 'a-textarea'
}]
