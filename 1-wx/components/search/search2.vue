<template>
	<view>
			<view class="cu-bar bg-white">
				<view class="action">选择日期</view>
			</view>

			<view class="cu-form-group">
				<view class="title">日期</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>

		</view>
</template>

<script>
	export default {
		onLoad(option) {},

		created: function() {
			let aData = new Date();

			this.date =
				aData.getFullYear() + "-" +
				(aData.getMonth() + 1) + "-" +
				(aData.getDate())
		},
		data() {
			return {
				date:''
			}
		},
		methods: {
			DateChange(e) {
				this.date = e.detail.value
			},
		}
	}
</script>

<style>
</style>
