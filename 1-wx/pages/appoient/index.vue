<template>
	<view>
		<cu-custom bgColor="bg-yellow" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">新增预约</block>
		</cu-custom>

		<view>
			<view class="flex  justify-between">
				<view class=" padding-sm margin-xs radius">预约信息</view>
				<view class="padding-sm margin-xs radius">
					<button class="cu-btn bg-blue  sm" @click="returnRecord">我的预约</button>
				</view>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">被访人员</view>
			<input placeholder="请输入被访人员手机号" name="input" v-model="people"  @input="checkPhone"></input>
		</view>

		<view class="cu-form-group" v-if="this.truePhone">
			<view class="title">被访部门</view>
			<input name="input" v-model="department"></input>
		</view>

		<view class="cu-form-group">
			<view>
				<span class="title">
					到访事由
				</span>
				<span class="tipContent">
					(注：请按照如下格式填写到访事由)
				</span>
			</view>

		</view>

		<view class="cu-form-group">
			<textarea maxlength="-1" v-model="textContent"></textarea>
		</view>

		<view class=" padding-sm margin-xs radius">访客信息</view>
		
		<view class="cu-form-group">
			<view class="title"> 单&nbsp; &nbsp; 位</view>
			<input placeholder="请输入" name="input" v-model="company"></input>
		</view>

		<view class="cu-form-group">
			<view class="title"> 姓&nbsp; &nbsp; 名</view>
			<input placeholder="请输入" name="input" v-model="name"></input>
		</view>

		<view class="cu-form-group">
			<view class="title">身份证</view>
			<input placeholder="请输入" name="input" v-model="idName"></input>
		</view>

		<view class="cu-form-group">
			<view class="title">手机号</view>
			<input placeholder="请输入" name="input" @input="inputChange" v-model="phone"></input>
		</view>

		<!-- 		<view class="cu-form-group">
			<view class="title">交通工具</view>
			<picker placeholder="请选择部门" @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{ picker[index] }}
				</view>
			</picker>
		</view> -->

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
					<button class="cu-btn  lg round bg-blue" style="width: 300rpx;" @click="goToRecord">提交</button>
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
				idName:'',
				company:'',
				modalName: null,
				truePhone: "",
				PageCur: "appoient",
				index: 0,
				// picker: ["电动自行车", "步行", "机动车"],
				textContent: "本人到公司处理或者沟通XXX事情。请尽快审核审批。",
				telephone: ["15159091707", "13950311263","18350076748"]
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
				disabled: false;
				// var onjs = JSON.stringify(this.recordData)
				var _that = this
				if (_that.people == "") {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						duration: 1000
					});
				} else if (_that.company == "") {
					uni.showToast({
						title: '请输入您的单位名称',
						icon: 'none',
						duration: 1000
					});
				}else if (_that.name == "") {
					uni.showToast({
						title: '请输入您的姓名',
						icon: 'none',
						duration: 1000
					});
				} else if (_that.idName == "") {
					uni.showToast({
						title: '请输入您的身份证号码',
						icon: 'none',
						duration: 1000
					});
				}else if (_that.phone == "") {
					uni.showToast({
						title: '请输入您的电话号码',
						icon: 'none',
						duration: 1000
					});
				} else {
					uni.navigateTo({
						url: "/pages/index/tourist?PageCur=record"
					});
				}
			},
			returnRecord() {
				uni.navigateTo({
					url: "/pages/index/tourist?PageCur=record"
				});
			},
			checkPhone() {
				let result = 0
				for (let value of this.telephone) {
					if (value == this.people) {
						result = 1;
						this.truePhone = value
						if(value==this.telephone[0]){this.people = "赵大华";this.department="财务管理处"}
						if(value==this.telephone[1]){this.people = "李铁柱";this.department="审计处"}	
						if(value==this.telephone[2]){this.people = "李二喜";this.department="烟草管理处"}	
					}
				}
				if (result == 0) {
					uni.showToast({
						title: '未找到被访人信息',
						icon: 'none',
						duration: 1000
					});
					this.truePhone = ''
				}
	
			},
			// inputChange(e){
			// 	// console.log(e.detail.value)
			// 	this.truePhone = ''
			// }
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
	.tipContent{
		font-size: 12px;
		color: #ff6701;
	}
</style>
