<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">申请记录</block>
			<block slot="right">

				<view>
					<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">

						<view class='padding margin text-center'>
							<image mode="aspectFit" src="../../static/筛选.png"
								style="width: 25px; height: 25px;margin-right: 10px; " @tap="showModal"
								data-target="viewModal"></image>
						</view>
					</scroll-view>

					<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
						<text class="cuIcon-pullright"></text>
					</view>
					<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
						<view class="cu-form-group margin-top">

							<view class="title">预约时间</view>
							<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
								<view class="picker">
									{{time}}
								</view>
							</picker>
						</view>
						<view class="cu-form-group">
							<view class="title">日期</view>
							<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
								<view class="picker">
									{{date}}
								</view>
							</picker>
						</view>

						<view class="cu-form-group">
							<view class="title">被访问人</view>
							<input name="input"></input>
						</view>

						<view class='padding-lg'>
							<button class="cu-btn lg bg-yellow button-center">检索</button>
						</view>
					</scroll-view>
				</view>
			</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav flex text-center">
			<view class="cu-item" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
				待审核
			</view>

			<view class="cu-item" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="1">
				已通过
			</view>

			<view class="cu-item" :class="2==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="2">
				已拒绝
			</view>
		</scroll-view>



		<block v-if="TabCur==0">
			<navigator class="action" url="../verify/index">
				<recordCard :cardType="type[0]" />
			</navigator>
		</block>
		<block v-if="TabCur==1">
			<recordCard :cardType="type[1]" />
		</block>
		<block v-if="TabCur==2">
			<navigator class="action" @tap="showModal">
				<recordCard :cardType="type[2]" />
			</navigator>
		</block>


		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">Modal标题</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
			</view>
		</view>
	</view>
	</view>
	</view>
</template>

<script>
	import recordCard from "../../components/recordCard/recordCard.vue"
	export default {
		data() {
			return {
				time: '12:01',
				date: '2018-12-25',
				modalName: null,
				TabCur: 0,
				scrollLeft: 0,
				type: [{
					id: 0,
					type: "待审核"
				}, {
					id: 1,
					type: "已通过"
				}, {
					id: 2,
					type: "已拒绝"
				}, ],
			};
		},
		components: {
			recordCard,
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			openSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			},
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
		},
	}
</script>

<style>
	page {
		/* background-image: var(--gradualBlue); */
		/* width: 100vw; */
		/* overflow: hidden; */
	}

	.DrawerPage {
		/* position: fixed; */

		left: 0vw;
		/* background-color: #f1f1f1; */
		/* transition: all 0.4s; */
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
