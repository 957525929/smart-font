export const data = [
    {
        key: '1',
        taskName: '2021年第一季度总结',
        priority: '高',
        status: '2',
        createTime: '2021-01-01',
        deadline: '2021-03-31',
        startTime: '2021-03-04 12:40:55',
        completionTime: '2021-03-30 16:32:24'
    },
    {
        key: '2',
        taskName: '2021年第二季度总结',
        priority: '低',
        status: '2',
        createTime: '2021-04-01',
        deadline: '2021-06-30',
        startTime: '2021-05-04 09:10:42',
        completionTime: '2021-06-24 10:51:21'
    },
    {
        key: '3',
        taskName: '2021年第三季度总结',
        priority: '中',
        status: '1',
        createTime: '2021-07-01',
        deadline: '2021-09-30'
    },
    {
        key: '4',
        taskName: '2021年第四季度总结',
        priority: '低',
        status: '0',
        createTime: '2021-10-01',
        deadline: '2021-12-31',
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