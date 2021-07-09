export const data = [
    {
        key: '1',
        taskName: '2020年第一季度总结',
        priority: '高',
        status: '2',
        createTime: '2020-01-06',
        deadline: '2020-03-31',
        startTime: '2020-01-08 11:20:50',
        completionTime: '2020-03-30 12:25:11'
    },
    {
        key: '2',
        taskName: '2020年第二季度总结',
        priority: '低',
        status: '2',
        createTime: '2020-04-01',
        deadline: '2020-06-30',
        startTime: '2020-05-04 10:10:25',
        completionTime: '2020-06-21 12:20:15'
    },
    {
        key: '3',
        taskName: '2020年第三季度总结',
        priority: '中',
        status: '2',
        createTime: '2020-07-01',
        deadline: '2020-09-30',
        startTime: '2020-07-04 15:02:01',
        completionTime: '2020-09-25 11:20:09'
    },
    {
        key: '4',
        taskName: '2020年第四季度总结',
        priority: '低',
        status: '2',
        createTime: '2020-09-01',
        deadline: '2020-12-20',
        startTime: '2020-09-02 08:20:21',
        completionTime: '2020-12-19 16:10:20'
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