<template>
	<view>
		<view class="cu-bar bg-orange solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-white"></text> 智能锁管理
			</view>
			<view class="action">
				<navigator class="action" url="../../components/lock/safesearch" hover-class="none">
					<text class="cuIcon-search"></text>
					<text class="text-df">搜索</text>
				</navigator>
			</view>
		</view>

		<view class="cu-form-group status">
			<view class="title">智能锁状态</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{picker[index]}}
				</view>
			</picker>
		</view>
		
		<navigator class="action" url="../../components/lock/safedetail" hover-class="none">
			<lockCard :cardType="type[0]"></lockCard>
		</navigator>
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
				index: 0,
				picker: ['低电量', '关锁', '开锁'],
				type: [{
					id: 0,
					type: "低电量"
				}, {
					id: 1,
					type: "关锁"
				}, ],
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style>
.status{
	margin: 0.9vh;
	border-radius: 1.8vh;
}
</style>
