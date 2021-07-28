<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">历史维修</block>
		</cu-custom>
		<view class="cu-card article">
			<TaskCardItem :item="item" v-for="item in taskList" :key="item.taskId" @handleTopRight="goTo">
			</TaskCardItem>
		</view>
	</view>
</template>

<script>
	import list from "./js/index.js"
	export default {
		data() {
			return {
				taskList: list.taskList[1].filter(item => item.type == 4),
			};
		},
		methods: {
			goTo(data) {
				this.$goPage({
					name: 'fixRecordDetail',
					query: {
						taskId: data
					}
				})
			}
		}
	}
</script>
