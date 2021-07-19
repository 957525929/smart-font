<template>
	<view class="page">


		<view class="cu-bar bg-orange solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-white"></text> 智能锁安装
			</view>
			<view class="action">
				<navigator class="action" url="../../components/lock/serach?type=0" hover-class="none">
					<text class="cuIcon-search"></text>
					<text class="text-df">搜索</text>
				</navigator>
			</view>
		</view>

		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
					未安装
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="1">
					已安装
				</view>
			</view>
		</scroll-view>
		<view v-if="TabCur==0" class="itembox">
			<navigator class="action" url="../../components/lock/detail?type=0" hover-class="none">
				<lockCard :cardType="type[0]"></lockCard>
			</navigator>
		</view>
		<view v-if="TabCur==1" class="itembox">
			<navigator class="action" url="../../components/lock/detail?type=1" hover-class="none">
				<lockCard :cardType="type[1]"></lockCard>
			</navigator>
		</view>
	</view>
</template>

<script>
	import lockCard from '../../components/lock/lockcard.vue'

	export default {
		components: {
			lockCard,
		},

		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				type: [{
					id: 0,
					type: "未安装"
				}, {
					id: 1,
					type: "已安装"
				}, ],
			};
		},
		onLoad: function() {

		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style scoped>
	.page {
		height: 100vh;
	}

	.itembox {
		margin-top: 1.5vh;
	}
</style>
