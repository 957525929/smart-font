<template>
	<view>
		<scroll-view scroll-y class="page">
			<view class="banner">
				<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">安消管理系统</view>
			</view>
			
			<view class="nav-list">
				<navigator v-for="(item,index) in list" hover-class="none" :url="item.router" :class="item.color" navigateTo
				 :style="[{animation: 'show ' + (1*0.2+1) + 's 1'}]">
					<view class="nav-title">{{ item.title }}</view>
					<view class="nav-name">{{ item.entitle }}</view>
					<text :class="item.style"></text>
				</navigator>
				
				<navigator hover-class="none" url="../index/repairindex" class="nav-li bg-blue" navigateTo
				 :style="[{animation: 'show ' + (2*0.2+1) + 's 1'}]">
					<view class="nav-title">智能锁维修</view>
					<view class="nav-name">Repair</view>
					<text class="cuIcon-repair"></text>
				</navigator>
				
				<navigator hover-class="none" url="../index/safeindex" class="nav-li bg-purple" navigateTo
				 :style="[{animation: 'show ' + (2*0.2+1) + 's 1'}]">
					<view class="nav-title">门卫</view>
					<view class="nav-name">guard</view>
					<text class="cuIcon-profile"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list:[
					{
						title: '智能锁安装',
						entitle: 'Install',
						style: 'cuIcon-lock',
						router: '../index/installindex',
						color: 'nav-li bg-cyan',
					}
				]
			};
		},
		onShow() {}
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
		font-size: 65rpx;
		background-image:-webkit-linear-gradient(90deg,rgb(77, 205, 240),rgb(116,226,230),rgb(218,247,246));
		-webkit-background-clip:text; 
		-webkit-text-fill-color:transparent;
	}
</style>
