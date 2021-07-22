<template>
	<view>

		<view class="cu-bar bg-white">
			<view class="action">选择位置</view>
		</view>
		<view class="cu-form-group">
			<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex"
				:range="multiArray">
				<view class="picker">
					{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">房间号</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'请选择房间号'}}
				</view>
			</picker>
		</view>

		<view class="cu-form-group  margin-top">
			<view class="title">智能锁状态</view>
			<picker @change="PickerChange1" :value="index1" :range="picker1">
				<view class="picker">
					{{picker1[index1]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">锁编号</view>
			<input placeholder="请输入锁编号" name="input"></input>
		</view>
		
		<view class="cu-form-group margin-top">
			<view class="title">部门</view>
			<picker @change="PickerChange2" :value="index2" :range="picker2">
				<view class="picker">
					{{index2>-1?picker2[index2]:'请选择部门'}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">姓名</view>
			<input placeholder="请输入姓名" name="input"></input>
		</view>

	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.type = option.type
			console.log(this.type)
		},
		data() {
			return {
				type: 0,
				index: -1,
				picker: ['101', '102', '103'],
				index1: 1,
				index2: -1,
				picker1: ['不限', '低电量', '开锁', '关锁'],
				picker2: ['烟叶管理处',  '安全管理处', '物流管理处', '信息中心'],
				multiArray: [
					['中国烟草总公司福建省公司机关'],
					['A区域', 'B区域'],
					['1号楼', '2号楼']
				],
				objectMultiArray: [
					[{
						id: 0,
						name: '中国烟草总公司福建省公司机关'
					}, ],
					[{
							id: 0,
							name: 'A区域'
						},
						{
							id: 1,
							name: 'B区域'
						},
					],
					[{
							id: 0,
							name: '1号楼'
						},
						{
							id: 1,
							name: '2号楼'
						}
					]
				],
				multiIndex: [0, 0, 0],
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			PickerChange1(e) {
				this.index1 = e.detail.value
			},
			PickerChange2(e) {
				this.index1 = e.detail.value
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			MultiColumnChange(e) {},
			cancle() {
				uni.navigateBack()
			},
			oksearch() {
				uni.navigateBack()
			},
		}
	}
</script>

<style>
	.button {
		width: 20vh;
	}
</style>
