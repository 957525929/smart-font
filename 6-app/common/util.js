function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatStampTime(timestamp, timeS = ':', flag = true) {
	let str = '';
	let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000

	let Y = date.getFullYear();
	let M = autoChange(date.getMonth() + 1); //计算机的月份是从0开始滴，需要+1

	let D = autoChange(date.getDate());
	str = Y + '-' + M + '-' + D;

	if (flag) {
		let h = autoChange(date.getHours()) + timeS;
		let m = autoChange(date.getMinutes()) + timeS;
		let s = autoChange(date.getSeconds());
		let timeStr = h + m + s;
		str += " ";
		str += timeStr;
	}
	return str;
}

function autoChange(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}

// 返回相差为xx天xx小时xx分钟
function compareTime(faultDate, completeTime) {
	let stime = Date.parse(new Date(faultDate));
	let etime = Date.parse(new Date(completeTime));
	// 两个时间戳相差的毫秒数
	let usedTime = etime - stime;
	// 计算相差的天数  
	let days = Math.floor(usedTime / (24 * 3600 * 1000));
	// 计算天数后剩余的毫秒数
	let leave1 = usedTime % (24 * 3600 * 1000);
	// 计算出小时数  
	let hours = Math.floor(leave1 / (3600 * 1000));
	// 计算小时数后剩余的毫秒数
	let leave2 = leave1 % (3600 * 1000);
	// 计算相差分钟数
	let minutes = Math.floor(leave2 / (60 * 1000));
	// let time = days + "天" + hours + "时" + minutes + "分";
	return days;
	// return time;
}

// 判断对象是否相等
function isEqual(objA, objB) {
	//相等
	if (objA === objB) return objA !== 0 || 1 / objA === 1 / objB;
	//空判断
	if (objA == null || objB == null) return objA === objB;
	//类型判断
	if (Object.prototype.toString.call(objA) !== Object.prototype.toString.call(objB)) return false;

	switch (Object.prototype.toString.call(objA)) {
		case '[object RegExp]':
		case '[object String]':
			//字符串转换比较
			return '‘‘ ' + objA === '‘‘' + objB;
		case '[object Number]':
			//数字转换比较,判断是否为NaN
			if (+objA !== +objA) {
				return +objB !== +objB;
			}

			return +objA === 0 ? 1 / +objA === 1 / objB : +objA === +objB;
		case '[object Date]':
		case '[object Boolean]':
			return +objA === +objB;
		case '[object Array]':
			//判断数组
			for (let i = 0; i < objA.length; i++) {
				if (!this.isEqual(objA[i], objB[i])) return false;
			}
			return true;
		case '[object Object]':
			//判断对象
			let keys = Object.keys(objA);
			for (let i = 0; i < keys.length; i++) {
				if (!this.isEqual(objA[keys[i]], objB[keys[i]])) return false;
			}

			keys = Object.keys(objB);
			for (let i = 0; i < keys.length; i++) {
				if (!this.isEqual(objA[keys[i]], objB[keys[i]])) return false;
			}

			return true;
		default:
			return false;
	}
}

function isObject(input) {
	return (!!input) && (input.constructor === Object);
}

function isNumber(num) {
	return !isNaN(num) && num !== null && !Array.isArray(num);
}

function base64ToPath(base64) {
	return new Promise(function(resolve, reject) {
		console.log(base64)
		if (typeof window === 'object' && 'document' in window) {
			base64 = base64.split(',')
			var type = base64[0].match(/:(.*?);/)[1]
			var str = atob(base64[1])
			var n = str.length
			var array = new Uint8Array(n)
			while (n--) {
				array[n] = str.charCodeAt(n)
			}
			console.log(array)
			return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
				type: type
			})))
		}
		var extName = base64.match(/data\:\S+\/(\S+);/)
		console.log(extName)
		if (extName) {
			extName = extName[1]
		} else {
			reject(new Error('base64 error'))
		}
		var fileName = Date.now() + '.' + extName
		if (typeof plus === 'object') {
			var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
			bitmap.loadBase64Data(base64, function() {
				var filePath = '_doc/uniapp_temp/' + fileName
				bitmap.save(filePath, {}, function() {
					bitmap.clear()
					resolve(filePath)
				}, function(error) {
					bitmap.clear()
					reject(error)
				})
			}, function(error) {
				bitmap.clear()
				reject(error)
			})
			return
		}
		if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
			var filePath = wx.env.USER_DATA_PATH + '/' + fileName
			wx.getFileSystemManager().writeFile({
				filePath: filePath,
				data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
				encoding: 'base64',
				success: function() {
					resolve(filePath)
				},
				fail: function(error) {
					reject(error)
				}
			})
			return
		}
		reject(new Error('not support'))
	})
	// 转换为带单位的内存大小

}

function dataURLtoFile(dataurl, filename) { 
    if(!filename){
        filename = new Date().getTime()
    }
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename + '.' + mime.split('/')[1], { type: mime });
}

// 年月YYYY-MM的拆分与合并
function getDate() {
	const date = new Date();
	let yearNum = date.getFullYear()
	let month = date.getMonth() + 1;
	month = month> 9 ? month: "0" + month;
	return [yearNum + '-' +month,yearNum,month]
}

function splitDate(val){
	val.match(/^(\d{4})-(\d{2})$/)
	return val.match(/^(\d{4})-(\d{2})$/)
}

//统一提示组件方便全局修改
const msg = (title, duration = 2000, mask = false, icon = 'none') => {
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
// 判空
const judgeDataNull = (data) => {
  return Boolean(data) === false ? false : true;
};

//  值判空
const judgeNull = (data) => {
  if (!judgeDataNull(data)) {
    console.log('返回空');
    return false;
  } else {
    if (typeof data === 'object') {
      let arr = Object.keys(data);
      if (arr.length === 0) {
        console.log('返回对象值为空或未定义');
        return false;
      }
    } else if (typeof data === 'string') {
		// .replace(/(^s*)|(s*$)/g, '')
      if (data.length === 0) {
        console.log('返回字符串值为空');
        return false;
      }
    }
    return true;
  }
}
module.exports = {
	formatTime,
	formatStampTime,
	isEqual,
	base64ToPath,
	getDate,
	splitDate,
	msg,
	judgeDataNull,
	judgeNull
}
