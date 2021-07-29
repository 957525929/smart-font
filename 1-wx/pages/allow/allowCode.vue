<template>
	<view>

		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的二维码</block>
		</cu-custom>
		<view class="page">
			<view class="app">
				<view class="firstRow">

					<view class="refresh">
						刷新
						<image class="refreshImg" src="../../static/refresh.png" mode="aspectFit"
							style="width: 20px; height: 20px;"></image>
					</view>
				</view>
				<view class="thirdRow">

					<!-- 		<view class="thirdContent">
					{{this.date+" "+this.onjs.startTime +" "+"至"+" "+ this.date+" "+this.onjs.endTime}}
				</view> -->
				</view>
				<view class="code">
					<image class="codeImg" src="../../static/allowCode.png" mode="aspectFit"></image>
				</view>
				<view class="text-gray text">请出示二维码对准门禁设备扫码窗口。可核验通行</view>
				<view class="finallyRow">
					<span class="finalTitle">
						当前时间：
					</span>
					<span class="finalContent">
						{{this.value}}
					</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {

			}
		},
		created: function() {
			var aData = new Date();

			this.value =
				aData.getFullYear() + "年" +
				(aData.getMonth() + 1) + "月" +
				aData.getDate() + "日" + ' ' +
				aData.getHours() + ':' + aData.getMinutes() + ':' + aData.getSeconds();
			console.log(this.value)
		},
	}
</script>

<style scoped>
	.page {
		display: flex;
		/* align-items: center; */
		justify-content: center;
	}

	.app {
		margin-top: 150rpx;
		background-color: #FFFFFF;
		/* height: 100%; */
		width: 90%;
		border-radius: 10px;
		/* position: absolute; */
		/* 		align-items: center;
		justify-content: center; */
	}

	* {
		margin: 0;
		padding: 0;
	}

	.firstRow {
		display: flex;
		padding: 10px;
	}


	.refresh {
		font-size: 18px;
		color: #ff6701;
		width: 100%;
		text-align: right;
		padding-right: 20px;
	}

	/* 	.secondRow {
		padding: 0px 20px 20px 20px;
		width: 100%;
		font-size: 18px;
	} */

	.thirdRow {
		display: flex;
		padding: 0px 20px 20px 20px;
		width: 100%;
	}

	/* 	.thirdTitle {
		font-size: 18px;
		width: 28%;
	} */

	.thirdContent {
		font-size: 18px;
		width: 60%;
	}

	.code {
		width: 100%;
		padding: 20px 20px 20px 20px;
		text-align: center;
	}

	.text {
		text-align: center;
	}

	.finallyRow {
		padding-top: 20px;
		text-align: center;
	}

	.finalTitle {
		font-size: 18px;
	}

	.finalContent {
		font-size: 18px;
		color: #4df189;
	}
</style>
