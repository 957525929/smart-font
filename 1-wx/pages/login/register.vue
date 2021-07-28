<template>
	<view>
		<scroll-view scroll-y class="page ">
			<view class="banner">
				<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">
					<view>
						访客注册
					</view>
					<image class="img" src="/static/logo.png" mode="widthFix" style="width: 10vh"></image>
				</view>
			</view>

			<view class="content">
				<view class="content-list">

					<view class="list cu-form-group margin-top">
						<view class="title">真实姓名：</view>
						<input placeholder="请输入真实姓名" name="passwords"></input>
					</view>
					<view class="list cu-form-group margin-top">
						<view class="title">用 &nbsp;户 &nbsp;名：</view>
						<input placeholder="请输入注册手机号" name="name"></input>
					</view>
					<view class="list cu-form-group margin-top">
						<view class="title">密&nbsp; &nbsp; &nbsp; &nbsp; 码：</view>
						<input placeholder="请输入密码" name="password"></input>
					</view>
					
					<view class="list cu-form-group margin-top">
						<view class="title">确认密码：</view>
						<input placeholder="请再次输入密码" name="passwords"></input>
					</view>

					<view class="padding flex flex-direction margin-top">
						<button class="cu-btn bg-green lg" @tap="toggle">注册</button>
					</view>
					<view class="flex-sub text-center">
						<view class="padding">
							<text class="text-grey" @tap="toggle"> 登录 &nbsp; | &nbsp; 找回密码 </text>
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
		props: ["formtype"],
		data() {
			return {
				index: 0,
				name: '',
				password: '',
				changType:this.formtype
			};
		},
		onShow() {},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			login() {
				let router = [
					'/pages/index/tourist?PageCur=touristHome',
					'/pages/index/staff?PageCur=staffHome',
				]

				uni.navigateTo({
					url: router[this.index]
				})
			},
			toggle() {
				this.changType = 'login'
				console.log(this.changType)
				this.$emit('send', this.changType)
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
