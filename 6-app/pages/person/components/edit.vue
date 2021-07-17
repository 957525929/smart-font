<template>
	<view class="prompt-box" v-show="isHidden">
		<view class="prompt-content contentFontColor">
			<view class="prompt-title">{{title}}</view>
			<view class="prompt-text">{{text}}</view>
			<input class="prompt-input" type="text" @input="_input" :value="cost"/>
			<view class="prompt-btn-group">
				<button class="btn-item prompt-certain-btn" @tap="_confirm">{{btn_certain}}</button>
				<button class="btn-item prompt-cancel-btn contentFontColor" @tap="_cancel">{{btn_cancel}}</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				multipleSlots: true, // 在组件定义时的选项中启用多slot支持
				isHidden: false,
				cost: ''
			};
		},
		props: {
			title: {
				type: String,
				default: '编辑用户名'
			},
			btn_cancel: {
				type: String,
				default: '取消'
			},
			btn_certain: {
				type: String,
				default: '确认'
			},
			text: {
				type: String,
				default: '不超过5个字符',
			}
		},
		watch: {

		},
		methods: {
			hide: function() {
				this.isHidden = false;
			},
			show(e) {
				this.isHidden = true;
				if (e != null && e != undefined && e != "") {
					this.text = e;
				}
			},

			_cancel() {
				this.hide();
				this.$emit('onCancel');
			},
			_confirm() {
				this.hide();
				this.$emit('onConfirm', this.cost);
			},
			_input(e) {
				this.cost = e.detail.value;
			}
		}
	}
</script>

<style>
	/* components/vas-prompt/vas-prompt.wxss */
	.prompt-box {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 11;
		background: rgba(0, 0, 0, 0.5);
	}

	.prompt-content {
		position: absolute;
		left: 50%;
		top: 40%;
		width: 80%;
		max-width: 600rpx;
		border-radius: 20rpx;
		box-sizing: bordre-box;
		transform: translate(-50%, -50%);
		overflow: hidden;
		background: #FFFFFF;
	}

	.prompt-title {
		width: 100%;
		padding: 20rpx 0rpx 20rpx 0rpx;
		text-align: center;
		font-size: 40rpx;
		background-color: #27A176;
		color: #FFFFFF;
	}

	.prompt-input {
		margin: 2% 8% 8% 8%;
		padding: 10rpx 15rpx;
		width: 80%;
		height: 55rpx;
		border-radius: 20rpx;
		background-color: #E3E3E3;
	}

	.prompt-btn-group {
		display: flex;
	}

	.btn-item {
		width: 35%;
		margin-bottom: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
		background-color: white;
		justify-content: space-around;
		border-radius: 20rpx;
	}

	.prompt-certain-btn {
		color: #FFFFFF;
		background-color: #27A176;
	}

	.prompt-cancel-btn {
		color: #FFFFFF;
		background-color: #F26C5E;
	}

	.prompt-text {
		margin-top: 15rpx;
		font-size: 25rpx;
		padding-left: 50rpx;
	}
</style>
