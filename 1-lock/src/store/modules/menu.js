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
      // {
      //   "redirect": null,
      //   "path": "/dashboard/workplace",
      //   "component": "dashboard/Workplace",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "home",
      //     "title": "工作台"
      //   },
      //   "name": "dashboard-workplace",
      //   "id": "9502685863ab87f0ad1134142788a385"
      // },
      {
        "redirect": null,
        "path": "/lockmanager",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/lockmanager/lockmanager",
            "component": "lockmanager/lockManager",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "智能锁管理"
            },
            "name": "lockmanager-lockManager",
            "id": "12612132135004528626"
          }],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "hdd",
          "title": "基础管理"
        },
        "name": "lockmanager",
        "id": "9502685863ab87f0ad1134142788a385"
      },
      {
        "redirect": null,
        "path": "/record",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [{
          "path": "/record/lockrecord",
          "component": "record/lockRecord",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "title": "开锁记录"
          },
          "name": "record-lockRecord",
          "id": "1261213213500452866"
        },
        {
          "path": "/record/repairrecord",
          "component": "record/repairRecord",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "title": "维修记录"
          },
          "name": "record-repairRecord",
          "id": "1261213213500452866"
        },
        {
          "path": "/record/alertrecord",
          "component": "record/alertRecord",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "title": "报警记录"
          },
          "name": "record-alertRecord",
          "id": "1261213213500452866"
        }],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "dashboard",
          "title": "记录"
        },
        "name": "record",
        "id": "9502685863ab87f0ad1134142788a385"
      },
      {
        "redirect": null,
        "path": "/count",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [{
          "path": "/count/lockcount",
          "component": "count/lockCount",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "title": "开锁统计"
          },
          "name": "count-lockCount",
          "id": "1261213213500452866"
        },
        {
          "path": "/count/repaircount",
          "component": "count/repairCount",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "title": "维修统计"
          },
          "name": "count-repairCount",
          "id": "1261213213500452866"
        },
        {
          "path": "/count/alertcount",
          "component": "count/alertCount",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "title": "报警统计"
          },
          "name": "count-alertCount",
          "id": "1261213213500452866"
        }],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "home",
          "title": "统计"
        },
        "name": "count",
        "id": "9502685863ab87f0ad1134142788a385"
      }
    ]
  },
  "timestamp": 1624946593208
}