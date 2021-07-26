<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">酒店预订</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">预约人姓名</view>
				<input placeholder="王安" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">预约人电话</view>
				<input placeholder="15877875112" name="input"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">预约时间</view>
				<picker mode="date" :value="date" start="2021-07-19" end="2025-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
				至
				<picker mode="date" :value="date" start="2021-07-19" end="2025-09-01" @change="DateChange1">
					<view class="picker">
						{{date1}}
					</view>
				</picker>
				<!-- <text >共{{}}天</text> -->
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">酒店预定</view>
				<picker @change="PickerChange" :value="index" :range="hotels">
					<view class="picker">
						{{hotels[index]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-text">
				<view class="title">酒店详情</view>
				<div style="margin-left: 80px; margin-bottom: 10px;">
					<text >地址：{{details[index].address}}</text>
					</br>
					<text >星级：{{details[index].star}}</text>     
					<text style="margin-left: 30px;">价格：{{details[index].price}}元</text>
					</br>
					<text >联系人：{{details[index].linkpoeple}}</text>     
					<text  style="margin-left: 30px;">电话：{{details[index].phone}}</text>
				</div>
			</view>
	
			<view class="cu-form-group align-start">
				<view class="title">备注</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="两间双人间
入住人:刘嘉林,李查,林夕,郑华"  name="input"></textarea>
			</view>
			<view class="box">
				<view class="cu-bar btn-group">
					<button class="cu-btn bg-orange shadow-blur round lg" @tap="showModal" data-target="Modal">提交</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalName=='Modal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">【提示】</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						您已成功联系协议酒店
					</view>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				time: '12:01',
				date: '2021-07-19',
				date1: '2021-07-20',
				switchA: false,
				switchB: true,
				//协议酒店
				index: 0,
				hotels: ['福州富力威斯汀酒店', '福州品悦酒店', '福州世纪金源酒店'],
				details:[
					{address:'福州江滨中大道366号',price:'135-215',star:'五星级',linkpoeple:'李霞',phone:'13759655332'},
					{address:'福州东浦路59号	',price:'120~190',star:'四星级',linkpoeple:'尤晓梅',phone:'13053955537'},
					{address:'福州温泉公园路59号',price:'120~180',star:'四星级',linkpoeple:'黄丽娟',phone:'13659655381'},
				],
				
			};
		},
		methods: {
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				console.log(e)
				this.date = e.detail.value
			},
			DateChange1(e) {
				this.date1 = e.detail.value
			},
			SwitchA(e) {
				this.switchA = e.detail.value
			},
			SwitchB(e) {
				this.switchB = e.detail.value
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			//酒店选择
			PickerChange(e) {
				console.log(e.detail.value)
				this.index = e.detail.value
				
			},
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	
	.cu-form-text {
		background-color: #ffffff;
 		padding: 1upx 30upx;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;

	}
	.box {
		margin: 20upx 0;
		bottom: 10px;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
