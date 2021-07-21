<template>
	<view>
		<view class="cu-bar bg-orange solid-bottom">
			<view class="action">
				智能锁安装
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class='cuIcon-title text-orange'></text>智能锁安装任务完成情况
				</view>
			</view>
		</view>
		<view class="padding bg-white">
			<view class="cu-progress round">
				<view class="bg-gradual-orange" :style="[{ width:loading?'75%':''}]">75%</view>
			</view>
		</view>
		<view class="cu-list grid col-3">
			<view class="cu-item">
				<view>已完成</view>
				<text>6</text>
			</view>
			<view class="cu-item">
				<view>未完成</view>
				<text>2</text>
			</view>
			<view class="cu-item">
				<view>总计</view>
				<text>8</text>
			</view>
		</view>
		<view class="margin-top bg-white">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class='cuIcon-title text-orange'></text>操作
				</view>
			</view>
			<view class="nav-list">
				<navigator hover-class="none" url="../../pages/lockinstall/index" class="nav-li bg-grey" navigateTo>
					<view class="nav-title">记录</view>
					<view class="nav-name">Record</view>
					<text class="cuIcon-edit"></text>
				</navigator>
			</view>
			<view class="nav-list">
				<navigator hover-class="none" url="../../pages/lockinstall/install?type=0" class="nav-li bg-orange"
					navigateTo>
					<view class="nav-title">安装</view>
					<view class="nav-name">Install</view>
					<text class="cuIcon-lock"></text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
			}
		},
		methods: {
			// record() {
			// 	uni.navigateTo({
			// 		url: '../../pages/lockinstall/index'
			// 	});
			// },
			// install() {
			// 	uni.navigateTo({
			// 		url: '../../pages/lockinstall/install?type=0'
			// 	});
			// }
		}
	}
</script>

<style>
	.nav-li {
		width: 100%;
	}
</style>
