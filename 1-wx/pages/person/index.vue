<template>
	<view class="back">
		<!-- #ifdef APP-PLUS -->
		<!-- 状态栏占位 -->
		<view class="top-wrapper">
		</view>
		<!-- #endif -->
		<view class="wrapper">
			<view class="card">
				<view class="contentList perMsg mainBackColor" @tap="$navTo.goTo('myInfo')">
					<view class="avat">
						<image mode="aspectFit" src="/static/person/avater.png"></image>
					</view>
					<view class="fontContent fontColorWhite">
						<h3>{{title}}</h3>
					</view>
				</view>
				<text class="listIcons secCode iconfont iconerweima-copy"></text>
			</view>
			<view class="cu-list menu sm-border card-menu margin-top">
				<view class="cu-item arrow content" v-for="item in contentList" :key="item.title" v-if="item.message"
					@click='openMessage'>
					<view class="action">
						<view class="text-grey">{{item.title}}</view>
					</view>
					<view v-if="item.message" class="cu-tag round bg-red sm">4</view>
				</view>
				<view class="cu-item arrow content" v-for="item in contentList" :key="item.title" v-if="!item.message">
					<view class="action">
						<view class="text-grey">{{item.title}}</view>
						<view class="text-grey text-xs">{{item.label}}</view>
					</view>
					<!-- <view v-if="item.message" class="cu-tag round bg-red sm">4</view> -->
					<view v-if="item.edition" class=" text-grey">{{item.edition}}</view>
				</view>
			</view>

		</view>


	</view>
</template>

<script>
	const content = [{
		imgUrl: 'form',
		title: '个人资料',
		url: 'info'
	}, {
		imgUrl: 'iconfont iconyijianfankui',
		title: '消息通知',
		url: 'about',
		message: '111'
	}, {
		imgUrl: 'iconfont iconset-copy-copy',
		title: '系统设置',
		url: 'sysSetting'
	}, {
		imgUrl: 'iconfont iconset-copy-copy',
		title: '系统日志',
		url: 'sysSetting'
	}, {
		imgUrl: 'iconfont iconset-copy-copy',
		title: '清除缓存',
		url: 'sysSetting',
		label: '45.5Mb'
	}, {
		imgUrl: 'iconfont iconset-copy-copy',
		title: '关于我们',
		url: 'sysSetting'
	}, {
		imgUrl: 'iconfont iconset-copy-copy',
		title: '版本更新',
		url: 'sysSetting',
		label: 'V2.0',
		edition: "最新版本"
	}]

	export default {
		data() {
			return {
				title: "你好，林倩",
				contentList: content,
				colorIs: "#616161",
			};
		},
		methods: {
			openMessage() {
				uni.navigateTo({
					url: '/pages/person/message'
				});
			}
		}
	};
</script>
<style scoped>
	.back {
		background-color: #eeeeee;
	}

	/* 信息卡片 */
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 5px;
		overflow: scroll;
	}

	.avat {
		width: 170rpx;
		height: 170rpx;
		margin: 20px;
	}

	.avat image {
		width: 80px;
		height: 80px;
		background-color: #eeeeee;
		border-radius: 50%;
	}

	.fontContent {
		flex: 1;
	}

	/* 二维码 */
	.perMsg {
		border-radius: 5px;
		padding: 15rpx;
	}

	.secCode {
		position: absolute;
		right: 0;
		top: 0;
		color: white;
	}

	/* 列表 */
	.contentList {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 5rpx 25rpx;
	}

	.listIcons {
		color: #27a176;
		width: 15px;
		height: 15px;
		margin: 10px;
	}
</style>
