<template>
	<view class="cu-card case">
		<scroll-view scroll-y class="page bg-white">
			<view class="banner">
				<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">访问预约</view>
			</view>
			
			<view class="nav-list">
				<navigator hover-class="none" :url="item.route" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.enName}}</view>
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
				elements: [
					{
						title: '扫码预约',
						name: 'staff',
						color: 'blue',
						cuIcon: 'scan',
						enName:'Scan',
						route:'/pages/index/tourist?PageCur=scan'
					},{
						title: '我的预约',
						name: 'appoint',
						color: 'pink',
						cuIcon: 'formfill',
						enName:'appoint',
						route:'/pages/index/tourist?PageCur=record'
					},
					{
						title: '工作人员',
						name: 'person',
						color: 'cyan',
						cuIcon: 'people',
						enName:'Person',
						route:'/pages/login/index'
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
