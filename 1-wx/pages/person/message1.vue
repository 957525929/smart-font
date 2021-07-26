<template>
	<view class="app">
		<cu-custom bgColor="cu-tag bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">消息通知</block>
		</cu-custom>
		<view class="content" @tap="showModal" data-target="Modal">
			<message1  @send="getDetail"></message1>
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

		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">来自{{this.getDetailData.name}}反馈的通知</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{this.getDetailData.contentData}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import message1 from '../../components/message/message1.vue'

	export default {
		data() {
			return {
				modalName: null,
				getDetailData:""
			}
		},
		components: {
			message1,
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			getDetail(value) {
				// console.log("1111111111111111111111")
				// console.log(value)
				this.getDetailData = value
				// console.log(this.getDetailData)
			}
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

/* 	* {
		margin: 0;
		padding: 0;
	} */

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
