export const menu = {
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
            },
            {
                "redirect": null,
                "path": "/vehicle",
                "component": "layouts/RouteView",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "car",
                    "title": "车辆管理"
                },
                "name": "vehicle",
                "id": "9502685863ab87f0ad1134142788a385",
                "children": [{
                    "path": "/vehicle/verify",
                    "component": "vehicle/verify/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "profile",
                        "title": "用车审核"
                    },
                    "name": "vehicle-verify"
                },
                {
                    "path": "/vehicle/history",
                    "component": "vehicle/history/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "database",
                        "title": "用车记录"
                    },
                    "name": "vehicle-history"
                },
                {
                    "path": "/vehicle/listInfo",
                    "component": "vehicle/listInfo/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "car",
                        "title": "车辆信息"
                    },
                    "name": "vehicle-listInfo"
                },
                {
                    "path": "/vehicle/dispatch",
                    "component": "vehicle/dispatch/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "control",
                        "title": "车辆调度"
                    },
                    "name": "vehicle-dispatch"
                },
                {
                    "path": "/vehicle/supplyRecord",
                    "component": "vehicle/supplyRecord/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "api",
                        "title": "加油记录"
                    },
                    "name": "vehicle-supplyRecord"
                },
                {
                    "path": "/vehicle/maintainRecord",
                    "component": "vehicle/maintainRecord/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "insurance",
                        "title": "保养记录"
                    },
                    "name": "vehicle-maintainRecord"
                },
                {
                    "path": "/vehicle/fixRecord",
                    "component": "vehicle/fixRecord/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "tool",
                        "title": "维修记录"
                    },
                    "name": "vehicle-fixRecord"
                }]
            },
            {
                "redirect": null,
                "path": "/personnelMng",
                "component": "layouts/RouteView",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "audit",
                    "title": "人员管理"
                },
                "name": "personnelMng",
                "children": [
                    {
                        "path": "/personnelMng/driverMng",
                        "component": "personnelMng/driverMng/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "team",
                            "title": "司机管理"
                        },
                        "name": "personnelMng-driverMng"
                    }
                ]
            },
            {
                "redirect": null,
                "path": "/statistic",
                "component": "layouts/RouteView",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "pie-chart",
                    "title": "数据统计"
                },
                "name": "statistic",
                "children": [
                    {
                        "path": "/statistic/vehicleUsage",
                        "component": "statistic/vehicleUsage/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "car",
                            "title": "车辆使用统计"
                        },
                        "name": "statistic-vehicleUsage"
                    },
                    {
                        "path": "/statistic/driverWorkload",
                        "component": "statistic/driverWorkload/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "audit",
                            "title": "司机工作量统计"
                        },
                        "name": "statistic-driverWorkload"
                    }
                ]
            },
            {
                "redirect": null,
                "path": "/sysCtrl",
                "component": "layouts/RouteView",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "setting",
                    "title": "系统管理"
                },
                "name": "sysCtrl",
                "children": [
                    {
                        "path": "/sysCtrl/test",
                        "component": "sysCtrl/test",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "title": "开发中..."
                        },
                        "name": "sysCtrl-test"
                    }
                ]
            }]
    },
    "timestamp": 1624946593208
}














