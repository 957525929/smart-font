<template>
	<view class="home-root backColor">
		<!-- #ifdef APP-PLUS -->
		<!-- 状态栏占位 -->
		<view class="top-wrapper"></view>
		<!-- #endif -->
		<view class="home-header"></view>
		<view class="home-notice">
			<uni-notice-bar showIcon="true" scrollable="true" single="true" :text="noticeText"></uni-notice-bar>
		</view>
		<view class="home-menu" v-for="(menu,index1) in menuTree" :key="index1">
			<view class="home-menu-title">
				{{menu.title}}
			</view>
			<view class="home-menu-content">
				<view class="home-menu-content-item" v-for="(child,index2) in menu.children" :key="index2">
					<image :src="child.icon" mode="widthFix" @tap="goto(child.title)"></image>
					<!-- <view class="home-menu-content-item-font">
						{{child.title}}
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeText: '您于2021年7月13日9:30申请的用车事务已审核通过，祝您旅途一帆风顺！',
				menuTree: [{
						title: '用车管理',
						children: [{
								title: '用车申请',
								icon: '../../static/homepage/car1.png'
							},
							{
								title: '申请记录',
								icon: '../../static/homepage/log.png'
							},
							{
								title: '收车登记',
								icon: '../../static/homepage/car2.png'
							}
						]
					},
					{
						title: '车辆维护',
						children: [{
								title: '加油登记',
								icon: '../../static/homepage/supply.png'
							},
							{
								title: '保养登记',
								icon: '../../static/homepage/maintain.png'
							},
							{
								title: '维修登记',
								icon: '../../static/homepage/fix.png'
							}
						]
					},
					{
						title: '查询统计',
						children: [{
								title: '车辆使用',
								icon: '../../static/homepage/sta1.png'
							},
							{
								title: '司机工作量',
								icon: '../../static/homepage/sta2.png'
							}
						]
					}
				]
			}
		},
		methods:{
			goto(target){
				// console.log(target);
				if(target=='用车申请'){
					uni.navigateTo({
						url:'/pages/application/index'
					}) 		
				}else if(target=='用车记录'){
					uni.navigateTo({
						url:'/pages/useCarRecord/index'
					}) 	
				}else if(target=='收车登记'){
					uni.navigateTo({
						url:'/pages/endTrip/index'
					}) 	
				}else if(target=='加油登记'){
					uni.navigateTo({
						url:'/pages/supplyRegister/index'
					}) 	
				}else if(target=='保养登记'){
					uni.navigateTo({
						url:'/pages/maintainRegister/index'
					}) 	
				}else if(target=='维修登记'){
					uni.navigateTo({
						url:'/pages/fixRecord/index'
					}) 	
				}else if(target=='车辆使用'){
					uni.navigateTo({
						url:'/pages/statistics/carUsage/index'
					}) 	
				}else if(target=='司机工作量'){
					uni.navigateTo({
						url:'/pages/statistics/driverWorkload/index'
					}) 	
				}
			}
		}
	}
</script>

<style scoped>
	.home-root {
		height: 100%;
		widows: 100%;
	}

	.home-header {
		height: 180px;
		background-image: url(~@/static/homepage/bg.png);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.home-notice {
		height: 40px;
		/* border: solid; */
	}

	.home-menu {
		margin-top: 20rpx;
		margin-bottom: 30rpx;
		/* height: 300rpx; */
		/* border: solid; */
	}

	.home-menu-title {
		margin-left: 20rpx;
		font-size: 30rpx;
		font-weight:700;
		margin-bottom: 20rpx;
	}

	.home-menu-content {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		/* border: solid; */
	}

	.home-menu-content-item {
		margin: 20rpx 20rpx 0 35rpx;
		width: 100rpx;
		height: 120rpx;
		/* border: solid; */
	}

	.home-menu-content-item-font {
		white-space: nowrap;
		font-size: 10px;
	}
</style>
