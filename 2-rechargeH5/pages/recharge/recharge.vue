<template>
	<view>
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">餐卡充值</block>
		</cu-custom>

		<view class="cu-form-group">
			<view class="title">餐卡号</view>
			<view class="flex align-center">
				<input placeholder="请输入要充值的餐卡号" name="input" v-model="cardData.cardID" @blur="changeName"></input>
				<text class="cuIcon-edit text-gray"></text>
			</view>
		</view>
		
		<view class="cu-form-group">
			<view class="title">姓名</view>
			<view>{{ cardData.name }}</view>
		</view>

		<view class="cu-form-group">
			<view class="title text-bold">充值金额(元)</view>
		</view>

		<view class="cu-list grid col-3 no-border">
			<view class="cu-item" v-for="(item,index) in money" :key="index" @tap="tabSelect" :data-id="index">
				<view class="radius shadow padding margin-left-xs margin-right-xs text-lg"
					:class="index==TabCur?'bg-blue':'solid'">
					{{ item }}
				</view>
			</view>
		</view>
		<view class="cu-form-group">
			<view v-if="TabCur != 5">
				充值金额：
				<text class="text-blue text-bold">{{ rechargeMoney }}</text>
				元
			</view>
			<view class="flex" v-if="TabCur == 5">
				充值金额(元)：
				<input placeholder="请输入要充值的金额" name="input" type="number" v-model="rechargeMoney"
					@blur="getRecharge"></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view>
				当前余额：
				<text class="text-blue text-bold">{{ cardData.money }}</text>
				元
			</view>
		</view>

		<view class="padding margin flex">
			<button class="cu-btn bg-blue lg" style="flex: 1;" @tap="gotoPay">￥{{ rechargeMoney }} 去支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(item) {
			this.cardData = JSON.parse(item.data)
			this.rechargeMoney = this.rechargeMoney.toFixed(2)
		},
		data() {
			return {
				cardData: '',
				money: [50, 100, 200, 300, 500, '自定义'],
				TabCur: 0,
				rechargeMoney: 50,
			}
		},
		methods: {
			changeName() {
				console.log('更改对应姓名')
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				if (this.TabCur != 5) {
					this.rechargeMoney = this.money[this.TabCur]
					this.rechargeMoney = this.rechargeMoney.toFixed(2)
				} else {
					this.rechargeMoney = null
				}
			},
			getRecharge() {
				if(this.rechargeMoney != null){
					this.rechargeMoney = parseFloat(this.rechargeMoney).toFixed(2)
				}
			},
			gotoPay(){
				if(this.rechargeMoney == null){
					uni.showToast({
						title: '请输入充值金额',
						icon: 'none',
						duration: 2000
					})
				}else{
					uni.navigateTo({
						url: './pay?data=' + JSON.stringify(this.rechargeMoney)
					})
				}
			}
		}
	}
</script>

<style>

</style>
