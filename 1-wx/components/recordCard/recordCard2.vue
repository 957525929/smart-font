<template>
	<view>
		<view v-for="(item,index) in infoList" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view class="card" @tap="dataDetail(item)">
				<span>
					<!-- 显示不同图片 -->
					<image class="card-img" :src="'../../static/已通过.png'" mode="scaleToFill"
						style="width: 60px; height: 60px;"></image>
				</span>
				<span class="card-center">
					<view>
						访问人：{{item.visit}}
					</view>
					<view>
						电话号码：{{item.phone}}
					</view>
					<view>
						预约见面时间：{{item.time}}
					</view>
				</span>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		List
	} from './data/List.js'
	export default {
		beforeCreate() {
			let obj = []
			for (let i = 0; i < List.length; i++) {
				if (List[i].id == 1) {
					obj.push(List[i])
				}
			}
			// console.log(obj)
			this.firstChange = obj
		},
		data() {
			return {
				infoList: this.firstChange
			}
		},
		watch: {
			value() {
				if (this.value == 3) {
					this.infoList = List
				} else {
					this.getinfoList()
				}
			}
		},

		props: {
			value: String
		},

		methods: {
			dataDetail(item) {
				console.log("11111111111111")
				console.log(item)
				this.$emit('send', item)
			},
			getinfoList() {
				let obj = []
				for (let i = 0; i < List.length; i++) {
					if (List[i].id == this.value) {
						obj.push(List[i])
					}
				}
				this.infoList = obj
			},
			// getFirstList() {
			// 	let obj = []
			// 		if (List.id == 1 ){
			// 			obj.push(List)
			// 		}
			// 	// this.infoList = obj
			// 	// let cc = [],
			// 		// if (List.id == 1) {
			// 		// 	obj.push(List[i])
			// 		// }
			// 	// this.infoList = obj
			// 	console.log(obj)
			// },
		}
	}
</script>

<style>
	.card {
		margin: 5px 10px 0px 10px;
		background-color: white;
		height: 70px;
		display: flex;
		border-radius: 10px;
	}

	.card-img {
		margin: 5px;
	}

	.card-center {
		margin-top: 5px;
	}

	.card-right {
		margin-left: 30px;
		margin-top: 5px;
	}

	.card-type {
		color: #3f7dcc;
		font-size: 16px;
	}
</style>
