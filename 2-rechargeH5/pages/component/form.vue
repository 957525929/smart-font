<template>
	<view>
		
			<view class="cu-form-group">
				<view class="title">位置选择</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">时间选择</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
		


	</view>
</template>

<script>
	export default {
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
						},
					],
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
				date: '2018-12-25',
			};
		},
		methods: {
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			MultiColumnChange(e) {
				
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
