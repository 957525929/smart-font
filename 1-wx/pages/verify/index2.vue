<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		
		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 状态</text>
			</view>
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">申请状态</view>
			<view>已拒绝</view>
		</view>
		

		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约人信息</text>
			</view>
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">姓名</view>
			<view>{{person.name}}</view>
		</view>
		<view class="cu-form-group solid-bottom">
			<view class="title">手机号</view>
			{{person.phone}}
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约时间</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">日期</view>
			{{date}}
		</view>

		<view class="cu-bar bg-white">
			<view class="action">访问时间段</view>
		</view>
		<view class="cu-form-group">
			<view class="title">开始时间</view>
			{{time}}
		</view>
		<view class="cu-form-group">
			<view class="title">结束时间</view>
			{{time1}}
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 拒绝原因</text>
			</view>
		</view>

		<view class="cu-form-group align-start ">
			<!-- <view class="title">被访人不在</view> -->
			{{content}}
		</view>

	</view>

</template>
<script>
	export default {
		created: function() {
			let aData = new Date();

			// this.date =
			// 	aData.getFullYear() + "-" +
			// 	(aData.getMonth() + 1) + "-" +
			// 	(aData.getDate())

		},
		data() {
			return {
				modalName: null,
				index: -1,
				time: '9.00',
				time1: '12.00',
				person: {
					name: '华强北',
					phone: '13620176742',
					type: 'allow',
					people: '倪友聪',
				},
				PageCur: 'appoient',
				date: new Date().getFullYear() + "-" +
							(new Date().getMonth()) + "-" +
							(new Date().getDate() - 20),
				content: '被访问人不在'
			}
		},
		methods: {
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
