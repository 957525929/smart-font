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
        title: '给水设备',
        value: 'water-in',
        children: [{
            key: '1-1-1',
            title: '贮水池 (箱)',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-1-2',
            title: '给水泵',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1001',
            title: '给水管网',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-1-4',
            title: '水表',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        ],
    },
    {
        children: [{
            key: '1-2-1',
            title: '排水管道',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-2-2',
            title: '通气管',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-2-3',
            title: '清通设备',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-2-4',
            title: '抽升设备',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-2-5',
            title: '室外排水管道',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ],
        key: '1-2',
        title: '排水设备',
        value: 'water-out',
    },
    {
        key: '1-3',
        title: '房屋卫生设备',
        value: 'water-in',
        children: [{
            key: '1-3-1',
            title: '洗脸盆',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-3-2',
            title: '浴盆',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-3-3',
            title: '大便器',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-3-4',
            title: '小便器',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ],
    },
    {
        key: '1-4',
        title: '房屋热水供应设备',
        value: 'water-in',
        children: [{
            key: '1-4-1',
            title: '给水泵',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-4-2',
            title: '热水管道',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-4-3',
            title: '热水表',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '1-4-4',
            title: '水加热器',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ],
    },
    ],
    key: '1',
    title: '给排水系统',
    value: 'water',
},
{
    children: [{
        key: '2-1',
        title: '供电设备',
        value: 'water-in',
        children: [{
            key: '2001',
            title: '供电线路',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '2-1-2',
            title: '变配电装置',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '2-1-3',
            title: '高低压电器',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ],
    },
    {
        children: [{
            key: '2-2-1',
            title: '机房',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '2-2-2',
            title: '轿厢',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '2-2-3',
            title: '井道',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ],
        key: '2-2',
        title: '电梯设备',
        value: 'water-out',
    },
    {
        key: '2-3',
        title: '电气照明系统',
        value: 'water-in',
        children: [{
            key: '2-3-1',
            title: '照明供电线路',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '2-3-2',
            title: '照明器具',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ],
    }
    ],
    key: '2',
    title: '电器系统',
    value: 'electricity',
},
{
    children: [{
        key: '3-1',
        title: '空调设备',
        value: 'water-out',
        children: [{
            key: '3001',
            title: '冷水机组',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '3-1-2',
            title: '水泵',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '3-1-3',
            title: '空调机组',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }, {
            key: '3-1-1',
            title: '风机',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '3-1-2',
            title: '冷却塔',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '3-1-3',
            title: '风机盘管',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ]
    },
    {
        key: '3-2',
        title: '通风设备',
        value: 'water-in',
        children: [{
            key: '3-2-1',
            title: '风机',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '3-2-2',
            title: '通风管道',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }, {
            key: '3-2-1',
            title: '风口',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        },
        {
            key: '3-2-2',
            title: '空气净化',
            value: '2ea16c76c6e14d7d80e734af209916d3',
        }
        ],
    }
    ],
    key: '3',
    title: '空调、通风系统',
    value: 'warm-wind',
},
{
    key: '4',
    title: '其他',
    value: 'other',
},
]

export const groupTree = [{
    children: [{
        children: [{
            key: '1-1-1',
            title: '1号楼',
            value: '1号楼'
        },
        {
            key: '1-1-2',
            title: '2号楼',
            value: '2号楼',
        }],
        key: '1-1',
        title: 'A区域',
        value: 'A区域',
    }, {
        key: '1-2',
        title: 'B区域',
        value: 'B区域',
        children: [
            {
                key: '1-2-1',
                title: '1号楼',
                value: '1号楼',
            },
            {
                key: '1-2-2',
                title: '2号楼',
                value: '2号楼',
            },
            {
                key: '1-2-3',
                title: '3号楼',
                value: '3号楼',
            }]
    }],
    key: '1',
    title: '中国烟草总公司福建省公司机关',
    value: '中国烟草总公司福建省公司机关',
}]