<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">保养登记</block>
		</cu-custom>
		<!-- 	<view class="formArea backColor">
			<uni-forms :modelValue="formData" ref="form" border>
				<uni-forms-item label="车辆" :label-width='labelWidth' name="licenseNum">
					<uni-combox :candidates="cars" v-model="formData.licenseNum"></uni-combox>
				</uni-forms-item>
				<uni-forms-item label="进保日期" :label-width='labelWidth' name="jbDate">
					<picker mode="date" :value="date1">
						<view style="margin-top: 15rpx;">{{date1}}</view>
					</picker>
				</uni-forms-item>
				<uni-forms-item label="下一保养日期" :label-width='labelWidth' name="nextJbDate">
					<picker mode="date" :value="date2">
						<view style="margin-top: 15rpx;">{{date2}}</view>
					</picker>
				</uni-forms-item>
				<uni-forms-item label="保养类型" :label-width='labelWidth' name="maintainType">
					<uni-data-picker popup-title="请选择保养类型" :localdata="maintainType"></uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="保养费用" name="amount" :label-width='labelWidth'>
					<uni-easyinput :inputBorder="false" v-model="formData.amount"  />
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
		</view> -->
		<form>
			<view class="cu-form-group">
				<view class="title">车牌号</view>
				<input></input>
			</view>
			<view class="cu-form-group">
				<view class="title">保养类型</view>
				<picker @change="PickerChange" :value="maintainTypeIndex" :range="maintainType">
					<view class="picker">
						{{maintainTypeIndex>-1?maintainType[maintainTypeIndex]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">保养日期</view>
				<picker mode="date" :value="date1" @change="DateChange1">
					<view class="picker">
						{{date1}}
					</view>
				</picker>
			</view>
			<!-- <view class="cu-form-group">
				<view class="title">下一保养日期</view>
				<picker mode="date" :value="date1" @change="DateChange2">
					<view class="picker">
						{{date2}}
					</view>
				</picker>
			</view> -->
			<view class="cu-form-group">
				<view class="title">保养单位</view>
				<input></input>
			</view>
			<view class="cu-form-group">
				<view class="title">保养费用</view>
				<input></input>
			</view>
			<!-- <view class="cu-form-group">
				<view class="title">间隔里程</view>
				<input></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">备注</view>
				<input></input>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					票据图片
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage"
						:data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<button type="primary" class="margin-top" @click="submitForm">提交</button>
		</form>
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				maintainTypeIndex: -1,
				date1: currentDate,
				date2: currentDate,
				cars: [],
				maintainType: ['日常例行保养', '一级保养', '二级保养', '磨合期保养', '季节性保养', '美容护理'],
				imgList: [],
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			submitForm(form) {},
			PickerChange(e) {
				this.maintainTypeIndex = e.detail.value
			},
			DateChange1(e) {
				this.date1 = e.detail.value
			},
			DateChange2(e) {
				this.date2 = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style scoped>
	.formArea {
		padding-left: 25rpx;
		padding-right: 25rpx;
	}

	.imgPrt {
		margin-top: 20rpx;
		padding: 40rpx 0 80rpx 25rpx
	}

	.submitBtn {
		position: fixed;
		width: 95%;
		left: auto;
		right: auto;
		bottom: 200rpx;
	}
</style>
