<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">申请明细</block>
			<block slot="right" v-if="status==0||status==2"><a style="margin-right: 20rpx;">撤销申请</a></block>
		</cu-custom>
		<view class="cu-bar bg-white solid-bottom" v-if="status==2">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 申请驳回原因：
			</view>
			<view class="action">
				该申请不符合公司条目规定！
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav" v-if="status==1">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''"
					v-for="(item,index) in tabItems" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view v-if="TabCur==0">
			<form>
				<view class="cu-form-group">
					<view class="title">用车人/单位</view>
					<input value="姜轶枫" name="user"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">联系电话</view>
					<input value="13756372788" name="phone"></input>
					<view class="cu-capsule radius">
						<view class='cu-tag bg-blue '>
							+86
						</view>
						<view class="cu-tag line-blue">
							中国大陆
						</view>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">乘客数</view>
					<input name="seatNum" value="4"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用车事由</view>
					<input :value="formData.reason" name="reason"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用车日期</view>
					<input :value="date"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用车时间</view>
					<input value="15:00"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">出发地</view>
					<input value="福建省福州市闽侯县创业大厦" name="from"></input>
					<text class='cuIcon-locationfill text-orange'></text>
				</view>
				<view class="cu-form-group">
					<view class="title">目的地</view>
					<input value="福建省福州市宝龙广场" name="to"></input>
					<text class='cuIcon-locationfill text-orange'></text>
				</view>
				<view class="cu-form-group">
					<view class="title">往返类型</view>
					<uni-data-checkbox v-model="formData.singleOrRound" :localdata="tripType" />
				</view>
				<button v-if="status==0||status==2" type="primary" class="margin-top" @click="submitForm">提交修改</button>
			</form>
		</view>
		<view v-if="TabCur==1">
			<form>
				<view class="cu-form-group">
					<view class="title">车牌号码</view>
					<input value="闽A123401"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">车辆类型</view>
					<input value="中型轿车"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">司机姓名</view>
					<input value="胡宇靖"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">司机电话</view>
					<input value="13856677280" name="from"></input>
					<text class='cuIcon-phone text-orange'></text>
				</view>
				<button type="primary" class="margin-top" @click="submitForm">呼叫司机</button>
			</form>
		</view>	
	</view>
</template>

<script>
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		        // console.log(option.reason); //打印出上个页面传递的参数。
				this.formData.reason=option.reason
				this.status=option.status
				this.date=option.date
		    },
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				status:undefined,
				date:undefined,
				tabItems: ["基础信息", "调度信息"],
				formData: {
					user: '姜轶枫',
					phone: '13756372788',
					seatNum: undefined,
					reason: undefined,
					from: undefined,
					to: undefined,
					singleOrRound: '1',
				},
				// tripType: ['单程','双程'],
				tripType: [{
						text: '单程',
						value: '1'
					},
					{
						text: '双程',
						value: '2'
					}
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				console.log(this.TabCur)
			},
			submitForm(form) {}
		}
	}
</script>

<style>
</style>
