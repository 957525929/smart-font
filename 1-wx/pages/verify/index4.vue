<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		

		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约人信息</text>
			</view>
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">姓名</view>
			<view>{{this.onjs.visit}}</view>
		</view>
		<view class="cu-form-group solid-bottom">
			<view class="title">手机号</view>
			{{this.onjs.phone}}
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约时间</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">日期</view>
			{{this.onjs.time}}
		</view>


		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 到访事由</text>
			</view>
		</view>

		<view class="cu-form-group align-start ">
			<!-- <view class="title">被访人不在</view> -->
			{{content}}
		</view>

	</view>

</template>

<script>
	import { generatePhoneNum } from '../../util/mathFunc.js'
	export default {
		created: function() {
			let aData = new Date();

			// this.date =
			// 	aData.getFullYear() + "-" +
			// 	(aData.getMonth() + 1) + "-" +
			// 	(aData.getDate())

		},
		onLoad(op){
			console.log(op)
			if(op){
				this.onjs = JSON.parse(op.onjs)
				console.log(this.onjs)
			}
		},
		data() {
			return {
				modalName: null,
				index: -1,
				// person: {
				// 	name: '王鹏翔',
				// 	type: 'allow',
				// },
				// PageCur: 'appoient',
				// date: new Date().getFullYear() + "-" +
				// 			(new Date().getMonth()) + "-" +
				// 			(new Date().getDate() - 10),
				content: '私人会面',
				// phone: generatePhoneNum(),
			}
		},
		methods: {
			generatePhoneNum,
			PickerChange(e) {
				this.index = e.detail.value
				// console.log(index)
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			// TimeChange(e) {
			// 	this.time = e.detail.value
			// },
			// TimeChange1(e) {
			// 	this.time1 = e.detail.value
			// },
			// textareaBInput(e) {
			// 	this.textareaBValue = e.detail.value
			// }
			NavChange: function(e) {
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			hideGoto(e) {
				this.modalName = null;
				uni.navigateTo({
					url: '/pages/index/staff?PageCur=applyList&TabCur=1'
				});
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
		}
	}
</script>

<style>
	.bottom {
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
