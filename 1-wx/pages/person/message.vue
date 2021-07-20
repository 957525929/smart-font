<template>
	<view class="app">
		<cu-custom bgColor="cu-tag bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">消息通知</block>
		</cu-custom>
		<view class="content">
			<message1></message1>
		</view>
		<view class="bottom">
			<view class="leftBottom">
				<view class="text-white cuIcon-delete">
				</view>
				<view class='cuIcon-cu-image'>
					<text class="text-white trash-fill">一键清空</text>
				</view>
				<!-- 	<view class="text-orange"></view> -->
			</view>
			<view class="rightBottom">
				<view class="text-white cuIcon-notice_forbid_fill">
				</view>
				<view class='cuIcon-cu-image'>
					<text class="text-white trash-fill">全部已读</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import message1 from '../../components/message/message.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			message1,
		},
		methods: {

		}
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}

	.app {
		background-color: #f5f8fe;
		height: 100%;
		width: 100%;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.content {
		padding: 5px;
		height: 86%;
	}

	.bottom {
		background-color: #fea82f;
		height: 8%;
		display: flex;
	}

	.leftBottom {
		width: 50%;
		margin: auto;
		text-align: center;
		border-right: 1px solid #f5f8fe;
	}

	.rightBottom {
		width: 50%;
		margin: auto;
		text-align: center;
	}
</style>
