<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">检索</block>
		</cu-custom>

		<view class="cu-form-group margin-top">

			<view class="title">预约时间</view>
			<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
				<view class="picker">
					{{time}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">日期</view>
			<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>

		<view class="cu-form-group">
			<view class="title">被访问人</view>
			<input  name="input"></input>
		</view>
		
		<view class='padding-lg'>
				<button class="cu-btn lg bg-yellow button-center" >检索</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: "14.56",
				date: "2021-07-16"
			}
		},
		methods: {

		}
	}
</script>

<style>

	.button-center {
		width: 100%;
		margin: auto;
		text-align: center;
	}
</style>
