<template>
	<view>
		<!-- 未安装 -->
		<view v-if="type==0" class="cu-form-group margin-top">
			<view class="title">绑定锁编号：</view>
			<input placeholder="请输入锁编号" name="locknum" v-model="locknum"></input>
			<button class='cu-btn bg-blue' @tap="getlocknum" data-target="DialogModal">获取</button>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">获取锁编号</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl bg-white">
					<view class="cu-form-group">
						<view class="title">WiFi:</view>
						<input placeholder="请输入提供的WiFi名" name="wifi" v-model="wifi"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">密码:</view>
						<input placeholder="请输入提供的WiFi密码" name="wifipassword" v-model="wifipassword"></input>
					</view>
				</view>
				<view class="cu-bar bg-white justify-center">
					<view class="action">
						<button class="cu-btn bg-blue" @tap="okconfirm">连接</button>
					</view>
				</view>
			</view>
		</view>


		<view v-if="type==3 || type==4 || type==5" class="cu-form-group margin-top">
			<view class="title">锁编号：</view>
			<input v-model="input" name="input"></input>
			<text class='cuIcon-favorfill text-red'></text>
		</view>
		<view v-if="type==3" class="cu-form-group">
			<view class="title">报修时间：</view>
			<view class="flex-sub text-left">{{value1}}</view>
		</view>
		<view v-if="type==0" class="cu-bar bg-white">
			<view class="action">
				安装完成现场图片上传
			</view>
			<view class="action">
				{{imgList.length}}/4
			</view>
		</view>
		<view v-if="type==3" class="cu-bar bg-white">
			<view class="action">
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
		<view v-if="type==0 || type==3" class="cu-form-group align-start">
			<view class="title">备注：</view>
			<textarea :disabled="modalName!=null" @input="textareaBInput" placeholder="请输入备注信息"></textarea>
		</view>

		<!-- 已安装 -->
		<view v-if="type==1" class="cu-form-group margin-top">
			<view class="title">锁编号：</view>
			<view class="flex-sub text-left">S0001</view>
		</view>
		<view v-if="type==1" class="cu-form-group">
			<view class="title">安装时间：</view>
			<view class="flex-sub text-left">{{value}}</view>
		</view>
		<view v-if="type==4" class="cu-form-group">
			<view class="title">维修时间：</view>
			<view class="flex-sub text-left">{{value}}</view>
		</view>
		<view v-if="type==1" class="cu-bar bg-white">
			<view class="action">
				安装完成后现场图片
			</view>
			<view class="action">
				2/4
			</view>
		</view>
		<view v-if="type==4" class="cu-bar bg-white">
			<view class="action">
				维修完成后现场图片
			</view>
			<view class="action">
				2/4
			</view>
		</view>
		<view v-if="type==1 || type==4" class="cu-form-group">

			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList1" :key="index" @tap="ViewImage"
					:data-url="imgList1[index]">
					<image :src="imgList1[index]" mode="aspectFill"></image>
				</view>
			</view>
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
				imgList1: ['../../static/lock/lock2.jpg', '../../static/lock/lock3.jpg'],
				modalName: null,
				textareaBValue: '',
				value: '',
				value: '',
				input: 'S0001',
				locknum: '',
				wifi: '@ZeoMap',
				wifipassword: '******',
			}
		},

		created: function() {
			var aData = new Date();

			this.value1 =
				aData.getFullYear() + "年" +
				(aData.getMonth() + 1) + "月" +
				(aData.getDate() - 1) + "日" + ' ' +
				'08:35:22'

			this.value =
				aData.getFullYear() + "年" +
				(aData.getMonth() + 1) + "月" +
				(aData.getDate() - 1) + "日" + ' ' +
				'16:27:46'
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
					urls: this.imgList1,
					current: e.currentTarget.dataset.url
				});
			},

			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			},

			getlocknum(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			okconfirm() {
				this.modalName = null
				this.locknum = 'S0001'
			},
		}
	}
</script>

<style>

</style>
