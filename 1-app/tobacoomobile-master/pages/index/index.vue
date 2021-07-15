<template>
	<view>
		<lockinstall v-if="PageCur=='lockinstall'"></lockinstall>
		<lockrepair v-if="PageCur=='lockrepair'"></lockrepair>
		<locksafe v-if="PageCur=='locksafe'"></locksafe>
		<person v-if="PageCur=='person'"></person>
		
		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="lockinstall">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='lockinstall'?'text-orange cuIcon-paintfill':'text-gray cuIcon-paint'"></text>
				</view>
				<view :class="PageCur=='lockinstall'?'text-orange':'text-gray'">安装</view>
			</view>
			<view class="action" @click="NavChange" data-cur="lockrepair">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='lockrepair'?'text-orange cuIcon-repairfill':'text-gray cuIcon-repair'"></text>
				</view>
				<view :class="PageCur=='lockrepair'?'text-orange':'text-gray'">维修</view>
			</view>
			<view class="action" @click="NavChange" data-cur="locksafe">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='locksafe'?'text-orange cuIcon-profilefill':'text-gray cuIcon-profile'"></text>
				</view>
				<view :class="PageCur=='locksafe'?'text-orange':'text-gray'">门卫</view>
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
				PageCur: 'lockinstall'
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
