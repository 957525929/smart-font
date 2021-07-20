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
				<view class="cu-item arrow content" v-for="item in contentList" :key="item.title">
					<text class="text-grey">{{item.title}}</text>
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
		title: '关于我们',
		url: 'about',
	}, {
		imgUrl: 'iconfont iconset-copy-copy',
		title: '系统设置',
		url: 'sysSetting'
	}]

	export default {
		data() {
			return {
				title: "你好，管理员",
				contentList: content,
				colorIs: "#616161",
			};
		}
	};
</script>
<style scoped>
	.back {
		background-color: #eeeeee;
	}

	/* 信息卡片 #1cbbb4*/
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 5px;
		overflow: scroll;
	}
	.mainBackColor {
	    background-color:  #1cbbb4;
		}
	.avat {
		width: 170rpx;
		height: 170rpx;
		margin: 20px;
	}
.avat image{
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
