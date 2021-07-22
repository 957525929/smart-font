<template>
	<view>
		<scroll-view scroll-y class="page ">
			<view class="banner">
				<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">
					<view>
						安消管理系统
					</view>
					<image class="img" src="/static/logo.png" mode="widthFix" style="width: 10vh"></image>
				</view>
			</view>

			<view class="content">
				<view class="content-list">
					<view class="list cu-form-group margin-top">
						<view class="title">登录角色：</view>
						<picker @change="PickerChange" :value="index" :range="picker">
							<view class="picker">
								{{picker[index]}}
							</view>
						</picker>
					</view>
					<view class="list cu-form-group margin-top">
						<view class="title">用 &nbsp;户 &nbsp;名：</view>
						<input placeholder="请输入用户名" name="name"></input>
					</view>
					<view class="list cu-form-group margin-top">
						<view class="title">密&nbsp; &nbsp; &nbsp; &nbsp; 码：</view>
						<input placeholder="请输入密码" name="password"></input>
					</view>

					<view class="padding flex flex-direction margin-top">
						<button class="cu-btn bg-green lg" @tap="login">登录</button>
					</view>
					<view class="flex-sub text-center">
						<view class="padding">
							<text class="text-grey"> 注册 &nbsp; | &nbsp; 找回密码 </text>
						</view>
					</view>
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
				index: 0,
				picker: ['安装员', '维修员', '管养员'],
				name: '',
				password: '',
			};
		},
		onShow() {},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			login() {
				let router = [
					'../../pages/index/installindex',
					'../../pages/index/repairindex',
					'../../pages/index/safeindex',
				]

				uni.navigateTo({
					url: router[this.index]
				})
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
