<template>
	<view>
		<view v-for="(item,index) in applylist" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.type==cardType.type">
				<view class="card" @tap="dataDetail(item)">
					<span>
						<!-- 显示不同图片 -->
						<image class="card-img" :src="'../../static/已通过.png'" mode="scaleToFill"
							style="width: 60px; height: 60px;"></image>
					</span>
					<span class="card-center">
						<view>
							访问人：{{item.visit}}
						</view>
						<view>
							电话号码：{{item.phone}}
						</view>
						<view>
							预约见面时间：{{item.time}}
						</view>
					</span>
				</view>
			</view>

			<view v-if="item.allType">
				<view v-if="item.allType==cardType.allType">
					<view class="card" @tap="dataDetail(item)">
						<span>
							<!-- 显示不同图片 -->
							<image class="card-img" :src="'../../static/已通过.png'" mode="scaleToFill"
								style="width: 60px; height: 60px;"></image>
						</span>
						<span class="card-center">
							<view>
								访问人：{{item.visit}}
							</view>
							<view>
								电话号码：{{item.phone}}
							</view>
							<view>
								预约见面时间：{{item.time}}
							</view>
						</span>
					</view>
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
				date: '',
				applylist: [{
						visit: '林泽宇',
						phone: generatePhoneNum(),
						type: '今日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 09:00~12.00'
					},
					{
						visit: '张国柱',
						phone: generatePhoneNum(),
						type: '今日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 14:00~16.00'
					},
					{
						visit: '王鹏翔',
						phone: generatePhoneNum(),
						type: '今日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 16:00~18.00'
					},
					{
						visit: '张全蛋',
						phone: generatePhoneNum(),
						type: '明日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() + 1) + "日" + ' 09:00~11.00'
					},
					{
						visit: '林二狗',
						phone: generatePhoneNum(),
						type: '明日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() + 1) + "日" + ' 14:00~15.00'
					},
					{
						visit: '王铁柱',
						phone: generatePhoneNum(),
						type: '明日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() + 1) + "日" + ' 15:00~18.00'
					},
					{
						visit: '林淑芬',
						phone: generatePhoneNum(),
						type: '后日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() + 2) + "日" + ' 10:00~12.00'
					},
					{
						visit: '李桂花',
						phone: generatePhoneNum(),
						type: '后日',
						allType: '全部',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() + 2) + "日" + ' 15:00~18.00'
					},
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
			dataDetail(item) {
				console.log("11111111111111")
				console.log(item)
				this.$emit('send', item)
			}
		}
	}
</script>

<style>
	.card {
		margin: 5px 10px 0px 10px;
		background-color: white;
		height: 70px;
		display: flex;
		border-radius: 10px;
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
