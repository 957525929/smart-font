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
					<span class="itemtype" :style="styleObject[0]">
						{{item.type}}
					</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		created: function() {
			let aData = new Date();		
			this.value =
				aData.getFullYear() + "年" +
				(aData.getMonth() + 1) + "月" +
				(aData.getDate()-1) + "日"
				
			for( let i = 0; i < this.locklist.length; i++){
				this.locklist[i].day = this.value + ' ' + this.locklist[i].time
			}
		},
		data() {
			return {
				locklist: [{
						area: '中国烟草总公司福建省公司机关.A区域.1号楼',
						roomnum: '101',
						day: '2021年7月19日 08:34:22',
						time: '08:34:22',
						type: '低电量',
					},
					{
						area: '中国烟草总公司福建省公司机关.B区域.3号楼',
						roomnum: '305',
						day: '2021年7月17日 16:30:16',
						time: '16:30:16',
						type: '密码错误多次',
					},
				],


				// 图片
				imgSrc: [
					"../../static/lock/alert.png",
					"../../static/lock/已通过.png",
				],
				// 颜色
				styleObject: [{
						color: 'red',
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
		margin: 3.5vh 3vh;
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
