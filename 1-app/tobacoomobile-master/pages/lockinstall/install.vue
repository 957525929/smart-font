<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">安装</block>
		</cu-custom>
		<view class="cu-list menu sm-border">
			<view class="cu-bar bg-white">
				<view class="action">位置</view>
			</view>
			<view class="cu-form-group">
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex"
					:range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">房间</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{picker[index]}}
					</view>
				</picker>
			</view>

			<lockItem :type="type" />

			<view>
				<view class="margin grid col-2 text-center">
					<view class="cu-item">
						<button class="cu-btn bg-white lg button" @click="cancle">取消</button>
					</view>
					<view class="cu-item">
						<button class="cu-btn bg-orange lg button" @tap="showModal"
							data-target="DialogModal">提交</button>
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
						<view class="padding-xl bg-white">
							请确认填写的锁编号是否正确
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
	</view>
</template>

<script>
	import lockItem from '../../components/lock/lockitem.vue'

	export default {
		onLoad(option) {
			this.type = option.type
			console.log(this.type)
		},
		components: {
			lockItem,
		},
		data() {
			return {
				multiArray: [
					['中国烟草总公司福建省公司机关'],
					['A区域', 'B区域'],
					['1号楼', '2号楼']
				],
				objectMultiArray: [
					[{
						id: 0,
						name: '中国烟草总公司福建省公司机关'
					}, ],
					[{
							id: 0,
							name: 'A区域'
						},
						{
							id: 1,
							name: 'B区域'
						},
					],
					[{
							id: 0,
							name: '1号楼'
						},
						{
							id: 1,
							name: '2号楼'
						}
					]
				],
				multiIndex: [0, 0, 0],
				index: 0,
				picker: ['101', '102', '103'],
				type: 0,
				modalName: null,
			}
		},
		methods: {
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},

			MultiColumnChange(e) {},
			PickerChange(e) {
				this.index = e.detail.value
			},
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
