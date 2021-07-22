<template>
	<view>
		<view v-for="(item,index) in applylist" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.type==cardType.type">
				<view class="card">
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
</template>

<script>
	export default {

		data() {
			return {
				date: '',
				applylist: [{
						visit: '林泽宇',
						phone: '18754767212',
						type: '今日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 09:00~12.00'
					},
					{
						visit: '张国柱',
						phone: '13557476742',
						type: '今日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 14:00~16.00'
					},
					{
						visit: '王鹏翔',
						phone: '18545176742',
						type: '今日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 16:00~18.00'
					},
					{
						visit: '张全蛋',
						phone: '18153176742',
						type: '明日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+1) + "日" + ' 09:00~11.00'
					},
					{
						visit: '林二狗',
						phone: '18520177412',
						type: '明日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+1) + "日" + ' 14:00~15.00'
					},
					{
						visit: '王铁柱',
						phone: '18880176742',
						type: '明日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+1) + "日" + ' 15:00~18.00'
					},
					{
						visit: '林淑芬',
						phone: '18520524242',
						type: '后日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+2) + "日" + ' 10:00~12.00'
					},
					{
						visit: '李桂花',
						phone: '18520174252',
						type: '后日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+2) + "日" + ' 15:00~18.00'
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
