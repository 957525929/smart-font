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
			<input name="input">{{person.name}}</input>
		</view>
		<view class="cu-form-group solid-bottom">
			<view class="title">手机号</view>
			<input name="input">{{person.phone}}</input>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约时间</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">日期</view>
			<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>

		<view class="cu-bar bg-white">
			<view class="action">访问时间段</view>
		</view>
		<view class="cu-form-group">
			<view class="title">开始时间</view>
			<picker mode="time" :value="time" start="09:01" end="18:01" @change="TimeChange">
				<view class="picker">
					{{time}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">结束时间</view>
			<picker mode="time" :value="time1" start="09:01" end="18:01" @change="TimeChange">
				<view class="picker">
					{{time1}}
				</view>
			</picker>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 备注</text>
			</view>
		</view>

		<view class="cu-form-group align-start">
			<!-- <view class="title">被访人不在</view> -->
			<textarea maxlength="-1" v-model="content"></textarea>
		</view>

		<view class="padding margin text-center">
			<view class="cu-btn bg-yellow lg block shadow radius margin-xl" @tap="hideModal">
				已通过
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		created: function() {
			let aTime = new Date();

			this.time =
				aTime.getHours() + ":" +
				aTime.getMinutes()
			this.time1 =
				(aTime.getHours() + 3) + ":" +
				aTime.getMinutes()

			let aData = new Date();

			this.date =
				aData.getFullYear() + "-" +
				(aData.getMonth() + 1) + "-" +
				(aData.getDate())

		},
		data() {
			return {
				modalName: null,
				index: -1,
				time: '',
				time1: '',
				person: {
					name: '魏佳楠',
					phone: '13675824231',
					type: 'allow',
					people: '倪友聪',
					content: '被访问人不在'
				},
				PageCur: 'appoient',
				date: '',
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
			TimeChange(e) {
				this.time = e.detail.value
			},
			TimeChange1(e) {
				this.time1 = e.detail.value
			},
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
