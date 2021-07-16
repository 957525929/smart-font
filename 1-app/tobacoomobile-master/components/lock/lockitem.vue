<template>
	<view>
		<!-- 未安装 -->
		<view v-if="type==0 || type==3" class="cu-bar bg-white margin-top">
			<view v-if="type==0" class="action">
				安装完成现场图片上传
			</view>
			<view v-if="type==3" class="action">
				维修完成现场图片上传
			</view>
			<view class="action">
				{{imgList.length}}/4
			</view>
		</view>
		<view v-if="type==0 || type==3" class="cu-form-group">
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
		<view v-if="type==0" class="cu-form-group">
			<view class="title">绑定锁编号：</view>
			<input placeholder="请输入锁编号" name="input"></input>
			<text class='cuIcon-favorfill text-red'></text>
		</view>
		<view v-if="type==0 || type==3" class="cu-form-group">
			<view class="title">当前时间：</view>
			<view class="flex-sub text-left">{{value}}</view>
		</view>
		<view v-if="type==0 || type==3" class="cu-form-group align-start">
			<view class="title">备注：</view>
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput"
				placeholder="请输入备注信息"></textarea>
		</view>
		
		<!-- 已安装 -->
		<view v-if="type==1 ||type==4" class="cu-form-group  margin-top">
			<view v-if="type==1" class="title">安装时间：</view>
			<view v-if="type==4" class="title">维修时间：</view>
			<view class="flex-sub text-left">2021年06月24日 09:27:46</view>
		</view>
		<view v-if="type==1 || type==4" class="cu-bar bg-white">
			<view v-if="type==1" class="action">
				安装完成后现场图片
			</view>
			<view v-if="type==4" class="action">
				维修完成后现场图片
			</view>
			<view class="action">
				2/4
			</view>
		</view>
		<view v-if="type==1 || type==4" class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="cu-avatar round lg"
					style="background-image:url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fjcw520.cn%2Fuploads%2F181123%2F1-1Q123163T9508.jpg&refer=http%3A%2F%2Fjcw520.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629010807&t=109dd44cc0752724d185ed3ce76a2902);">
				</view>
				<view class="cu-avatar round lg"
					style="background-image:url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsinastorage.com%2Fstorage.miaosha.sina.com.cn%2Fproduct%2F20190601%2F2888dcd2e4282d5312f310051624f145.jpeg&refer=http%3A%2F%2Fsinastorage.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629010872&t=c5fa93763e865ecadc7d6ebd42f475ff);">
				</view>
			</view>
		</view>
		<view v-if="type==1" class="cu-form-group">
			<view class="title">锁编号：</view>
			<view class="flex-sub text-left">S0001</view>
		</view>
		<view v-if="type==1 || type==4" class="cu-form-group">
			<view class="title">备注：</view>
			<view v-if="type==1" class="flex-sub text-left">已完成安装</view>
			<view v-if="type==4" class="flex-sub text-left">已完成维修</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["type"],

		data() {
			return {
				imgList: [],
				modalName: null,
				textareaBValue: '',
				value: '',
			}
		},
		created: function() {
			var aData = new Date();

			this.value =
				aData.getFullYear() + "年" +
				(aData.getMonth() + 1) + "月" +
				aData.getDate() + "日" + ' ' +
				aData.getHours() + ':' + aData.getMinutes() + ':' + aData.getSeconds();
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
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style>

</style>
