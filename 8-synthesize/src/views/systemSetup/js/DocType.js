import { formatDate } from '@/utils/util'
export const data = [
    {
        key: '1',
        docType: '资产',
        createTime: formatDate(new Date().getTime() - 5 * 24 * 3000 * 740, 'yyyy-MM-dd hh:mm:ss')
    },
    {
        key: '2',
        docType: '会议纪要',
        createTime: formatDate(new Date().getTime() - 10 * 24 * 2180 * 740, 'yyyy-MM-dd hh:mm:ss')
    },
    {
        key: '3',
        docType: '记录',
        createTime: formatDate(new Date().getTime() - 18 * 18 * 2580 * 740, 'yyyy-MM-dd hh:mm:ss')
    },
    {
        key: '4',
        docType: '总结',
        createTime: formatDate(new Date().getTime() - 25 * 24 * 2080 * 740, 'yyyy-MM-dd hh:mm:ss')
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