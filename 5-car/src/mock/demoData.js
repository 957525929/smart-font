import { getCurrentDate } from '@/components/_util/DateUtil.js'
import { randomInt, generatePhoneNum } from '@/components/_util/mathFunc.js'
//使用者列表
const user = [
    {
        key: 0,
        name: '袁林',
        phone: generatePhoneNum()
    },
    {
        key: 1,
        name: '姜轶枫',
        phone: generatePhoneNum()
    },
    {
        key: 2,
        name: '张家锐',
        phone: generatePhoneNum()
    },
    {
        key: 3,
        name: '邝燊楠',
        phone: generatePhoneNum()
    },
    {
        key: 4,
        name: '孙颖君',
        phone: generatePhoneNum()
    },
    {
        key: 5,
        name: '冯碧颖',
        phone: generatePhoneNum()
    },
    {
        key: 6,
        name: '波风水门',
        phone: generatePhoneNum()
    },
    {
        key: 7,
        name: '吴成杰',
        phone: generatePhoneNum()
    },
    {
        key: 8,
        name: '周德祥',
        phone: generatePhoneNum()
    },
    {
        key: 9,
        name: '刘煜',
        phone: generatePhoneNum()
    },
    {
        key: 10,
        name: '孙一峰',
        phone: generatePhoneNum()
    },
    {
        key: 11,
        name: '吴三桂',
        phone: generatePhoneNum()
    },
    {
        key: 12,
        name: '陈晖洁',
        phone: generatePhoneNum()
    }
]
//车辆列表
export const vehicleList = [
    {
        key: '1',
        licenseNum: '闽A123401',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '2',
        licenseNum: '闽A123402',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '3',
        licenseNum: '闽A123403',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '4',
        licenseNum: '闽A123404',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '5',
        licenseNum: '闽A123405',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '6',
        licenseNum: '闽A123406',
        status: '维修中',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    }
];

//司机列表
export const driverList = [
    {
        key: '1',
        name: '张三',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '2',
        name: '卢本伟',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '3',
        name: '孙笑川',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '4',
        name: '马保国',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '5',
        name: '陈睿',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '6',
        name: '肖战',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '7',
        name: '袁世凯',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '8',
        name: '秦桧',
        phoneNum: generatePhoneNum(),
    },
    {
        key: '9',
        name: '魏忠贤',
        phoneNum: generatePhoneNum(),
    }
]

// 审核列表
export const verifyList = [
    {
        key: 0,
        user: user[0].name,
        time: getCurrentDate(),
        from: '福州市',
        to: '南京市',
        isBack: '单程',
        reason: '公务出差', 
        userContact: generatePhoneNum(),
        passengerCount: 4
    },
    {
        key: 1,
        user: user[1].name,
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程',
        reason: '公务出差', 
        userContact: generatePhoneNum(),
        passengerCount: 4
    },
    {
        key: 2,
        user: user[2].name,
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程',
        reason: '公务出差', 
        userContact: generatePhoneNum(),
        passengerCount: 4,
    },
    {
        key: 3,
        user: user[3].name,
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程',
        reason: '公务出差', 
        userContact: generatePhoneNum(),
        passengerCount: 4,
    },
    {
        key: 4,
        user: user[4].name,
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程',
        reason: '公务出差', 
        userContact: generatePhoneNum(),
        passengerCount: 4,
    },
    {
        key: 5,
        user: user[5].name,
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程',
        reason: '公务出差', 
        userContact: generatePhoneNum(),
        passengerCount: 4,
    }
]

//调度列表
export const dispatchList=[
    {
        key: 1,
        user: user[6].name,
        userContact: generatePhoneNum(),
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程',
        reason: '公务出差', 
        passengerCount: 4,
        licenseNum: null,
        driver: null,
        driverContact:null
      },
      {
        key: 2,
        user: user[7].name,
        userContact: generatePhoneNum(),
        time: getCurrentDate(),
        from: '福州市',
        to: '南京市',
        isBack: '双程',
        reason: '公务出差', 
        passengerCount: 4,
        licenseNum: null,
        driver: null,
        driverContact:null
      },
      {
        key: 3,
        user: user[8].name,
        userContact: generatePhoneNum(),
        time: getCurrentDate(),
        from: '福州市',
        to: '上海市',
        isBack: '双程',
        reason: '公务出差', 
        passengerCount: 4,
        licenseNum: null,
        driver: null,
        driverContact:null
      },
      {
        key: 4,
        user: user[9].name,
        userContact: generatePhoneNum(),
        time: getCurrentDate(),
        from: '福州市',
        to: '北京市',
        isBack: '双程',
        reason: '公务出差', 
        passengerCount: 4,
        licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
        driver: driverList[randomInt(0,driverList.length-1)].name,
        driverContact:generatePhoneNum()
      },
      {
        key: 5,
        user: user[10].name,
        userContact: generatePhoneNum(),
        time: getCurrentDate(),
        from: '福州市',
        to: '武汉市',
        isBack: '双程',
        reason: '公务出差', 
        passengerCount: 4,
        licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
        driver: driverList[randomInt(0,driverList.length-1)].name,
        driverContact:generatePhoneNum()
      },
      {
        key: 6,
        user: user[11].name,
        userContact: generatePhoneNum(),
        time: getCurrentDate(),
        from: '福州市',
        to: '厦门市',
        isBack: '双程',
        reason: '公务出差', 
        passengerCount: 4,
        licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
        driver: driverList[randomInt(0,driverList.length-1)].name,
        driverContact:generatePhoneNum()
      },
]
//用车记录
export const vehicleUsageRecord = [
    {
      key:'1',
      licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
      user: user[randomInt(0,user.length-1)].name,
      reason: '公务出差',
      passengerCount: 4,
      driver: driverList[randomInt(0,driverList.length-1)].name,
      goTime: '2021-06-23',
      backTime: '2021-06-29',
      from: '福州',
      to: '南京',
      isBack: '双程',
    },
    {
      key:'2',
      licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
      user: user[randomInt(0,user.length-1)].name,
      reason: '公务出差',
      passengerCount: 4,
      driver: driverList[randomInt(0,driverList.length-1)].name,
      goTime: '2021-06-23',
      backTime: '2021-06-29',
      from: '福州',
      to: '南京',
      isBack: '双程',
    },
    {
      key:'3',
      licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
      user: user[randomInt(0,user.length-1)].name,
      reason: '公务出差',
      passengerCount: 4,
      driver: driverList[randomInt(0,driverList.length-1)].name,
      goTime: '2021-06-23',
      backTime: '2021-06-29',
      from: '福州',
      to: '南京',
      isBack: '双程',
    },
    {
      key:'4',
      licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
      user: user[randomInt(0,user.length-1)].name,
      reason: '公务出差',
      passengerCount: 2,
      driver: driverList[randomInt(0,driverList.length-1)].name,
      goTime: '2021-06-13',
      backTime: '2021-06-15',
      from: '福州',
      to: '泉州',
      isBack: '双程',
    },
    {
      key:'5',
      licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
      user: user[randomInt(0,user.length-1)].name,
      reason: '公务出差',
      passengerCount: 4,
      driver: driverList[randomInt(0,driverList.length-1)].name,
      goTime: '2021-06-12',
      backTime: '2021-06-13',
      from: '福州',
      to: '南京',
      isBack: '双程',
    },
    {
      key:'6',
      licenseNum: vehicleList[randomInt(0,vehicleList.length-1)].licenseNum,
      user: user[randomInt(0,user.length-1)].name,
      reason: '公务出差',
      passengerCount: 4,
      driver: driverList[randomInt(0,driverList.length-1)].name,
      goTime: '2021-06-12',
      backTime: '2021-06-13',
      from: '福州',
      to: '厦门',
      isBack: '单程',
    },
  ]

