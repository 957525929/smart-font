<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">维修任务</block>
		</cu-custom>
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
				taskList:list.taskList[0].filter(item=>item.type==2)
			};
		},
		methods: {
			goTo(data){
				this.$goPage({
					name:'fixTaskDetail',
					query:{
						taskId:data,
					},
				})
			}
		}
	}
</script>

<style>
</style>
