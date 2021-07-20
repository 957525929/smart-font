<template>
	<view class="cu-list menu sm-border card-menu margin-top">
		<view class="cu-item" v-for="(item,index) in dataSource" :key="item.taskId">
			<view class="content flex align-center">
				<text class="text-gray basis-sm">{{item.label}}</text>
				<text class="text-gray flex-sub">{{item.value}}</text>
			</view>
		</view>
		<view class="bg-white padding card-menu" v-if="dataSource.length!==0">
			<view class="grid col-4 grid-square">
				<view class="bg-img" v-for="(item,index) in picList" :key="index"
					:style="[{ backgroundImage:'url(' + picList[index] + ')' }]"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "DescriptionDetail",
		props: {
			dataSource: {
				type: Array
			},
			picList: {
				type: Array
			}
		},
		methods: {
			ViewImage(e, list) {
				uni.previewImage({
					urls: list,
					current: e.currentTarget.dataset.url
				});
			},
		}
	}
</script>

<style>
</style>
