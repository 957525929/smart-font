<template>
	<view>
		<scroll-view scroll-y class="page">
			<view class="banner">
				<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">安消</view>
			</view>
			
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/workplace/' +item.route" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.route}}</view>
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
						title: '物业管理',
						name: 'layout',
						color: 'cyan',
						cuIcon: 'repairfill',
						route:'property'
					},
					{
						title: '车辆管理',
						name: 'background',
						color: 'blue',
						cuIcon: 'taxi',
						route:'car'
					},
					{
						title: '锁管理',
						name: 'text',
						color: 'purple',
						cuIcon: 'lock',
						route:'lock'
					},
					{
						title: '访问管理',
						name: 'icon',
						color: 'mauve',
						cuIcon: 'newsfill',
						route:'access'
					},
					{
						title: '会议接待',
						name: 'button',
						color: 'pink',
						cuIcon: 'calendar',
						route:'meeting'
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
