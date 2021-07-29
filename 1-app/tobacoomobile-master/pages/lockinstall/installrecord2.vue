<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">安装记录</block>
			<!-- <view slot="right" class="action" @tap="showModal" data-target="viewModal">
				<text class="cuIcon-search"></text>
				<text class="text-df">搜索</text>
			</view> -->
		</cu-custom>

		<view class="position-group">
			<view class="treetitle">
				<view class="area">位置</view>
				<view class="uninstall">未安装</view>
				<view class="installed">已安装</view>
				<view class="totalinstall">总数</view>
				<view class="box"></view>
			</view>

			<!-- 一级循环 -->
			<view class="pronames_one" v-for="(item,index) in positionlist" :key="index"
				:class="item.oneliststare?'oneshow':'onehide'">
				<view class="pronames-one-label" @click="onelist(index)">
					<text class="onename">
						<text class="cuIcon-title text-cyan"></text>
						{{item.onename}}
					</text>
					<text class="labeluninstall">{{item.uninstall}}</text>
					<text class="labelinstalled">{{item.installed}}</text>
					<text class="labeltotalinstall">{{item.totalinstall}}</text>
					<label :class="item.oneliststare?'cuIcon-fold':'cuIcon-unfold'">
					</label>
				</view>

				<!-- 二级循环 -->
				<view class="pronames_two" v-for="(item2,index2) in item.positiontwo" :key="index2"
					:class="item2.twoliststare?'twoshow':'twohide'">
					<view class="pronames-two-label" @click="twolist(index,index2)">
						<text class="twoname">
							<text class="cuIcon-title text-green"></text>
							{{item2.twoname}}
						</text>
						<text class="labeluninstall">{{item2.uninstall}}</text>
						<text class="labelinstalled">{{item2.installed}}</text>
						<text class="labeltotalinstall">{{item2.totalinstall}}</text>
						<label :class="item2.twoliststare?'cuIcon-fold':'cuIcon-unfold'"></label>
					</view>

					<!-- 三级循环 -->
					<view class="pronames_three" v-for="(item3,index3) in item2.positionthree" :key="index3"
							:class="item3.threeliststare?'threeshow':'threehide'">
						<view class="pronames_three-label" @click="threelist(index, index2 ,index3)">
							<!-- <label :class="positionSele?'cuIcon-round':'cuIcon-roundcheckfill'"></label> -->
							<text class="threename">
								<text class="cuIcon-title text-olive"></text>
								{{item3.trheename}}
							</text>
							<text class="labeluninstall">{{item3.uninstall}}</text>
							<text class="labelinstalled">{{item3.installed}}</text>
							<text class="labeltotalinstall">{{item3.totalinstall}}</text>
							<label :class="item3.threeliststare?'cuIcon-fold':'cuIcon-unfold'"></label>
						</view>
						
						<view class="pronames_four">
							<view class="pronames_four-label" v-for="(item4,index4) in item3.positionfour" :key="index4"
								@click="fourlist">
								<text class="fourname">
									<text class="cuIcon-title text-yellow"></text>
									{{item4.fourname}}
								</text>
								<view class='cu-tag light bg-red '>未安装</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		positionlist
	} from './data/positionlist.js'

	export default {
		data() {
			return {
				positionSele: true,
				positionlist,
			}
		},

		methods: {

			onelist(index) {
				let positionlist = this.positionlist;

				// 展开收起一级列表 start
				if (positionlist[index]['oneliststare'] == false) {
					positionlist[index]['oneliststare'] = true;
				} else {
					positionlist[index]['oneliststare'] = false;
				}
				// 展开收起一级列表 end
			},

			twolist(index, index2) {

				let positionlist = this.positionlist;
				let positiontwo = this.positionlist[index].positiontwo[index2]['twoliststare'];

				// 展开收起二级列表 start
				if (positiontwo == false) {
					this.positionlist[index].positiontwo[index2]['twoliststare'] = true;
				} else {
					this.positionlist[index].positiontwo[index2]['twoliststare'] = false;
				}
				// 展开收起二级列表 end				
			},
			threelist(index, index2, index3) {
				let positionlist = this.positionlist;
				let positionthree = this.positionlist[index].positiontwo[index2].positionthree[index3]['threeliststare'];
				if (positionthree == false) {
					this.positionlist[index].positiontwo[index2].positionthree[index3]['threeliststare'] = true;
				} else {
					this.positionlist[index].positiontwo[index2].positionthree[index3]['threeliststare'] = false;
				}
			},
			
			fourlist(){
				uni.navigateTo({
					url: "../../components/lock/detail?type=0"
				})
			},
		}
	}
</script>

<style>
	.position-group {
		width: 100%;
		height: auto;
	}

	.treetitle {
		display: flex;
		border-bottom: 5rpx solid #f37b1d;
		color: #f37b1d;
		font-size: 12rpx;
		background: #fff;
		padding: 0px 3%;
		justify-content: space-between;
	}

	.area {
		width: 52%;
		height: 90rpx;
		line-height: 90rpx;
	}

	.uninstall {
		width: 13%;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
	}

	.installed {
		width: 12%;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
	}

	.totalinstall {
		width: 12%;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
	}
	
	.box{
		width: 3.3%;
	}

	/* 一级 */
	.pronames_one {
		width: 100%;
		height: auto;
	}

	.pronames-one-label {
		width: 100%;
		height: 110rpx;
		line-height: 110rpx;
		/* background: #fff; */
		box-sizing: border-box;
		padding: 0px 3%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* border-bottom: 1rpx solid #f1f1f1; */
		background: #fff;
	}

	.pronames-one-label text {
		font-size: 12rpx;
		/* color: #2ebbfe; */
	}

	.onename {
		width: 52%;
		/* font-weight: bold; */
	}

	.labeluninstall {
		width: 13%;
		text-align: center;
		color: red;
		font-weight: bold;
	}

	.labelinstalled {
		width: 12%;
		text-align: center;
		color: #32db72;
		font-weight: bold;
	}

	.labeltotalinstall {
		width: 12%;
		text-align: center;
		font-weight: bold;
	}

	.pronames-one-label label {
		color: #aaa;
		width: 3.3%;
		font-size: 12rpx;
		transition: all 0.5s;

	}

	/* 二级 */
	.pronames_two {
		width: 100%;
		height: auto;
		transition: all 0.5s;
	}

	.pronames-two-label {
		width: 100%;
		height: 110rpx;
		line-height: 110rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0px 3%;
		/* border-bottom: 1rpx solid #ffffff; */
		background: #f9f9f9;
	}

	.twoname {
		margin-left: 6%;
		width: 46%;
	}

	.pronames-two-label text {
		font-size: 12rpx;
		/* color: #333; */
	}

	.pronames-two-label label {
		color: #aaa;
		width: 3.3%;
		font-size: 12rpx;
		transition: all 0.5s;
	}

	/* 三级 */
	.pronames_three {
		width: 100%;
		height: auto;
	}

	.pronames_three-label {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* border-bottom: 1px #ffffff solid; */
		align-items: center;
		padding: 0px 3%;
		background:#f4f4f4;
	}

	.threename {
		margin-left: 12%;
		width: 40%;
	}

	.pronames_three-label text {
		font-size: 12rpx;
		/* color: #868686; */
	}

	.pronames_three-label label {
		color: #aaa;
		width: 3.3%;
		font-size: 12rpx;
		transition: all 0.5s;
	}
	
	
	.pronames_four {
		width: 100%;
		height: auto;
	}
	
	.pronames_four-label {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		flex-direction: row;
		/* border-bottom: 1px #ffffff solid; */
		align-items: center;
		padding: 0px 3%;
	}
	
	.fourname {
		margin-left: 18%;
		width: 36%;
	}
	
	.pronames_four-label text {
		font-size: 12rpx;
		/* color: #868686; */
	}

	/* 展开收起效果 start */
	.oneshow {}

	.oneshow .pronames_two {
		display: block;
	}

	.onehide {}

	.onehide .pronames_two {
		display: none;
	}

	/* 展开收起效果 end */
	.twoshow {}

	.twoshow .pronames_three {
		display: block;
	}

	.twohide {}

	.twohide .pronames_three {
		display: none;
	}
	
	.threeshow {}
	
	.threeshow .pronames_four {
		display: block;
	}
	
	.threehide {}
	
	.threehide .pronames_four {
		display: none;
	}
</style>
