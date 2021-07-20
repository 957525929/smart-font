<template>
	<view>
		<locksafe v-if="PageCur=='locksafe'"></locksafe>
		<lockrecord v-if="PageCur=='lockrecord'"></lockrecord>
		<lockcount v-if="PageCur=='lockcount'"></lockcount>
		<person v-if="PageCur=='person'"></person>
		
		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="locksafe">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='locksafe'?'text-orange cuIcon-paintfill':'text-gray cuIcon-paint'"></text>
				</view>
				<view :class="PageCur=='locksafe'?'text-orange':'text-gray'">智能锁管理</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="lockrecord">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='lockrecord'?'text-orange cuIcon-formfill':'text-gray cuIcon-form'"></text>
				</view>
				<view :class="PageCur=='lockrecord'?'text-orange':'text-gray'">报警记录</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="lockcount">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='lockcount'?'text-orange cuIcon-rankfill':'text-gray cuIcon-rank'"></text>
				</view>
				<view :class="PageCur=='lockcount'?'text-orange':'text-gray'">统计</view>
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
				PageCur: 'locksafe'
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
