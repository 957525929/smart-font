<template>
	<view>
		<scroll-view scroll-y class="page">
					<view class="banner">
						<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
						<view class="banner-title">接待应用</view>
					</view>
					
					<view class="nav-list">
						<navigator hover-class="none" :url="'/pages/appointment/' +item.route" class="nav-li" navigateTo :class="'bg-'+item.color"
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
		name: "appointment",
		data() {
			return {
				elements: [{
						title: '酒店预订',
						name: 'layout',
						color: 'cyan',
						cuIcon: 'homefill',
						route:'hotel'
					},
					{
						title: '会议室预订',
						name: 'background',
						color: 'blue',
						cuIcon: 'remind',
						route:'meeting'
					},
					{
						title: '食堂预订',
						name: 'dingroom',
						color: 'green',
						cuIcon: 'shopfill',
						route:'dingroom'
					},
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
		height: 40%;
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

