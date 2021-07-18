<template>
	<view class="bg-grey">
		<!-- #ifdef APP-PLUS -->
		<!-- 状态栏占位 -->
		<view class="top-wrapper bg-black margin-bottom">
		</view>
		<!-- #endif -->
		<workplace v-if="PageCur=='workplace'"></workplace>
		<person v-if="PageCur=='person'"></person>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="workplace">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='workplace'?'text-orange cuIcon-homefill':'text-gray cuIcon-home'"></text>
				</view>
				<view :class="PageCur=='workplace'?'text-orange':'text-gray'">工作台</view>

			</view>
			<view class="action" @click="NavChange" data-cur="person">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='person'?'text-orange cuIcon-peoplefill':'text-gray cuIcon-people'"></text>
				</view>
				<view :class="PageCur=='person'?'text-orange':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'workplace'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
