<template>
	<cu-custom bgColor="bg-yellow">
		<block slot="content">扫码界面</block>
	</cu-custom>
</template>

<script>
	export default {
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
						url: '/pages/index/index'
					});
				}

			});
		},
	}
</script>

<style>

</style>
