import {
    devStatus
} from "@/utils/dataDictionary.js";
import {
    data as facData
} from "@/views/person/devFactory/js/index.js";


// 分类树
export const DepartTree = [{
    children: [{
        key: '1-1',
        title: '给水设备',
        value: '给水设备',
        children: [{
            key: '1-1-1',
            title: '贮水池 (箱)',
            value: '贮水池 (箱)',
        },
        {
            key: '1-1-2',
            title: '给水泵',
            value: '给水泵',
        },
        {
            key: '1-1-3',
            title: '给水管网',
            value: '给水管网',
        },
        {
            key: '1-1-4',
            title: '水表',
            value: '水表',
        },
        ],
    },
    {
        children: [{
            key: '1-2-1',
            title: '排水管道',
            value: '排水管道',
        },
        {
            key: '1-2-2',
            title: '通气管',
            value: '通气管',
        },
        {
            key: '1-2-3',
            title: '清通设备',
            value: '清通设备',
        },
        {
            key: '1-2-4',
            title: '抽升设备',
            value: '抽升设备',
        },
        {
            key: '1-2-5',
            title: '室外排水管道',
            value: '室外排水管道',
        }
        ],
        key: '1-2',
        title: '排水设备',
        value: '排水设备',
    },
    {
        key: '1-3',
        title: '房屋卫生设备',
        value: '房屋卫生设备',
        children: [{
            key: '1-3-1',
            title: '洗脸盆',
            value: '洗脸盆',
        },
        {
            key: '1-3-2',
            title: '浴盆',
            value: '浴盆',
        },
        {
            key: '1-3-3',
            title: '大便器',
            value: '大便器',
        },
        {
            key: '1-3-4',
            title: '小便器',
            value: '小便器',
        }
        ],
    },
    {
        key: '1-4',
        title: '房屋热水供应设备',
        value: '房屋热水供应设备',
        children: [{
            key: '1-4-1',
            title: '给水泵',
            value: '给水泵',
        },
        {
            key: '1-4-2',
            title: '热水管道',
            value: '热水管道',
        },
        {
            key: '1-4-3',
            title: '热水表',
            value: '热水表',
        },
        {
            key: '1-4-4',
            title: '水加热器',
            value: '水加热器',
        }
        ],
    },
    ],
    key: '1',
    title: '给排水系统',
    value: '给排水系统',
},
{
    children: [{
        key: '2-1',
        title: '供电设备',
        value: '供电设备',
        children: [{
            key: '2-1-1',
            title: '供电线路',
            value: '供电线路',
        },
        {
            key: '2-1-2',
            title: '变配电装置',
            value: '变配电装置',
        },
        {
            key: '2-1-3',
            title: '高低压电器',
            value: '高低压电器',
        }
        ],
    },
    {
        children: [{
            key: '2-2-1',
            title: '机房',
            value: '机房',
        },
        {
            key: '2-2-2',
            title: '轿厢',
            value: '轿厢',
        },
        {
            key: '2-2-3',
            title: '井道',
            value: '井道',
        }
        ],
        key: '2-2',
        title: '电梯设备',
        value: '电梯设备',
    },
    {
        key: '2-3',
        title: '电气照明系统',
        value: '电气照明系统',
        children: [{
            key: '2-3-1',
            title: '照明供电线路',
            value: '照明供电线路',
        },
        {
            key: '2-3-2',
            title: '照明器具',
            value: '照明器具',
        }
        ],
    }
    ],
    key: '2',
    title: '电器系统',
    value: '电器系统',
},
{
    children: [{
        key: '3-1',
        title: '空调设备',
        value: '空调设备',
        children: [{
            key: '3-1-1',
            title: '冷水机组',
            value: '冷水机组',
        },
        {
            key: '3-1-2',
            title: '水泵',
            value: '水泵',
        },
        {
            key: '3-1-3',
            title: '空调机组',
            value: '空调机组',
        }, {
            key: '3-1-4',
            title: '风机',
            value: '风机',
        },
        {
            key: '3-1-5',
            title: '冷却塔',
            value: '冷却塔',
        },
        {
            key: '3-1-6',
            title: '风机盘管',
            value: '风机盘管',
        }
        ]
    },
    {
        key: '3-2',
        title: '通风设备',
        value: '通风设备',
        children: [{
            key: '3-2-1',
            title: '风机',
            value: '风机',
        },
        {
            key: '3-2-2',
            title: '通风管道',
            value: '通风管道',
        }, {
            key: '3-2-3',
            title: '风口',
            value: '风口',
        },
        {
            key: '3-2-4',
            title: '空气净化',
            value: '空气净化',
        }
        ],
    }
    ],
    key: '3',
    title: '空调、通风系统',
    value: '空调、通风系统',
},
{
    key: '4',
    title: '其他',
    value: '其他',
},
]

export const devColumns = [{
    dataIndex: 'devId',
    title: '零件编号',
    width: 40,
    key: 'devId',
    hideInLogin: true
},
{
    title: '零件名称',
    dataIndex: 'devName',
    width: 80,
    key: 'devName'
},
{
    title: '零件状态',
    key: 'devStatus',
    dataIndex: 'devStatus',
    width: 50,
    type: 'a-select',
    valueEnum: devStatus,
},
{
    title: '零件型号',
    key: 'devModel',
    dataIndex: 'devModel',
    width: 50,
},
{
    dataIndex: 'manufacturer',
    title: '零件厂商单位',
    width: 80,
},
{
    title: '厂商联系方式',
    dataIndex: 'devPhone',
    width: 80,
},
{
    title: '登记时间',
    key: 'loginTime',
    dataIndex: 'loginTime',
    scopedSlots: {
        customRender: 'tags'
    },
    width: 80,
    type: 'a-range-picker',
},
{
    title: '操作',
    key: 'action',
    scopedSlots: {
        customRender: 'action'
    },
    width: 80,
    hideInSearch: true
},
]
export const data = [{
    key: 0,
    devId: 1001,
    devName: "日丰给排水管",
    devModel: "M689f",
    devStatus: "在用",
    loginTime: '2021-06-22 17:55:55',
    manufacturer: "日丰企业集团有限公司",
    devPhone: "18259529231",
    action: [{
        tagName: "删除",
        com: "TableDelete"
    }]
},
{
    key: 1,
    devId: 2001,
    devName: "公牛电线",
    devModel: "E689f",
    devStatus: '在修',
    loginTime: '2021-06-21 10:55:55',
    manufacturer: "国网福建省电力有限公司",
    devPhone: "18259529231",
    action: [{
        tagName: "删除",
        com: "TableDelete"
    }]
},
{
    key: 2,
    devId: 3001,
    devName: "格力巨型冷水机",
    devModel: "P689f",
    devStatus: "在用",
    loginTime: '2021-06-29 08:55:55',
    manufacturer: "珠海格力电器股份有限公司",
    devPhone: "18259529231",
    action: [{
        tagName: "删除",
        com: "TableDelete"
    }]
}
]
export const groupInfo = [{
    title: '分组名',
    key: 'title',
    value: "",
}]

export const devInfo = [{
    dataIndex: 'devId',
    title: '零件编号',
    width: 40,
    key: 'devId',
    hideInLogin: true,
    value: ""
},
{
    title: '零件名称',
    dataIndex: 'devName',
    width: 80,
    key: 'devName',
    value: ""
},
{
    title: '零件状态',
    key: 'devStatus',
    dataIndex: 'devStatus',
    width: 50,
    type: 'a-select',
    valueEnum: devStatus,
    value: ""
},
{
    title: '零件型号',
    key: 'devModel',
    dataIndex: 'devModel',
    width: 50,
    value: ""
},
{
    dataIndex: 'manufacturer',
    title: '零件厂商单位',
    width: 80,
    value: "",
    type: 'a-select',
    valueEnum: {
        ...facData.map(item => {
            return { tableValue: item.devName }
        })
    }
},
{
    title: '登记时间',
    key: 'loginTime',
    dataIndex: 'loginTime',
    width: 80,
    type: 'a-date-picker',
    value: ""
},
{
    title: '操作',
    key: 'action',
    scopedSlots: {
        customRender: 'action'
    },
    width: 80,
    hideInSearch: true,
    hideInLogin: true
}
]
