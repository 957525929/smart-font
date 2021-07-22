<template>
	<view>
		<view class="cu-form-group">
			<view class="title">智能锁安装状态</view>
			<picker @change="PickerChange1" :value="index1" :range="picker1">
				<view class="picker">
					{{picker1[index1]}}
				</view>
			</picker>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">选择位置</view>
		</view>
		<view class="cu-form-group">
			<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex"
				:range="multiArray">
				<view class="picker">
					{{multiArray[0][multiIndex[0]]}}.{{multiArray[1][multiIndex[1]]}}.{{multiArray[2][multiIndex[2]]}}
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

		<view v-if="this.index1 == 1">
			<view class="cu-bar bg-white margin-top">
				<view class="action">选择安装的时间段</view>
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
	</view>
</template>

<script>
	export default {
		onLoad(option) {},
		
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
		
		mounted() {},
		
		data() {
			return {
				date: '',
				index: -1,
				picker: ['101', '102', '103'],
				index1: 0,
				picker1: ['未安装', '已安装'],
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
			
			// 向父组件传值
			PickerChange1(e) {
				this.index1 = e.detail.value
				this.$emit('func',this.index1)
			},
			
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			
			MultiColumnChange(e) {},
			
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
</style>
