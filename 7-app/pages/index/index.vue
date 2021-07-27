<template>
	<view>
		<appointment v-if="PageCur=='appointment'"></appointment>
		<notice v-if="PageCur=='notice'"></notice>
		<record v-if="PageCur=='record'"></record>
		<person v-if="PageCur=='person'"></person>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="appointment">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='appointment'?'text-orange cuIcon-formfill':'text-gray cuIcon-form'"></text>
				</view>
				<view :class="PageCur=='appointment'?'text-orange':'text-gray'">预约管理</view>
				
			</view>
			<view class="action" @click="NavChange" data-cur="record">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='record'?'text-orange cuIcon-newshotfill':'text-gray cuIcon-newshot'"></text>
				</view>
				<view :class="PageCur=='record'?'text-orange':'text-gray'">预约记录</view>
				
			</view>
			<view class="action" @click="NavChange" data-cur="notice">
				<view class='cuIcon-cu-image'>
					<view class="cu-tag round bg-red sm" style="position: fixed;z-index: 100;">2</view>
					<text :class="PageCur=='notice'?'text-orange cuIcon-noticefill':'text-gray cuIcon-notice'"></text>
				</view>
				<view :class="PageCur=='notice'?'text-orange':'text-gray'">会议提醒</view>
				
			</view>
			<view class="action" @click="NavChange" data-cur="person">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='person'?'text-orange cuIcon-peoplefill':'text-gray cuIcon-people'"></text>
				</view>
				<view :class="PageCur=='person'?'text-orange':'text-gray'">个人中心</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'appointment'
			}
		},
		methods: {
			NavChange: function(e) {
				console.log( e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
