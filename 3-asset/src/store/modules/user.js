import Vue from 'vue'
import { login, logout, phoneLogin, thirdLogin } from "@/api/login"
import { ACCESS_TOKEN, USER_NAME,USER_INFO,USER_AUTH,SYS_BUTTON_AUTH,UI_CACHE_DB_DICT_DATA } from "@/store/mutation-types"
import { welcome } from "@/utils/util"
import { queryPermissionsByUser } from '@/api/api'
import { getAction } from '@/api/manage'

const user = {
  state: {
    token: '',
    username: '',
    realname: '',
    welcome: '',
    avatar: '',
    permissionList: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { username, realname, welcome }) => {
      state.username = username
      state.realname = realname
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_PERMISSIONLIST: (state, permissionList) => {
      state.permissionList = permissionList
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },

  actions: {
    // CAS验证登录
    ValidateLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        getAction("/cas/client/validateLogin",userInfo).then(response => {
          console.log("----cas 登录--------",response);
          if(response.success){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
            commit('SET_AVATAR', userInfo.avatar)
            resolve(response)
          }else{
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          if(response.code =='200'){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(UI_CACHE_DB_DICT_DATA, result.sysAllDictItems, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
            commit('SET_AVATAR', userInfo.avatar)
            resolve(response)
          }else{
            reject(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    //手机号登录
    PhoneLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
          phoneLogin(userInfo).then(response => {
          if(response.code =='200'){
        const result = response.result
        const userInfo = result.userInfo
        Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(UI_CACHE_DB_DICT_DATA, result.sysAllDictItems, 7 * 24 * 60 * 60 * 1000)
        commit('SET_TOKEN', result.token)
        commit('SET_INFO', userInfo)
        commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
        commit('SET_AVATAR', userInfo.avatar)
        resolve(response)
      }else{
        reject(response)
      }
    }).catch(error => {
        reject(error)
      })
    })
    },
    // 获取用户信息
    GetPermissionList({ commit }) {
      return new Promise((resolve, reject) => {
        let v_token = Vue.ls.get(ACCESS_TOKEN);
       // let params = {token:v_token};
        const response={ "success": true, "message": "查询成功", "code": 200,
          "result": {
          "allAuth": [{ "action": "online:goGenerateCode", "describe": "代码生成按钮", "type": "1", "status": "1" }, { "action": "user:form:phone", "describe": "手机号禁用", "type": "2", "status": "1" }, { "action": "user:add", "describe": "添加用户按钮", "type": "1", "status": "1" }],
            "auth": [{ "action": "user:add", "describe": "添加用户按钮", "type": "1" }, { "action": "user:form:phone", "describe": "手机号禁用", "type": "2" }, { "action": "online:goGenerateCode", "describe": "代码生成按钮", "type": "1" }],
            "menu": [
              {
                  "redirect": null,
                  "path": "/dashboard/analysis",
                  "component": "dashboard/Analysis", "route": "1",
                  "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "home",
                    "title": "首页"
                    },
                  "name": "dashboard-analysis",
                  "id": "9502685863ab87f0ad1134142788a385"
              },
              {
                  "redirect": null,
                  "path": "/asset_manage",
                  "component": "layouts/RouteView",
                  "route": "1",
                  "children": [
                    {
                      "path": "/asset_manage/asset", "component": "asset_manage/asset", "route": "1",
                      "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "title": "资产变化捕捉" },
                      "name": "index",
                      "id": "1244877762060517734"
                    },
                    {
                      "path": "/asset_manage/AssetStatistic", "component": "asset_manage/AssetStatistic", "route": "1",
                      "meta": {
                        "keepAlive": false,
                        "internalOrExternal": false,
                        "title": "资产变化统计" },
                      "name": "AssetStatistic",
                      "id": "12448777620605173744"
                    },
                  ],
                  "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "icon": "hdd",
                    "title": "资产变化" },
                  "name": "asset_manage",
                  "id": "1244876622988214274"
              },
              {
                 "hidden":true,
                 "redirect": null,
                 "path": "/asset_manage/history",
                 "component": "asset_manage/history",
                 "route": "1",
                 "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "历史流转记录"
                 },
                  "name": "history",
                  "id": "12448777620605173753"
              },
              {
                 "redirect": null,
                 "path": "/rent",
                 "component": "layouts/RouteView",
                 "route": "1",
                 "children": [
                    {
                      "path": "/rent/contractManage",
                      "component": "layouts/RouteView",
                      "route": "1",
                      "children": [
                          {
                            "path": "/rent/contractManage/CreateContract", "component": "rent/contractManage/CreateContract", "route": "1",
                            "meta": {
                              "keepAlive": false,
                              "internalOrExternal": false,
                              "title": "新建合同" },
                            "name": "CreateContract",
                            "id": "12448777620605173734"
                          },
                          {
                            "path": "/rent/contractManage/index", "component": "rent/contractManage/index", "route": "1",
                            "meta": {
                              "keepAlive": false,
                              "internalOrExternal": false,
                              "title": "合同列表" },
                            "name": "index",
                            "id": "12448777620605173744"
                          },
                      ],
                      "meta": {
                          "keepAlive": false,
                          "internalOrExternal": false,
                          "title": "合同管理"
                      },
                      "name": "contractManage",
                      "id": "1244877762060517371"
                    },
                    {
                        "path": "/rent/rentManage",
                        "component": "layouts/RouteView",
                        "route": "1",
                        "children": [
                            {
                              "path": "/rent/rentManage/CreateRegister", "component": "rent/rentManage/CreateRegister", "route": "1",
                              "meta": {
                                "keepAlive": false,
                                "internalOrExternal": false,
                                "title": "收缴登记" },
                              "name": "CreateRegister",
                              "id": "1244877762060573734"
                            },
                            {
                              "path": "/rent/rentManage/index", "component": "rent/rentManage/index", "route": "1",
                              "meta": {
                                "keepAlive": false,
                                "internalOrExternal": false,
                                "title": "收缴记录" },
                              "name": "rentManageindex",
                              "id": "12448777620605173s4"
                            },
                        ],
                        "meta": {
                          "keepAlive": false,
                          "internalOrExternal": false,
                          "title": "租金收缴" },
                      "name": "rentManage",
                      "id": "1233877762060517389"
                    },
                   {
                     "path": "/rent/configuration", "component": "rent/configuration", "route": "1",
                     "meta": {
                       "keepAlive": false,
                       "internalOrExternal": false,
                       "title": "收缴配置" },
                     "name": "configuration",
                     "id": "1233877762060517339"
                   },
                    ],
                 "meta": {
                      "keepAlive": false,
                      "internalOrExternal": false,
                      "icon": "hdd",
                      "title": "租赁模块" },
                    "name": "rent-manage",
                    "id": "1244876622988211111"
              },

            ]},
          "timestamp": 1624946593208 };
        const menuData = response.result.menu;
        const authData = response.result.auth;
        const allAuthData = response.result.allAuth;
        //Vue.ls.set(USER_AUTH,authData);
        sessionStorage.setItem(USER_AUTH,JSON.stringify(authData));
        sessionStorage.setItem(SYS_BUTTON_AUTH,JSON.stringify(allAuthData));
        if (menuData && menuData.length > 0) {
          //update--begin--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
          menuData.forEach((item, index) => {
            if (item["children"]) {
              let hasChildrenMenu = item["children"].filter((i) => {
                return !i.hidden || i.hidden == false
              })
              if (hasChildrenMenu == null || hasChildrenMenu.length == 0) {
                item["hidden"] = true
              }
            }
          })
          console.log(" menu show json ", menuData)
          //update--end--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
          commit('SET_PERMISSIONLIST', menuData)
        } else {
          reject('getPermissionList: permissions must be a non-null array !')
        }
        resolve(response)
        // queryPermissionsByUser(params).then(response => {
        //
        //   const menuData = response.result.menu;
        //   const authData = response.result.auth;
        //   const allAuthData = response.result.allAuth;
        //   //Vue.ls.set(USER_AUTH,authData);
        //   sessionStorage.setItem(USER_AUTH,JSON.stringify(authData));
        //   sessionStorage.setItem(SYS_BUTTON_AUTH,JSON.stringify(allAuthData));
        //   if (menuData && menuData.length > 0) {
        //     //update--begin--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
        //     menuData.forEach((item, index) => {
        //       if (item["children"]) {
        //         let hasChildrenMenu = item["children"].filter((i) => {
        //           return !i.hidden || i.hidden == false
        //         })
        //         if (hasChildrenMenu == null || hasChildrenMenu.length == 0) {
        //           item["hidden"] = true
        //         }
        //       }
        //     })
        //     console.log(" menu show json ", menuData)
        //     //update--end--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
        //     commit('SET_PERMISSIONLIST', menuData)
        //   } else {
        //     reject('getPermissionList: permissions must be a non-null array !')
        //   }
        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        let logoutToken = state.token;
        commit('SET_TOKEN', '')
        commit('SET_PERMISSIONLIST', [])
        Vue.ls.remove(ACCESS_TOKEN)
        Vue.ls.remove(UI_CACHE_DB_DICT_DATA)
        //console.log('logoutToken: '+ logoutToken)
        logout(logoutToken).then(() => {
          //let sevice = "http://"+window.location.host+"/";
          //let serviceUrl = encodeURIComponent(sevice);
          //window.location.href = window._CONFIG['casPrefixUrl']+"/logout?service="+serviceUrl;
          resolve()
        }).catch(() => {
          resolve()
        })
      })
    },
    // 第三方登录
    ThirdLogin({ commit }, token) {
      return new Promise((resolve, reject) => {
        thirdLogin(token).then(response => {
          if(response.code =='200'){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
            commit('SET_AVATAR', userInfo.avatar)
            resolve(response)
          }else{
            reject(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user