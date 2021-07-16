<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">保养登记</block>
		</cu-custom>
		<view class="formArea backColor">
			<uni-forms :modelValue="formData" ref="form" border>
				<uni-forms-item label="车辆" :label-width='labelWidth' name="licenseNum">
					<uni-combox :candidates="cars" v-model="formData.licenseNum"></uni-combox>
				</uni-forms-item>
				<uni-forms-item label="进保日期" :label-width='labelWidth' name="jbDate">
					<uni-combox :candidates="cars" v-model="formData.licenseNum"></uni-combox>
				</uni-forms-item>
				<uni-forms-item label="进保日期" :label-width='labelWidth' name="nextJbDate">
					<uni-combox :candidates="cars" v-model="formData.licenseNum"></uni-combox>
				</uni-forms-item>
				<uni-forms-item label="保养类型" :label-width='labelWidth' name="maintainType">
					<uni-data-picker popup-title="请选择保养类型" :localdata="maintainType"></uni-data-picker>
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
					jbDate: undefined,
					nextJbDate: '',
					amount:undefined
				},
				imageValue:undefined,
				maintainType:[
					{
						value:'日常例行保养',
						text:'日常例行保养'
					},
					{
						value:'一级保养',
						text:'一级保养'
					},
					{
						value:'二级保养',
						text:'二级保养'
					},
					{
						value:'磨合期保养',
						text:'磨合期保养'
					},
					{
						value:'季节性保养',
						text:'季节性保养'
					},
					{
						value:'美容护理',
						text:'美容护理'
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
