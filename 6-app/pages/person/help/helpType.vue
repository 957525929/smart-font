<template>
	<view class="" style="height: 100%;width: 100%;">
		<noResult v-if="noData"></noResult>
		<view class="fontColorGrey font28 main">
			<view class="card fontColor">
				<uni-collapse :accordion="true">
					<uni-collapse-item :class="index != classifyList.length - 1 ? 'border-bottom' : ''" v-for="(item, index) in classifyList"
					 :key="item.questionId" :title="item.question" :show-animation="item.answer != ''">
						<text class="content font28">{{ item.answer }}</text>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
	</view>

</template>

<script>
	import uniCollapse from '@/pages/component/person/components/person/help/uni-collapse.vue';
	import uniCollapseItem from '@/pages/component/person/components/person/help/uni-collapse-item.vue';
	export default {
		onLoad(option) {
			let Id = JSON.parse(option.typeId)
			const value = uni.getStorageSync(`helpList_${Id}`)
			this.personApi.getQList({typeId:Id}).then(res => {
				this.classifyList = JSON.stringify(value) === JSON.stringify(res.data) ? value : this.getList(Id, res.data)
				this.noData = this.classifyList.length === 0 ? true : false
			});
			// this.http({
			// 	url: 'system/managementbag/helpcent/getQuestionsByType?typeId=' + Id
			// }).then(res => {
			// 	this.classifyList = JSON.stringify(value) === JSON.stringify(res.data) ? value : this.getList(Id, res.data)
			// 	this.noData = this.classifyList.length === 0 ? true : false
			// });
		},
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				classifyList: [],
				noData: false
			};
		},
		methods: {
			getList(Id, list) {
				uni.setStorage({
					key: `helpList_${Id}`,
					data: list
				});
				return list
			}
		}
	};
</script>

<style>
	page {
		background-color: rgb(245, 245, 245);
	}

	.main {
		height: 100%;
		width: 100%;
	}

	.noDataImg {
		margin: 50% 50%;
		transform: translate(-50%, -50%);
	}

	.card {
		margin: 10px 30rpx 0 30rpx;
		border-radius: 5px;
		padding: 10rpx 20rpx 20rpx 20rpx;
	}

	.noData {
		width: 100%;
		height: 100%;
		background-color: #E0E0E0;
		position: absolute;
		display: flex;
		flex-direction: column;
		font-family: '微软雅黑';
	}
</style>
