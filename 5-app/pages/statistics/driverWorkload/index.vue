<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">司机工作量统计</block>
		</cu-custom>
		<view class="myCard backColor">
			<view class="mycard-label">
				选择司机
			</view>
			<view class="mycard-ctx">
				<uni-combox :candidates="drivers" v-model="driverSelected"></uni-combox>
			</view>
		</view>
		<view style="display: flex;">
			<view class="myCard2 backColor" style="border-right:#e0e0e0 1rpx solid;">
				<view class="mycard-label">
					年份
				</view>
				<view class="mycard-ctx2">
					<picker @change="yearChange" :value="yearIndex" :range="yearRange">
						<view class="picker">
							{{yearIndex>-1?yearRange[yearIndex]:'2021'}}
						</view>
					</picker>
				</view>
			</view>
			<view class="myCard2 backColor">
				<view class="mycard-label">
					月份
				</view>
				<view class="mycard-ctx2">
					<picker @change="monthChange" :value="monthIndex" :range="monthRange">
						<view class="picker">
							{{monthIndex>-1?monthRange[monthIndex]:'7'}}
						</view>
					</picker>
				</view>
			</view>
		</view>
		<br />
		<view class="myCard backColor">
			<view class="mycard-label">
				总计出车次数
			</view>
			<view class="mycard-ctx3">
				62次
			</view>
		</view>
		<view class="myCard backColor">
			<view class="mycard-label">
				平均出车次数
			</view>
			<view class="mycard-ctx3">
				2次/日
			</view>
		</view>
		<view class="backColor">
			<view class="cu-list menu">
				<view class="cu-item arrow" v-for="(item,index) in listData" :key="index" @tap="toDetails">
					<view class="content">
						<text class="cuIcon-circlefill text-green"></text>
						<text>{{item.car+" "+"时间："+item.date}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		driverList
	} from "../../../mock/demoData.js"
	export default {
		mounted() {
			for (let i = 0; i < driverList.length; ++i) {
				this.drivers[i] = driverList[i].name
			}
		},
		data() {
			return {
				yearIndex:-1,
				yearRange:['2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008'],
				monthIndex:-1,
				monthRange:[1,2,3,4,5,6,7,8,9,10,11,12],
				drivers:[],
				driverSelected:'张三',
				listData:[
					{
						car:'A123401',
						date:'2021-7-18'
					},
					{
						car:'A123401',
						date:'2021-7-17'
					},
					{
						car:'A123401',
						date:'2021-7-17'
					},
					{
						car:'A123402',
						date:'2021-7-16'
					},
					{
						car:'A123401',
						date:'2021-7-15'
					},
					{
						car:'A123401',
						date:'2021-7-15'
					},
					{
						car:'A123402',
						date:'2021-7-15'
					},
					{
						car:'A123402',
						date:'2021-7-14'
					},
					{
						car:'A123401',
						date:'2021-7-14'
					},
					{
						car:'A123402',
						date:'2021-7-13'
					},
				]
			}
		},
		methods: {
			toDetails(){
				uni.navigateTo({
					url:'/pages/statistics/driverWorkload/details'
				})
			},
			yearChange(e){
				this.yearIndex = e.detail.value
			},
			monthChange(e){
				this.monthIndex = e.detail.value
			}
		}
	}
</script>

<style scoped>
	.myCard{
		display: flex;
		margin-bottom: 1rpx;
		justify-content: space-between;
	}
	.myCard2{
		width: 50%;
		display: flex;
		margin-bottom: 1rpx;
		justify-content: space-between;
	}
	.mycard-label{
		width: 90%;
		/* border: solid; */
		padding: 20rpx;
	}
	.mycard-ctx{
		width: 70%;
		/* border: solid; */
	}
	.mycard-ctx2{
		padding: 20rpx;
	}
	.mycard-ctx3{
		width: 20%;
		padding: 20rpx;
		/* border: solid; */
	}
</style>
