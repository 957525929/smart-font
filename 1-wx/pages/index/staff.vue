<template>
	<view>
		<applyList v-if="PageCur=='applyList'" :TabCur="TabCur"></applyList>
		<!-- <verify v-if="PageCur=='verify'"></verify> -->
		<person1 v-if="PageCur=='person1'"></person1>

		<staffHome v-if="PageCur=='staffHome'"></staffHome>

		<trip v-if="PageCur=='trip'"></trip>

		<view class="cu-bar tabbar bg-white shadow foot">

			<view class="action" @click="NavChange" data-cur="staffHome">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='staffHome'?'text-orange cuIcon-home':'text-gray cuIcon-home'"></text>
				</view>
				<view :class="PageCur==''?'text-orange':'text-gray'">首页</view>
			</view>

			<view class="action" @click="NavChange" data-cur="applyList">
				<view class='cuIcon-cu-image'>
					<text
						:class="PageCur=='applyList'?'text-orange cuIcon-calendar':'text-gray cuIcon-calendar'"></text>
				</view>
				<view :class="PageCur==''?'text-orange':'text-gray'">申请记录</view>
			</view>

			<view class="action" @click="NavChange" data-cur="trip">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='trip'?'text-orange cuIcon-taxi':'text-gray cuIcon-taxi'"></text>
				</view>
				<view :class="PageCur==''?'text-orange':'text-gray'">预约行程</view>
			</view>

			<!-- 			<view class="action" @click="NavChange" data-cur="verify">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='verify'?'text-orange cuIcon-formfill':'text-gray cuIcon-formfill'"></text>
				</view>
				<view :class="PageCur=='verify'?'text-orange':'text-gray'">访问审核</view>
			</view> -->

			<view class="action" @click="NavChange" data-cur="person1">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='person1'?'text-orange cuIcon-peoplefill':'text-gray cuIcon-people'"></text>
				</view>
				<view :class="PageCur=='person1'?'text-orange':'text-gray'">个人中心</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.PageCur = option.PageCur
			console.log('-------111----------')
			console.log(this.PageCur)
			this.TabCur = option.TabCur
			console.log('------22-----------')
			console.log(this.TabCur)

		},
		onHide() {
		
		},
		data() {
			return {
				PageCur: 'applyList'
			}
		},
		methods: {
			NavChange: function(e) {
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
