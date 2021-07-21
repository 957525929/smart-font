<template>
	<view class="content">
		<view class="avatorWrapper">
			<view class="avator">
				<image class="img" src="/static/logo.png" mode="widthFix"></image>
			</view>
		</view>

		<view class="text text-white text-lg">预约访问系统</view>

		<view class="form">

			<view class="inputWrapper">
				<!-- <view class="title">申请状态</view> -->
				<picker @change="PickerChange" :value="index" :range="picker" v-model="status">
					<view class="picker">
						{{picker[index]}}
					</view>
				</picker>
			</view>

			<view class="inputWrapper">
				<input class="input" type="text" value="" placeholder="请输入用户名" />
			</view>
			<view class="inputWrapper">
				<input class="input" type="password" value="" placeholder="请输入密码" />
			</view>
			<view class="loginBtn">
				<text class="btnValue" @click="open">登录</text>
			</view>
			<view class="bottom">
				<view class="registerBtn">
					<text>注册</text>
				</view>
				<view class="forgotBtn">
					<text>找回密码</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				index: 0,
				status: '',
				picker: ['访客', '职员'],
			}
		},
		onLoad() {

		},
		methods: {
			open() {
				if (this.status === 1) {
					uni.navigateTo({
						url: '/pages/index/staff?PageCur=staffHome'
					});
				} else {
					uni.navigateTo({
						url: '/pages/index/tourist?PageCur=touristHome',
					});
				}

			},

			PickerChange(e) {
				this.index = e.detail.value
				console.log(this.index)
				this.status = this.index
			},
		},
	}
</script>

<style>
	.content {
		background: #377EB4;
		width: 100vw;
		height: 100vh;
	}

	.avatorWrapper {
		height: 30vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.text {
		padding: 0 100upx;
		margin-top: 10px;
		text-align: center
	}

	.avator {
		width: 50%;
		width: 180upx;
		height: 180upx;
		overflow: hidden;
	}

	.avator .img {
		width: 100%;
	}


	.form {
		padding: 0 100upx;
		margin-top: 80px;
	}

	.inputWrapper {
		width: 100%;
		height: 80upx;
		background: white;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 25px;
	}

	.inputWrapper .picker {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
		line-height: 80upx;
		;
	}

	.inputWrapper .input {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
	}

	.loginBtn {
		width: 100%;
		height: 80upx;
		background: #77B307;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.loginBtn .btnValue {
		color: white;
	}

	.bottom {
		/* background-color: #fea82f; */
		height: 10%;
		display: inline;
		margin: auto;
		margin-top: 20px;
		text-align: center;
	}

	.forgotBtn {
		/* text-align: center; */
		width: 50%;
		margin: auto;
		color: #EAF6F9;
		font-size: 15px;
		/* margin-top: 20px; */
	}

	.registerBtn {
		/* text-align: center; */
		width: 50%;
		margin: auto;
		color: #EAF6F9;
		font-size: 15px;
		margin-top: 20px;
	}
</style>
