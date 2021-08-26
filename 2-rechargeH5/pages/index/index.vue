<template>
	<view>
		<scroll-view scroll-y class="page ">
			<view class="banner">
				<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">
					<view>
						食堂餐卡信息
					</view>
					<image class="img" src="/static/logo.png" mode="widthFix" style="width: 10vh"></image>
				</view>
			</view>

			<view class="content">
				<view class="content-list">
					<view class="list cu-form-group margin-top">
						<view class="title">用 &nbsp;户 &nbsp;名：</view>
						<input placeholder="请输入用户名" name="name" v-model="name"></input>
					</view>
					<view class="list cu-form-group margin-top">
						<view class="title">密&nbsp; &nbsp; &nbsp; &nbsp; 码：</view>
						<input placeholder="请输入密码" name="password" v-model="password"></input>
					</view>

					<view class="padding flex flex-direction margin-top">
						<button class="cu-btn bg-green lg" @tap="login">登录</button>
					</view>
<!-- 					<view class="flex-sub text-center">
						<view class="padding">
							<text class="text-grey">找回密码 </text>
						</view>
					</view> -->
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				name: '',
				password: '',
			};
		},
		onShow() {},
		methods: {
			login() {
				if (this.name == '') {
					uni.showToast({
						title: '请输入账号',
						icon: 'none',
						duration: 2000
					})
				} else if(this.password == '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none',
						duration: 2000
					})
				}else{
					uni.navigateTo({
						url: '../recharge/index'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.page {
		height: 100vh;
	}

	.banner {
		position: relative;
	}

	.banner-title {
		width: 400rpx;
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: '黑体';
		font-size: 65rpx;
		background-image: -webkit-linear-gradient(90deg, rgb(77, 205, 240), rgb(116, 226, 230), rgb(218, 247, 246));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.img {
		margin-top: 8vh;
		left: 30%;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.content-list {
		margin-top: 2vh;
		width: 80%;
	}

	.list {
		border-radius: 1.5vh;
	}
</style>
