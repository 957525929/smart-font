<template>
	<view class="app">
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">访问许可码</block>
		</cu-custom>
		<view class="firstRow">
			<view class="text">
				被访人：{{this.onjs.visit}}
			</view>
			<view class="refresh">
				刷新 
				<image class="refreshImg" src="../../static/refresh.png" mode="aspectFit"
					style="width: 20px; height: 20px;"></image>
			</view>
		</view>
		<view class="secondRow">
			被访部门：{{this.onjs.department}}
		</view>
<!-- 		<view class="thirdRow">
			<view class="thirdTitle">
				访问时段：
			</view>
			<view class="thirdContent">
				{{this.date+" "+this.onjs.startTime +" "+"至"+" "+ this.date+" "+this.onjs.endTime}}
			</view>
		</view> -->
		<view class="code">
			<image class="codeImg" src="../../static/allowCode.png" mode="aspectFit"></image>
		</view>
		<view class="finallyRow">
			<span class="finalTitle">
				当前时间：
			</span>
			<span class="finalContent">
				{{value}}
			</span>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(op) {
			if (op) {
				this.onjs = JSON.parse(op.onjs)
				console.log(this.onjs.time)
				this.date = this.onjs.time.slice(0, 10);
				console.log(this.onjs)
			}
		},
		data() {
			return {

			}
		},
		created: function() {
			var aData = new Date();

			this.value =
				aData.getFullYear() + "年" + 
				(aData.getMonth() + 1) + "月" +
				aData.getDate() + "日"+' '+
				aData.getHours()+':'+aData.getMinutes()+':'+aData.getSeconds();
				console.log(this.value)
		},
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}

	.app {
		background-color: #FFFFFF;
		height: 100%;
		width: 100%;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.firstRow {
		display: flex;
		padding: 20px;
	}

	.text {
		width: 100%;
		font-size: 18px;
	}

	.refresh {
		font-size: 18px;
		color: #ff6701;
		width: 100%;
		text-align: right;
		padding-right: 30px;
	}

	.secondRow {
		padding: 0px 20px 20px 20px;
		width: 100%;
		font-size: 18px;
	}

	.thirdRow {
		display: flex;
		padding: 0px 20px 20px 20px;
		width: 100%;
	}

	.thirdTitle {
		font-size: 18px;
		width: 28%;
	}

	.thirdContent {
		font-size: 18px;
		width: 60%;
	}

	.code {
		width: 100%;
		padding: 20px 20px 20px 20px;
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
