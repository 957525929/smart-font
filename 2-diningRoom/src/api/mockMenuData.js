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
            "icon": "form",
            "title": "物料管理"
          },
        "name": "material-warehousing",
        "id": "1",
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
              "name": "material-warehousing-warehousingIndex",
              "id": "2"
            },
            {
              "path": "/material/warehousing/warehousingCheck",
              "component": "material/warehousing/Check",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "入库审核"
                },
              "name": "material-warehousing-warehousingCheck",
              "id": "2111"
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
              "name": "material-warehousing-warehousingDetails",
              "id": "3"
            },
            {
              "path": "/material/staff/staffIndex",
              "component": "material/staff/Index",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "人员管理"
                },
              "name": "material-staff-staffIndex",
              "id": "4"
            },
            {
              "path": "/material/manu/manuIndex",
              "component": "material/manu/Index",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "供应商管理"
                },
              "name": "material-manu-Index",
              "id": "5"
            },
            {
              "path": "/material/warehousing/manuCategory",
              "component": "material/warehousing/Category",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "物料类别管理"
                },
              "name": "material-warehousing-Category",
              "id": "21111"
            },
          ],

      },
      {
        "redirect": null,
        "path": "/food/menu",
        "component": "layouts/RouteView",
        "route": "1",
        "meta":
          {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "snippets",
            "title": "食品管理"
          },
        "name": "food-menu",
        "id": "6",
        "children":
          [
            {
              "path": "/food/menu/menuIndex",
              "component": "food/menu/Index",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "菜品管理"
                },
              "name": "food-menu-menuIndex",
              "id": "7"
            },
            {
              "path": "/food/menu/menuClassify",
              "component": "food/menu/Classify",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "菜品分类管理"
                },
              "name": "food-menu-menuClassify",
              "id": "9"
            },
            {
              "path": "/food/finished/finishedIndex",
              "component": "food/finished/Index",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "成品留样"
                },
              "name": "food-finished-finishedIndex",
              "id": "8"
            },
            {
              "path": "/food/finished/finishedPeople",
              "component": "food/finished/People",
              "route": "1",
              "meta":
                {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "留样人员管理"
                },
              "name": "food-finished-finishedPeople",
              "id": "8"
            },
          ],

      },
    ]
  },
  "timestamp": 1624946593208
}

