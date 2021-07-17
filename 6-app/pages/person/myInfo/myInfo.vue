<template>
	<view class="back fontColor secBack font30 fontColorGrey" v-if="!showPage">
		<!-- 头像 -->
		<view class="avatCard card backColor">
			<Avatar ref="avat" :widthIs="150"></Avatar>
			<text class="" @tap="changeto">点击更换头像</text>
		</view>
		<!-- 个人信息 -->
		<edit ref="edit" @onConfirm="onConfirm"></edit>
		<view v-for="item in Info" :key="item.title" @tap="Go(item)">
			<listItem :item="item" :colorIs="colorIs">
				<text class="fontColorGrey">{{item.content}}</text>
			</listItem>
		</view>
		
	</view>
	<!-- #ifndef MP-WEIXIN -->
	<component :is="loadItem" @changeFace="getFaceMsg" :btn_text="btn_text" :tips_text="tips_text" :image_url="image_url" v-else :class="loadItem==='face'?'faceDiv':'back fontColor secBack font30 fontColorGrey'"></component>

	<!-- #endif -->
	<!-- #ifdef MP-WEIXIN -->
	<view class="back" v-else >
		<infoAddress v-if="loadItem==='infoAddress'"></infoAddress>
		<infoIDCard v-else-if="loadItem==='infoIDCard'"></infoIDCard>
	</view>	
	<!-- #endif -->
</template>

<script>
	import edit from "@/pages/component/person/components/person/myinfo/edit.vue";
	import Avatar from "@/components/person/Avatar.vue"
	//xiangqing 
	import infoAddress from '@/pages/component/person/components/person/myinfo/infoAddress.vue';
	// #ifdef APP-PLUS
	import face from '@/pages/component/person/components/person/face.vue';
	// #endif
	
	import infoIDCard from '@/pages/component/person/components/person/myinfo/infoIDCard.vue'
	
	// import person from "@/common/person/myInfo.js";
	import { judgeNull } from '@/common/util.js'
	// const NEW_PERINFO = Object.freeze(person)
	const perValue = uni.getStorageSync("perInfo")
	export default {
		onLoad() {
			this.Info.map(item => {
				if(item.children&&item.key!=="sex"){
					item.content = judgeNull(perValue[item.key])?item.children[1]:item.children[0]
				}else{
					item.content = judgeNull(perValue[item.key])?perValue[item.key]:"暂无数据"
				}
				
				return item
			})
			this.getInfo()
		},
		computed: {
			userId() {
				return this.$store.state.userId
			}
		},
		components: {
			Avatar,
			edit,
				infoAddress,
				// #ifdef APP-PLUS
				face,
				// #endif			    
				infoIDCard
		},
		watch: {
			showPage(newValue, oldValue) {
				if(!newValue){
					uni.setNavigationBarTitle({
						title: "个人信息"
					})					
				}
			}
		},
		data() {
			return {
				showPage:false,
				Info: [{
						key: 'telephone',
						content: '',
						title: '登录手机号',
						url: '',
						fun:'showMsg'
					},
					{
						key: 'userName',
						content: '环保用户',
						title: '用户名',
						url: '',
						fun:'showForm'
					},
					{
						key: 'sex',
						content: '男',
						title: '性别',
						url: '',
						children: ["男", "女"],
						fun:'showActions'
					},
					{
						key: 'address',
						content: '待填写',
						title: '家庭地址',
						url: 'infoAddress',
						children: ["待填写", "已填写"],
						fun:'goto'
					},
					// #ifndef MP-WEIXIN
					{
						key: 'isExitface',
						content: '待采集',
						title: '人脸采集',
						url: 'face',
						children: ["待采集", "已采集"],
						fun:'goto'
					},
					//#endif
					{
						key: 'idNumber',
						content: '未认证',
						title: '身份认证',
						url: 'infoIDCard',
						children: ["待认证", "已认证"],
						fun:'goto'
					}
				],
				//xiangqing
				loadItem:"",
				faceBase64:"",
				btn_text: "开始采集",
				tips_text: "请正对手机，确保光线充足",
				image_url: "/pages/component/person/static/person/sweep-head.jpg",
				// Info: NEW_PERINFO.myInfo,
				avatbase64: "",
				colorIs: "#616161",
			};
		},
		methods: {
			changeto() {
				this.$refs["avat"].chooseImage()
			},
			getInfo() {
				let self = this
				this.personApi.getPerInfo({
					userId: this.userId
				}).then((res) => {
					if(res.data.length!==0&&JSON.stringify(perValue)!==JSON.stringify(res.data)){
						self.Info.map(item => {
							if(item.children&&item.key!=="sex"){
								item.content = judgeNull(res.data[item.key])?item.children[1]:item.children[0]
							}else{
								item.content = judgeNull(res.data[item.key])?res.data[item.key]:"暂无数据"
							}					
							return item
						})
						uni.setStorage({
							key: "perInfo",
							data: res.data
						})						
					}
				})
			},
			showMsg(){
				this.$msg("抱歉，登录账号不能修改")
			},
			showForm() {
				this.$refs.edit.show();
			},
			showActions(val) {
				let self = this
				uni.showActionSheet({
					itemList: val.children,
					success: function(res) {
						self.updateInfo(val.key,val.children[res.tapIndex])
					}
				});
			},
			goto(val) {
				this.showPage=true
				this.loadItem = val.url
				uni.setNavigationBarTitle({
					title: val.title
				})
			},
			Go(item) {
				let self = this
				this[item.fun](item)
			},
			updateInfo(name, val) {
				this.personApi.updatePerInfo({
					userId: this.userId,
					[name]: val
				}).then((res) => {
					this.$msg("修改成功")
					this.getInfo()
				})
			},
			onConfirm: function(e) {
				if (e === "") {
					this.$msg("用户名不能为空")
				} else {
					if (e.length > 5) {
						this.$msg("设置失败，用户名不超过10个字符")
					} else {
						this.updateInfo("userName", e)
					}
				}
			},
			//xiangqing
			//刷脸
			getFaceMsg(data) {
				let self = this
				this.faceBase64 = data
				this.personApi.addPerFace({
						files: "data:image/jpeg;base64," + data,
						userId: this.userId,
					}).then(res => {
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
		},
		onBackPress(e) {
			if(this.showPage){
				this.showPage = false
				return true;
			}
		}
	};
</script>

<style>
	.avatCard {
		padding-bottom: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card {
		margin: 10px 30rpx 0 30rpx;
		border-radius: 5px;
		padding: 20rpx 20rpx 20rpx 30rpx;
	}

	.avat {
		width: 80px;
		height: 80px;
		margin: 20px;
	}

	/* 列表 */
	.contentList {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.listIcons {
		width: 15px;
		height: 15px;
		margin: 10px;
	}

	.fontContent {
		flex: 1;
	}
	
	.faceDiv{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-100%);
	}
</style>
