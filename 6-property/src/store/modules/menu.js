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
			{
			"redirect": null,
			"path": "/dashboard/analysis",
			"component": "dashboard/Workplace",
			"route": "1",
			"meta": {
				"keepAlive": false,
				"internalOrExternal": false, 
				"icon": "home",
				"title": "工作台"
			},
			"name": "dashboard-workplace",
			"id": "9502685863ab87f0ad1134142788a385"
		},
		{
			"redirect": null,
			"path": "/device/deviceList",
			"component": "layouts/RouteView",
			"route": "1",
            "children": [{
				"path": "/device/deviceList/list",
				"component": "device/deviceList/Devicelist",
				"route": "1",
				"icon": "home",
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "设备列表"
				},
				"name": "device-deviceList-list",
				"id": "1261213213500452866"
			}],
			"meta": {
				"keepAlive": false,
				"internalOrExternal": false,
				"icon": "home",
				"title": "设备管理"
			},
			"name": "device-deviceList",
			"id": "9502685863ab87f0ad1134142788a385"
		}]
	},
	"timestamp": 1624946593208
}