const toString = Object.prototype.toString

function isObject(value) {
	return toString.call(value) === '[object Object]'
}

function isString(value) {
	return toString.call(value) === '[object String]'
}

function isDefault(value) {
	return value === void 0
}

function goPage(args) {
	let name, query = {},
		queryStr = null,
		path, type, isName = false
	switch (true) {
		case isObject(args):
			({
				name,
				query = {}
			} = args)
			break
		case isString(args):
			name = args
			break
		default:
			throw new Error('参数必须是对象或者字符串')
	}
	
	if (isObject(query)) {
		queryStr = encodeURIComponent(JSON.stringify(query))
	} else {
		throw new Error('query数据必须是Object')
	}

	this.$routes.forEach(item => {
		if (item.name === name) {
			path = item.path
			type = item.type || 'navigateTo'
			isName = true
		}
	})
	if (!isName) {
		throw new Error(`没有${name}页面`)
	}
	if (!['navigateTo', 'switchTab', 'reLaunch', 'redirectTo'].includes(type)) {
		throw new Error(`name:${name}里面的type必须是以下的值['navigateTo', 'switchTab', 'reLaunch', 'redirectTo']`)
	}
	return new Promise((resolve, reject) => {
		uni[type]({
			url: `${path}?query=${queryStr}`,
			success: resolve,
			fail: reject
		})
	})
}
//解析路由参数
function parseURL() {
	const query = this.$root.$mp.query.query
	if (query) {
		return JSON.parse(decodeURIComponent(query))
	} else {
		return {}
	}
}

// function install(Vue) {
// 	console.log(Vue)
// 	Vue.mixin({
// 		beforeCreate: function() {
// 			if (!isDefault(this.$options.routes)) {
// 				Vue._router = this.$options.routes
// 			}
// 		}
// 	})
// 	// Object.defineProperty(Vue.prototype, '$mpRouter', {
// 	// 	get: function() {
// 	// 		return Vue._router._router
// 	// 	}
// 	// })
// 	Object.defineProperty(Vue.prototype, '$parseURL', {
// 		get: function() {
// 			return Vue._router.parseURL
// 		}
// 	})
	
// 	Object.defineProperty(Vue.prototype, '$goPage', {
// 		get: function() {
// 			return Vue._router.goPage
// 		}
// 	})
// }

// function MPRouter(options) {
// 	if (!(this instanceof MPRouter)) {
// 		throw Error("MPRouter是一个构造函数，应该用`new`关键字调用")
// 	}
// 	isDefault(options) && (options = {})
// 	this.options = options
// 	this._router = options.routes || []
// }

// MPRouter.install = install
// MPRouter.prototype.goPage = goPage
// MPRouter.prototype.parseURL = parseURL

module.exports = {
	goPage,
	parseURL
}
