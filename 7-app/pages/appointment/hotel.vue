<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">酒店预订</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">预约人姓名</view>
				<input placeholder="王安" name="input"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">预约人电话</view>
				<input placeholder="15877875112" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">预约时间</view>
				<picker mode="date" :value="date" start="2021-07-19" end="2025-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
				至
				<picker mode="date" :value="date" start="2021-07-19" end="2025-09-01" @change="DateChange1">
					<view class="picker">
						{{date1}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">酒店预定</view>
				<input placeholder="香格里拉大酒店" name="input"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
			<view class="cu-form-group">
				<view class="title">备注</view>
				<input placeholder="双人间,入住人:刘嘉林,李查,林夕,郑华" name="input"></input>
			</view>
			<view class="box">
				<view class="cu-bar btn-group">
					<button class="cu-btn bg-orange shadow-blur round lg" @tap="showModal" data-target="Modal">提交</button>
				</view>
				
			</view>
			<view class="cu-modal" :class="modalName=='Modal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">【提示】</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						您已成功预约酒店
					</view>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: [],
				modalName: null,
				time: '12:01',
				date: '2021-07-19',
				date1: '2021-07-20',
				switchA: false,
				switchB: true,
			};
		},
		methods: {
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			DateChange1(e) {
				this.date1 = e.detail.value
			},
			SwitchA(e) {
				this.switchA = e.detail.value
			},
			SwitchB(e) {
				this.switchB = e.detail.value
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.box {
		margin: 20upx 0;
		bottom: 10px;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
