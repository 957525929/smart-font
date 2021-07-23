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
			
			
			<view class="cu-item text-blue">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-07</text> 
							无记录
						</view>
						<view class="action">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-orange sm">待开会</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-06</text> 
							XX会议记录5
							<view class="margin-top">出售烟草战略5</view>
						</view>
						<view class="action">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-green sm">已完成</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-05</text> 
							XX会议记录4
							<view class="margin-top">出售烟草战略4</view>
						</view>
						<view class="action">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-red sm">撤销</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-04</text> 
							XX会议记录3
							<view class="margin-top">出售烟草战略3</view>
						</view>
						<view class="action">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-red sm">强制撤销</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-03</text> 
							XX会议记录1
							<view class="margin-top">出售烟草战略2</view>
						</view>
						<view class="action">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-orange sm">已完成</view>
						</view>
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
