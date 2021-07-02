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
			},{
				"path": "/device/fix/Fixlist",
				"component": "device/fix/Fixlist",
				"route": "1",
				"icon": "home",
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "设备维修"
				},
				"name": "device-fixList-list",
				"id": "1261213213500452866"
			},{
				"path": "/device/protect/Protectlist",
				"component": "device/protect/Protectlist",
				"route": "1",
				"icon": "home",
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "设备养护"
				},
				"name": "device-protectList-list",
				"id": "1261213213500452866"
			}],
			"meta": {
				"keepAlive": false,
				"internalOrExternal": false,
				"icon": "home",
				"title": "设备管理"
			},
			"name": "device-deviceList",
			"id": "9502685863ab87f0ad1134142788a386"
		},{
			"redirect": null,
			"path": "/person/staff",
			"component": "layouts/RouteView",
			"route": "1",
            "children": [{
				"path": "/person/staff/Stafflist",
				"component": "person/staff/Stafflist",
				"route": "1",
				"icon": "home",
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "员工管理"
				},
				"name": "person-staff-list",
				"id": "1261213213500452866"
			},{
				"path": "/person/devFactory/viewDevFactory",
				"component": "person/devFactory/viewDevFactory",
				"route": "1",
				"icon": "home",
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "设备厂商浏览"
				},
				"name": "person-devFactory-view",
				"id": "1261213213500452866"
			},{
				"path": "/person/owner/viewOwner",
				"component": "person/owner/viewOwner",
				"route": "1",
				"icon": "home",
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "业主浏览"
				},
				"name": "person-owner-view",
				"id": "1261213213500452866"
			}],
			"meta": {
				"keepAlive": false,
				"internalOrExternal": false,
				"icon": "home",
				"title": "人员管理"
			},
			"name": "person-staff",
			"id": "9502685863ab87f0ad1134142788a386"
		},{
			"redirect": null,
			"path": "/service/service",
			"component": "layouts/RouteView",
			"route": "1",
			"meta": {
				"keepAlive": false,
				"internalOrExternal": false,
				"icon": "home",
				"title": "服务交互"
			},
			"name": "service-manage",
			"id": "9502685863ab87f0ad1134142788a386"
		},{
			"redirect": null,
			"path": "/system/notice",
			"component": "layouts/RouteView",
			"route": "1",
            "children": [{
				"path": "/system/notice/NoticeMng",
				"component": "system/notice/NoticeMng",
				"route": "1",
				"icon": "home",
				"meta": {
					"keepAlive": false,
					"internalOrExternal": false,
					"icon": "home",
					"title": "通知管理"
				},
				"name": "system-notice-manage",
				"id": "1261213213500452866"
			}],
			"meta": {
				"keepAlive": false,
				"internalOrExternal": false,
				"icon": "home",
				"title": "系统管理"
			},
			"name": "person-system",
			"id": "9502685863ab87f0ad1134142788a386"
		}]
	},
	"timestamp": 1624946593208
}