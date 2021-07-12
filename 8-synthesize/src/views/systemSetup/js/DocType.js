export const data = [
    {
        key: '1',
        docType: '资产',
        createTime: '2020-5-23 10:21:12'
    },
    {
        key: '2',
        docType: '会议纪要',
        createTime: '2020-5-23 12:21:18'
    },
    {
        key: '3',
        docType: '记录',
        createTime: '2020-6-21 13:01:46'
    },
    {
        key: '4',
        docType: '总结',
        createTime: '2020-2-28 17:33:58'
    },

]
export const columns = [
    {
        title: '类型编号',
        dataIndex: '',
        key: 'rowIndex',
        width: 90,
        align: "center",
        customRender: function (t, r, index) {
            return parseInt(index) + 1;
        }
    },
    {
        title: '文件类型',
        align: "center",
        dataIndex: 'docType',
        width: 200,
        scopedSlots: { customRender: 'docTypeList' }

    },
    {
        title: '创建时间',
        align: "center",
        dataIndex: 'createTime',
        width: 200,
        unhidden: true
        /*            customRender:function (text) {
                      return "*"+text.substring(9,text.length);
                    }*/
    },
    {
        title: '操作',
        dataIndex: 'action',
        align: "center",
        width: 180,
        scopedSlots: { customRender: 'action' },

    }
]