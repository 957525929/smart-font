<template>
	<view>
		<view v-for="(item,index) in messagelist" :key="index">
			<view class="card"  @tap="clickDetail(item)">
				<span class="card-left" >
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
				<span class="card-right text-xs">
					<!-- 切换不同颜色 -->
					<view :style="styleObject[item.typeId]">
						{{item.type}}
					</view>

					<view v-if="item.message" class="cu-tag round bg-red sm" style="margin-top: 17px;">1</view>
				</span>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				messagelist: [{
						name: '倪友聪',
						content: '欢迎参加会议',
						contentData: '请您于2021-7-26上午的9:00的参加项目会议',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '12:32',
						type: '全部',
						typeId: 0,
						red: '1',
						message: '1'
					},
					{
						name: '王宇轩',
						content: '欢迎参加会议',
						contentData: '请您于2021-7-26下午的3:00的参加部门会议',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '15:46',
						type: '已通过',
						typeId: 0,
					},
					{
						name: '后台',
						content: '会议已改期',
						contentData: '后台提醒：会议已改期，详细时间请等待通知',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '11:52',
						type: '已拒绝',
						typeId: 1,
						message: '1'
					},
					{
						name: '倪友聪',
						content: '请电话联系被访问人',
						contentData: '被访问人不在线，请电话联系',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '08:06',
						type: '不在线',
						typeId: 2,
					},
					{
						name: '林雨馨',
						content: '请电话联系受访人',
						contentData: '被访问人不在线，请电话联系',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '10:56',
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
			clickDetail(index) {
				console.log(index)
				this.$emit('send', index)
			},
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
		width: 50%
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

	.name {
		color: #00b050;
	}
</style>
