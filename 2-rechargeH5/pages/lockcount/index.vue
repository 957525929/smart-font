<template>
	<view>
		<view class="cu-bar bg-orange solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-white"></text> 安装和报警统计
			</view>
		</view>

		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<!-- <view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
					开锁统计
				</view> -->
				<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
					安装统计
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="1">
					报警统计
				</view>
			</view>
		</scroll-view>
		<!-- 		<view v-if="TabCur==0" class="itembox">
			<view class="cu-form-group">
				<view class="title">最近三个月开锁统计图表：</view>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="column" :chartData="chartData" background="white" />
			</view>
			<view class="cu-form-group">
				<view class="title">开锁统计信息：</view>
				<view class="title">中国烟草总公司福建省公司机关</view>
			</view>
			<view class="people">
				<view class="cu-list grid col-4">
					<view class="cu-item">
						<text>位置</text>
					</view>
					<view class="cu-item">
						<text>密码开锁次数</text>
					</view>
					<view class="cu-item">
						<text>指纹开锁次数</text>
					</view>
					<view class="cu-item">
						<text>远程开锁次数</text>
					</view>
				</view>
				<view class="cu-list grid col-4" v-for="(item,index) in recorddate" :key="index">
					<view>
						<text>{{item.area}}</text>
					</view>
					<view>
						<text>{{item.count}}</text>
					</view>
					<view>
						<text>{{item.figcount}}</text>
					</view>
					<view>
						<text>{{item.remotecount}}</text>
					</view>
				</view>
			</view>
		</view> -->
		<view v-if="TabCur==0" class="itembox">
			<view class="cu-form-group">
				<view class="title">智能锁安装统计图表</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{picker[index]}}
					</view>
				</picker>
			</view>
			
			<view class="charts-box">
				<qiun-data-charts type="pie" :chartData="chartData2" background="white" />
			</view>
			<view class="cu-form-group">
				<view class="title">安装统计信息：</view>
				<view class="title">中国烟草总公司福建省公司机关</view>
			</view>
			<view class="people">
				<view class="cu-list grid col-3">
					<view class="cu-item">
						<text>位置</text>
					</view>
					<view class="cu-item">
						<text>未安装</text>
					</view>
					<view class="cu-item">
						<text>已安装</text>
					</view>
				</view>
				<view class="cu-list grid col-3" v-for="(item,index) in alertdata" :key="index">
					<view>
						<text>{{item.area}}</text>
					</view>
					<view>
						<text>{{item.uninstall}}</text>
					</view>
					<view>
						<text>{{item.install}}</text>
					</view>
				</view>
			</view>
		</view>



		<view v-if="TabCur==1" class="itembox">
			<view class="cu-form-group">
				<view class="title">智能锁报警记录统计图表</view>
				<picker @change="PickerChange1" :value="index1" :range="picker1">
					<view class="picker">
						{{picker1[index1]}}
					</view>
				</picker>
			</view>
			
			<view class="charts-box">
				<qiun-data-charts type="column" :chartData="chartData1" background="white" />
			</view>
			<view class="cu-form-group">
				<view class="title">报警统计信息：</view>
				<view class="title">中国烟草总公司福建省公司机关</view>
			</view>
			<view class="people">
				<view class="cu-list grid col-3">
					<view class="cu-item">
						<text>位置</text>
					</view>
					<view class="cu-item">
						<text>低电量</text>
					</view>
					<view class="cu-item">
						<text>密码错误多次</text>
					</view>
				</view>
				<view class="cu-list grid col-3" v-for="(item,index) in alertdata" :key="index">
					<view>
						<text>{{item.area}}</text>
					</view>
					<view>
						<text>{{item.count}}</text>
					</view>
					<view>
						<text>{{item.count1}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				TabCur: 0,
				
				index: 1,
				picker: ['当天', '近7天', '近1月', '近3月', '近半年', '近1年', '全部'],
				index1: 1,
				picker1: ['当天', '近7天', '近1月', '近3月', '近半年', '近1年', '全部'],
				// chartData: {
				// 	categories: [
				// 		"密码开锁",
				// 		"指纹开锁",
				// 		"远程开锁",
				// 	],
				// 	series: [
				// 		{
				// 			"name": "开锁次数",
				// 			"data": [
				// 				42,
				// 				66,
				// 				3,
				// 			]
				// 		}
				// 	],
				// },
				chartData1: {
					categories: [
						"低电量",
						"密码错误多次",
					],
					series: [{
						"name": "报警次数",
						"data": [
							11,
							8,
						]
					}],
				},
				chartData2: {
					categories: [],
					series: [{
						"data": [{
								"name": "未安装",
								"value": 50
							},
							{
								"name": "已安装",
								"value": 30
							},
						]
					}],
				},
				// recorddate:[
				// 	{
				// 		area: 'A区域101',
				// 		count: 12,
				// 		figcount: 21,
				// 		remotecount: 1,
				// 	},
				// 	{
				// 		area: 'A区域202',
				// 		count: 20,
				// 		figcount: 18,
				// 		remotecount: 0,
				// 	},
				// 	{
				// 		area: 'A区域111',
				// 		count: 10,
				// 		figcount: 27,
				// 		remotecount: 2,
				// 	},
				// ],
				alertdata: [{
						area: 'A区域',
						count: 3,
						count1: 1,
						install: 12,
						uninstall: 16,
					},
					{
						area: 'B区域',
						count: 2,
						count1: 2,
						install: 8,
						uninstall: 20,
					},
					{
						area: 'C区域',
						count: 6,
						count1: 5,
						install: 10,
						uninstall: 24,
					},
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			
			PickerChange(e) {
				this.index = e.detail.value
			},
			PickerChange1(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style>
	.charts-box {
		width: 100%;
		height: 200px;
	}

	.people {
		background-color: white;
		padding-bottom: 2vh;
	}
</style>
