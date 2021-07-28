<template>
	<view class="cu-card case bg-grey">
		<scroll-view scroll-y class="page">
			<view class="nav-list">
				<view class="nav-li" :class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index" @tap="$goPage(item.route)">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.route}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template> 
<script>
	export default {
		name: "workplace",
		data() {
			return {
				elements: [{
						title: '物业报修',
						color: 'orange',
						cuIcon: 'edit',
						route:'fixReport'
					},
					{
						title: '维修任务',
						color: 'orange-shallow',
						cuIcon: 'repairfill',
						route:'fixTask'
					},
					{
						title: '历史维修',
						color: 'green',
						cuIcon: 'list',
						route:'fixRecord'
					},

					{
						title: '历史保养',
						color: 'blue',
						cuIcon: 'list',
						route:'proRecord'
					},
					{
						title: '保养计划',
						color: 'purple',
						cuIcon: 'calendar',
						route:'protectTask'
					},
				],
			};
		}
	}
</script>

<style scoped>
	.page {
		height: 100vh;
	}
	.nav-li{
		width:100%;
		}
</style>

