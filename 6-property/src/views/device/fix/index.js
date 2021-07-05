// 全部
export const fixMenu = [{
    title:"全部",
    content:fixList
},{
    title:"待审核",
    content:fixList
},{
    title:"待维修",
    content:fixList
},{
    title:"待核查",
    content:fixList
},{
    title:"待评价",
    content:fixList
},{
    title:"待评估",
    content:fixList
}]

const fixList = {
    allColumns,
    allData,
    allSearchCon
}
const allColumns = [
    {
        dataIndex: 'devId',
        slots: { title: '问题编号' },
        scopedSlots: { customRender: 'devId' },
        title: '设备编号',
        width: 80,
        key: 'devId'
    },
    {
        title: '问题描述',
        dataIndex: 'devName',
        width: 100,
        key: 'devName',
    },
    {
        title: '问题上报时间',
        key: 'fixedTime',
        dataIndex: 'fixedTime',
        scopedSlots: { customRender: 'tags' },
        width: 100,
        type: 'a-range-picker',
    },
    {
        title: '所属资产',
        key: 'assets',
        dataIndex:'assets',
        width: 80,
        type: 'a-select',
    },
    {
        dataIndex: 'institution',
        key:'institution',
        slots: { title: '设备编号' },
        scopedSlots: { customRender: 'name' },
        title: '业主单位',
        width: 80,
    },
    {
        title: '业主联系方式',
        dataIndex: 'phone',
        key:'phone',
        width: 80,
    },
    {
        title: '维修员',
        key: 'fixStaff',
        dataIndex: 'fixStaff',
        scopedSlots: { customRender: 'tags' },
        width: 80,
    },
    {
        title: '维修完成时间',
        key: 'fixedTime',
        dataIndex: 'fixedTime',
        scopedSlots: { customRender: 'tags' },
        width: 80,
        type: 'a-range-picker',
    },
    {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
        width: 80,
        ifHideInSearch:true
    },
]

const allData = [
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
    }
]

const allSearchCon = {}
// export default {
//     fixMenu,
//     fixListColumns,
//     data
// }