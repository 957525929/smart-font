<template>
	<!-- <view class="cu-card article"> -->
		<TaskCardItem :item="item" v-for="item in taskList" :key="item.taskId" @handleTopRight="goTo"></TaskCardItem>
	<!-- </view> -->
</template>

<script>
	export default {
		props: {
			taskList: {
				type: Array,
				default:()=>[] 
			},
		},
	}
</script>
