<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">申请审批</block>
		</cu-custom>


		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约人信息</text>
			</view>
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">姓名</view>
			<view>{{person.name}}</view>
		</view>
		<view class="cu-form-group solid-bottom">
			<view class="title">手机号</view>
			{{person.phone}}
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约时间</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">日期</view>
			{{date}}
		</view>

		<view class="cu-bar bg-white">
			<view class="action">访问时间段</view>
		</view>
		<view class="cu-form-group">
			<view class="title">开始时间</view>
				{{time}}
		</view>
		<view class="cu-form-group">
			<view class="title">结束时间</view>
				{{time1}}
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 备注</text>
			</view>
		</view>

		<view class="cu-form-group align-start ">
			<!-- <view class="title">被访人不在</view> -->
			{{content}}
		</view>

		<view class="bottom padding">
			<view class="leftBottom">
				<view class='padding'>
					<button class="cu-btn lg bg-red" @tap="showModal" data-target="DialogModal1">拒绝</button>
				</view>
				<!-- 	<view class="text-orange"></view> -->
			</view>
			<view class="rightBottom">
				<view class='padding'>
					<button class="cu-btn lg bg-white" @click="hideGoto">同意</button>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">拒绝原因</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="cu-form-group">
						<view class="title">拒绝原因</view>
						<input placeholder="请说明拒绝原因" name="input"></input>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>

					</view>
				</view>
			</view>
		</view>

	</view>

</template>

<script>
import { generatePhoneNum } from '../../util/mathFunc.js'
	export default {
		created: function() {
			let aData = new Date();

			this.date =
				aData.getFullYear() + "-" +
				(aData.getMonth() + 1) + "-" +
				(aData.getDate())

		},
		data() {
			return {
				modalName: null,
				index: -1,
				time: '9.00',
				time1: '18.00',
				person: {
					name: '魏佳楠',
					phone: generatePhoneNum(),
					type: 'allow',
					people: '倪友聪',
				},
				PageCur: 'appoient',
				date: '',
				content: '私人会面'
			}
		},
		methods: {
			generatePhoneNum,
			PickerChange(e) {
				this.index = e.detail.value
				// console.log(index)
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			NavChange: function(e) {
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			hideGoto(e) {
				this.modalName = null;
				uni.navigateTo({
					url: '/pages/index/staff?PageCur=applyList&TabCur=1'
				});
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
		}
	}
</script>

<style>
	.bottom {
		display: flex;
	}

	.leftBottom {
		width: 50%;
		margin: auto;
		text-align: center;
		border-right: 1px solid #f5f8fe;
	}

	.rightBottom {
		width: 50%;
		margin: auto;
		text-align: center;
	}
</style>
