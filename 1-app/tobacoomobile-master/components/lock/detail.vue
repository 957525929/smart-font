<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		
		<!-- 人员信息 -->
		<peopleItem :type="type" />
		
		<!-- 锁信息 -->
		<lockItem :type="type" />
		
		<!-- 确定和取消按钮 -->
		<view v-if="type==0||type==3">
			<view class="margin grid col-2 text-center">
				<view class="cu-item">
					<button class="cu-btn bg-white lg button" @click="cancle">取消</button>
				</view>
				<view class="cu-item">
					<button class="cu-btn bg-orange lg button" @tap="showModal" data-target="DialogModal">提交</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalName=='DialogModal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">提交</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view v-if="type==0" class="padding-xl bg-white">
						请确认填写的锁编号是否正确
					</view>
					<view v-if="type==3" class="padding-xl bg-white">
						请确认是否维修完成
					</view>
					<view class="cu-bar bg-white justify-end">
						<view class="action">
							<button class="cu-btn" @tap="hideModal">否</button>
							<button class="cu-btn bg-orange margin-left" @tap="okconfirm">是</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import lockItem from '../../components/lock/lockitem.vue'
	import peopleItem from '../../components/lock/peopledetail.vue'

	export default {
		components: {
			lockItem,
			peopleItem,
		},
		onLoad(option) {
			this.type = option.type
			console.log(this.type)
		},
		data() {
			return {
				modalName: null,
				type: 0,
			}
		},
		methods: {
			cancle() {
					uni.navigateBack()
			},
			okconfirm() {
				uni.navigateBack()
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
	.page {
		height: 100vh;
	}

	.button {
		width: 20vh;
	}
</style>
