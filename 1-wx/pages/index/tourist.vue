<template>
	<view>
		<!-- <appoient v-if="PageCur=='appoient'"></appoient> -->
		<touristHome v-if="PageCur=='touristHome'"></touristHome>
		<record v-if="PageCur=='record'"></record>
		<scan v-if="PageCur=='scan'"></scan>
		<allow v-if="PageCur=='allow'"></allow>
		<person v-if="PageCur=='person'"></person>

		<view class="cu-bar tabbar bg-white shadow foot">

	<!-- 		<view class="action" @click="NavChange" data-cur="appoient">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='appoient'?'text-orange cuIcon-calendar':'text-gray cuIcon-calendar'"></text>
				</view>
				<view :class="PageCur=='appoient'?'text-orange':'text-gray'">访问预约</view>
			</view> -->
			
			<view class="action" @click="NavChange" data-cur="touristHome">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='touristHome'?'text-orange cuIcon-home':'text-gray cuIcon-home'"></text>
				</view>
				<view :class="PageCur=='touristHome'?'text-orange':'text-gray'">首页</view>
			</view>

			<view class="action" @click="NavChange" data-cur="record">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='record'?'text-orange cuIcon-text':'text-gray cuIcon-text'"></text>
				</view>
				<view :class="PageCur=='record'?'text-orange':'text-gray'">我的预约</view>
			</view>

			<view class="action" @click="NavChange" data-cur="scan">
				<view class='cuIcon-cu-image'>
					<text :class="PageCur=='scan'?'text-orange cuIcon-scan':'text-gray cuIcon-scan'"></text>
				</view>
				<view :class="PageCur=='scan'?'text-orange':'text-gray'">扫码</view>
			</view>

			<view class="action" @click="NavChange" data-cur="allow">
				<view class='cuIcon-cu-images'>
					<text
						:class="PageCur=='allow'?'text-orange cuIcon-barcode':'text-gray cuIcon-barcode'"></text>
				</view>
				<view :class="PageCur=='allow'?'text-orange':'text-gray'">我的二维码</view>
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
		onLoad(option){
			this.PageCur=option.PageCur
			console.log('-----------------')
			console.log(this.PageCur)
		},
		data() {
			return {
				PageCur: 'scan',
				// PageCur: 'record'
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
