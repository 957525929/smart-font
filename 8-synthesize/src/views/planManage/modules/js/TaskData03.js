export const data = [
    {
        key: '1',
        taskName: '2021年组织管控策略',
        priority: '低',
        status: '0',
        createTime: '2021-04-01',
        deadline: '2021-10-30',
        completionTime: ''
    },
    {
        key: '2',
        taskName: '2021年战略规划策略',
        priority: '中',
        status: '0',
        createTime: '2021-07-01',
        deadline: '2021-09-30'
    },
]
export const columns = [
    {
        title: '任务编号',
        dataIndex: '',
        key: 'rowIndex',
        width: 90,
        align: "center",
        customRender: function (t, r, index) {
            return parseInt(index) + 1;
        }
    },
    {
        title: '任务名称',
        align: "center",
        dataIndex: 'taskName',
        width: 200,
        scopedSlots: { customRender: 'taskNameList' },
        unhidden: true,
    },
    {
        title: '重要性',
        align: "center",
        width: 100,
        dataIndex: 'priority',
        unhidden: true,
    },
    {
        title: '任务状态',
        align: "center",
        width: 100,
        dataIndex: 'status',
        scopedSlots: { customRender: 'customRenderStatus' },
        unhidden: true,
    },
    {
        title: '创建时间',
        align: "center",
        width: 100,
        dataIndex: 'createTime',
    },
    {
        title: '截止时间',
        align: "center",
        width: 100,
        dataIndex: 'deadline',
    },
    {
        title: '开始时间',
        align: "center",
        width: 100,
        dataIndex: 'startTime',
    },
    {
        title: '实际完成时间',
        align: "center",
        width: 100,
        dataIndex: 'completionTime',
    },
    {
        title: '操作',
        dataIndex: 'action',
        align: "center",
        width: 180,
        scopedSlots: { customRender: 'action' },
    }
]