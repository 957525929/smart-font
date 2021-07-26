<template>
	<view>
		<view v-for="(item,index) in messagelist" :key="index">
			<view class="card" @tap="clickDetail(item)">
				<span class="card-left">
					<image class="card-img" src="../../static/message.png" mode="scaleToFill"
						style="width: 60px; height: 60px;"></image>
				</span>
				<span class="card-center" >
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
				<span class="card-right" :style="styleObject[item.typeId]">
					<!-- 切换不同颜色 -->
					<view @tap="colorChange">
						{{item.type}}
					</view>
					<view v-if="item.message" class="cu-tag round bg-red sm" style="margin-bottom: 12px;">1</view>
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
						name: '赵大华',
						content: '项目会议',
						contentData: `请您于${new Date().getFullYear() + "-" +
							(new Date().getMonth() + 1) + "-" +
							(new Date().getDate() - 20)}下午的3:00的参加项目会议`,
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '12:46',
						// type: "删除",
						typeId: 0,
						message: '1'
					},
					{
						name: '王鹏翔',
						content: '私人访问',
						contentData: `请您于${new Date().getFullYear() + "-" +
							(new Date().getMonth() + 1) + "-" +
							(new Date().getDate() - 10)}下午的3:00的参加项目会议`,
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 10) + "日" + " " + '13:46',
						// type: "删除",
						typeId: 0,
						green: '1'
					},
					{
						name: '赵二喜',
						content: '项目会议',
						contentData: `请您于${new Date().getFullYear() + "-" +
							(new Date().getMonth() + 1) + "-" +
							(new Date().getDate() - 7)}上午的10:00的参加项目会议`,
						type: "删除",
						typeId: 1,
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate() - 7) + "日" + " " + '08:31',
					},
					{
						name: '赵冰冰',
						content: '项目会议改期',
						contentData: `请您于${new Date().getFullYear() + "-" +
							(new Date().getMonth() + 1) + "-" +
							(new Date().getDate())}上午的5:00的参加项目会议`,
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + '15:46',
						// type: "删除",
						typeId: 2,
						message: '1'
					},

				],
				// 颜色
				styleObject: [{
						color: '#ffffff',
					},
					{
						backgroundColor: ' #E54D42',
						color: '#ffffff',
						fontSize: '16px',
					},
					{
						color: '#ffffff',
						// fontSize: '16px',
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
		width: 60%;
	}

	.card-center {
		margin-top: 5px;
		width: 60%;
		margin-left: 10px;
	}

	.card-right {
		margin-left: 5px;
		margin-top: 5px;
		width: 20%;
		text-align: center;
		line-height: 70px;
		/* background-color: #E54D42; */
		border-radius: 10px;
	}

	.card-type {
		color: #3f7dcc;
		font-size: 16px;
	}

	.name {
		color: #00b050;
	}
</style>
