export const devColumns = [
    {
        dataIndex: 'devId',
        slots: { title: '设备编号' },
        scopedSlots: { customRender: 'devId' },
        title: '设备编号',
        width: 80,
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
        valueEnum: {
            0: { tableValue: '空调', searchValue: '空调', code: 0 },
            1: { tableValue: '管网', searchValue: '管网', code: 1 },
        },
        type: 'a-select',
    },
    {
        title: '实际状态',
        key: 'devStatus',
        dataIndex: 'devStatus',
        scopedSlots: { customRender: 'devStatus' },
        width: 50,
        type: 'a-select',
        valueEnum: {
            0: { tableValue: '规划中', searchValue: '规划中', code: 0 },
            1: { tableValue: '在部署', searchValue: '在部署', code: 1 },
            2: { tableValue: '待交货', searchValue: '待交货', code: 2 },
            3: { tableValue: '未投产', searchValue: '未投产', code: 3 },
            4: { tableValue: '在用', searchValue: '在用', code: 4 },
            5: { tableValue: '在修', searchValue: '在修', code: 5 },
            6: { tableValue: '停用', searchValue: '停用', code: 6 },
            7: { tableValue: '闲置', searchValue: '闲置', code: 7 },
            8: { tableValue: '库存封存', searchValue: '库存封存', code: 8 },
        },
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
        valueEnum: {
            0: { tableValue: '完好', searchValue: '完好', code: 0 },
            1: { tableValue: '带病运转', searchValue: '带病运转', code: 1 },
            2: { tableValue: '待修', searchValue: '待修', code: 2 },
            3: { tableValue: '在修', searchValue: '在修', code: 3 },
            4: { tableValue: '待报废', searchValue: '待报废', code: 4 },
        },
    },
    {
        title: '维修员',
        key: 'fixStaff',
        dataIndex: 'fixStaff',
        scopedSlots: { customRender: 'tags' },
        width: 80,
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
        key: '1',
        devId: '0001',
        devName: 32,
        devType: 0,
        devStatus: 0,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '刘涛',
        loginTime: '2021-05-22 17：55：55',
        action:[{
            tagName:"编辑",
            url:`<div>123</div>`
        },{
            tagName:"操作",
            url:`<div>123</div>`
        },{
            tagName:"删除",
            url:`<div>123</div>`
        }]
    },
]

// export default {
//     devColumns,
//     data
// }