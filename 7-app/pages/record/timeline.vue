<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true" style="height: 5px;">
			<block slot="backText">返回</block><block slot="content">时间轴</block>
		</cu-custom>
		<view class="cu-form-group">
			<text >选择时间</text> 
			<picker mode="date" :value="date" start="2010" end="2030"  fields='year' @change="DateChange">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>
		<view class="cu-timeline">
			<view class="cu-item text-blue">
				<view class="content bg-gradual-blue">
					<text>2021-06-07</text> 
					无记录
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="content bg-gradual-blue">
					<text>2021-06-06</text> 
					XX会议记录5
					<view class="margin-top">出售烟草战略5
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="content bg-gradual-blue">
					<text>2021-06-05</text> 
					XX会议记录4
					<view class="margin-top">出售烟草战略4
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="content bg-gradual-blue">
					<text>2021-06-00</text> 
					XX会议记录3
					<view class="margin-top">出售烟草战略3
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="content bg-gradual-blue">
					<text>2021-05-17</text>
					XX会议记录2
					<view class="margin-top">出售烟草战略2
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="content bg-gradual-blue">
					<text>2021-05-06</text> 
					XX会议记录1
					<view class="margin-top">出售烟草战略1
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
				date: "2021",
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
