<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">收车登记</block>
		</cu-custom>
		<view class="formArea backColor">
			<uni-forms :modelValue="formData" ref="form" border>
				<uni-forms-item label="车辆" :label-width='labelWidth' name="licenseNum">
					<uni-combox :candidates="cars" v-model="formData.licenseNum"></uni-combox>
				</uni-forms-item>
				<uni-forms-item label="收车里程" :label-width='labelWidth' name="distance">
					<uni-easyinput :inputBorder="false" v-model="formData.distance" />
				</uni-forms-item>
				<uni-forms-item label="备注" :label-width='labelWidth' name="remark">
					<uni-easyinput :inputBorder="false" v-model="formData.remark" type="textarea" />
				</uni-forms-item>
				<button type="primary" class="submitBtn" @click="submitForm">提交</button>
			</uni-forms>
		</view>
		<view class="imgPrt backColor">
			拍照
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
					distance: undefined,
					remark: ''
				},
				imageValue:undefined
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
