<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true"><block slot="backText">返回</block><block slot="content">报修列表</block></cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''"
					v-for="(item,index) in menuList" :key="item" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view class="cu-card article">
			<TaskCardItem :item="item" v-for="item in taskList[TabCur]" :key="item.taskId" @handleTopRight="$goPage({name:'fixTaskDetail',params:{taskId:data.taskId}})"></TaskCardItem>
		</view>
	</view>
</template>

<script>
	import list from "@/common/public.js"
	export default {
		data() {
			return {
				TabCur: 0,
				menuList: ["待处理", "已完成"],
				taskList:list.taskList
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
</style>
