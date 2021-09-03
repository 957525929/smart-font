<template>
	<view>
		<cu-custom bgColor="bg-blue">
			<block slot="content">餐卡账户</block>
		</cu-custom>

		<!-- 信息卡片 -->
		<view class="dinner-card margin padding">
			<view class="card-top">
				<view class="card-name">
					<view>
						<image class="img" src="/static/logo.png" mode="widthFix" style="width: 4vh"></image>
					</view>
					<view class="text-lg margin-left-xs">{{ cardData.name }}</view>
				</view>
				<view class="card-name">
					<view class='cu-tag'
						:class="cardData.status == '正常'?'bg-olive':cardData.status == '挂失'?'bg-orange':'bg-red'">
						{{ cardData.status }}
					</view>
					<view v-if="cardData.status == '正常'" class="margin-left-xs text-bold" @tap="edit">
						<text class="cuIcon-write"></text>
					</view>
				</view>
			</view>
			<view class="margin-top-xs">{{ cardData.cardID }}</view>
			<view class="margin-top-sm text-xs">可用余额(元)</view>
			<view class="flex align-center justify-between">
				<view class="card-money">
					<view class="text-xxl text-bold">{{ cardData.money }}</view>
					<view class="margin-left text-bold text-green" @tap="refresh">
						<text class="cuIcon-refresh"></text>
					</view>
				</view>
				<view class="text-bold text-blue" @tap="recharge">
					<span>充值</span>
					<text class="cuIcon-recharge margin-left-xs"></text>
				</view>
			</view>
			<!-- <view class="card-money">
				<view class="text-xxl text-bold">{{ cardData.money }}</view>
				<view class="margin-left text-bold text-green" @tap="refresh">
					<text class="cuIcon-refresh"></text>
				</view>
			</view>
			<view class="margin-top-sm text-bold text-blue" @tap="recharge">充值</view> -->
		</view>

		<!-- 记录 -->
		<view>
			<!-- 消费/充值 -->
			<view class="bg-white padding">
				<picker mode="date" fields="month" :value="countData.date" start="2015-09" :end="countData.endDate"
					@change="bindDateChange">
					<span class="text-bold text-xl">{{countData.date}}</span>
					<span class="text-xxl">
						<text class="cuIcon-triangledownfill"></text>
					</span>
				</picker>
				<view class="flex text-gray text-sm">
					<view>消费￥{{ countData.pay }}</view>
					<view class="margin-left-xs">充值￥{{ countData.recharge }}</view>
				</view>
			</view>

			<!-- 记录切换 -->
			<scroll-view scroll-x class="bg-white nav">
				<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in TabTitle"
					:key="index" @tap="tabSelect" :data-id="index">
					{{ item }}
				</view>
			</scroll-view>

			<!-- 消费记录 -->
			<view v-if="TabCur == 0" class="bg-white">
				<view class="cu-list menu">
					<view class="cu-item" v-for="(item,index) in payData" :key="index">
						<view class="content">
							<view class="margin-top-xs">
								-{{ item.pay }}
							</view>
							<view class="text-gray text-sm">
								{{ item.date }}
							</view>
						</view>
						<view class="action text-gray">
							余额 {{ item.money }}
						</view>
					</view>
				</view>
			</view>

			<!-- 充值记录 -->
			<view v-if="TabCur == 1" class="bg-white">
				<view class="cu-list menu">
					<view class="cu-item" v-for="(item,index) in rechargeData" :key="index" @tap="gotoPage(item)">
						<view class="content">
							<view class="margin-top-xs">
								+{{ item.recharge }}
							</view>
							<view class="text-gray text-sm">
								{{ item.date }}
							</view>
						</view>
						<view class="action flex flex-direction align-end">
							<!-- <view class="text-gray">
								余额 {{ item.money }}
							</view> -->
							<view
								:class="item.status == '成功' ? 'text-green':item.status == '失败' ? 'text-red': item.status == '支付中' ? 'text-orange':'text-black'">
								{{ item.status }}
							</view>
							<view v-if="item.status == '支付中'" class="text-blue text-sm">查询</view>
							<view v-if="item.status == '未支付'" class="text-blue text-sm">重新支付</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 退款记录 -->
		<view v-if="TabCur == 2" class="bg-white">
			<view class="cu-list menu">
				<view class="cu-item" v-for="(item,index) in refound" :key="index">
					<view class="content">
						<view class="margin-top-xs">
							-{{ item.pay }}
						</view>
						<view class="text-gray text-sm">
							{{ item.date }}
						</view>
					</view>
					<view class="action text-gray">
						余额 {{ item.money }}
					</view>
				</view>
			</view>
		</view>
		
		<!-- 支付中模态框 -->
<!-- 		<view class="cu-modal" :class="modalName=='DialogModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">
						支付中
					</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-black"></text>
					</view>
				</view>
				<view class="padding-xl bg-white">
					<view>
						正在为您充值，请耐心等候...
					</view>
				</view>
				<view class="cu-bar bg-white justify-center">
					<view class="action">
						<button class="cu-btn bg-blue" @tap="call">联系客服</button>
					</view>
				</view>
			</view>
		</view> -->
		
		<!-- 重新支付模态框 -->
		<view class="cu-modal" :class="payModalName=='payDialogModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">
						重新支付
					</view>
					<view class="action" @tap="payHideModal">
						<text class="cuIcon-close text-black"></text>
					</view>
				</view>
				<view class="padding-xl bg-white">
					<view>
						该订单尚未支付，是否前往支付？
					</view>
				</view>
				<view class="cu-bar bg-white justify-center">
					<view class="action">
						<button class="cu-btn bg-blue" @tap="gotoPay">去支付</button>
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
				cardData: {
					name: '袁洪',
					cardID: '6217 4545 0321 7821 123',
					money: 500,
					status: '正常',
				},
				countData: {
					endDate: this.getDate('month'),
					date: this.getDate('month'),
					pay: 523.24,
					recharge: 800
				},
				TabCur: 0,
				scrollLeft: 0,
				TabTitle: ['消费记录', '充值记录', '退款记录'],
				payData: [{
						pay: 12,
						date: this.getDate('day') + ' ' + '18:23:11',
						money: null,
					},
					{
						pay: 15.5,
						date: this.getDate('day') + ' ' + '12:05:26',
						money: null,
					},
					{
						pay: 4.5,
						date: this.getDate('day') + ' ' + '08:42:06',
						money: null,
					}
				],
				rechargeData: [{
						recharge: 500,
						date: this.getDate('day') + ' ' + '08:27:44',
						status: '支付中'
					},
					{
						recharge: 200,
						date: this.getDate('day') + ' ' + '08:25:32',
						status: '未支付'
					},
					{
						recharge: 300,
						date: '2021-09-01' + ' ' + '12:20:27',
						status: '成功'
					},
					{
						recharge: 300,
						date: '2021-09-01' + ' ' + '10:19:12',
						status: '失败'
					},
				],
				modalName: null,
				payModalName: null,
				payRecord: '',
				refound: [
					{
						pay: '100.00',
						date: this.getDate('day') + ' ' + '08:40:12',
						money: '500.00',
					}
				]
			}
		},

		onLoad(item) {
			this.account()
			this.numFormat()
			
			//接收状态变更
			uni.$on('status', (status) => {
				this.cardData.status = status
			})
		},

		methods: {
			refresh() {
				console.log('刷新')
			},

			recharge() {
				// console.log('充值')
				uni.navigateTo({
					url: './recharge?data=' + JSON.stringify(this.cardData)
				})
			},

			edit() {
				// console.log('更改状态')
				uni.navigateTo({
					url: './changeStatus?data=' + JSON.stringify(this.cardData)
				})
			},

			bindDateChange(e) {
				// console.log('月份选择')
				this.countData.date = e.target.value
			},

			getDate(item) {
				// console.log('获得当前日期')
				const getDate = new Date()
				let year = getDate.getFullYear()
				let month = getDate.getMonth() + 1
				month = month > 9 ? month : '0' + month
				let day = getDate.getDate()
				day = day > 9 ? day : '0' + day
				let date
				if (item == 'month') {
					date = year + '-' + month
				} else if (item == 'day') {
					date = year + '-' + month + '-' + day
				}
				return date
			},

			tabSelect(e) {
				// console.log('记录切换')
				this.TabCur = e.currentTarget.dataset.id;
			},

			gotoPage(item) {
				if (item.status == '未支付') {
					// console.log('继续支付')
					this.payModalName = 'payDialogModal'
					this.payRecord = item.recharge
				} else if (item.status == '支付中') {
					// this.modalName = 'DialogModal'
					// console.log('查看支付状态')
					uni.showToast({
						title: '查询成功',
						icon: 'none',
						duration: 2000
					})
				}
			},
			
			// call(e) {
			// 	// console.log('联系客服')
			// 	uni.makePhoneCall({
			// 	    phoneNumber: '13459773336'
			// 	});
			// },
			hideModal(e) {
				// 关闭模态框
				this.modalName = null
			},
			payHideModal(e) {
				// 关闭模态框
				this.payModalName = null
			},
			gotoPay(){
				uni.navigateTo({
					url: './pay?data=' + JSON.stringify(this.payRecord)
				})
				this.payModalName = null
			},

			account() {
				// console.log('计算余额')
				this.payData[0].money = this.cardData.money
				for (let i = 1; i < this.payData.length; i++) {
					this.payData[i].money = this.payData[i - 1].money + this.payData[i].pay
				}
			},

			numFormat() {
				// console.log('保留两位小数')
				this.cardData.money = this.cardData.money.toFixed(2)
				this.countData.pay = this.countData.pay.toFixed(2)
				this.countData.recharge = this.countData.recharge.toFixed(2)
				for (let i = 0; i < this.payData.length; i++) {
					this.payData[i].pay = this.payData[i].pay.toFixed(2)
					this.payData[i].money = this.payData[i].money.toFixed(2)
				}
				for (let i = 0; i < this.rechargeData.length; i++) {
					this.rechargeData[i].recharge = this.rechargeData[i].recharge.toFixed(2)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.dinner-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 15rpx;
		background: #E0EAFC;
		background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);
		background: linear-gradient(to right, #CFDEF3, #E0EAFC);

		.card-top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.card-name {
				display: flex;
				align-items: center;
			}
		}

		.card-money {
			display: flex;
			align-items: center;
		}
	}
</style>
