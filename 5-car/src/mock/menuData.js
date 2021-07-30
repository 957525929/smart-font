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
                "redirect": "/vehicleUsageMng/verify",
                "path": "/dashboard/analysis",
                "component": "dashboard/Workplace",
                "route": "1",
                "hidden":true,
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
                "path": "/vehicleUsageMng",
                "component": "layouts/RouteView",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "car",
                    "title": "用车管理"
                },
                "name": "vehicleUsageMng",
                "id": "9502685863ab87f0ad1134142788a385",
                "children": [{
                    "path": "/vehicleUsageMng/verify",
                    "component": "vehicleUsageMng/verify/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "profile",
                        "title": "用车审核"
                    },
                    "name": "vehicleUsageMng-verify"
                },
                {
                    "path": "/vehicleUsageMng/dispatch",
                    "component": "vehicleUsageMng/dispatch/index",
                    "route": "1",
                    "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "icon": "control",
                        "title": "车辆调度"
                    },
                    "name": "vehicleUsageMng-dispatch"
                },
               ]
            },
            {
                "redirect": null,
                "path": "/basicDataMng",
                "component": "layouts/RouteView",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "audit",
                    "title": "基础数据"
                },
                "name": "basicDataMng",
                "children": [
                    {
                        "path": "/basicDataMng/vehicleInfo",
                        "component": "basicDataMng/vehicleInfo/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "car",
                            "title": "车辆信息"
                        },
                        "name": "basicDataMng-vehicleInfo"
                    },
                    {
                        "path": "/basicDataMng/driverMng",
                        "component": "basicDataMng/driverMng/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "team",
                            "title": "司机管理"
                        },
                        "name": "basicDataMng-driverMng"
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
                    "title": "查询统计"
                },
                "name": "statistic",
                "children": [
                    {
                        "path": "/statistic/vehicleUsageRecord",
                        "component": "statistic/vehicleUsageRecord/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "car",
                            "title": "用车记录"
                        },
                        "name": "statistic-vehicleUsageRecord"
                    },
                    {
                        "path": "/statistic/driverWorkload",
                        "component": "statistic/driverWorkload/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "audit",
                            "title": "司机工作量"
                        },
                        "name": "statistic-driverWorkload"
                    },
                    {
                        "path": "/statistic/supplyRecord",
                        "component": "statistic/supplyRecord/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "api",
                            "title": "加油记录"
                        },
                        "name": "statistic-supplyRecord"
                    },
                    {
                        "path": "/statistic/maintainRecord",
                        "component": "statistic/maintainRecord/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "insurance",
                            "title": "保养记录"
                        },
                        "name": "statistic-maintainRecord"
                    },
                    {
                        "path": "/statistic/fixRecord",
                        "component": "statistic/fixRecord/index",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "tool",
                            "title": "维修记录"
                        },
                        "name": "statistic-fixRecord"
                    }
                ]
            },
            // {
            //     "redirect": null,
            //     "path": "/sysCtrl",
            //     "component": "layouts/RouteView",
            //     "route": "1",
            //     "meta": {
            //         "keepAlive": false,
            //         "internalOrExternal": false,
            //         "icon": "setting",
            //         "title": "系统管理"
            //     },
            //     "name": "sysCtrl",
            //     "children": [
            //         {
            //             "path": "/sysCtrl/test",
            //             "component": "sysCtrl/test",
            //             "route": "1",
            //             "meta": {
            //                 "keepAlive": false,
            //                 "internalOrExternal": false,
            //                 "title": "开发中..."
            //             },
            //             "name": "sysCtrl-test"
            //         }
            //     ]
            // }
        ]
    },
    "timestamp": 1624946593208
}














