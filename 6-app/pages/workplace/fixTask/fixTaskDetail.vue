<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">问题列表</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''"
					v-for="(item,index) in menuList" :key="item.label" @tap="tabSelect" :data-id="index">
					{{item.value}}
				</view>
			</view>
		</scroll-view>
		<component :is="comType" :dataSource="data" :picList="img"></component>
	</view>
</template>

<script>
	import list from "@/common/public.js"
	import data from '@/pages/workplace/common/data.js';
	//vue
	import DescriptionDetail from "@/components/DescriptionDetail/DescriptionDetail.vue"
	import FormDetail from "@/components/FormDetail/FormDetail.vue"
	const NEW_FIXDETAIL = Object.freeze({...list,...data})
	export default {
		onLoad() {
			this.taskId = this.$parseURL().taskId
			//拿数据
			this.getData('taskAllBasicData','fixBasic')
		},
		components: {
			DescriptionDetail,
			FormDetail
		},
		computed: {
			comType() {
				return this.menuList[this.TabCur].comType
			}
		},
		data() {
			return {
				img:NEW_FIXDETAIL.img,
				TabCur: 0,
				taskId:"",
				data:[],
				menuList: [{
					label:"taskAllBasicData",
					value:"基本信息",
					dataIndex:"fixBasic",
					comType:"DescriptionDetail"
				},{
					label:"taskAllRunData",
					value:"运行参数",
					dataIndex:"fixRun",
					comType:"DescriptionDetail"
				}, {
					label:"fixForm",
					value:"维修上报",
					dataIndex:"fixForm",
					comType:"FormDetail"				
				}]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.getData(this.menuList[this.TabCur].label,this.menuList[this.TabCur].dataIndex)
			},
			getData(name,dataIndex){
				this.data = []
				let tempData= NEW_FIXDETAIL[name].filter(item=>item.taskId===this.taskId)[0]
				this.data = NEW_FIXDETAIL[dataIndex].map(item=>{
					item.value = tempData[item.key]
					return item
				})
			}
		}
	}
</script>

<style>
</style>
