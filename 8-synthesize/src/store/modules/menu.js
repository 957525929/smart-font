export const menuMock = {
	"success": true,
	"message": "查询成功",
	"code": 200,
	"result": {
		"allAuth": [{
			"action": "online:goGenerateCode",
			"describe": "代码生成按钮",
			"type": "1",
			"status": "1"
		}, {
			"action": "user:form:phone",
			"describe": "手机号禁用",
			"type": "2",
			"status": "1"
		}, {
			"action": "user:add",
			"describe": "添加用户按钮",
			"type": "1",
			"status": "1"
		}],
		"auth": [{
			"action": "user:add",
			"describe": "添加用户按钮",
			"type": "1"
		}, {
			"action": "user:form:phone",
			"describe": "手机号禁用",
			"type": "2"
		}, {
			"action": "online:goGenerateCode",
			"describe": "代码生成按钮",
			"type": "1"
		}],
		"menu": [
			//   {
			//   "redirect": null,
			//   "path": "/program/manage",
			//   "component": "layouts/RouteView",
			//   "route": "1",
			//   "children": [{
			//     "path": "/program/manage/list",
			//     "component": "program/manage/ProgramList",
			//     "route": "1",
			//     "meta": {
			//       "keepAlive": false,
			//       "internalOrExternal": false,
			//       "title": "库存调拨"
			//     },
			//     "name": "program-manage-list",
			//     "id": "1261951277691453442"
			//   }],
			//   "meta": {
			//     "keepAlive": false,
			//     "internalOrExternal": false,
			//     "icon": "hdd",
			//     "title": "计划管理"
			//   },
			//   "name": "erp-stock",
			//   "id": "1244876622988214274"
			// },

			{
				"redirect": null,
				"path": "/planManage",
				"component": "layouts/RouteView",
				"route": "1",
				"children": [
					{
						"path": "/planManage/planlist",
						"component": "planManage/PlanList",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "计划列表"
						},
						"name": "planManage-PlanList",
						"id": "b1cb0a3fedf7ed0e4653cb5a229837ee"
					},
					{
						"path": "/planManage/tasklist",
						"component": "planManage/TaskList",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "任务列表"
						},
						"hidden": true,
						"name": "planManage-TaskList",
						"id": "b1cb0a3fedf7ed0e4653cb5a229837ee"
					},
					{
						"path": "/planManage/tasklist01",
						"component": "planManage/TaskList01",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "任务列表"
						},
						"hidden": true,
						"name": "planManage-TaskList01",
						"id": "b1cb0a3fedf7ed0e4653cb5a229837ee"
					},
					{
						"path": "/planManage/tasklist02",
						"component": "planManage/TaskList02",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "任务列表"
						},
						"hidden": true,
						"name": "planManage-TaskList02",
						"id": "b1cb0a3fedf7ed0e4653cb5a229837ee"
					},
					{
						"path": "/planManage/tasklist03",
						"component": "planManage/TaskList03",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "任务列表"
						},
						"hidden": true,
						"name": "planManage-TaskList03",
						"id": "b1cb0a3fedf7ed0e4653cb5a229837ee"
					},

				],
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "计划管理"
				},
				"name": "planManage",
				"id": "08e6b9dc3c04489c8e1ff2ce6f105aa4"
			},

			{
				"redirect": null,
				"path": "/documents",
				"component": "layouts/RouteView",
				"route": "1",
				"children": [
					{
						"path": "/documents/list",
						"component": "documents/List",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "文档列表"
						},
						"name": "erp-bas-bankAccount",
						"id": "1250094027880439809"
					}],
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "form",
					"title": "电子文档"
				},
				"name": "erp-bas",
				"id": "1242263502445903874"
			},
			{
				"redirect": null,
				"path": "/statistics",
				"component": "layouts/RouteView",
				"route": "1",
				"children": [
					{
						"path": "/statistics/plan",
						"component": "statistics/Plan",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "计划统计"
						},
						"name": "statistics-Plan",
						"id": "1250094027880439809"
					},
					{
						"path": "/statistics/list",
						"component": "statistics/List",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "文档统计"
						},
						"name": "statistics-List",
						"id": "1250094027880439809"
					}],
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "table",
					"title": "统计"
				},
				"name": "statistics",
				"id": "1242263502445903874"
			},
			{
				"redirect": null,
				"path": "/systemSetup",
				"component": "layouts/RouteView",
				"route": "1",
				"children": [
					{
						"path": "/systemSetup/setTime",
						"component": "systemSetup/SetTime",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "设置提醒时间"
						},
						"name": "setup-setTime",
						"id": "e41b69c57a941a3bbcce45032fe57605"
					}, {
						"path": "/systemSetup/docmentsManage",
						"component": "systemSetup/DocmentsManage",
						"route": "1",
						"meta": {
							"keepAlive": false,
							"internalOrExternal": false,
							"title": "文档类型管理"
						},
						"name": "systemSetup-DocmentsManage",
						"id": "e41b69c57a941a3bbcce45032fe57605"
					}
				],
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "cloud",
					"title": "系统设置"
				},
				"name": "systemSetup",
				"id": "e41b69c57a941a3bbcce45032fe57605"
			},
		]
	},
	"timestamp": 1624946593208
}