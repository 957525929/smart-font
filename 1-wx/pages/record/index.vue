<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的预约</block>
			<block slot="right">
				<view class="action">
					<view class='cuIcon-cu-image'>
						<text class="cuIcon-searchlist" @tap="showModal" data-target="viewModal"></text>
					</view>
				</view>
			</block>
		</cu-custom>
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			<view @tap="gotoDetail">
				<recordCard :value="value[0]" @send="recordDetailed" />
			</view>
			
			<view style="z-index:999">
				<view class="cu-avatar xl round margin-right  bg-blue shadow-warp"
					style=" float: right;">
					<text class="avatar-text" @tap="openAppoient">发起<br>预约</text>
				</view>
			</view>
	
			
		</scroll-view>

		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">

			<search1 @send="getIndex1"></search1>
			<view class="padding margin text-center">
				<view class="cu-btn bg-yellow lg block shadow radius margin-xl" @tap="hideModal">
					查询
				</view>
			</view>
		</scroll-view>


	</view>
</template>

<script>
	import recordCard from "../../components/recordCard/recordCard.vue"
	import search1 from "../../components/search/search1.vue"
	export default {
		data() {
			return {
				list: ['我发起的', '被邀请的'],
				recordData: '',
				modalName: null,
				// reason: '被访人出差',
				TabCur: 0,
				scrollLeft: 0,
				value: ['0', '1']
			};
		},
		components: {
			recordCard,
			search1
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			getIndex1(data) {
				this.TabCur = data
				console.log(this.TabCur)
			},
			gotoDetail() {
				if (this.recordData) {
					if (this.recordData.status == '1') {
						var onjs = JSON.stringify(this.recordData)
						uni.navigateTo({
							url: "/pages/allow/index?onjs=" + onjs
						});
					} else {
						var onjs = JSON.stringify(this.recordData)
						console.log(this.onjs)
						uni.navigateTo({
							url: "/pages/verify/index3?onjs=" + onjs
						});
					}
				}
				// console.log('1111')
			},
			// gotoAllow() {

			// },
			recordDetailed(item) {
				console.log("4444444444444444444444")
				console.log(this.recordData)
				this.recordData = item
			},
			openAppoient() {
				uni.navigateTo({
					url: '/pages/appoient/index'
				});
			}
		},
		// onUnload() {
		// 	this.recordData={}
		// }
	}
</script>

<style>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}

	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
