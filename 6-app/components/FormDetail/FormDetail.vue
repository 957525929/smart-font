<template>
	<view>
		<form class="cu-list menu sm-border card-menu margin-top" @submit="formSubmit" @reset="formReset">
			<view class="cu-form-group" v-for="item in dataSource" :key="item.key">
				<view class="title basis-sm">{{item.label}}</view>
				<input placeholder="请输入" v-if="!item.type" class="flex-sub"></component>
				<slot :name="item.key" v-else></slot>
			</view>

			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{picList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in picList" :key="index" @tap="ViewImage"
						:data-url="picList[index]">
						<image :src="picList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="picList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-bar btn-group margin-top">
				<button class="cu-btn bg-orange shadow-blur round" form-type="submit">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		name: "form",
		props: {
			dataSource: {
				type: Array
			}
		},
		data() {
			return {
				picList: []
			}
		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						let imgs = this.fixImgList
						if (imgs.length !== 0) {
							this.$store.commit("changeSingleVal", ["fixImgList", imgs.concat(res
								.tempFilePaths)])
						} else {
							this.$store.commit("changeSingleVal", ["fixImgList", res.tempFilePaths])
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.fixImgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '维修上报',
					content: '是否删除此张图片？',
					success: res => {
						if (res.confirm) {
							let imgs = this.fixImgList
							this.$store.commit("changeSingleVal", ["fixImgList", imgs.splice(e.currentTarget
								.dataset.index, 1)])
						}
					}
				})
			},
			textareaInput(e) {
				this.$store.commit("changeSingleVal", ["textareaValue", e.detail.value])
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				// var formdata = e.detail.value
				// uni.showModal({
				// 	content: '表单数据内容：' + JSON.stringify(formdata),
				// 	showCancel: false
				// });
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style>
</style>
