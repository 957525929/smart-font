<template>
	<view>
		<view v-for="(item,index) in applylist" :key="index" @tap="recordDetail(item)">
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.type==cardType.type">
				<view class="card">
					<span class="picture"  >
						<!-- 显示不同图片 -->
						<image class="card-img" :src="imgSrc[cardType.id]" mode="scaleToFill"
							style="width: 60px; height: 60px;"></image>
					</span>
					<span class="card-center" @tap="goToAllow(item)">
						<view>
							访问人：{{item.visit}}
						</view>
						<view>
							电话号码：{{item.phone}}
						</view>
						<view>
							申请时间：{{item.time}}
						</view>
						<view v-if="cardType.id==1">
							通过时间：{{item.agreeTime}}
						</view>
						<view v-if="cardType.id==2">
							拒绝时间：{{item.disagreeTime}}
						</view>
					</span>
					<span class="card-right">
						<!-- 切换不同颜色 -->
				<!-- 		<view :style="styleObject[cardType.id]">
							{{item.type}}
						</view> -->
						<view v-if="item.type=='待审核'" class="text-green" @tap="agreeGoto">通过</view>
						<view v-if="item.type=='待审核'" class="text-red" style="margin-top: 50rpx;" @tap="disagreeGoto">驳回</view>
					</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		generatePhoneNum
	} from '../../util/mathFunc.js'
	export default {
		data() {
			return {
				applylist: [{
						visit: '魏佳楠',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + '09:46',
						type: '待审核',
						startTime:'10.00',
						endTime:'12.00'
					},
					{
						visit: '郑思楠',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + '13:51',
						type: '待审核',
						startTime:'14.00',
						endTime:'16.00'
					},
					{
						visit: '李伟恒',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + '11:46',
						type: '待审核',
						startTime:'13.00',
						endTime:'15.00'
					},
					{
						visit: '林泽宇',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 5) + "日" + " " + '15:24',
						agreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 5) + "日" + " " + '15:30',
						type: '已通过',
						startTime:'16.00',
						endTime:'18.00'
					},
					{
						visit: '张国柱',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 15) + "日" + " " + '04:26',
						agreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 15) + "日" + " " + '10:24',
						type: '已通过',
						startTime:'13.00',
						endTime:'15.00'
					},
					{
						visit: '王鹏翔',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 1) + "日" + " " + '13:46',
						agreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + '14:15',
						type: '已通过',
						startTime:'13.00',
						endTime:'15.00'
					},
					{
						visit: '华强北',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 10) + "日" + " " + '13:16',
						disagreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 10) + "日" + " " + '16:59',
						type: '已拒绝',
						startTime:'17.00',
						endTime:'19.00'
					},
					{
						visit: '孙志远',
						phone: generatePhoneNum(),
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 1) + "日" + " " + '14:46',
						disagreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 1) + "日" + " " + '17:31',
						type: '已拒绝',
						startTime:'18.00',
						endTime:'20.00'
					},
				],
				// 图片
				imgSrc: [
					"../../static/待审核.png",
					"../../static/已通过.png",
					"../../static/已拒绝.png"
				],
				// 颜色
				styleObject: [{
						color: '#3f7dcc',
						fontSize: '16px',
					},
					{
						color: '#31bb50',
						fontSize: '16px',
					},
					{
						color: '#f93c3c',
						fontSize: '16px',
					},
				],

			}
		},

		props: ["cardType"],

		methods: {
			generatePhoneNum,
			recordDetail(item){
				console.log(item)
				this.$emit('send',item)
			},
			goToAllow(item) {
				var onjs = JSON.stringify(item)
				uni.navigateTo({
					url: "/pages/verify/index?onjs=" + onjs
				});
			},
			agreeGoto(e) {
				this.modalName = null;
				uni.navigateTo({
					url: '/pages/index/staff?PageCur=applyList&TabCur=1'
				});
			},
			disagreeGoto(e){
				this.modalName = null;
				uni.navigateTo({
					url: '/pages/index/staff?PageCur=applyList&TabCur=2'
				});
			},
		}
	}
</script>

<style>
	.card {
		margin: 5px 10px 10px 10px;
		background-color: white;
		height: 90px;
		display: flex;
		border-radius: 10px;
		align-items: center;
	}

	.card-img {
		margin: 5px;
	}

	.card-center {
		margin-top: 5px;
	}

	.card-right {
		margin-left: 30px;
		margin-top: 5px;

	}

	.card-type {
		color: #3f7dcc;
		font-size: 16px;
	}
</style>
