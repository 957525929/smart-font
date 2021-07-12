export const data = [
    {
        key: '1',
        taskName: '2020年第一季度策略',
        priority: '高',
        status: '2',
        createTime: '2020-02-07',
        deadline: '2020-03-31',
        startTime: '2020-02-08 10:40:52',
        completionTime: '2020-03-30 11:22:31'
    },
    {
        key: '2',
        taskName: '2020年第二季度策略',
        priority: '低',
        status: '3',
        createTime: '2020-04-01',
        deadline: '2020-06-30',
        startTime: '2020-06-04 17:05:24',
        completionTime: ''
    },
    {
        key: '3',
        taskName: '2020年第三季度策略',
        priority: '中',
        status: '2',
        createTime: '2020-07-01',
        deadline: '2020-09-30',
        startTime: '2020-08-01 14:08:57',
        completionTime: '2020-09-30 08:39:51'
    },
    {
        key: '4',
        taskName: '2020年第四季度策略',
        priority: '低',
        status: '3',
        createTime: '2020-10-01',
        deadline: '2020-11-08',
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
        unhidden: true
        /*            customRender:function (text) {
                      return "*"+text.substring(9,text.length);
                    }*/
    },
    {
        title: '重要性',
        align: "center",
        width: 100,
        dataIndex: 'priority',
        unhidden: true,
        type: 'a-select',
        typeSon: 'a-select-option'
    },
    {
        title: '任务状态',
        align: "center",
        width: 100,
        dataIndex: 'status',
        scopedSlots: { customRender: 'customRenderStatus' },
        unhidden: true,
        type: 'a-select',
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