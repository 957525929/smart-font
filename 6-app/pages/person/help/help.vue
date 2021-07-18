<template>
	<view class="back fontColorGrey font28">
		<text class="subtitle">常见问题</text>
		<view class="card fontColor">
			<uni-collapse :accordion="true">
				<uni-collapse-item :class="index != helpList.length - 1 ? 'border-bottom' : ''"
					v-for="(item, index) in helpList" :key="item.questionId" :title="item.question"
					:show-animation="item.answer != ''">
					<text class="content">{{ item.answer }}</text>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<view class="" style="margin-top: 10px;">
			<text class="subtitle">问题分类</text>
			<view class="type">
				<view class="type-item" v-for="(item, index) in typeList" :key="index"
					@tap="$navTo.goTo('helpType', { typeId: item.typeId })">
					<image :src="item.src" mode="aspectFit" style="width:100%;height: 50px"></image>
					<view class="font24">{{ item.title }}</view>
				</view>
			</view>
		</view>
		<!-- #ifndef MP-WEIXIN -->
		<view class="btnGroup font30">
			<view class="btn" @tap="$navTo.goTo('inlineService', { type: '在线客服' })"><text>在线客服</text></view>
			<view class="btn" @tap="callHelp"><text>联系我们</text></view>
		</view>		
		<!-- #endif -->

	</view>
</template>

<script>
	import help from '@/pages/person/common/help.js';
	import uniCollapse from '@/pages/person/components/uni-collapse.vue';
	import uniCollapseItem from '@/pages/person/components/uni-collapse-item.vue';
	const NEW_HELP = Object.freeze(help)
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				helpList: [],
				typeList: NEW_HELP.typeList
			};
		},
		onLoad() {
			var that = this;
			const list_value = uni.getStorageSync('helpList_common')
			this.personApi.getCommonList({
				firstLevelName: "投递移动应用"
			}).then(res => {
				this.helpList = JSON.stringify(list_value) === JSON.stringify(res.data) ? list_value : this
					.getCommon(res.data)
			});
			// this.http({
			// 	url: 'system/managementbag/helpcent/getCommonQuestions',
			// 	data: {
			// 		firstLevelName: "投递移动应用"
			// 	}
			// }).then(res => {
			// 	this.helpList = JSON.stringify(list_value) === JSON.stringify(res.data) ? list_value : this.getCommon(res.data)
			// });
		},
		methods: {
			getCommon(e) {
				let list = e.filter((item, index) => {
					return item.isCommon === 1
				})
				uni.setStorage({
					key: 'helpList_common',
					data: list
				});
				return list
			},
			callHelp() {

				this.$navTo.goTo('contact')
			}


		// this.http({
		// 	url: "system/management/people/management/getSystemConfigByNameAndType",
		// 	data: {
		// 		configName: '联系电话'
		// 	}
		// }).then(res => {
		// 	uni.getStorage({
		// 		key:"serverPhone",
		// 		success: (ress) => {
		// 			uni.makePhoneCall({
		// 				phoneNumber: ress.data
		// 			})
		// 		},
		// 		fail() {
		// 			uni.setStorage({
		// 				key:"serverPhone",
		// 				data:res.data.configValue,
		// 			})
		// 			uni.makePhoneCall({
		// 				phoneNumber: res.data.configValue 
		// 			})
		// 		}
		// 	})

		// })
		}
	};
</script>

<style scoped>
	/* page{
	background-color: #E0E0E0;
} */
	.back {
		overflow: scroll;
	}

	.card {
		margin: 10px 30rpx 0 30rpx;
		border-radius: 5px;
		padding: 10rpx 20rpx 20rpx 20rpx;
	}

	.content {
		margin: 0 20rpx 10px;
	}

	.btnGroup {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: white;
		margin: 20px;
	}

	.btn {
		background-color: #28a375;
		width: 470rpx;
		/*	height: 90rpx; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 20rpx;
		margin: 50rpx;
		padding: 10px 50rpx;
		/* left: 50%; */
		/* position: relative; */
		/* transform: translateX(-50%); */
	}

	.type {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 20rpx;
	}

	.type-item {
		flex: 1;
		margin-right: 20upx;
		text-align: center;
	}

	.type-item:last-child {
		margin-right: 0;
	}
</style>
