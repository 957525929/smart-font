<template>
	<view class="cu-item shadow">
		<view class="text-xl flex padding-lr justify-between align-center">
			<view class="fl text-cut">
				<text class="cuIcon-locationfill text-purple shadow-blue" v-if="!hideTitleIcon"></text>
				<text class=" title">{{item.titleLeft}}</text>
			</view>
			<view class="text-orange-shallow fr text-lg " @tap="$emit('handleTopRight',item.taskId)">{{item.titleRight}}
			</view>
		</view>
		<view class="margin-bottom margin-lr text-lg content">
			<view class="cu-avatar lg radius margin-right" :class="item.taskType===0?'bg-blue ':'bg-green '"
				v-if="showImage">
				<text class="avatar-text">{{item.taskType===0?"维修":"保养"}}</text>
			</view>
			<view class="desc text-cut ">
				{{item.content}}
			</view>
		</view>
		<view class="flex padding-lr justify-between align-center">
			<text class="fl font24 margin-left text-orange-shallow">{{item.footerLeft}}</text>
			<text class="fr font24">{{item.footerRight}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: {
					titleLeft: "",
					titleRight: "",
					content: "",
					footerRight: ""
				}
			},
			showImage: {
				type: Boolean,
				default: false
			},
			hideTitleIcon: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
</style>
