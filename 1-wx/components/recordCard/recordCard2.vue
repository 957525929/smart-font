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
						visit: '魏佳楠',
						phone: '18520176742',
						type: '今日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 9:00~18.00'
					},
					{
						visit: '魏佳楠',
						phone: '18520176742',
						type: '今日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 9:00~18.00'
					},
					{
						visit: '魏佳楠',
						phone: '18520176742',
						type: '今日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + ' 9:00~18.00'
					},
					{
						visit: '魏佳楠',
						phone: '18520176742',
						type: '明日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+1) + "日" + ' 9:00~18.00'
					},
					{
						visit: '魏佳楠',
						phone: '18520176742',
						type: '明日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+1) + "日" + ' 9:00~18.00'
					},
					{
						visit: '魏佳楠',
						phone: '18520176742',
						type: '明日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+1) + "日" + ' 9:00~18.00'
					},
					{
						visit: '魏佳楠',
						phone: '18520176742',
						type: '后日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+2) + "日" + ' 9:00~18.00'
					},
					{
						visit: '魏佳楠',
						phone: '18520176742',
						type: '后日',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()+2) + "日" + ' 9:00~18.00'
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
