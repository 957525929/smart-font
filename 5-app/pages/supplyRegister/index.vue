<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">加油登记</block>
		</cu-custom>
		<view class="formArea backColor">
			<uni-forms :modelValue="formData" ref="form" border>
				<uni-forms-item label="车辆" :label-width='labelWidth' name="licenseNum">
					<uni-combox :candidates="cars" v-model="formData.licenseNum"></uni-combox>
				</uni-forms-item>
				<uni-forms-item label="加油类型" :label-width='labelWidth' name="oilType">
					<uni-data-picker popup-title="请选择加油类型" :localdata="oilTypes"></uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="加油站" :label-width='labelWidth' name="oilStation">
					<uni-easyinput :inputBorder="false" v-model="formData.oilStation" />
				</uni-forms-item>
				<uni-forms-item label="金额" :label-width='labelWidth' name="amount">
					<uni-easyinput :inputBorder="false" v-model="formData.amount" />
				</uni-forms-item>
				<button type="primary" class="submitBtn" @click="submitForm">提交</button>
			</uni-forms>
		</view>
		<view class="imgPrt backColor">
			票据图片
			<uni-file-picker 
			    v-model="imageValue" 
			    fileMediatype="image" 
			    mode="grid" 
			/>
		</view>
	</view>
</template>

<script>
	import {
		vehicleList
	} from "../../mock/demoData.js"
	export default {
		mounted() {
			for (let i = 0; i < vehicleList.length; ++i) {
				this.cars[i] = vehicleList[i].licenseNum
			}
		},
		data() {
			return {
				labelWidth: 85,
				cars: [],
				formData: {
					licenseNum: undefined,
					oilType: undefined,
					oilStation: '',
					amount:undefined
				},
				imageValue:undefined,
				oilTypes:[
					{
						value:'#85',
						text:'85#汽油'
					},
					{
						value:'#90',
						text:'90#汽油'
					},
					{
						value:'#92',
						text:'92#汽油'
					},
					{
						value:'#93',
						text:'93#汽油'
					},
					{
						value:'#95',
						text:'95#汽油'
					},
					{
						value:'#97',
						text:'97#汽油'
					},
					{
						value:'#98',
						text:'98#汽油'
					},
					{
						value:'-50#',
						text:'-50#柴油'
					},
					{
						value:'-35#',
						text:'-35#柴油'
					},
					{
						value:'-20#',
						text:'-20#柴油'
					},
					{
						value:'-10#',
						text:'-10#柴油'
					},
					{
						value:'0#',
						text:'0#柴油'
					},
					{
						value:'+5#',
						text:'+5#柴油'
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
	.imgPrt{
		margin-top: 20rpx;
		padding:40rpx 0 80rpx 25rpx
	}
	.submitBtn{
		position: fixed;
		width: 95%;
		left:auto;
		right:auto;
		bottom:200rpx;
	}
</style>
