<template>
	<view>
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">

			<view class="cu-bar bg-orange solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-white"></text> 智能锁维修
				</view>
				<view class="action" @tap="showModal" data-target="viewModal">

					<text class="cuIcon-search"></text>
					<text class="text-df">搜索</text>

				</view>
			</view>

			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
						待维修
					</view>
					<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="1">
						已维修
					</view>
				</view>
			</scroll-view>
			
			<view v-if="TabCur==0" class="itembox">
				<navigator class="action" url="../../components/lock/detail?type=3" hover-class="none">
					<lockCard :cardType="type[0]"></lockCard>
				</navigator>
			</view>
			<view v-if="TabCur==1" class="itembox">
				<navigator class="action" url="../../components/lock/detail?type=4" hover-class="none">
					<lockCard :cardType="type[1]"></lockCard>
				</navigator>
			</view>
		</scroll-view>

		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">

			<repairsearch @func="getIndex1"></repairsearch>

			<view class="padding margin text-center">
				<view class="cu-btn bg-orange lg block shadow radius margin-xl" @tap="hideModal">
					查询
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import repairsearch from '../../components/lock/repairsearch'
	import lockCard from '../../components/lock/lockcard.vue'

	export default {
		data() {
			return {
				modalName: null,
				scrollLeft: 0,
				TabCur: 0,
				type: [{
					id: 0,
					type: "待维修"
				}, {
					id: 1,
					type: "已维修"
				}, ],
			};
		},
		components: {
			repairsearch,
			lockCard,
		},
		methods: {
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
