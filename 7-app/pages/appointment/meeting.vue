<template>
	<view>
		<cu-custom  bgColor="bg-gradual-blue"  :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">会议室预约</block>
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
			<view class="cu-form-group">
				<view class="title">会议名称</view>
				<input placeholder="项目周例会15" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">会议地点</view>
				<input placeholder="福州市烟草专卖局公司" name="input"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 会议室选择
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="RadioModal">选择</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop="">
					<radio-group class="block" @change="RadioChange">
						<view class="cu-list menu text-left">
							<view class="cu-item" v-for="(item,index) in 5" :key="index">
								<label class="flex justify-between align-center flex-sub">
									<view class="flex-sub">会议室20{{index +1}}</view>
									<radio class="round" :class="radio=='radio' + index?'checked':''" :checked="radio=='radio' + index?true:false"
									 :value="'radio' + index"></radio>
								</label>
							</view>
						</view>
					</radio-group>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">会议日期</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">会议时间</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
					<view class="picker">
						{{time}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">备注</view>
				<input placeholder="参与人:产品组所有人  内容:第一期XX项目周例会" name="input"></input>
			</view>
		
			<view class="cu-form-group margin-top">
				<view class="title">短信通知</view>
				<switch @change="SwitchA" :class="switchA?'checked':''" :checked="switchA?true:false"></switch>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">会前提醒</view>
				<switch @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false"></switch>
			</view>
			<!-- #ifndef H5 || APP-PLUS || MP-ALIPAY -->
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
						您已成功提交会议申请
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
				index: -1,
				picker: [],
				time: '12:01',
				date: '2018-12-25',
				switchA: false,
				switchB: true,
				modalName: null,
				radio: 'radio1',
			};
		},
		methods: {
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
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
			RadioChange(e) {
				this.radio = e.detail.value
			},
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.box {
		margin: 20upx 0;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>

