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
                }]
            }]
    },
    "timestamp": 1624946593208
}














