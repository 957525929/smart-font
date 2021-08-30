<template>
	<view>
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">餐卡状态变更</block>
		</cu-custom>

		<view class="cu-form-group">
			<view class="title">餐卡号</view>
			<view>{{ cardData.cardID }}</view>
		</view>
		
		<view class="cu-form-group">
			<view class="title">姓名</view>
			<view>{{ cardData.name }}</view>
		</view>

		<view class="cu-form-group">
			<view class="title">餐卡状态变更</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{ picker[index] }}
				</view>
			</picker>
		</view>
		
		<view class="cu-form-group align-start">
			<view class="title">备注</view>
			<textarea maxlength="-1" :disabled="textmodalName!=null" @input="textareaBInput" v-model="textareaBValue"
				placeholder="请输入备注信息"></textarea>
		</view>

		<view>
			<view class="margin margin-bottom-xs text-sm">温馨提示</view>
			<view class="margin-left padding-left text-xs text-grey">1、挂失后请及时补办</view>
			<view class="margin-left padding-left text-xs text-grey">2、注销时请注意您的账户余额</view>
		</view>

		<view class="padding margin flex">
			<button class="cu-btn bg-grey lg" style="flex:1" @tap="cancle">取消</button>
			<button class="margin-left cu-btn bg-blue lg" style="flex:1" @tap="confirm" data-target="DialogModal">
				确定
			</button>
		</view>

		<!-- 确定模态框 -->
		<view class="cu-modal" :class="modalName=='DialogModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">
						<text class="cuIcon-warn text-orange margin-right-xs"></text>
						注意
					</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-black"></text>
					</view>
				</view>
				<view class="padding-xl bg-white">
					<view v-if="index == 1">
						当前可用余额还有
						<text class="text-green text-bold text-lg">￥{{ cardData.money }}</text>
						元，
					</view>
					<view>
						您确定要将当前餐卡
						<text class="text-bold text-red text-lg">{{ picker[index] }}</text>
						吗？
					</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="okconfirm">确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(item) {
			this.cardData = JSON.parse(item.data)
		},

		data() {
			return {
				cardData: '',
				index: 0,
				picker: ['挂失', '注销'],
				modalName: null,
				textmodalName: null,
				textareaBValue: '',
			}
		},
		methods: {
			PickerChange(e) {
				// 单选
				this.index = e.detail.value
			},
			cancle() {
				// console.log('返回')
				uni.navigateBack({})
			},
			confirm(e) {
				// console.log('确定')
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				// 关闭模态框
				this.modalName = null
			},
			okconfirm() {
				//返回并传递状态变更
				let status = this.index == 0 ? '挂失' : '注销'
				uni.$emit('status', status)
				uni.navigateBack({})
			},
			
			// 备注
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			},
		}
	}
</script>

<style>

</style>
