<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{topTitle}}</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav" v-if="menuList.length>1">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''"
					v-for="(item,index) in menuList" :key="item" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<DescriptionDetail :dataSource="basicData" :picList="img" v-if="TabCur===0"></DescriptionDetail>
		<DescriptionDetail :dataSource="fixData" :picList="img" v-else-if="TabCur===1"></DescriptionDetail>
		<view class="cu-bar btn-group margin-top" v-show="showBtn">
			<button class="cu-btn bg-orange shadow-blur round" form-type="submit">我要投诉</button>
		</view>
	</view>
</template>

<script>
	import list from "./js/index.js"
	//vue
	import DescriptionDetail from "@/components/DescriptionDetail/DescriptionDetail.vue"
	const NEW_FIXDETAIL = Object.freeze(list)
	export default {
		onLoad() {
			this.taskId = this.$parseURL().taskId
			this.showBtn = this.$parseURL().showBtn?this.$parseURL().showBtn:false
			if(this.$parseURL().type==0){
				this.menuList = ["基本信息"]
				this.topTitle="报修详情"
			}else if(this.$parseURL().type==1){
				this.menuList = ["基本信息", "维修详情"]
				this.topTitle="报修详情"
			}
			this.data=[]
			this.data = NEW_FIXDETAIL.taskAllBasicData.filter(item => {
				return item.taskId == this.taskId
			})[0]
			//拿数据
			this.getBasic()
		},
		components: {
			DescriptionDetail
		},
		data() {
			return {
				topTitle:"历史维修详情",
				showBtn:false,
				menuList: ["基本信息", "维修详情"],
				img: NEW_FIXDETAIL.img,
				TabCur: 0,
				taskId: "",
				data:[],
				basicData:[],
				fixData: []
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.getBasic()
			},
			getBasic() {
				this.basicData = []
				this.basicData = NEW_FIXDETAIL.fixBasic.filter(i => !i.hideInDetail).map(item => {
					item.value = this.data[item.key]
					return item
				})
				this.fixData= NEW_FIXDETAIL.fixRecord.filter(i => !i.hideInDetail).map(item => {
					item.value = this.data[item.key]
					return item
				})
			}
		}
	}
</script>
