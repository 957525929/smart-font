<template>
	<view>
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">支付</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		onLoad(item) {
			this.payData = JSON.parse(item.data)
			console.log(this.payData)
		},
		data() {
			return {
				payData: '',
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
