<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true"><block slot="backText">返回</block><block slot="content">核查任务</block></cu-custom>
		<view class="cu-card article">
			<TaskCardItem :item="item" v-for="item in taskList.concat(proTaskList)" :key="item.taskId" @handleTopRight="goTo" showImage></TaskCardItem>
		</view>
	</view>
</template>

<script>
	import list from "@/common/public.js"
	export default {
		data() {
			return {
				taskList:list.taskList[0].filter(item=>item.type==3),
				proTaskList:list.proTaskList[1]
			};
		},
		methods: {
			goTo(data){
				this.$goPage({name:'checkTaskDetail',params:{taskId:data.taskId}})
			}
		}
	}
</script>

<style>
</style>

