<template>
	<view>
		<view class="cu-form-group">
			<view class="title">智能锁安装状态</view>
			<picker @change="PickerChange1" :value="index1" :range="picker1">
				<view class="picker">
					{{picker1[index1]}}
				</view>
			</picker>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">选择位置</view>
		</view>
		<view class="cu-form-group">
			<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex"
				:range="multiArray">
				<view class="picker">
					{{multiArray[0][multiIndex[0]]}}.{{multiArray[1][multiIndex[1]]}}.{{multiArray[2][multiIndex[2]]}}
				</view>
			</picker>
		</view>
		
		<view class="cu-form-group">
			<view class="title">房间号</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'请选择房间号'}}
				</view>
			</picker>
		</view>

		<view v-if="this.index1 == 1">
			<view class="cu-bar bg-white margin-top">
				<view class="action">选择安装的时间段</view>
			</view>
			<view class="cu-form-group">
				<view class="title">请选择开始时间</view>
				<picker mode="date" :value="date" start="2018-01-01" end="2023-01-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">请选择结束时间</view>
				<picker mode="date" :value="date1" start="2018-01-01" end="2023-01-01" @change="DateChange1">
					<view class="picker">
						{{date1}}
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		objectMultiArray
	} from './data/areaTree.js'
	export default {
		onLoad(option) {},
		
		created: function() {
			let aData = new Date();

			this.date =
				aData.getFullYear() + "-" +
				(aData.getMonth() + 1) + "-" +
				(aData.getDate() - 3)
			this.date1 =
				aData.getFullYear() + "-" +
				(aData.getMonth() + 1) + "-" +
				(aData.getDate())
		},
		mounted() {},
		onLoad(option) {
			this.init();
		},
		data() {
			return {
				date: '',
				index: -1,
				picker: ['101', '102', '103'],
				index1: 0,
				picker1: ['未安装', '已安装'],
				multiArray: [
					[],
					[],
					[]
				],
				objectMultiArray,
				multiIndex: [0, 0, 0],
			}
		},
		
		methods: {
			init() {
				for (var i = 0; i < this.objectMultiArray.length; i++) {
					this.multiArray[0].push(this.objectMultiArray[i].name);
				}
				for (var j = 0; j < this.objectMultiArray[this.multiIndex[0]].tower.length; j++) {
					this.multiArray[1].push(this.objectMultiArray[this.multiIndex[0]].tower[j].name);
				}
				for (var k = 0; k < this.objectMultiArray[this.multiIndex[0]].tower[this.multiIndex[1]].room
					.length; k++) {
					this.multiArray[2].push(this.objectMultiArray[this.multiIndex[0]].tower[this.multiIndex[1]].room[k]
						.name);
				}
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			
			// 向父组件传值
			PickerChange1(e) {
				this.index1 = e.detail.value
				this.$emit('func',this.index1)
			},
			
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0:
						data.multiIndex[1] = 0;
						data.multiIndex[2] = 0;
						let result = this.searchColumn();
						data.multiArray[1] = result[0]
						data.multiArray[2] = result[1]
						break;
					case 1:
						data.multiIndex[2] = 0;
						data.multiArray[2] = this.searchColumn()[1]
						break;
				}
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
			
			},
			searchColumn() {
				var arr1 = [];
				var arr2 = [];
				for (var i = 0; i < this.objectMultiArray.length; i++) {
					if (i == this.multiIndex[0]) {
						for (var j = 0; j < this.objectMultiArray[i].tower.length; j++) {
							arr1.push(this.objectMultiArray[i].tower[j].name);
							if (j == this.multiIndex[1]) {
								for (var k = 0; k < this.objectMultiArray[i].tower[j].room.length; k++) {
									arr2.push(this.objectMultiArray[i].tower[j].room[k].name);
								}
							}
						}
					}
				}
				return [arr1, arr2];
			},
			
			DateChange(e) {
				this.date = e.detail.value
			},
			
			DateChange1(e) {
				this.date1 = e.detail.value
			},
		}
	}
</script>

<style>
</style>
