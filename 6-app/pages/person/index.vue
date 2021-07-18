<template>
	<view class="bg-grey">
		<!-- #ifdef APP-PLUS -->
		<!-- 状态栏占位 -->
		<view class="bg-black">
		</view>
		<!-- #endif -->
		<view class="wrapper">
			<view class="card bg-purple">
				<view class="contentList padding-xl">
					<view class="cu-avatar xxl round margin-left" style="background-image:url(/static/avater.png)"/>
					<view class="fontContent margin-lr-xl">
						<view class="bg-orange round padding-tb-xs text-center">
							<h3>{{title}}</h3>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list menu sm-border card-menu margin-top">
				<view class="cu-item arrow content" v-for="item in contentList" :key="item.title" @tap="$goPage(item.url)">
					<text class="text-gray">{{item.title}}</text>
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
		imgUrl: 'iconfont iconyijianfankui',
		title: '帮助中心',
		url: 'help',
	},{
		imgUrl: 'iconfont iconset-copy-copy',
		title: '系统设置',
		url: 'sysSetting'
	}]

	export default {
		data() {
			return {
				title: "你好，管理员!",
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

	/* 列表 */
	.contentList {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.listIcons {
		color: #27a176;
		width: 15px;
		height: 15px;
		margin: 10px;
	}
</style>
