/*
表格操作目录的字典 */
export const typeToComponent = new Map([
  ["TableDrawer", "showDrawer"],
  ["TableModal", "showModal"],
  ["TableDelete", ""]
])
/*维修taskStatus*/
export const taskStatus = {
  0: { tableValue: '全部', searchValue: '全部', code: 0 },
  1: { tableValue: '待审核', searchValue: '待审核', code: 1 },
  2: { tableValue: '待维修', searchValue: '待维修', code: 2 },
  3: { tableValue: '待核查', searchValue: '待核查', code: 3 },
  4: { tableValue: '待评价', searchValue: '待评价', code: 4},
  5: { tableValue: '待评估', searchValue: '待评估', code: 5 },
}
/*保养任务类型devType*/ 
export const taskType = {
  0: { tableValue: '巡检', searchValue: '巡检', code: 0 },
  1: { tableValue: '点检', searchValue: '点检', code: 1 },
  2: { tableValue: '维修中保养', searchValue: '维修中保养', code: 2 },
}
/*保养任务状态devStatus*/ 
export const  protaskStatus= {
  0: { tableValue: '全部', searchValue: '全部', code: 0 },
  1: { tableValue: '待保养', searchValue: '待保养', code: 1 },
  2: { tableValue: '待核查', searchValue: '待核查', code: 2 },
  3: { tableValue: '待评估', searchValue: '待评估', code: 3 }
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
  4: { tableValue: '在保养', searchValue: '在保养', code: 4},
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
  4: { tableValue: '自定义', searchValue: '自定义', code: 4 },
}