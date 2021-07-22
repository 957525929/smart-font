<template>
	<view>
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			<cu-custom bgColor="bg-yellow" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">预约行程</block>
				<block slot="right">
					<!-- <view class='padding margin text-center'> -->
					<!-- <image @tap="showModal" data-target="viewModal" mode="aspectFit" src="../../static/筛选.png"
						style="width: 25px; height: 25px;margin-right: 10px; ">
					</image> -->

					<!-- </view> -->
					<view class="action">
						<view class='cuIcon-cu-image'>
							<text class="cuIcon-searchlist" @tap="showModal" data-target="viewModal"></text>
						</view>
						<!-- <view >个人中心</view> -->
					</view>
				</block>
			</cu-custom>
			<scroll-view scroll-x class="bg-white nav flex text-center">
				<view class="cu-item" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
					今日
				</view>

				<view class="cu-item" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="1">
					明日
				</view>

				<view class="cu-item" :class="2==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="2">
					后日
				</view>
			</scroll-view>


			<block v-if="TabCur==0">
				<navigator class="action" @tap="goToAgree">
					<recordCard2 :cardType="type[0]" />
				</navigator>
			</block>
			<block v-if="TabCur==1">
				<navigator class="action" @tap="goToAgree">
					<recordCard2 :cardType="type[1]" />
				</navigator>
			</block>
			<block v-if="TabCur==2">
				<navigator class="action" @tap="goToAgree">
					<recordCard2 :cardType="type[2]" />
				</navigator>
			</block>
		</scroll-view>

		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">

			<search2 @send="getIndex1"></search2>
			<view class="padding margin text-center">
				<view class="cu-btn bg-yellow lg block shadow radius margin-xl" @tap="hideModal">
					查询
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import recordCard2 from "../../components/recordCard/recordCard2.vue"
	import search2 from "../../components/search/search2.vue"
	export default {
		// props:{onLoad},
		// onLoad(TabCurtest){
		// 	// this.TabCur=option.TabCur
		// 	// console.log('----------11-------')
		// 	// console.log(this.TabCur)
		// 	console.log(TabCurtest)
		// },
		data() {
			return {
				// time: '12:01',
				// date: '2018-12-25',
				modalName: null,
				TabCur: 0,
				scrollLeft: 0,
				reason: '被访人出差',
				type: [{
					id: 0,
					type: "今日"
				}, {
					id: 1,
					type: "明日"
				}, {
					id: 2,
					type: "后日"
				}, ],
			};
		},
		components: {
			recordCard2,
			search2
		},
		methods: {
			// openSearch() {
			// 	uni.navigateTo({
			// 		url: '/pages/search/search'
			// 	});
			// 	// console.log(TabCurtest)
			// },
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			getIndex1(data) {
				this.TabCur = data
				console.log(this.TabCur)
			},
			goToAllow() {
				uni.navigateTo({
					url: "/pages/verify/index"
				});
			},
			goToAgree() {
				uni.navigateTo({
					url: "/pages/verify/index4"
				});
				// console.log('1111')
			}
		},
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
