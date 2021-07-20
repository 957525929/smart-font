<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">申请记录</block>
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
			<recordCard :cardType="type[0]" />
		</block>
		<block v-if="TabCur==1">
			<navigator class="action" url="../allow/index">
				<recordCard :cardType="type[1]" />
			</navigator>
		</block>
		<block v-if="TabCur==2">
			<navigator class="action" @tap="showModal" data-target="DialogModal1">
				<recordCard :cardType="type[2]" />
			</navigator>
		</block>

		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">拒绝原因</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{reason}}
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>

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
				modalName: null,
				reason: '被访人出差',
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
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style>

</style>
