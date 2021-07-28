<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true"><block slot="backText">返回</block><block slot="content">历史维修</block></cu-custom>
		<view class="cu-card article">
			<TaskCardItem :item="item" v-for="item in proTaskList" :key="item.taskId" @handleTopRight="goTo" hideTitleIcon></TaskCardItem>
		</view>
	</view>
</template>

<script>
	import list from "@/common/public.js"
	export default {
		data() {
			return {
				proTaskList:list.proTaskList[2]
			};
		},
		methods: {
			goTo(data){
				this.$goPage({name:'proRecordDetail',query:{taskId:data}})
			}
		}
	}
</script>
