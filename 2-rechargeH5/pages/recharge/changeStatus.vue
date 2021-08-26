<template>
	<view>
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">状态变更</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		onLoad(item) {
			this.cardData = JSON.parse(item.data)
			console.log(this.cardData)
		},
		data() {
			return {
				cardData: '',
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
