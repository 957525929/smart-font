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
				<span class="card-right" :style="styleObject[item.typeId]">
					<!-- 切换不同颜色 -->
					<view @tap="colorChange">
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
						name: '张三',
						content: '项目会议',
						time: '2020年1月21日 13:46',
						type: "删除",
						typeId: 0,
					},
					{
						name: '李四',
						content: '私人访问',
						time: '2020年1月21日 13:46',
						type: "删除",
						typeId: 0,
					},
					{
						name: '王五',
						content: '项目会议',
						type: "删除",
						typeId: 1,
					},
					{
						name: '赵六',
						content: '项目会议改期',
						time: '2020年1月21日 13:46',
						type: "删除",
						typeId: 2,
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
