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
        let params = {token:v_token};
        let response = {
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
            "menu": [{
              "redirect": null,
              "path": "/dashboard/analysis",
              "component": "procurement/procurementList",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": false,
                "icon": "home",
                "title": "首页"
              },
              "name": "dashboard-analysis",
              "id": "9502685863ab87f0ad1134142788a385"
            }, {
              "redirect": null,
              "path": "/store/manage",
              "component": "layouts/RouteView",
              "route": "1",
              "children": [{
                "path": "/procurement/manage/procurementList",
                "component": "procurement/procurementList",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "internalOrExternal": true,
                  "title": "采购管理"
                },
                "name": "procurement-manage-procurementList",
                "id": "1265365136117207042"
              }, {
                "path": "/store/manage/stockList",
                "component": "store/stockList",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "internalOrExternal": true,
                  "title": "库存管理"
                },
                "name": "store-manage-stockList",
                "id": "1265462136117207042"
              },{
                "path": "/receive/manage/receiveList",
                "component": "receive/receiveList",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "internalOrExternal": true,
                  "title": "领用管理",
                },
                "name": "receive-manage-stockList",
                "id": "1265462116117207042"
              },{
                "path": "/article/manage/articleList",
                "component": "article/articleList",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "internalOrExternal": true,
                  "title": "用品种类管理"
                },
                "name": "article-manage-articleList",
                "id": "1265462116547207042"
              }],
              "meta": {
                "keepAlive": false,
                "internalOrExternal": false,
                "icon": "layout",
                "title": "办公用品管理"
              },
              "name": "store-manage",
              "id": "1249544156015607810"
            },  {
              "redirect": null,
              "path": "/statistics/manage",
              "component": "layouts/RouteView",
              "route": "1",
              "children": [{
                "path": "/statistics/manage/stock",
                "component": "statistics/stock",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "物品数据统计"
                },
                "name": "statistics-manage-stock",
                "id": "1245154914959151105"
              }],
              "meta": {
                "keepAlive": false,
                "internalOrExternal": false,
                "icon": "table",
                "title": "数据统计管理"
              },
              "name": "statistics-manage",
              "id": "1242263502445903874"
            }]
          },
          "timestamp": 1625195766991
        };
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
        resolve(response);
        // queryPermissionsByUser(params).then(response => {
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