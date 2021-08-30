export const mockMenuData = {
  success: true,
  message: '查询成功',
  code: 200,
  result: {
    allAuth: [
      {
        action: 'online:goGenerateCode',
        describe: '代码生成按钮',
        type: '1',
        status: '1'
      },
      {
        action: 'user:form:phone',
        describe: '手机号禁用',
        type: '2',
        status: '1'
      },
      {
        action: 'user:add',
        describe: '添加用户按钮',
        type: '1',
        status: '1'
      }
    ],
    auth: [
      {
        action: 'user:add',
        describe: '添加用户按钮',
        type: '1'
      },
      {
        action: 'user:form:phone',
        describe: '手机号禁用',
        type: '2'
      },
      {
        action: 'online:goGenerateCode',
        describe: '代码生成按钮',
        type: '1'
      }
    ],
    menu: [
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
        redirect: null,
        path: '/material/warehousing',
        component: 'layouts/RouteView',
        route: '1',
        meta: {
          keepAlive: false,
          internalOrExternal: false,
          icon: 'form',
          // "title": "食料采购管理"
          title: '食料管理'
        },
        name: 'material-warehousing',
        id: '1',
        children: [
          {
            // "hidden": true,
            path: '/material/warehousing/warehousingIndex',
            component: 'material/warehousing/Index',
            route: '1',
            meta: {
              keepAlive: true,
              internalOrExternal: false,
              title: '采购管理'
            },
            name: 'material-warehousing-warehousingIndex',
            id: '2'
          },
          {
            path: '/material/warehousing/warehousingCheck',
            component: 'material/warehousing/Check',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '入库审核'
            },
            name: 'material-warehousing-warehousingCheck',
            id: '2111'
          },
          {
            path: '/material/warehousing/warehousingInventory',
            component: 'material/warehousing/Inventory',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '库存管理'
            },
            name: 'material-warehousing-warehousingInventory',
            id: '211111'
          },
          {
            path: '/material/warehousing/warehousingOutput',
            component: 'material/warehousing/Output',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '出库管理'
            },
            name: 'material-warehousing-warehousingOutput',
            id: '21111'
          },

          {
            path: '/material/warehousing/warehousingQuery',
            component: 'material/warehousing/Query',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '采购查询'
            },
            name: 'material-warehousing-warehousingQuery',
            id: '2111'
          },
          {
            hidden: true,
            path: '/material/warehousing/warehousingDetails',
            component: 'material/warehousing/Details',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '入库详情'
            },
            name: 'material-warehousing-warehousingDetails',
            id: '3'
          },
          {
            hidden: true,
            path: '/material/warehousing/components/outputDetails',
            component: 'material/warehousing/components/outputDetails',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '出库详情'
            },
            name: 'material-warehousing-ouputDetails',
            id: '31111'
          }
        ]
      },
      {
        redirect: null,
        path: '/food/menu',
        component: 'layouts/RouteView',
        route: '1',
        meta: {
          keepAlive: false,
          internalOrExternal: false,
          icon: 'snippets',
          title: '食品及订餐管理'
        },
        name: 'food-menu',
        id: '6',
        children: [
          {
            path: '/food/menu/menuIndex',
            component: 'food/menu/Index',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '菜品管理'
            },
            name: 'food-menu-menuIndex',
            id: '7'
          },
          {
            path: '/food/finished/finishedIndex',
            component: 'food/finished/Index',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '成品留样'
            },
            name: 'food-finished-finishedIndex',
            id: '8'
          },
          {
            path: '/food/menu/Scheduled',
            component: 'food/menu/Scheduled',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '订餐管理'
            },
            name: 'food-menu-scheduled',
            id: '91111'
          }
        ]
      },
      // {
      //   "redirect": null,
      //   "path": "/scheduled",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "meta":
      //   {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "cluster",
      //     "title": "食堂预定"
      //   },
      //   "name": "scheduled",
      //   "id": "6",
      //   "children":
      //     [
      //       {
      //         "path": "/scheduled/Scheduled",
      //         "component": "scheduled/Scheduled",
      //         "route": "1",
      //         "meta":
      //         {
      //           "keepAlive": false,
      //           "internalOrExternal": false,
      //           "title": "食堂预定列表"
      //         },
      //         "name": "canteen-scheduled",
      //         "id": "7"
      //       },
      //     ],
      // },
      {
        redirect: null,
        path: '/card/list',
        component: 'layouts/RouteView',
        route: '1',
        meta: {
          keepAlive: false,
          internalOrExternal: false,
          icon: 'credit-card',
          title: '餐卡管理'
        },
        name: 'statistics-table',
        id: '121',
        children: [
          {
            path: '/card/list/cardList',
            component: 'card/list/cardList',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '餐卡列表'
            },
            name: 'card-list-cardList',
            id: '111'
          },
          {
            path: '/card/list/detail',
            component: 'card/list/detail',
            route: '1',
            hidden: true,
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '详情记录'
            },
            name: 'card-list-detail',
            id: '1119'
          },
          {
            path: '/card/transaction/cardTransaction',
            component: 'card/transaction/cardTransaction',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '交易记录'
            },
            name: 'card-transaction-cardTransaction',
            id: '112'
          }
        ]
      },
      {
        redirect: null,
        path: '/statistics/table',
        component: 'layouts/RouteView',
        route: '1',
        meta: {
          keepAlive: false,
          internalOrExternal: false,
          icon: 'dot-chart',
          title: '报表统计'
        },
        name: 'statistics-table',
        id: '11',
        children: [
          {
            path: '/statistics/material/materialIndex',
            component: 'statistics/material/Index',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '食料采购统计'
            },
            name: 'statistics-material-materialIndex',
            id: '111'
          },
          {
            path: '/statistics/food/foodIndex',
            component: 'statistics/food/Index',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '食品统计'
            },
            name: 'statistics-food-foodIndex',
            id: '112'
          },
          {
            path: '/statistics/card/foodCard',
            component: 'statistics/card/foodCard',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '餐卡统计'
            },
            name: 'statistics-card-foodCard',
            id: '112'
          }
        ]
      },

      {
        redirect: null,
        path: '/system/mange',
        component: 'layouts/RouteView',
        route: '1',
        meta: {
          keepAlive: false,
          internalOrExternal: false,
          icon: 'setting',
          title: '系统管理'
        },
        name: 'system-mange',
        id: '6',
        children: [
          {
            path: '/material/staff/staffIndex',
            component: 'material/staff/Index',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '人员管理'
            },
            name: 'material-staff-staffIndex',
            id: '4'
          },
          {
            path: '/material/manu/manuIndex',
            component: 'material/manu/Index',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '供应商管理'
            },
            name: 'material-manu-Index',
            id: '5'
          },
          {
            path: '/material/warehousing/manuCategory',
            component: 'material/warehousing/Category',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '食料分类管理'
            },
            name: 'material-warehousing-Category',
            id: '21111'
          },
          {
            path: '/food/menu/menuClassify',
            component: 'food/menu/Classify',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '菜品分类管理'
            },
            name: 'food-menu-menuClassify',
            id: '9'
          },
          // {
          //   "path": "/food/menu/Order",
          //   "component": "food/menu/Order",
          //   "route": "1",
          //   "meta":
          //   {
          //     "keepAlive": false,
          //     "internalOrExternal": false,
          //     "title": "订餐权限配置"
          //   },
          //   "name": "food-menu-Order",
          //   "id": "911"
          // },
          {
            path: '/food/menu/Message',
            component: 'food/menu/Message',
            route: '1',
            meta: {
              keepAlive: false,
              internalOrExternal: false,
              title: '消息通知配置'
            },
            name: 'food-menu-Message',
            id: '9111'
          }
        ]
      }
    ]
  },
  timestamp: 1624946593208
}
