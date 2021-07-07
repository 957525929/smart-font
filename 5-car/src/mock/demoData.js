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
        name: '袁林',
        phone: generatePhoneNum()
    },
    {
        key: 12,
        name: '桐谷和人',
        phone: generatePhoneNum()
    }
]
//车辆列表
export const vehicleList = [
    {
        key: '1',
        licenseNum: '测A123401',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '2',
        licenseNum: '测A123402',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '3',
        licenseNum: '测A123403',
        status: '正常',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
    {
        key: '4',
        licenseNum: '测A123404',
        status: '维修中',
        BX: '2022-06-03',
        BY: '2021-12-03',
        NS: '2022-06-03',
    },
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

