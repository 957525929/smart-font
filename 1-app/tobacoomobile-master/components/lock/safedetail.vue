<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>

		<view>
			<view class="cu-list menu sm-border">
				<view class="cu-form-group">
					<view class="title">位置：</view>
					<view class="flex-sub text-left">中国烟草总公司福建省公司机关A区域1号楼</view>
				</view>
				<view class="cu-form-group ">
					<view class="title">房间：</view>
					<view class="title flex-sub text-left">101</view>
				</view>
				<view class="cu-form-group ">
					<view class="title">锁编号：</view>
					<view class="title flex-sub text-left">S0001</view>
				</view>
				<view class="cu-form-group ">
					<view class="title">锁状态：</view>
					<view class="title flex-sub text-left">低电量</view>
				</view>
				<view class="cu-form-group margin-top">
					<view class="title">人员详细信息：</view>
				</view>
				<view class="people">
					<view class="cu-list grid col-3">
						<view class="cu-item">
							<text>姓名</text>
						</view>
						<view class="cu-item">
							<text>联系电话</text>
						</view>
						<view class="cu-item">
							<text>部门</text>
						</view>
					</view>
					<view class="cu-list grid col-3">
						<view>
							<text>张三</text>
						</view>
						<view>
							<text>15280375031</text>
						</view>
						<view>
							<text>烟叶管理处</text>
						</view>
					</view>
					<view class="cu-list grid col-3">
						<view>
							<text>李四</text>
						</view>
						<view>
							<text>13235902654</text>
						</view>
						<view>
							<text>烟叶管理处</text>
						</view>
					</view>
				</view>
			</view>
		</view>




		<!-- 确定和取消按钮 -->
		<view>
			<view class="margin grid col-2 text-center">
				<view class="cu-item">
					<button class="cu-btn bg-white lg button" @click="cancle">取消</button>
				</view>
				<view class="cu-item">
					<button class="cu-btn bg-orange lg button" @tap="showModal" data-target="DialogModal">远程开锁</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalName=='DialogModal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">远程开锁</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl bg-white">
						是否远程开锁该房间？
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
	.people {
		background-color: white;
		padding-bottom: 2vh;
	}
</style>
