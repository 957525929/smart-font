export const mockMenuData = {
  "success": true,
  "message": "查询成功",
  "code": 200,
  "result": {
    "allAuth": [
      {
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
      }
    ],
    "auth": [
      {
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
      }
    ],
    "menu": [
      // {  //ksn
      //   "redirect": null,
      //   "path": "/dashboard/analysis",
      //   "component": "dashboard/Workplace",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "home",
      //     "title": "工作台"
      //   },
      //   "name": "dashboard-workplace",
      // },
      {
        "redirect": null,
        "path": "/material/warehousing",
        "component": "layouts/RouteView",
        "route": "1",
        "meta":
          {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "money-collect",
            "title": "物料管理"
          },
        "name": "material-warehousing",
        "id": "717f6bee46f44a3897eca9abd6e2ec44",
        "children":
          [
            {
              // "hidden": true,
              "path": "/material/warehousing/warehousingIndex",
              "component": "material/warehousing/Index",
              "route": "1",
              "meta":
                {
                  "keepAlive": true,
                  "internalOrExternal": false,
                  "title": "入库管理"
                },
              "name": "materialManagement-warehousing-warehousingIndex",
              "id": "8fb8172747a78756c11916216b8b8066"
            },
            {
              "hidden": true,
              "path": "/material/warehousing/warehousingDetails",
              "component": "material/warehousing/Details",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "入库详情"
                },
              "name": "materialManagement-warehousing-warehousingDetails",
              "id": "8fb8172747a78756c11916216b8b8066"
            },
          ],

      },
    ]
  },
  "timestamp": 1624946593208
}

