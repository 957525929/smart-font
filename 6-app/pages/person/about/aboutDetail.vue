<template>
	<view class="back">
		<noResult v-if="noResult"></noResult>
		<iframe :srcdoc="htmlNodes" class="framediv" v-else></iframe>
	</view>
</template>

<script>
	import {judgeNull} from "@/common/util.js"
	export default {
		data() {
			return {
				htmlNodes: '',
				noResult:false
			};
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: JSON.parse(option.data).title
			});
			this.personApi[JSON.parse(option.data).url]().then(res => {
				judgeNull(res)? (this.htmlNodes = res,this.noResult =false):(this.noResult =true)
			})
		},
	};
</script>

<style>
	.framediv {
		border: none;
		width: 100%;
		height: 100%;
	}
</style>
