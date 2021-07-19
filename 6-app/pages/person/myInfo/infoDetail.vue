<template>
	<!-- #ifndef MP-WEIXIN -->
	<view class="" :class="loadItem==='face'?'faceDiv':'back'">
		<component :is="loadItem" @changeFace="getFaceMsg" :btn_text="btn_text" :tips_text="tips_text" :image_url="image_url"></component>
	</view>	
	<!-- #endif -->
	<!-- #ifdef MP-WEIXIN -->
	<view class="back">
		<infoAddress v-if="loadItem==='infoAddress'"></infoAddress>
		<infoIDCard v-else-if="loadItem==='infoIDCard'"></infoIDCard>
	</view>		
	<!-- #endif -->
</template>

<script>
	import {infoList} from "@/common/person/myInfo.js"
	const NEW_INFO = Object.freeze(infoList)
	import infoAddress from '@/pages/component/person/components/person/myinfo/infoAddress.vue';
	// #ifdef MP-WEIXIN
	import face from '@/pages/component/person/components/person/face.vue';
	// #endif
	import infoIDCard from '@/pages/component/person/components/person/myinfo/infoIDCard.vue'

	export default {
		components: {
			infoAddress,
			// #ifdef MP-WEIXIN
		    face,
			// #endif
			infoIDCard
		},
		data() {
			return {
				infoList:NEW_INFO,
				loadItem:"",
				faceBase64:"",
				btn_text: "开始采集",
				tips_text: "请正对手机，确保光线充足",
				image_url: "/pages/component/person/static/person/sweep-head.jpg",
				// 
				licenseIDStr: "TGMobile4-face-android",
				txtColor: "#3987FD",
				bgColor: "#2F2F33",
				roundColor: "#3987FD",

				memName: "",
				pusher: null,
				userId_face: "asdfghjk",
				orderNo: "asdfghjk9",
				nonce: "asdfghjkasdfghjkasdfghjkasdfgh12",
				appid: "IDAQCw55",
				sign: "6E6E3DF12678441D17BCE053B02CD3B970AE1F95",
				licence: "acmDg3yMLcj0CAqSc7M/yoS9rnUkKtzrGaj7P0+532Akdp/PtkDtskUf+B7/da7UmBQym6wcBG1dQmLnyAh8IRWvswMwc4rrRDIWFMTpTWNzhdhIk/opk9p/pEUQi8ctP1quH1Fir3q2+WI03rvxOrcJESTeF3Hvq6m73sFyp3c0R/h6oQtpXhSOGuGnjzjhof0Hgqp5tk5Iu06gPAcFpMATlkZuF1/uwIL8/t5gwB5wSeZwHgj9W8I2aKsi4zfSZGtRAzj/4skQfmEG36AtOpPwUbS5W814QgMUMKcdWHPOyVX1813oau5E+hvAatgSlfGMez+KT7GyjOtZpn0M6A==",
				secret: "fqump8YlkiUGXxA4oprqyfmLzpvfhuYH0rbe61DD3b2LfQlRb5NL6QMzpK4zpOm5",
				grant_type: "client_credential",
				Info: {},
				current: "",
			};
		},
		onLoad(options) {
			this.loadItem = NEW_INFO[JSON.parse(options.infoIs)]
			uni.setNavigationBarTitle({
				title: JSON.parse(options.infoIs)
			})
		},
		mounted() {},
		methods: {
			//刷脸
			getFaceMsg(data) {
				console.log(data)
				let self = this
				this.faceBase64 = data
				this.personApi.addPerFace({
						files: "data:image/jpeg;base64," + data,
						userId: this.$store.state.userId,
					}).then(res => {
						console.log(res)
					if (res.data === 1) {
						this.image_url = "/static/public/success.png";
						this.tips_text = "成功录入人脸信息";
						this.btn_text = "重新采集";
						this.$msg("人脸录入成功")
					} else {
						this.$msg("人脸录入失败")
					}
				})
			},
			//权限
			async requestAndroidPermission(permisionID) {
				var that = this;
				var result = await permijs.requestAndroidPermission(permisionID);
				var strStatus;
				if (result == 1) {
					strStatus = "已获得授权";
				} else if (result == 0) {
					strStatus = "未获得授权";
					uni.showModal({
						content: "请打开权限，否则无法使用",
						success: function(res) {
							if (res.confirm) {
								console.log("lygg.用户点击确定");
								that.requestAndroidPermission(permisionID); //相机
							} else if (res.cancel) {
								console.log("lygg.用户点击取消");
							}
						},
					});
				} else {
					strStatus = "被永久拒绝权限";
					uni.showModal({
						content: "请打开权限，否则无法使用。" + permisionID,
						success: function(res) {
							if (res.confirm) {
								console.log("lygg.用户点击确定");
								permijs.gotoAppPermissionSetting();
							} else if (res.cancel) {
								console.log("lygg.用户点击取消");
							}
						},
					});
				}
				console.log("lygg.strStatus=" + strStatus + ",result=" + result);
			},
			judgeIosPermission: function(permisionID) {
				var result = permijs.judgeIosPermission(permisionID);
				if (result) {} else {
					uni.showModal({
						content: "请打开权限，否则无法使用",
						success: function(res) {
							if (res.confirm) {
								console.log("lygg.用户点击确定");
								permijs.gotoAppPermissionSetting();
							} else if (res.cancel) {
								console.log("lygg.用户点击取消");
							}
						},
					});
				}
				console.log("lygg.result=" + result);
			},
		},
	};
</script>

<style scoped>
	.faceDiv{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-100%);
	}
</style>
