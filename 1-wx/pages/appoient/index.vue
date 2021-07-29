<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">新增预约</block>
		</cu-custom>

		<view>
			<!-- 		<view class="text-gray">预约信息</view>
			<view class="text-gray">我的预约</view> -->
			<view class="flex  justify-between">
				<view class=" padding-sm margin-xs radius">预约信息</view>
				<view class="padding-sm margin-xs radius">
					<button class="cu-btn bg-blue  sm" @click="goToRecord">我的预约</button>
				</view>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">被访人员</view>
			<input placeholder="请输入被访人员手机号" name="input" v-model="people" @blur="checkPhone"></input>
		</view>

		<view class="cu-form-group">
			<view class="title">到访事由
			</view>

		</view>

		<view class="cu-form-group">
			<textarea maxlength="-1" v-model="textContent"></textarea>
		</view>

		<view class=" padding-sm margin-xs radius">访客信息</view>

		<view class="cu-form-group">
			<view class="title"> 姓&nbsp; &nbsp; 名</view>
			<input placeholder="请输入" name="input" v-model="name"></input>
		</view>

		<view class="cu-form-group">
			<view class="title">手机号</view>
			<input placeholder="请输入" name="input" @input="inputChange" v-model="phone"></input>
		</view>

		<view class="cu-form-group">
			<view class="title">交通工具</view>
			<picker placeholder="请选择部门" @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{ picker[index] }}
				</view>
			</picker>
		</view>

		<!-- 	<view class="padding margin text-center">
			<view class="cu-btn bg-yellow lg block shadow radius margin-xl" @click="goToRecord">
				提交
			</view>
		</view> -->

		<view class="bottom padding">
			<view class="leftBottom">
				<view>
					<button class="cu-btn  lg round bg-white" style="width: 300rpx;">取消</button>
				</view>
				<!-- 	<view class="text-orange"></view> -->
			</view>
			<view class="rightBottom">
				<view>
					<button class="cu-btn  lg round bg-blue" style="width: 300rpx;"  @click="goToRecord">提交</button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				people: '',
				name: '',
				phone: '',
				modalName: null,
				PageCur: "appoient",
				index: 0,
				picker: ["电动自行车", "步行", "机动车"],
				textContent: "本人已与xxx处（中心）xxx联系,到公司处理或者沟通XXX事情。请审核审批。",
				telephone:["18350076748","13950311263"]
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value;
				// console.log(index)
			},
			// textareaBInput(e) {
			// 	this.textareaBValue = e.detail.value
			// }
			NavChange: function(e) {
				console.log(e.currentTarget);
				this.PageCur = e.currentTarget.dataset.cur;
			},
			goToRecord() {
				disabled:false;
				// var onjs = JSON.stringify(this.recordData)
				var _that = this
				if (_that.people == "") {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						duration: 1000
					});
				} else if (_that.name == "") {
					uni.showToast({
						title: '请输入姓名',
						icon: 'none',
						duration: 1000
					});
				}else if (_that.phone == "") {
					uni.showToast({
						title: '请输入电话号码',
						icon: 'none',
						duration: 1000
					});
				} else {
					uni.navigateTo({
						url: "/pages/index/tourist?PageCur=record"
					});
				}
			},
			checkPhone(){
				// if(this.people!="18350076748"){
				// 	uni.showToast({
				// 		title: '未找到被访人信息',
				// 		icon: 'none',
				// 		duration: 1000
				// 	});
				// }
				for (let i = 0; i < this.telephone.length; i++) {
					if (this.telephone[i] !== this.people) {
						uni.showToast({
							title: '未找到被访人信息',
							icon: 'none',
							duration: 1000
						});
						console.log(this.telephone[i])
						console.log("222222222222222")
						console.log(this.phone)
						// console.log(this.telephone[i])
					}
			}
			}
		},
	};
</script>

<style>
	.bottom {
		display: flex;
	}

	.leftBottom {
		width: 50%;
		margin: auto;
		text-align: center;
		/* border-right: 1px solid #f5f8fe; */
	}

	.rightBottom {
		width: 50%;
		margin: auto;
		text-align: center;
	}
</style>
