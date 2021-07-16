<template>
	<view>
		<applyList v-if="PageCur=='applyList'"></applyList>
		<verify v-if="PageCur=='verify'"></verify>
		<person1 v-if="PageCur=='person1'"></person1>

		<view class="cu-bar tabbar bg-white shadow foot">

			<view class="action" @click="NavChange" data-cur="applyList">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='applyList'?'text-orange cuIcon-calendar':'text-gray cuIcon-calendar'"></text>
				</view>
				<view :class="PageCur==''?'text-orange':'text-gray'">申请记录</view>
			</view>

			<view class="action" @click="NavChange" data-cur="verify">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='verify'?'text-orange cuIcon-formfill':'text-gray cuIcon-formfill'"></text>
				</view>
				<view :class="PageCur=='verify'?'text-orange':'text-gray'">访问审核</view>
			</view>
			
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
