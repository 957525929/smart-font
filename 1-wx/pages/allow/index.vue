<template>
	<view class="app">
		<cu-custom bgColor="bg-yellow">
			<block slot="content">申请记录</block>
		</cu-custom>
		<view class="firstRow">
			<view class="text">
				访客姓名：{{person.name}}
			</view>
			<view class="refresh">
				刷新 
				<image class="refreshImg" src="../../static/refresh.png" mode="aspectFit"
					style="width: 20px; height: 20px;"></image>
			</view>
		</view>
		<view class="secondRow">
			访客电话：{{person.phone}}
		</view>
		<view class="thirdRow">
			<view class="thirdTitle">
				访问时段：
			</view>
			<view class="thirdContent">
				{{person.time}}
			</view>
		</view>
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
		data() {
			return {
				person: {
					name: '林倩',
					phone: '13675824231',
					time: '2021年6月9日 8:23 至2021年6月9日 19:23',
					type: 'allow'
				},
				value: '',

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
