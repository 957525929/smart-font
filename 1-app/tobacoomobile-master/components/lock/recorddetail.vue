<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>

		<view>
			<view class="cu-list menu sm-border">
				<view class="cu-form-group">
					<view class="title">开锁时间：</view>
					<view class="flex-sub text-left">2021年7月16日 08:34:22</view>
				</view>
				
				<view class="cu-form-group margin-top">
					<view class="title">开锁人：</view>
					<view class="flex-sub text-left">张三</view>
				</view>
				<view class="cu-form-group">
					<view class="title">开锁人所属部门：</view>
					<view class="flex-sub text-left">烟叶管理处</view>
				</view>
				
				<view class="cu-form-group margin-top">
					<view class="title">位置：</view>
					<view class="flex-sub text-left">中国烟草总公司福建省公司机关A区域1号楼</view>
				</view>
				<view class="cu-form-group ">
					<view class="title">房间：</view>
					<view class="title flex-sub text-left">101</view>
				</view>
				
				<view class="cu-form-group margin-top">
					<view class="title">锁编号：</view>
					<view class="title flex-sub text-left">S0001</view>
				</view>
				<view class="cu-form-group ">
					<view class="title">开锁方式：</view>
					<view class="title flex-sub text-left">指纹开锁</view>
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
