<template>
	<view>
		<workplace v-if="PageCur=='workplace'"></workplace>
		<person v-if="PageCur=='person'"></person>


		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="workplace">
				<view class='cuIcon-cu-image'>
					<text
						:class="PageCur=='workplace'?'text-orange cuIcon-circlefill':'text-gray cuIcon-circle'"></text>
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
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
