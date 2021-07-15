<template>
	<view>
		<view v-for="(item,index) in messagelist" :key="index">
			<view class="card">
				<span class="card-left">
					<image class="card-img" src="../../static/message.png" mode="scaleToFill"
						style="width: 60px; height: 60px;"></image>
				</span>
				<span class="card-center">
					<view>
						来自 
						<span class="name">{{' '+ item.name +' '}}</span>
						 的反馈
					</view>
					<view>
						{{item.content}}
					</view>
					<view>
						{{item.time}}
					</view>
				</span>
				<span class="card-right">
					<!-- 切换不同颜色 -->
					<view :style="styleObject[item.typeId]">
						{{item.type}}
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
				messagelist: [{
						name: '倪友聪',
						content: '欢迎参加会议',
						time: '2020年1月21日 13:46',
						type: '已通过',
						typeId: 0,
					},
					{
						name: '倪友聪',
						content: '欢迎参加会议',
						time: '2020年1月21日 13:46',
						type: '已通过',
						typeId: 0,
					},
					{
						name: '后台',
						content: '会议已改期',
						time: '2020年1月21日 13:46',
						type: '已拒绝',
						typeId: 1,
					},
					{
						name: '倪友聪',
						content: '请电话联系受访人',
						time: '2020年1月21日 13:46',
						type: '不在线',
						typeId: 2,
					},
					{
						name: '倪友聪',
						content: '请电话联系受访人',
						time: '2020年1月21日 13:46',
						type: '不在线',
						typeId: 2,
					},

				],
				// 颜色
				styleObject: [{
						color: '#31bb50',
						fontSize: '16px',
					},
					{
						color: '#f93c3c',
						fontSize: '16px',
					},
					{
						fontSize: '16px',
					},
				],

			}
		},


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
		width: 30%;
	}

	.card-center {
		margin-top: 5px;
		width:50%
	}

	.card-right {
		margin-left: 5px;
		margin-top: 5px;
		width: 20%;
		text-align: center;
	}

	.card-type {
		color: #3f7dcc;
		font-size: 16px;
	}
	.name{
		color: #00b050;
	}
</style>
