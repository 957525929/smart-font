<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>

		<view>
			<view class="cu-list menu sm-border">
				<view class="cu-form-group">
					<view class="title">报警时间：</view>
					<view class="flex-sub text-left">{{value}}</view>
				</view>
				<view class="cu-form-group">
					<view class="title">消除时间：</view>
					<view class="flex-sub text-left">{{value1}}</view>
				</view>
				<view class="cu-form-group">
					<view class="title">报警方式：</view>
					<view class="flex-sub text-left">低电量</view>
				</view>
				
				<view class="cu-form-group margin-top">
					<view class="title">位置：</view>
					<view class="flex-sub text-left">中国烟草总公司福建省公司机关A区域1号楼</view>
				</view>
				<view class="cu-form-group ">
					<view class="title">房间：</view>
					<view class="title flex-sub text-left">101</view>
				</view>
				<view class="cu-form-group">
					<view class="title">锁编号：</view>
					<view class="title flex-sub text-left">S0001</view>
				</view>
				
				<view class="cu-form-group margin-top">
					<view class="title">维修人员：</view>
					<view class="title flex-sub text-left">张山</view>
				</view>
				<view class="cu-form-group">
					<view class="title">联系电话：</view>
					<view class="title flex-sub text-left">13546825464</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import lockItem from '../../components/lock/lockitem.vue'
	import peopleItem from '../../components/lock/peopledetail.vue'

	export default {
		created: function() {
			var aData = new Date();
			
			this.value1 =
				aData.getFullYear() + "年" +
				(aData.getMonth() + 1) + "月" +
				(aData.getDate()-1) + "日" + ' ' +
				'08:35:22'
		
			this.value =
				aData.getFullYear() + "年" +
				(aData.getMonth() + 1) + "月" +
				(aData.getDate()-2) + "日" + ' ' +
				'09:27:46'
		},
		components: {
			lockItem,
			peopleItem,
		},
		onLoad(option) {
			this.type = option.type
		},
		data() {
			return {
				modalName: null,
				type: 0,
				value: '',
				value1: '',
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
