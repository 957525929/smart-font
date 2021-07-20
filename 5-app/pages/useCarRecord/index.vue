<template>
	<view class="back">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">申请记录</block>
		</cu-custom>
		<view style="display: flex;">
			<view class="myCard2 backColor" style="border-right:#e0e0e0 1rpx solid;">
				<view class="mycard-label">
					年份
				</view>
				<view class="mycard-ctx2">
					2021
				</view>
			</view>
			<view class="myCard2 backColor">
				<view class="mycard-label">
					月份
				</view>
				<view class="mycard-ctx2">
					7
				</view>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
			<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabItems"
				:key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
			</view>
		</scroll-view>
		<view class="backColor">
			<view class="cu-list menu">
				<view class="cu-item arrow" v-for="(item,index) in currentListData" :key="index" @tap="showDetails(item)">
					<view class="content">
						<text class="cuIcon-circlefill text-green"></text>
						<text>{{item.taskName}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				tabItems: ["审核中", "已通过", "未通过"],
				listData1:[
					{
						taskName:"公司团建2021-07-20-01",
						user:'姜轶枫',
						reason:'公司团建',
						date:'2021-07-20'
					},
					{
						taskName:"公务出差2021-07-20-02",
						reason:'公务出差',
						user:'姜轶枫',
						date:'2021-07-20'
					}
				],
				listData2:[
					{
						taskName:"党员学习2021-07-07-01",
						reason:'党员学习',
						user:'姜轶枫',
						date:'2021-07-07'
					},
				],
				listData3:[
					{
						taskName:"公司团建2021-07-20-01",
						reason:'公司团建',
						user:'姜轶枫',
						date:'2021-07-20'
					},
				]
			}
		},
		computed:{
			currentListData(){
				if(this.TabCur==0){
					return this.listData1
				}else if(this.TabCur==1){
					return this.listData2
				}else{
					return this.listData3
				}
			}
		},
		components: {

		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				console.log(this.TabCur)
			},
			showDetails(item){
				uni.navigateTo({
				    url: '/pages/useCarRecord/details?taskName='+item.taskName+'&user='+item.user+'&date='+item.date+'&reason='+item.reason+'&status='+this.TabCur
				});
			}
		}
	}
</script>

<style scoped>
	.myCard{
		display: flex;
		margin-bottom: 1rpx;
		justify-content: space-between;
	}
	.myCard2{
		width: 50%;
		display: flex;
		margin-bottom: 1rpx;
		justify-content: space-between;
	}
	.mycard-label{
		width: 30%;
		/* border: solid; */
		padding: 20rpx;
	}
	.mycard-ctx{
		width: 70%;
		/* border: solid; */
	}
	.mycard-ctx2{
		padding: 20rpx;
	}
	.mycard-ctx3{
		width: 20%;
		padding: 20rpx;
		/* border: solid; */
	}
</style>