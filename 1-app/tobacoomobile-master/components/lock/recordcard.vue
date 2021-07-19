<template>
	<view>
		<view v-for="(item,index) in locklist" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view >
				<view class="card">
					<span class="card-left">
						<!-- 显示不同图片 -->
						<image class="card-img" :src="imgSrc[0]" mode="scaleToFill"
							style="width: 5vh; height: 5vh;"></image>
					</span>
					<span class="card-center">
						<view>
							<span class="title">名称：</span>
							<span class="title flex-sub text-left">{{item.name}}</span>
						</view>
						<view>
							<span class="title">位置：</span>
							<span class="title flex-sub text-left">{{item.area}}</span>
						</view>
						<view>
							<span class="title">房间号：</span>
							<span class="title flex-sub text-left">{{item.roomnum}}</span>

							<!-- 切换不同颜色 -->
							<span class="itemtype" :style="styleObject[0]">
								{{item.type}}
							</span>
						</view>
						<view>
							<span class="title">开锁时间：</span>
							<span class="title flex-sub text-left">{{item.time}}</span>
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
				locklist: [{
						name: '中国烟草总公司福建省公司机关',
						area: 'A区域1号楼',
						roomnum: '101',
						time: '2021年7月16日 08:34:22',
						type: '指纹开锁',
					},
					{
						name: '中国烟草总公司福建省公司机关',
						area: 'B区域3号楼',
						roomnum: '305',
						time: '2021年7月16日 08:30:16',
						type: '密码开锁',
					},
					{
						name: '中国烟草总公司福建省公司机关',
						area: 'A区域1号楼',
						roomnum: '105',
						time: '2021年7月16日 08:25:03',
						type: '指纹开锁',
					},
					
				],


				// 图片
				imgSrc: [
					"../../static/lock/openlock.png",
					"../../static/lock/已通过.png",
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
		height: 12.5vh;
		display: flex;
		border-radius: 10px;
	}

	.card-img {
		margin: 3.3vh 3vh;
	}

	.card-center {
		margin-top: 1vh;
	}

	.itemtype {
		float: right;
	}

	.card-type {
		color: #3f7dcc;
	}
</style>
