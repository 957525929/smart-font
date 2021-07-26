<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>

		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 状态</text>
			</view>
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">申请状态</view>
			<view v-if="this.onjs.disagree" class="text-red">已拒绝</view>
			<view v-else class="text-blue">待审核</view>
		</view>


		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 访问对象</text>
			</view>
		</view>

		<view class="cu-form-group ">
			<view class="title">部门</view>
			{{this.onjs.department}}
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">姓名</view>
			<view>{{this.onjs.visit}}</view>
		</view>


		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约时间</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">日期</view>
			{{this.date}}
		</view>

		<view class="cu-bar bg-white">
			<view class="action">访问时间段</view>
		</view>
		<view class="cu-form-group">
			<view class="title">开始时间</view>
			{{this.onjs.startTime}}
		</view>
		<view class="cu-form-group">
			<view class="title">结束时间</view>
			{{this.onjs.endTime}}
		</view>
		
		<view v-if="!this.onjs.disagree">
			<view class="cu-bar bg-white margin-top">
				<view class='text-xl padding'>
					<text class="text-black text-bold">· 备注</text>
				</view>
			</view>
		
			<view class="cu-form-group align-start ">
				<!-- <view class="title">被访人不在</view> -->
				{{content}}
			</view>
		</view>

		<view v-if="this.onjs.disagree">
			<view class="cu-bar bg-white margin-top">
				<view class='text-xl padding'>
					<text class="text-black text-bold">· 拒绝原因</text>
				</view>
			</view>

			<view class="cu-form-group align-start ">
				<!-- <view class="title">被访人不在</view> -->
				{{disagreeContent}}
			</view>
		</view>

	</view>

</template>
<script>
	export default {
		onLoad(op) {
			if (op) {
				this.onjs = JSON.parse(op.onjs)
				console.log(this.onjs)
				this.date = this.onjs.time.slice(0, 10);
				console.log(this.date)
			}
		},
		data() {
			return {
				modalName: null,
				index: -1,
				disagreeContent: '被访问人不在',
				content:'私人访问'
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
				// console.log(index)
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			// TimeChange(e) {
			// 	this.time = e.detail.value
			// },
			// TimeChange1(e) {
			// 	this.time1 = e.detail.value
			// },
			// textareaBInput(e) {
			// 	this.textareaBValue = e.detail.value
			// }
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
