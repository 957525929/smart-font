<template>
	<view class="back">
		<view class="about-head fontColorMain">
			<image src="../../../../static/logo.jpg"></image>

			<!-- #ifndef MP-WEIXIN -->
			<text class="font34">工蜂垃圾投递</text>
			<text class="font30" style="font-style: italic;">V {{version}}</text>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<text class="font34">环城卫士</text>
			<!-- #endif -->

		</view>
		<view v-for="item in aboutList" :key="item.title" @tap="gotoDetail(item)">
			<listItem :item="item"></listItem>
		</view>
	</view>

</template>

<script>
	import {
		aboutList
	} from "@/common/person/person.js"
	const NEW_A_LIST = Object.freeze(aboutList)
	export default {
		onLoad() {
			// #ifdef APP-PLUS
			this.checkUpdate();
			// #endif

		},
		data() {
			return {
				aboutList: NEW_A_LIST,
				version: '',
			}
		},
		methods: {
			gotoDetail(val) {
				if (val.title == '联系我们') {
					this.$navTo.goTo(val.key);
				} else {
					this.$navTo.goTo(val.key, {
						data: val
					});
				}
			},
			checkUpdate() {
				let self = this
				plus.runtime.getProperty(plus.runtime.appid, function(info) {
					self.version = info.version
				})
			},
		}
	}
</script>

<style>
	.back {
		display: flex;
		flex-direction: column;
	}

	.about-head {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 150rpx auto 100rpx;
	}

	.about-head image {
		width: 150rpx;
		height: 150rpx;
		margin-bottom: 30rpx;
		border-radius: 50%;
	}

	/* 列表 */
	.contentList {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
	}

	/* top -left*/
	.header-view {
		margin-top: -20px;
		width: 100%;
		height: 200px;
		min-height: 160px;
		background: linear-gradient(to bottom, #66dde3, #63bceb);
		display: flex;
		flex-direction: row;
	}

	.header-img-view {
		display: inline-block;
		text-align: center;
		width: 160px;
		max-width: 160px;
		min-width: 150px;
		height: 100%;
	}

	.header-img {
		padding-top: 50px;
	}

	.header-SignIn-div {
		width: 100%;
		height: 22px;
	}

	.header-SignIn-content {
		min-width: 100px;
		width: 110px;
		border-radius: 50px;
		background-color: #79d9e9;
		margin: 0 25px;
		height: 100%;
		position: relative;
		text-align: center;
	}

	.header-SignIn-content text {
		/* height: 100%; */
		font-size: 14px;
		color: white;
		/* float: left; */
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		left: 18%;
	}

	.sign-logo-div {
		position: absolute;
		height: 100%;
		right: 8px;
		top: 1px;
	}

	/* top-right */
	.header-container-div {
		-webkit-flex: 1;
		flex: 1;
		/* text-align: center; */
		height: 100%;
		width: 100%;
		padding-top: 30px;
	}

	.header-container-content {
		width: 100%;
		height: calc((100%-30px) / 2);
	}

	.check {
		line-height: 100px;
	}

	/* 	.checkIn{
			margin:0 30px;
			float: right;
		} */
	.inspect {
		line-height: 10px;
	}

	.check,
	.inspect {
		color: white;
		font-size: 18px;
	}

	.amount {
		margin-left: 10px;
		color: #ffff00;
		font-weight: 600;
	}

	/*  */
	.person-listitem {
		margin-top: 20px;
	}

	.person-listitem-version {
		position: relative;
	}

	.version-div {
		position: absolute;
		right: 15px;
		font-size: 14px;
		font-style: italic;
		color: #777;
		top: 58%;
	}

	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		width: 250px;
		background-color: #fff;
		border-radius: 10px;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	.uni-tip-title {
		margin-bottom: 10px;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}

	.uni-tip-content {
		font-size: 14px;
		color: #666;
		text-align: center;
	}

	.uni-tip-group-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-top: 20px;
	}

	.uni-tip-button {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}

	.popup_inner {
		border-radius: 8px;
		background-color: #F9F9F9;
		font-size: 15px;
		color: #505050;
		padding: 10px;
	}
</style>
