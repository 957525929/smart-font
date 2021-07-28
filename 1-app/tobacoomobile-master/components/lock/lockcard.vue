<template>
	<view>
		<view v-for="(item,index) in locklist" :key="index">
			
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.type==cardType.type">
				<view class="card" >
					<span class="card-left">
						
						<!-- 显示不同图片 -->
						<image class="card-img" :src="imgSrc[cardType.id]" mode="scaleToFill"
							style="width: 5vh; height: 5vh;"></image>
					</span>
					
					<view class="card-center">
						<view class="flex">
							<view class="flex-sub">位 &nbsp; &nbsp;置：</view>
							<view class="flex-treble"> &nbsp; {{item.area}}</view>
						</view>
						
						<view>
							<span class="title">房间号：</span>
							<span class="title flex-sub text-left">{{item.roomnum}}</span>

						</view>
					</view>
					
					<!-- 切换不同颜色 -->
					<span class="itemtype" :style="styleObject[cardType.id]">
						{{item.type}}
					</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		lockdata
	} from './data/lockdata.js'

	export default {
		data() {
			return {
				locklist: lockdata,

				// 图片
				imgSrc: [
					"../../static/lock/锁.png",
					"../../static/lock/lockfill.png",
				],
				// 颜色
				styleObject: [{
						color: '#f37b1d',
					},
					{
						color: '#31bb50',
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
		margin: 1vh 1vh;
		background-color: white;
		height: 10.5vh;
		display: flex;
		border-radius: 10px;
	}

	.card-img {
		margin: 2.5vh 3vh;
		
	}

	.card-center {
		margin-top: 1vh;
	}

	.itemtype {
		float: right;
		width: 20%;
		margin-top: 7%;
	}

	.card-type {
		color: #3f7dcc;
	}
</style>
