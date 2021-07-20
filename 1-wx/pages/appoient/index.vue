<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">访问预约单填写</block>
		</cu-custom>
		<!-- 		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约人信息</text>
			</view>
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">姓名</view>
			<input placeholder="请填写姓名" name="input"></input>
		</view>
		<view class="cu-form-group solid-bottom">
			<view class="title">手机号</view>
			<input placeholder="请填写手机号" name="input"></input>
		</view> -->

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 访问对象</text>
			</view>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">姓名</view>
			<input placeholder="请输入访问对象" name="input"></input>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约时间</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">日期选择</view>
			<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">选择访问时间段</view>
		</view>
		<view class="cu-form-group">
			<view class="title">请选择开始时间</view>
			<picker mode="time" :value="time" start="09:01" end="18:01" @change="TimeChange">
				<view class="picker">
					{{time}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">请选择结束时间</view>
			<picker mode="time" :value="time1" start="09:01" end="18:01" @change="TimeChange1">
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

		<view class="cu-form-group">
			<textarea maxlength="-1" placeholder="请根据需求填写备注"></textarea>
		</view>

		<view class="padding margin text-center">
			<view class="cu-btn bg-orange lg block shadow radius margin-xl">
				提交
			</view>
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
				index: -1,
				// picker1: ['张三', '李四', '王五'],
				date: date,
				time: '',
				time1: '',
				modalName: null,
				PageCur: 'appoient'
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
				// console.log(index)
			},
			// textareaBInput(e) {
			// 	this.textareaBValue = e.detail.value
			// }
			NavChange: function(e) {
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
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
		}
	}
</script>

<style>
</style>
