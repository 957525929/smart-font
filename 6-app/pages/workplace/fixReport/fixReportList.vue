<template>
	<view class="text-gray">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''"
					v-for="(item,index) in menuList" :key="item" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view class="cu-card article">
			<view class="cu-item shadow">
				<view class="flex padding-lr justify-between solids-bottom padding-tb">
					<view class="fl">
						<text class="cuIcon-locationfill text-purple font36 shadow-blue"></text>
						<text class="text-cut font30">烟草大厦18楼</text>
					</view>

					<view class="text-blue text-orange-shallow fr font28">查看</view>
				</view>
				<view class="content margin-tb solids-bottom">
					<view class="desc">
						<view class="text-content"> 停电</view>
					</view>
				</view>
				<view class="flex solid-bottom padding-lr justify-between">
					<text class="fl font24">2021-06-19 17：55：55</text>
					<text class="text-orange-shallow fr font28">待维修</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				menuList: ["待处理", "待评价", "已完成"]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
</style>
