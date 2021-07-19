<template>
	<view>

		<view class="cu-form-group">
			<view class="title">选择要搜索的记录</view>
			<picker @change="PickerChange3" :value="index3" :range="picker3">
				<view class="picker">
					{{picker3[index3]}}
				</view>
			</picker>
		</view>

		<view v-if="this.index3 == 0">
			<view>
				<view class="cu-bar bg-white margin-top">
					<view class="action">选择开锁时间段</view>
				</view>
				<view class="cu-form-group">
					<view class="title">请选择开始时间</view>
					<picker mode="date" :value="date" start="2018-01-01" end="2023-01-01" @change="DateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>

				<view class="cu-form-group">
					<view class="title">请选择结束时间</view>
					<picker mode="date" :value="date1" start="2018-01-01" end="2023-01-01" @change="DateChange1">
						<view class="picker">
							{{date1}}
						</view>
					</picker>
				</view>

				<view class="cu-form-group margin-top">
					<view class="title">开锁人姓名</view>
					<input placeholder="请输入姓名" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">开锁人部门</view>
					<picker @change="PickerChange2" :value="index2" :range="picker2">
						<view class="picker">
							{{index2>-1?picker2[index2]:'请选择部门'}}
						</view>
					</picker>
				</view>
			</view>

			<view class="cu-bar bg-white margin-top">
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

			<view>
				<view class="cu-form-group  margin-top">
					<view class="title">锁编号</view>
					<input placeholder="请输入锁编号" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">开锁方式</view>
					<picker @change="PickerChange1" :value="index1" :range="picker1">
						<view class="picker">
							{{picker1[index1]}}
						</view>
					</picker>
				</view>
			</view>
		</view>
		
		
		<view v-if="this.index3 == 1">
			<view>
				<view class="cu-bar bg-white margin-top">
					<view class="action">选择报警时间段</view>
				</view>
				<view class="cu-form-group">
					<view class="title">请选择开始时间</view>
					<picker mode="date" :value="date" start="2018-01-01" end="2023-01-01" @change="DateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>
		
				<view class="cu-form-group">
					<view class="title">请选择结束时间</view>
					<picker mode="date" :value="date1" start="2018-01-01" end="2023-01-01" @change="DateChange1">
						<view class="picker">
							{{date1}}
						</view>
					</picker>
				</view>
			</view>
		
			<view class="cu-bar bg-white margin-top">
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
		
			<view>
				<view class="cu-form-group  margin-top">
					<view class="title">锁编号</view>
					<input placeholder="请输入锁编号" name="input"></input>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		created: function() {
			let aData = new Date();
			this.date =
				aData.getFullYear() + "-" +
				(aData.getMonth() + 1) + "-" +
				(aData.getDate() - 3)
			this.date1 =
				aData.getFullYear() + "-" +
				(aData.getMonth() + 1) + "-" +
				(aData.getDate())
		},
		onLoad(option) {
			this.type = option.type
			console.log(this.type)
		},
		data() {
			return {
				type: 0,
				index: -1,
				picker: ['101', '102', '103'],
				index1: 0,
				index2: -1,
				index3: 0,
				picker1: ['指纹开锁', '密码开锁', '远程开锁'],
				picker2: ['烟叶管理处', '安全管理处', '物流管理处', '信息中心'],
				picker3: ['开锁记录', '报警记录'],
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
				date: '2021-06-25',
				date1: '2021-06-27',
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
				this.index2 = e.detail.value
			},
			PickerChange3(e) {
				this.index3 = e.detail.value
				console.log(this.index3)
				this.$emit('func',this.index3)
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
			DateChange(e) {
				this.date = e.detail.value
			},
			DateChange1(e) {
				this.date1 = e.detail.value
			},
		}
	}
</script>

<style>
	.button {
		width: 20vh;
	}
</style>
