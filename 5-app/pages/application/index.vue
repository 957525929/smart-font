<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">用车申请</block>
			<block slot="right"><a>历史记录</a></block>
		</cu-custom>
	<!-- 	<view class="formArea">
			<uni-forms :modelValue="formData" ref="form" border>
				<uni-forms-item label="用车人/单位" :label-width='labelWidth' name="user">
					<uni-easyinput :inputBorder="false" v-model="formData.user" placeholder="请输入姓名或单位名称" />
				</uni-forms-item>
				<uni-forms-item label="联系电话" name="phone" :label-width='labelWidth'>
					<uni-easyinput :inputBorder="false" v-model="formData.phone" placeholder="请输入手机号" />
				</uni-forms-item>
				<uni-forms-item label="乘客数" name="seatNum" :label-width='labelWidth'>
					<uni-easyinput :inputBorder="false" v-model="formData.seatNum" placeholder="请输入所需座位数" />
				</uni-forms-item>
				<uni-forms-item label="用车事由" name="phone" :label-width='labelWidth'>
					<uni-easyinput :inputBorder="false" v-model="formData.reason" placeholder="请输入用车事由" />
				</uni-forms-item>
				<uni-forms-item label="出发地" name="phone" :label-width='labelWidth'>
					<uni-easyinput :inputBorder="false" v-model="formData.from" placeholder="请输入出发地点名称" suffixIcon="location"  />
				</uni-forms-item>
				<uni-forms-item label="目的地" name="phone" :label-width='labelWidth'>
					<uni-easyinput :inputBorder="false" v-model="formData.to" placeholder="请输入目标地点名称" />
				</uni-forms-item>
				<uni-forms-item label="往返类型" name="singleOrRound" :label-width='labelWidth'>
					<uni-data-checkbox v-model="formData.singleOrRound" :localdata="tripType" />
				</uni-forms-item>
				<button type="primary" style="margin-top: 60rpx;" @click="submitForm">提交</button>
			</uni-forms>
		</view> -->
		<form>
			<view class="cu-form-group">
				<view class="title">用车人/单位</view>
				<input placeholder="姜轶枫" name="user"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">联系电话</view>
				<input placeholder="13756372788" name="phone"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">乘客数</view>
				<input name="seatNum"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">用车事由</view>
				<input name="reason"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">出发地</view>
				<input placeholder="福建省福州市闽侯县创业大厦" name="from"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
			<view class="cu-form-group">
				<view class="title">目的地</view>
				<input name="to"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
			<view class="cu-form-group">
				<view class="title">往返类型</view>
				<uni-data-checkbox v-model="formData.singleOrRound" :localdata="tripType" />
			</view>
			<button type="primary" class="margin-top" @click="submitForm">提交</button>
		</form>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelWidth: 85,
				formData: {
					user: '姜轶枫',
					phone: '13756372788',
					seatNum: undefined,
					reason: undefined,
					from: undefined,
					to: undefined,
					singleOrRound: '1',
				},
				// tripType: ['单程','双程'],
				tripType: [{
						text: '单程',
						value: '1'
					},
					{
						text: '双程',
						value: '2'
					}
				]
			}
		},
		methods: {
			back() {
				// uni.switchTab({
				// 	url: '/pages/tabBar/homepage'
				// });
				uni.navigateBack()
			},
			submitForm(form) {
				// 手动提交表单
				this.$refs.form.validate().then((res) => {
					console.log('表单返回值：', res)
				})
			}
		}
	}
</script>

<style scoped>
	.formArea {
		padding-left: 25rpx;
		padding-right: 25rpx;
	}
</style>
