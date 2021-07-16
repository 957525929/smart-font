<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索</block>
		</cu-custom>

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

		<view class="cu-bar bg-white margin-top">
			<view class="action">选择时间段</view>
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
		<view v-if="type==0" class="cu-form-group margin-top">
			<view class="title">智能锁安装状态</view>
			<picker @change="PickerChange1" :value="index1" :range="picker1">
				<view class="picker">
					{{index1>-1?picker1[index1]:'请选择智能安装锁状态'}}
				</view>
			</picker>
		</view>
		<view v-if="type==3" class="cu-form-group  margin-top">
			<view class="title">锁编号</view>
			<input placeholder="请输入锁编号" name="input"></input>
		</view>
		<view v-if="type==3" class="cu-form-group">
			<view class="title">智能锁维修状态</view>
			<picker @change="PickerChange2" :value="index2" :range="picker2">
				<view class="picker">
					{{index2>-1?picker2[index2]:'请选择智能锁维修状态'}}
				</view>
			</picker>
		</view>
		<view class="margin grid col-2 text-center">
			<view class="cu-item">
				<button class="cu-btn bg-white lg button" @tap="cancle">取消</button>
			</view>
			<view class="cu-item">
				<button class="cu-btn bg-orange lg button" @tap="oksearch">查询</button>
			</view>
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
				index1: -1,
				index2: -1,
				picker1: ['已安装', '未安装'],
				picker2: ['已维修', '待维修'],
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
				this.index1 = e.detail.value
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
			cancle() {
				uni.navigateTo({
					url: '../../pages/index/index'
				});
			},
			oksearch() {

			},
		}
	}
</script>

<style>
	.button {
		width: 20vh;
	}
</style>
