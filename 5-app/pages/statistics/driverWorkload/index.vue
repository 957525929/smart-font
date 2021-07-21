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
			<view class="myCard2 backColor">
				<view class="mycard-label">
					年份
				</view>
				<view class="mycard-ctx2">
					2021
				</view>
			</view>
			<view class="myCard2 backColor">
				<view class="mycard-label">
					月份
				</view>
				<view class="mycard-ctx2">
					7
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
		<br />
		<uni-table border stripe emptyText="暂无更多数据" >
		    <!-- 表头行 -->
		    <uni-tr>
		        <uni-th align="center">车牌号</uni-th>
				<uni-th align="center">用车时间</uni-th>
				<uni-th align="center">操作</uni-th>
		    </uni-tr>
		    <!-- 表格数据行 -->
		    <uni-tr>
		        <uni-td align="center">闽A123401</uni-td>
		        <uni-td align="center">2021-7-18</uni-td>
				<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		    </uni-tr>
		  <uni-tr>
		      <uni-td align="center">闽A123401</uni-td>
		      <uni-td align="center">2021-7-17</uni-td>
		  	<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		  </uni-tr>
		    <uni-tr>
		        <uni-td align="center">闽A123402</uni-td>
		        <uni-td align="center">2021-7-17</uni-td>
		    	<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		    </uni-tr>
		   <uni-tr>
		       <uni-td align="center">闽A123401</uni-td>
		       <uni-td align="center">2021-7-16</uni-td>
		   	<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		   </uni-tr>
		<uni-tr>
		    <uni-td align="center">闽A123402</uni-td>
		    <uni-td align="center">2021-7-15</uni-td>
			<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		</uni-tr>
		<uni-tr>
		    <uni-td align="center">闽A123401</uni-td>
		    <uni-td align="center">2021-7-14</uni-td>
			<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		</uni-tr>
		<uni-tr>
		    <uni-td align="center">闽A123401</uni-td>
		    <uni-td align="center">2021-7-13</uni-td>
			<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		</uni-tr>
		<uni-tr>
		    <uni-td align="center">闽A123401</uni-td>
		    <uni-td align="center">2021-7-12</uni-td>
			<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		</uni-tr>
		<uni-tr>
		    <uni-td align="center">闽A123401</uni-td>
		    <uni-td align="center">2021-7-11</uni-td>
			<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		</uni-tr>
		<uni-tr>
		    <uni-td align="center">闽A123401</uni-td>
		    <uni-td align="center">2021-7-10</uni-td>
			<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		</uni-tr>
		<uni-tr>
		    <uni-td align="center">闽A123403</uni-td>
		    <uni-td align="center">2021-7-9</uni-td>
			<uni-td align="center"><a @tap="toDetails">详情</a></uni-td>
		</uni-tr>
		</uni-table>
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
				drivers:[],
				driverSelected:''
			}
		},
		methods: {
			toDetails(){
				uni.navigateTo({
					url:'/pages/statistics/driverWorkload/details'
				})
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
		width: 30%;
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
