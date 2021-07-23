<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true" style="height: 5px;">
			<block slot="backText">返回</block><block slot="content">时间轴</block>
		</cu-custom>
		<view class="cu-form-group">
			<text >选择时间</text> 
			<picker mode="date" :value="date" start="2010-01" end="2030-01"  fields='month' @change="DateChange">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>
		<view class="cu-timeline">
			<view class="cu-item text-blue cuIcon-evaluate_fill">
				<view class="content bg-cyan">
					<text>2021-06-05</text> 
					<view class="margin-top">XX酒店预定1
					</view>
				</view>
			</view>
			<view class="cu-item text-blue cuIcon-evaluate_fill">
				<view class="content bg-cyan">
					<text>2021-06-06</text> 
					<view class="margin-top">XX酒店预定2
					</view>
				</view>
			</view>
			<view class="cu-item text-blue cuIcon-evaluate_fill">
				<view class="content bg-cyan">
					<text>2021-06-07</text>
					<view class="margin-top">XX酒店预定3
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexDate:0,
				date: "2021-06",
			};
		},
		methods:{
			//下拉框
			DateChange(e) {
				this.date = e.detail.value
			},
		}
	}
</script>

<style>

</style>