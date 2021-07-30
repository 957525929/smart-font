<template>
	<view>
		<scroll-view scroll-y class="page">
			<view class="banner">
				<image src="/static/homepage/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">车辆管理</view>
			</view>
			
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/' +item.route+'/index'" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<!-- <view class="nav-name">{{item.route}}</view> -->
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '用车申请',
						name: 'layout',
						color: 'purple',
						cuIcon: 'taxi',
						route:'application'
					},
					{
						title: '申请记录',
						name: 'background',
						color: 'mauve',
						cuIcon: 'calendar',
						route:'useCarRecord'
					},
					{
						title: '收车登记',
						name: 'text',
						color: 'pink',
						cuIcon: 'vipcard',
						route:'endTrip'
					},
					{
						title: '加油登记',
						name: 'icon',
						color: 'brown',
						cuIcon: 'formfill',
						route:'supplyRegister'
					},
					{
						title: '保养登记',
						name: 'button',
						color: 'red',
						cuIcon: 'formfill',
						route:'maintainRegister'
					},
					{
						title: '维修登记',
						name: 'button',
						color: 'orange',
						cuIcon: 'formfill',
						route:'fixRecord'
					},
					{
						title: '司机工作量',
						name: 'button',
						color: 'green',
						cuIcon: 'newsfill',
						route:'statistics/driverWorkload'
					}
				],
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style scoped>
	.page {
		height: 100vh;
	}
	.banner{
		position: relative;	
	}
	.banner-title{
		width:400rpx;
		position: absolute;
		top: 45%;
		left:50%;
		transform: translate(-50%,-50%);
		font-family: '黑体';
		font-size: 100rpx;
		background-image:-webkit-linear-gradient(90deg,rgb(77, 205, 240),rgb(116,226,230),rgb(218,247,246)); 
		-webkit-background-clip:text; 
		-webkit-text-fill-color:transparent; 
	}
</style>