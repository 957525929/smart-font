<template>
	<view>
		<cu-custom bgColor="cu-tag light bg-yellow">
			<block slot="content">申请记录</block>
		</cu-custom>
		<!-- 
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in 3"
					:key="index" @tap="tabSelect" :data-id="index">
					Tab{{index}}
				</view>
			</view>
		</scroll-view> -->
		<appoient v-if="PageCur=='appoient'"></appoient>
		<scroll-view scroll-x class="bg-white nav flex text-center">
			<view class="cu-item" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
				待审核
			</view>

			<view class="cu-item" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="1">
				已通过
			</view>

			<view class="cu-item" :class="2==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="2">
				已拒绝
			</view>

		</scroll-view>

		<block v-if="TabCur==0">
			<recordCard />
		</block>
		<block v-if="TabCur==1"> </block>
		<block v-if="TabCur==2"> 
		<recordCard />
		</block>
		
	</view>
</template>

<script>
	import recordCard from "../../components/recordCard/recordCard.vue"
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0
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
