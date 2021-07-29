/*
表格操作目录的字典 */
export const typeToComponent = new Map([
    ["TableDrawer", "showDrawer"],
    ["TableModal", "showModal"],
    ["TableDelete", ""]
])
/*维修taskStatus*/
export const taskStatus = {
    0: { tableValue: '待审核', searchValue: '待审核', code: 0 },
    1: { tableValue: '待派单', searchValue: '待派单', code: 1 },
    2: { tableValue: '待维修', searchValue: '待维修', code: 2 },
    3: { tableValue: '待核查', searchValue: '待核查', code: 3 },
    4: { tableValue: '已完成', searchValue: '已完成', code: 4 },
}
/*保养任务类型devType*/
export const taskType = {
    0: { tableValue: '设备巡检', searchValue: '巡检', code: 0 },
    1: { tableValue: '设备点检', searchValue: '点检', code: 1 },
    2: { tableValue: '维修中保养', searchValue: '维修中保养', code: 2 },
    3: { tableValue: '日常维护', searchValue: '日常维护', code: 3 },
    4: { tableValue: '一级保养', searchValue: '一级保养', code: 4 },
    5: { tableValue: '二级保养', searchValue: '二级保养', code: 5 },
}
/*保养任务状态proStatus*/
export const protaskStatus = {
    0: { tableValue: '待保养', searchValue: '待保养', code: 0 },
    1: { tableValue: '待核查', searchValue: '待核查', code: 1 },
    2: { tableValue: '已完成', searchValue: '已完成', code: 2 }
}
/*设备类型devType*/
export const devType = {
    0: { tableValue: '空调、通风系统', searchValue: '空调、通风系统', code: 0 },
    1: { tableValue: '电器系统', searchValue: '电器系统', code: 1 },
    2: { tableValue: '给排水系统', searchValue: '给排水系统', code: 2 },
}
/*设备状态devStatus*/
export const devStatus = {
    // 0: { tableValue: '规划中', searchValue: '规划中', code: 0 },
    // 1: { tableValue: '在部署', searchValue: '在部署', code: 1 },
    // 2: { tableValue: '待交货', searchValue: '待交货', code: 2 },
    // 3: { tableValue: '未投产', searchValue: '未投产', code: 3 },
    4: { tableValue: '在用', searchValue: '在用', code: 4 },
    5: { tableValue: '在修', searchValue: '在修', code: 5 },
    6: { tableValue: '停用', searchValue: '停用', code: 6 },
    7: { tableValue: '闲置', searchValue: '闲置', code: 7 },
    8: { tableValue: '库存封存', searchValue: '库存封存', code: 8 },
}
/*技术状况techSituation*/
export const techSituation = {
    0: { tableValue: '完好', searchValue: '完好', code: 0 },
    1: { tableValue: '带病运转', searchValue: '带病运转', code: 1 },
    2: { tableValue: '待修', searchValue: '待修', code: 2 },
    3: { tableValue: '在修', searchValue: '在修', code: 3 },
    4: { tableValue: '在保养', searchValue: '在保养', code: 4 },
    5: { tableValue: '维修中保养', searchValue: '维修中保养', code: 5 },
    6: { tableValue: '待报废', searchValue: '待报废', code: 6 },
}
/*设备状态staffStatus*/
export const staffStatus = {
    0: { tableValue: '请假', searchValue: '请假', code: 0 },
    1: { tableValue: '在职', searchValue: '在职', code: 1 },
    2: { tableValue: '待工', searchValue: '待工', code: 2 }
}

/*时间周期 period*/
export const period = {
    0: { tableValue: '今日', searchValue: '今日', code: 0 },
    1: { tableValue: '本周', searchValue: '本周', code: 1 },
    2: { tableValue: '本月', searchValue: '本月', code: 2 },
    3: { tableValue: '本季度', searchValue: '本季度', code: 3 },
    4: { tableValue: '本年', searchValue: '本年', code: 4 },
    5: { tableValue: '自定义', searchValue: '自定义', code: 5 },
}
/*养护周期 proPeriod*/
export const proPeriod = {
    0: { tableValue: '每日', searchValue: '每日', code: 0 },
    1: { tableValue: '每周', searchValue: '每周', code: 1 },
    2: { tableValue: '每月', searchValue: '每月', code: 2 },
    3: { tableValue: '每季度', searchValue: '每季度', code: 3 },
    4: { tableValue: '每年', searchValue: '每年', code: 4 },
    5: { tableValue: '自定义', searchValue: '自定义', code: 5 },
}
// 分类树
export const DepartTree = [{
    children: [{
        key: '1-1',
        label: '给水设备',
        value: '给水设备',
        children: [{
            key: '1-1-1',
            label: '贮水池 (箱)',
            value: '贮水池 (箱)',
        },
        {
            key: '1-1-2',
            label: '给水泵',
            value: '给水泵',
        },
        {
            key: '1001',
            label: '给水管网',
            value: '给水管网',
        },
        {
            key: '1-1-4',
            label: '水表',
            value: '水表',
        },
        ],
    },
    {
        children: [{
            key: '1-2-1',
            label: '排水管道',
            value: '排水管道',
        },
        {
            key: '1-2-2',
            label: '通气管',
            value: '通气管',
        },
        {
            key: '1-2-3',
            label: '清通设备',
            value: '清通设备',
        },
        {
            key: '1-2-4',
            label: '抽升设备',
            value: '抽升设备',
        },
        {
            key: '1-2-5',
            label: '室外排水管道',
            value: '室外排水管道',
        }
        ],
        key: '1-2',
        label: '排水设备',
        value: '排水设备',
    },
    {
        key: '1-3',
        label: '房屋卫生设备',
        value: '房屋卫生设备',
        children: [{
            key: '1-3-1',
            label: '洗脸盆',
            value: '洗脸盆',
        },
        {
            key: '1-3-2',
            label: '浴盆',
            value: '浴盆',
        },
        {
            key: '1-3-3',
            label: '大便器',
            value: '大便器',
        },
        {
            key: '1-3-4',
            label: '小便器',
            value: '小便器',
        }
        ],
    },
    {
        key: '1-4',
        label: '房屋热水供应设备',
        value: '房屋热水供应设备',
        children: [{
            key: '1-4-1',
            label: '给水泵',
            value: '给水泵',
        },
        {
            key: '1-4-2',
            label: '热水管道',
            value: '热水管道',
        },
        {
            key: '1-4-3',
            label: '热水表',
            value: '热水表',
        },
        {
            key: '1-4-4',
            label: '水加热器',
            value: '水加热器',
        }
        ],
    },
    ],
    key: '1',
    label: '给排水系统',
    value: '给排水系统',
},
{
    children: [{
        key: '2-1',
        label: '供电设备',
        value: '供电设备',
        children: [{
            key: '2001',
            label: '供电线路',
            value: '供电线路',
        },
        {
            key: '2-1-2',
            label: '变配电装置',
            value: '变配电装置',
        },
        {
            key: '2-1-3',
            label: '高低压电器',
            value: '高低压电器',
        }
        ],
    },
    {
        children: [{
            key: '2-2-1',
            label: '机房',
            value: '机房',
        },
        {
            key: '2-2-2',
            label: '轿厢',
            value: '轿厢',
        },
        {
            key: '2-2-3',
            label: '井道',
            value: '井道',
        }
        ],
        key: '2-2',
        label: '电梯设备',
        value: '电梯设备',
    },
    {
        key: '2-3',
        label: '电气照明系统',
        value: '电气照明系统',
        children: [{
            key: '2-3-1',
            label: '照明供电线路',
            value: '照明供电线路',
        },
        {
            key: '2-3-2',
            label: '照明器具',
            value: '照明器具',
        }
        ],
    }
    ],
    key: '2',
    label: '电器系统',
    value: '电器系统',
},
{
    children: [{
        key: '3-1',
        label: '空调设备',
        value: '空调设备',
        children: [{
            key: '3001',
            label: '冷水机组',
            value: '冷水机组',
        },
        {
            key: '3-1-2',
            label: '水泵',
            value: '水泵',
        },
        {
            key: '3-1-3',
            label: '空调机组',
            value: '空调机组',
        }, {
            key: '3-1-1',
            label: '风机',
            value: '风机',
        },
        {
            key: '3-1-2',
            label: '冷却塔',
            value: '冷却塔',
        },
        {
            key: '3-1-3',
            label: '风机盘管',
            value: '风机盘管',
        }
        ]
    },
    {
        key: '3-2',
        label: '通风设备',
        value: '通风设备',
        children: [{
            key: '3-2-1',
            label: '风机',
            value: '风机',
        },
        {
            key: '3-2-2',
            label: '通风管道',
            value: '通风管道',
        }, {
            key: '3-2-1',
            label: '风口',
            value: '风口',
        },
        {
            key: '3-2-2',
            label: '空气净化',
            value: '空气净化',
        }
        ],
    }
    ],
    key: '3',
    label: '空调、通风系统',
    value: '空调、通风系统',
},
{
    key: '4',
    label: '其他',
    value: '其他',
},
]

export const groupTree = [{
    children: [{
        children: [{
            key: '1-1-1',
            label: '1号楼',
            value: '1号楼'
        },
        {
            key: '1-1-2',
            label: '2号楼',
            value: '2号楼',
        }],
        key: '1-1',
        label: 'A区域',
        value: 'A区域',
    }, {
        key: '1-2',
        label: 'B区域',
        value: 'B区域',
        children: [
            {
                key: '1-2-1',
                label: '1号楼',
                value: '1号楼',
            },
            {
                key: '1-2-2',
                label: '2号楼',
                value: '2号楼',
            },
            {
                key: '1-2-3',
                label: '3号楼',
                value: '3号楼',
            }]
    }],
    key: '1',
    label: '中国烟草总公司福建省公司机关',
    value: '中国烟草总公司福建省公司机关',
}]