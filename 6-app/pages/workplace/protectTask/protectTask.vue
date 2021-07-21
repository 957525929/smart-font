<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true"><block slot="backText">返回</block><block slot="content">养护任务</block></cu-custom>
		<view class="cu-card article">
			<TaskCardItem :item="item" v-for="item in taskList" :key="item.taskId" @handleTopRight="goTo"></TaskCardItem>
		</view>
	</view>
</template>

<script>
	import list from "@/common/public.js"
	export default {
		data() {
			return {
				taskList:list.proTaskList[0]
			};
		},
		methods: {
			goTo(data){
				this.$goPage({name:'protectTaskDetail',query:{taskId:data.taskId}})
			}
		}
	}
</script>

<style>
</style>
