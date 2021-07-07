import { getCurrentDate } from '@/components/_util/DateUtil.js'
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
        phoneNum: '13712341234',
    },
    {
        key: '2',
        name: '卢本伟',
        phoneNum: '13812341234',
    },
    {
        key: '3',
        name: '孙笑川',
        phoneNum: '13812342200',
    },
    {
        key: '4',
        name: '马保国',
        phoneNum: '13912341234',
    }
]

// 审核列表
export const verifyList = [
    {
        key: 0,
        taskName: '周德祥-' + getCurrentDate() + '-01',
        user: '周德祥',
        time: getCurrentDate(),
        from: '福州市',
        to: '南京市',
        isBack: '单程'
    },
    {
        key: 1,
        taskName: '吴成杰-' + getCurrentDate() + '-01',
        user: '吴成杰',
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程'
    },
    {
        key: 2,
        taskName: '杨柳-' + getCurrentDate() + '-01',
        user: '杨柳',
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程'
    },
    {
        key: 3,
        taskName: '齐琦-' + getCurrentDate() + '-01',
        user: '齐琦',
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程'
    },
    {
        key: 4,
        taskName: '袁林-' + getCurrentDate() + '-01',
        user: '袁林',
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程'
    },
    {
        key: 5,
        taskName: '潘越-' + getCurrentDate() + '-01',
        user: '潘越',
        time: getCurrentDate(),
        from: '福州市',
        to: '泉州市',
        isBack: '双程'
    }
]