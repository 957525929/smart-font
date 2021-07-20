<template>
	<view>
		<view class="cu-form-group">
			<view class="title">申请状态</view>
			<picker @change="PickerChange1" :value="index1" :range="picker1">
				<view class="picker">
					{{picker1[index1]}}
				</view>
			</picker>
		</view>

		<view class="cu-form-group">
			<view class="title">访问人</view>
			<input name="input">魏佳楠</input>
		</view>

		<view class="cu-form-group">
			<view class="title">访问部门</view>
			<input name="input">审计处</input>
		</view>

		<view v-if="this.index1 == 1">
			<view class="cu-bar bg-white margin-top">
				<view class="action">选择访问时间段</view>
			</view>
			<view class="cu-form-group">
				<view class="title">请选择开始时间</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
					<view class="picker">
						{{time}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">请选择结束时间</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange1">
					<view class="picker">
						{{time1}}
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {},
		created: function() {
			let aTime = new Date();

			this.time =
				aTime.getHours() + ":" +
				aTime.getMinutes()
			this.time1 =
				(aTime.getHours() + 3) + ":" +
				aTime.getMinutes()
		},
		mounted() {

		},
		data() {
			return {
				time: '',
				time1:'',
				index: -1,
				// picker: ['101', '102', '103'],
				index1: 0,
				picker1: ['待审核', '已通过', '已拒绝'],
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			PickerChange1(e) {
				this.index1 = e.detail.value
				this.$emit('send', this.index1)
				// console.log(e)
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			MultiColumnChange(e) {},
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
