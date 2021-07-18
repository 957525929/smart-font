<template>
	<view class="back">
		<text class="subtitle">消息设置</text>
		<view v-for="item in sysList" :key="item.key">
			<listItem :item="item" showSwitch :showRightIcon="false" @changeSwitch="changeSwitch"></listItem>
		</view>
		<text class="subtitle">其它设置</text>
		<view v-for="item in storageMenu" :key="item.key" @tap="cleanData">
			<listItem :item="item">
				<text v-show="currentSize!='0.00KB'">{{currentSize|fnStorage}}</text>
			</listItem>
		</view>
		<view class="loginOutBtn mainBackColor fontColorWhite font32" @tap="exit"><text>退出登录</text></view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	import {
		sysSettingMenu,
		storageMenu,
		storageSize
	} from "@/pages/person/common/person.js"
	const NEW_SYSMENU = Object.freeze({
		sysSettingMenu,
		storageMenu,
		storageSize
	})
	export default {
		computed: {
			...mapState({
				userId: (state) => state.userId,
				phone: (state) => state.phone,
				// 消息
				ableGetNewMessageType: (state) => state.ableGetNewMessageType,
			}),
			sysList(){
				let temp = NEW_SYSMENU.sysSettingMenu
				temp.map(item => {
					item.checked = this.ableGetNewMessageType[item.key]
					return item
				})
				return temp
			}
		},
		onLoad() {
			let that = this;
			uni.getStorageInfo({
				success: function(res) {
					that.currentSize = res.currentSize;
				}
			});
		},
		data() {
			return {
				storageMenu: NEW_SYSMENU.storageMenu,
				currentSize: 0,
			};
		},
		methods: {
			changeSwitch(e) {
				this.$store.commit("changeSetting", e);
			},
			exit() {
				let self = this;
				this.globalApi.loginOut({
					userId:this.userId
				}).then((res) => {
					console.log(res)
					if (res.code == 200) {
						self.$store.commit("loginOut");
					} else{
						uni.showToast({
							title: "抱歉，退出失败，请检查是否登录或联系客服",
							icon: 'none'
						})
					}
				})
				// this.http({
				// 	url: "system/management/people/management/logoff?telephone=" + this.phone,
				// 	method: "POST",
				// }).then((res) => {
				// 	if (res.data == 1) {
				// 		self.$store.commit("loginOut");
				// 	} else if (res === 0) {
				// 		uni.showToast({
				// 			title: "抱歉，退出失败，请检查是否登录或联系客服",
				// 			icon: 'none'
				// 		})
				// 	}
				// });
			},
			cleanData() {
				let that = this;
				uni.showModal({
					title: "是否清除所有缓存?",
					content: "主要包括本地的图片等缓存文件，如若清除将跳转自动登录",
					cancelText: "取消",
					confirmText: "确认",
					success: (res) => {
						if (res.confirm) {
							try {
								uni.clearStorageSync();
								const res = uni.getStorageInfoSync();
								that.currentSize = res.currentSize
							} catch (e) {
								console.log("删除失败");
							}
						}
					}
				});
			},
		},
		filters: {
			fnStorage: function(value) {
				return value !== 0 ? handle(value) : ""

				function handle(value) {
					return value > 0 && value < 1024 ? value.toFixed(2) + "KB" : ((value / 1024).toFixed(2)) + "MB"
				}
			}
		}
	};
</script>

<style>
	.uni-switch-input:after {
		background-color: #28a375;
	}

	/* 列表 */
	.contentList {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
	}

	.rightIcon {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	/* .listIcons { */
	/* 		width:15rpx;
		height:15rpx; */
	/* margin:10px; */
	/* } */
	.loginOutBtn {
		text-align: center;
		margin: 120rpx;
		padding: 20rpx 50rpx;
		border-radius: 5px;
	}
</style>
