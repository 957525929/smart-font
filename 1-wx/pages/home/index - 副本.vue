<template>
	<view class="cu-card  page bg-white">
		<!-- #ifdef APP-PLUS -->
		<!-- 状态栏占位 -->
		<view class="top-wrapper"></view>
		<!-- #endif -->
		<view class="banner">
			<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
			<view class="banner-title">智慧烟草预约</view>
		</view>

		<view class="home-menu" v-for="(menu,index1) in menuTree" :key="index1">
			<view class="home-menu-content">
				<view class="home-menu-content-item" v-for="(child,index2) in menu.children" :key="index2">
					<image :src="child.icon" mode="widthFix"  @tap="goto(child.title)"></image>
					<view class=" home-menu-content-item-font">
						{{child.title}}
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
				menuTree: [{
						title: '个人业务',
						children: [{
								title: '扫码预约',
								icon: '../../static/homepage/scan.png'
							},
							{
								title: '我的预约',
								icon: '../../static/homepage/record.png'
							},
						]
					},
					{
						title: '内部使用',
						children: [{
								title: '工作人员',
								icon: '../../static/homepage/admin.png'
							},

						]
					},
				]
			}
		},
		methods: {
			goto(target) {
				// console.log(target);
				if (target == '扫码预约') {
					uni.navigateTo({
						url: '/pages/index/tourist?PageCur=scan'
					})
				} else if (target == '我的预约') {
					uni.navigateTo({
						url: '/pages/index/tourist?PageCur=record'
					})
				}else if (target == '工作人员') {
					uni.navigateTo({
						url: '/pages/login/index'
					})
				}
			}
		}
	}
</script>

<style scoped>
	/* 	.home-root {
		height: 100%;
		widows: 100%;
	} */

	/* 	.home-header {
		height: 180px;
		background-image: url(../../static/workplace/banner.png);
		background-repeat: no-repeat;
		background-size: cover;
	} */
	.page {
		height: 100vh;
	}

	.banner {
		position: relative;
	}

	.banner-title {
		width: 600rpx;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: '黑体';
		font-size: 100rpx;
		background-image: -webkit-linear-gradient(90deg, rgb(77, 205, 240), rgb(116, 226, 230), rgb(218, 247, 246));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.nav-li {
		width: 100%;
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
		font-weight: 700;
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
