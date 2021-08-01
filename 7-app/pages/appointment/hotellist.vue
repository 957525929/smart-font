<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true" >
			<block slot="backText">返回</block>
			<block slot="content">协议酒店列表</block>
		</cu-custom>
		
		<view class="cu-modal" :class="modalVisable==true?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">预约详情</view>
						<view class="action" @tap="hideModaldetail">
							<text class="cuIcon-close text-red"></text>
						</view>
					
				</view>
				<view class="padding-xl m-view" style="text-align: left;">
					<view class="m-bottom">
						【协议酒店】：{{curData.name}}
					</view>
					<view class="m-bottom">
						【地址】：{{curData.address}}
					</view>
					<view class="m-bottom">
						【星级】：{{curData.star}}
					</view>
					<view class="m-bottom">
						【价格】：{{curData.price}}
					</view>
					<view class="m-bottom">
						【联系人】：{{curData.linkpoeple}}
					</view>
					<view class="m-bottom">
						【电话】：{{curData.phone}}
						<text class="cuIcon-phone text-green" style="font-size: 20px;" @tap="call(curData.phone)"></text>
						<!-- <button class="smallBtn" style="margin-left: 100rpx;" @tap="call(curData.phone)">拨打</button> -->
					</view>
				</view>
			</view>
		</view>
		
		<view v-for="(item,index) in hoteldetails" :key="index">
				<view class="card" @tap="recordDetail(item,index)">
					<span class="picture">
						<!-- 显示不同图片 -->
						<image class="card-img" src="../../static/meeting/images/楼房.png" mode="scaleToFill" style="width: 60px; height: 60px;"></image>
					</span>
					<span class="card-center">
						<view>
							酒店名称：{{item.name}}
						</view>
						<view>
							价位：{{item.price}}
						</view>
						<view>
							位置：{{ item.address}}
						</view>
					</span>
					<span class="card-right">
						<view v-if="index==curindex" class="text-red" >
							<text class="cuIcon-roundcheckfill text-red" style="font-size: 26px;"></text>
						</view>
					</span>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalVisable:false,
				itemdata:{},
				curData:{},
				curindex:0,
				pages:"",
				prevPage:"",
				currPage:"",
				hoteldetails:[
				  {name:'福州富力威斯汀酒店',address:'福州江滨中大道366号',price:'135-215',star:'五星级',linkpoeple:'李霞',phone:'13759655332',tag:true},
				  {name:'福州品悦酒店',address:'福州东浦路59号	',price:'120~190',star:'四星级',linkpoeple:'尤晓梅',phone:'13053955537',tag:false},
				  {name:'福州世纪金源酒店',address:'福州温泉公园路59号',price:'120~180',star:'四星级',linkpoeple:'黄丽娟',phone:'13659655381',tag:false},
				],
				
			}
		},
	
	// 	props: ["cardType"],
		// mounted() {
		// 	console.log("cardType",this.cardType.id)
		// },
		methods: {
			hideModaldetail(){
				this.modalVisable = false
			},
			//跳转
			// goForm(e) {
			// 	this.modalName1 = null
			// 	//方法一导航
			// 	uni.navigateTo({
			// 		url: './index?itemdata='+JSON.stringify(this.itemdata)
			// 	});	
			// 	//方法二：回到上一页
			// 	// uni.navigateBack({
			// 	//     delta: 1
			// 	// });
			// },
			recordDetail(item,index){
				console.log(item)
				this.modalVisable = true;
				this.curindex=index;
				// if(this.hoteldetails[index].tag==true)
				// 	this.hoteldetails[index].tag=false
				// else if (this.hoteldetails[index].tag==false)
				// 	this.hoteldetails[index].tag=true
				this.curData=item;
				console.log("this.curindex",this.curindex)
				this.pages = getCurrentPages(); 
				this.currPage = this.pages[this.pages.length - 1];   //当前页面
				this.prevPage = this.pages[this.pages.length - 2];//上一个页面 
				console.log("this.prevPage",this.prevPage)
				this.prevPage.index = this.curindex
			},
			call(e){
				uni.makePhoneCall({
					phoneNumber:e
				})
			},
			// BackPage() {
			// 	// uni.navigateBack({
			// 	// 	delta: 1
			// 	// });
			// 	console.log("1",this.curindex)
			// 	uni.navigateTo({
			// 		url: './hotel?index='+this.curindex
			// 	});	
			// }
		
		}
	}
</script>

<style>
	.card {
		margin: 5px 10px 0px 10px;
		background-color: white;
		height: 90px;
		display: flex;
		border-radius: 10px;
		align-items: center;
	}
	
	.card-img {
		margin: 5px;
	}
	
	.card-center {
		margin-top: 5px;
		width: 65%;
	}
	
	.card-right {
		margin-left: 20px;
		margin-top: 5px;
	}
	
	.card-type {
		color: #3f7dcc;
		font-size: 15px;
	}
	.icon{
		    position: absolute;
		    right: 15px;
		    top: 15px;
		    font-size: 26px;
		    width: 30px;
		    height: 30px;
		    text-align: center;
		    line-height: 30px;
	}
</style>
