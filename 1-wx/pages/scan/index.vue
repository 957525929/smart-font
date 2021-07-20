<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">扫码</block>
		</cu-custom>
		<view @tap="openAppoient">扫码界面</view>
	</view>
</template>

<script>
	export default {
		created: function() {
			let aTime = new Date();
		
			this.time =
				aTime.getHours() + ":" +
				aTime.getMinutes()
			this.time1 =
				(aTime.getHours() + 3) + ":" +
				aTime.getMinutes()
		},
		data() {
			return {

			}
		},

		mounted() {
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
					uni.navigateTo({
						url: '/pages/appoient/index'
					});
				}

			});
		},
		methods: {
			openAppoient() {
				uni.navigateTo({
					url: '/pages/appoient/index'
				});
			}
		},
	}
</script>

<style>

</style>
