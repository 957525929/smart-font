<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in choose" :key="index" @tap="tabSelect" :data-id="index">
				{{item.name}}
			</view>
		</scroll-view>
		<timeline v-if="TabCur==1"></timeline>
		<timelineHotel v-if="TabCur==0"></timelineHotel>
	</view>
</template>

<script>
	import timeline from './timeline.vue';
	import timelineHotel from './timelineHotel.vue';
	export default {
		data() {
			return {
				TabCur:0,
				scrollLeft: 0,
				choose:[
					{	
						index:1,
						name:'酒店预约记录',
					},
					{
						index:2,
						name:'会议预约记录',
					}
				]
			};
		},
		components:{
			timeline,
			timelineHotel,
		},
		methods: {
			tabSelect(e) {
				console.log(e.currentTarget.dataset.id);
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
</style>
