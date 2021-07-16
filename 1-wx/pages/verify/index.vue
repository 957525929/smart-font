<template>
	<view>
		<cu-custom bgColor="bg-yellow">
			<block slot="content">申请审批</block>
		</cu-custom>
		
		
		<view class="cu-bar bg-white ">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约人信息</text>
			</view>
		</view>

		<view class="cu-form-group align-center bg-white">
			<view class="title">姓名</view>
			<input name="input" >{{person.name}}</input>
		</view>
		<view class="cu-form-group solid-bottom">
			<view class="title" >手机号</view>
			<input name="input">{{person.phone}}</input>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 访问对象</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">姓名：</view>
			<!-- <picker @change="PickerChange" :value="index" :range="picker"> -->
				<view class="picker text-left">
					{{person.people}}
				</view>
	<!-- 		</picker> -->
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 预约时间</text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">日期选择</view>
			<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
				<view class="picker">
					{{person.date}}
				</view>
			</picker>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='text-xl padding'>
				<text class="text-black text-bold">· 备注</text>
			</view>
		</view>

		<view class="cu-form-group">
			<textarea maxlength="-1" >{{person.content}}</textarea>
		</view>

		<view class="bottom padding">
			<view class="leftBottom">
				<view class='padding'>
						<button class="cu-btn lg bg-red">拒绝</button>
				</view>
				<!-- 	<view class="text-orange"></view> -->
			</view>
			<view class="rightBottom">
				<view class='padding'>
						<button class="cu-btn lg bg-white">同意</button>
				</view>
			</view>
		</view>
	</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				person: {
					name: '魏佳楠',
					phone: '13675824231',
					date: '2021-07-04',
					type: 'allow',
					people:'倪友聪',
					content:'11'
				},
				modalName: null,
				PageCur: 'appoient'
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
				// console.log(index)
			},
			DateChange(e) {
				this.person.date = e.detail.value
			},
			// textareaBInput(e) {
			// 	this.textareaBValue = e.detail.value
			// }
			NavChange: function(e) {
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			}
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
