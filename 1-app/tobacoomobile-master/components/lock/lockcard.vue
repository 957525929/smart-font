<template>
	<view>
		<view v-for="(item,index) in locklist" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.type==cardType.type">
				<view class="card" @click="detail(item,index)">
					<span class="card-left">
						<!-- 显示不同图片 -->
						<image class="card-img" :src="imgSrc[cardType.id]" mode="scaleToFill"
							style="width: 8.8vh; height: 8.8vh;"></image>
					</span>
					<span class="card-center">
						<view>
							名称：{{item.name}}
						</view>
						<view>
							位置：{{item.area}}
						</view>
						<view>
							房间号：{{item.roomnum}}
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
	import { lockdata } from './data/lockdata.js'
	
	export default {
		data() {
			return {
				locklist: lockdata,
				
				// 图片
				imgSrc: [
					"../../static/lock/message.png",
					"../../static/lock/已通过.png",
				],
				// 颜色
				styleObject: [{
						color: '#f37b1d',
						fontSize: '16px',
					},
					{
						color: '#31bb50',
						fontSize: '16px',
					},
				],

			}
		},

		props: ["cardType"],

		methods: {
			detail(item,index){
				console.log(item,index)
				uni.navigateTo({
				    url: '../../pages/lockinstall/detail'
				});
			}
		}
	}
</script>

<style>
	.card {
		margin: 1vh 1vh;
		background-color: white;
		height: 10.5vh;
		display: flex;
		border-radius: 10px;
	}

	.card-img {
		margin: 0.8vh 2vh;
	}

	.card-center {
		margin-top: 1vh;
	}

	.card-right {
		margin-left: 6vh;
		margin-top: 1vh;
	}

	.card-type {
		color: #3f7dcc;
	}
</style>
