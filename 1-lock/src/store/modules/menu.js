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
        "path": "/dashboard/areamanager",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/dashboard/areaManager",
            "component": "dashboard/areaManager",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "房间位置管理"
            },
            "name": "dashboard-areaManager",
            "id": "12612132135004528626"
          },
          {
            "path": "/dashboard/roommanager",
            "component": "dashboard/roomManager",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "房间人员管理"
            },
            "name": "dashboard-roomManager",
            "id": "1261213213500452866"
          },
          {
            "path": "/dashboard/installmanager",
            "component": "dashboard/installmanager",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "智能锁安装"
            },
            "name": "dashboard-installmanager",
            "id": "1261213213500452866"
          },
          {
            "path": "/dashboard/repairmanager",
            "component": "dashboard/repairManager",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "智能锁维修配置"
            },
            "name": "dashboard-repairManager",
            "id": "1261213213500452866"
          },
          // {
          //   "path": "/erp/stock/rubricPurIn",
          //   "component": "erp/stock/RubricPurInBillList",
          //   "route": "1",
          //   "meta": {
          //     "keepAlive": false,
          //     "internalOrExternal": false,
          //     "title": "采购退货出库"
          //   },
          //   "name": "isystem-permission",
          //   "id": "12612132135004528626"
          // },


        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "home",
          "title": "基础数据管理"
        },
        "name": "dashboard-lockmanager",
        "id": "9502685863ab87f0ad1134142788a385"
      },
      // {
      //   "redirect": null,
      //   "path": "/lockmanager",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [
      //     {
      //       "path": "/lockmanager/lockmanager",
      //       "component": "lockmanager/lockManager",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "智能锁管理"
      //       },
      //       "name": "lockmanager-lockManager",
      //       "id": "12612132135004528626"
      //     }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "hdd",
      //     "title": "基础管理"
      //   },
      //   "name": "lockmanager",
      //   "id": "9502685863ab87f0ad1134142788a385"
      // },
      {
        "redirect": null,
        "path": "/record",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/record/lockmanager",
            "component": "record/lockManager",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "远程开锁"
            },
            "name": "record-lockmanager",
            "id": "12612132135004528626"
          },
          {
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
          // {
          //   "path": "/record/repairrecord",
          //   "component": "record/repairRecord",
          //   "route": "1",
          //   "meta": {
          //     "keepAlive": false,
          //     "internalOrExternal": false,
          //     "title": "维修记录"
          //   },
          //   "name": "record-repairRecord",
          //   "id": "1261213213500452866"
          // },
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
          "title": "智能锁运维管理"
        },
        "name": "record",
        "id": "9502685863ab87f0ad1134142788a385"
      },
      {
        "redirect": null,
        "path": "/count",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/count/installcount",
            "component": "count/installcount",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "安装统计"
            },
            "name": "count-installcount",
            "id": "1261213213500452866"
          }, {
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
          "icon": "bar-chart",
          "title": "查询统计"
        },
        "name": "count",
        "id": "9502685863ab87f0ad1134142788a385"
      }
    ]
  },
  "timestamp": 1624946593208
}