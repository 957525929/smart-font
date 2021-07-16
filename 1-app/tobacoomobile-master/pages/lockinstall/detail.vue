<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		<view class="cu-list menu sm-border">
			<view class="cu-form-group">
				<view class="title">位置：</view>
				<view class="title flex-sub text-left">福建烟草总公司机关A区域1号楼</view>
			</view>
			<view class="cu-form-group ">
				<view class="title">房间：</view>
				<view class="title flex-sub text-left">101</view>
			</view>
			<view class="cu-form-group">
				<view class="title">人员详细信息：</view>
			</view>
			<view class="people">
				<view class="cu-list grid col-3">
					<view class="cu-item">
						<text>姓名</text>
					</view>
					<view class="cu-item">
						<text>联系电话</text>
					</view>
					<view class="cu-item">
						<text>部门</text>
					</view>
				</view>
				<view class="cu-list grid col-3">
					<view>
						<text>张三</text>
					</view>
					<view>
						<text>15280375031</text>
					</view>
					<view>
						<text>烟叶管理处</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				图片上传
			</view>
			<view class="action">
				{{imgList.length}}/4
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage"
					:data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
			}
		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '删除图片',
					content: '确定要删除这张图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.people {
		background-color: white;
		padding-bottom: 2vh;
	}
</style>
