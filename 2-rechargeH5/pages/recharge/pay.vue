<template>
	<view>
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">支付</block>
		</cu-custom>

		<view class="cu-list menu sm-border card-menu margin-top">
			<view class="cu-form-group">
				<view class="title">餐卡号</view>
				<view>{{ cardData.cardID }}</view>
			</view>

			<view class="cu-form-group">
				<view class="title">姓名</view>
				<view>{{ cardData.name }}</view>
			</view>

			<view class="cu-form-group">
				<view class="title">充值金额</view>
				<view>{{ payData }} 元</view>
			</view>

			<view class="cu-form-group">
				<view class="title">支付方式</view>
				<view>{{ payMethod }}</view>
			</view>

			<radio-group class="block" @change="RadioChange">
				<view class="cu-form-group">
					<view class="title">
						<text class="cuIcon-weixin text-green margin-right-xs"></text>
						微信支付
					</view>
					<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
				</view>
				<view class="cu-form-group">
					<view class="title">
						<image class="margin-right-xs" src="../../static/zhifubao.png" style="width: 15px" mode="widthFix"></image>
						支付宝支付
					</view>
					<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
				</view>
			</radio-group>
		</view>

		<view class="padding margin flex">
			<button class="cu-btn bg-blue lg" style="flex: 1;" @tap="pay">确认支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(item) {
			this.payData = JSON.parse(item.data)
		},
		data() {
			return {
				cardData: {
					name: '袁洪',
					cardID: 'KHID20210903',
					money: 500,
					status: '正常',
				},
				payData: '',
				radio: 'A',
				payMethod: '微信支付',
			}
		},
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
				this.payMethod = this.radio == 'A' ? '微信支付' : '支付宝支付'
			},
			pay() {
				if (this.radio == 'A') {
					console.log('微信支付')
				} else {
					console.log('支付宝支付')
				}
			}
		}
	}
</script>

<style>

</style>
