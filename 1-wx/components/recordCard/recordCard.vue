<template>
	<view>
		<view v-for="(item,index) in applylist" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.type==cardType.type">
				<view class="card">
					<span>
						<!-- 显示不同图片 -->
						<image class="card-img" :src="imgSrc[cardType.id]" mode="scaleToFill"
							style="width: 60px; height: 60px;"></image>
					</span>
					<span class="card-center">
						<view>
							访问人：{{item.visit}}
						</view>
						<view>
							被访问人：{{item.bevisit}}
						</view>
						<view>
							申请时间：{{item.time}}
						</view>
					</span>
					<span class="card-right">
						<!-- 切换不同颜色 -->
						<view :style="styleObject[cardType.id]">
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
				applylist: [{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '待审核',
					},
					{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '待审核',
					},
					{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '待审核',
					},
					{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '已通过',
					},
					{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '已通过',
					},
					{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '已通过',
					},
					{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '已拒绝',
					},
					{
						visit: '魏佳楠',
						bevisit: '倪友聪',
						time: '2020年1月21日 13:46',
						type: '已拒绝',
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
		margin-left: 5px;
		margin-top: 5px;
	}

	.card-type {
		color: #3f7dcc;
		font-size: 16px;
	}
</style>
