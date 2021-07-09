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
        seatNum:4,
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '2',
        licenseNum: '闽A123402',
        seatNum:6,
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '3',
        licenseNum: '闽A123403',
        seatNum:4,
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '4',
        licenseNum: '闽A123404',
        seatNum:4,
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '5',
        licenseNum: '闽A123405',
        seatNum:5,
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '6',
        licenseNum: '闽A123406',
        seatNum:5,
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
        bindCar:['1', '4']
    },
    {
        key: '2',
        name: '卢本伟',
        phoneNum: generatePhoneNum(),
        bindCar:['1', '3']
    },
    {
        key: '3',
        name: '孙笑川',
        phoneNum: generatePhoneNum(),
        bindCar:['2']
    },
    {
        key: '4',
        name: '马保国',
        phoneNum: generatePhoneNum(),
        bindCar:['5']
    },
    {
        key: '5',
        name: '陈睿',
        phoneNum: generatePhoneNum(),
        bindCar:['3','5']
    },
    {
        key: '6',
        name: '肖战',
        phoneNum: generatePhoneNum(),
        bindCar:['3','6']
    },
    {
        key: '7',
        name: '袁世凯',
        phoneNum: generatePhoneNum(),
        bindCar:['2','3','6']
    },
    {
        key: '8',
        name: '秦桧',
        phoneNum: generatePhoneNum(),
        bindCar:['2','4','6']
    },
    {
        key: '9',
        name: '魏忠贤',
        phoneNum: generatePhoneNum(),
        bindCar:['1','3','4','6']
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
export const dispatchList = [
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
        driverContact: null
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
        driverContact: null
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
        driverContact: null
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
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        driverContact: generatePhoneNum()
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
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        driverContact: generatePhoneNum()
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
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        driverContact: generatePhoneNum()
    },
]
//用车记录
export const vehicleUsageRecord = [
    {
        key: '1',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        goTime: '2021-07-05',
        backTime: '2021-07-07',
        from: '福州',
        to: '南京',
        isBack: '双程',
    },
    {
        key: '2',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        goTime: '2021-07-05',
        backTime: '2021-07-07',
        from: '福州',
        to: '南京',
        isBack: '双程',
    },
    {
        key: '3',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        goTime: '2021-07-05',
        backTime: '2021-07-07',
        from: '福州',
        to: '南京',
        isBack: '双程',
    },
    {
        key: '4',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 2,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        goTime: '2021-07-05',
        backTime: '2021-07-07',
        from: '福州',
        to: '泉州',
        isBack: '双程',
    },
    {
        key: '5',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        goTime: '2021-07-05',
        backTime: '2021-07-07',
        from: '福州',
        to: '南京',
        isBack: '双程',
    },
    {
        key: '6',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        driver: driverList[randomInt(0, driverList.length - 1)].name,
        goTime: '2021-07-05',
        backTime: '2021-07-07',
        from: '福州',
        to: '厦门',
        isBack: '单程',
    },
]

//司机工作量
export const driverWorkloadPie = [
    { item: '出车次数', count: 56 },
    { item: '缺勤/请假次数', count: 2 },
]

export const driverWorkloadLineChart = [
    { type: '1', work: 3, absence: 0 },
    { type: '2', work: 2, absence: 0 },
    { type: '3', work: 7, absence: 0 },
    { type: '4', work: 1, absence: 0 },
    { type: '5', work: 0, absence: 0 },
    { type: '6', work: 4, absence: 0 },
    { type: '7', work: 3, absence: 0 },
    { type: '8', work: 3, absence: 0 },
    { type: '9', work: 3, absence: 0 },
    { type: '10', work: 2, absence: 0 },
    { type: '12', work: 1, absence: 0 },
    { type: '13', work: 3, absence: 0 },
    { type: '14', work: 0, absence: 1 },
    { type: '15', work: 3, absence: 0 },
    { type: '16', work: 5, absence: 0 },
    { type: '17', work: 3, absence: 0 },
    { type: '18', work: 3, absence: 0 },
    { type: '19', work: 2, absence: 0 },
    { type: '20', work: 3, absence: 0 },
    { type: '21', work: 0, absence: 1 },
    { type: '22', work: 3, absence: 0 },
    { type: '23', work: 4, absence: 0 },
    { type: '24', work: 3, absence: 0 },
    { type: '25', work: 6, absence: 0 },
    { type: '26', work: 3, absence: 0 },
    { type: '27', work: 3, absence: 0 },
    { type: '28', work: 9, absence: 0 },
    { type: '29', work: 3, absence: 0 },
    { type: '30', work: 2, absence: 0 },
]

export const driverWorkloadList = [
    {
        key: '1',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-01',
        backTime: '2021-06-01',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '双程',
    },
    {
        key: '2',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-01',
        backTime: '2021-06-01',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '双程',
    },
    {
        key: '3',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-01',
        backTime: '2021-06-01',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '双程',
    },
    {
        key: '4',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 2,
        goTime: '2021-06-02',
        backTime: '2021-06-02',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '双程',
    },
    {
        key: '5',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-02',
        backTime: '2021-06-02',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '双程',
    },
    {
        key: '6',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-03',
        backTime: '2021-06-03',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '单程'
    },
    {
        key: '7',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-03',
        backTime: '2021-06-03',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '单程'
    },
    {
        key: '8',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-03',
        backTime: '2021-06-03',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '单程'
    },
    {
        key: '9',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-03',
        backTime: '2021-06-03',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '单程'
    },
    {
        key: '10',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-03',
        backTime: '2021-06-03',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '单程'
    },
    {
        key: '11',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-03',
        backTime: '2021-06-03',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '单程'
    },
    {
        key: '12',
        licenseNum: vehicleList[randomInt(0, vehicleList.length - 1)].licenseNum,
        user: user[randomInt(0, user.length - 1)].name,
        reason: '公务出差',
        passengerCount: 4,
        goTime: '2021-06-03',
        backTime: '2021-06-03',
        from: '福州仓山区',
        to: '福州鼓楼区',
        isBack: '单程'
    }
]

