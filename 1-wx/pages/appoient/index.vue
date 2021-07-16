<template>
	<view>
		<cu-custom bgColor="bg-yellow":isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">访问预约单填写</block>
		</cu-custom>
		<view class="cu-bar bg-white ">
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
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 访问对象</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">姓名：</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker text-left">
					{{index>-1?picker[index]:'请选择访问对象'}}
				</view>
			</picker>
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
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 备注</text>
			</view>
		</view>

		<view class="cu-form-group">
			<textarea maxlength="-1" placeholder="请根据需求填写备注"></textarea>
		</view>

	</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				date: '2018-12-25',
				modalName: null,
				PageCur: 'appoient'
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
			// textareaBInput(e) {
			// 	this.textareaBValue = e.detail.value
			// }
			NavChange: function(e) {
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
</style>
