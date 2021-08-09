<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">历史保养详情</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''"
					v-for="(item,index) in menuList" :key="item" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<DescriptionDetail :dataSource="basicData" :picList="img" v-if="TabCur===0"></DescriptionDetail>
		<view class="cu-card article" v-else-if="TabCur===1">
			<TaskCardItem :item="item" v-for="item in devData" :key="item.areaKey" hideTitleIcon></TaskCardItem>
		</view>
		<view class="cu-card article" v-else-if="TabCur===2">
			<TaskCardItem :item="item" v-for="item in proAllPlanData" :key="item.taskId"
				:titleIcon="!item.type?'cuIcon-roundcheckfill text-green':'cuIcon-roundclosefill text-orange'">
			</TaskCardItem>
		</view>
	</view>
</template>

<script>
	import {img} from "@/common/public.js"
	import list from "./js/detail.js"
	import {handleEnumData} from "@/common/util.js"
	//vue
	import DescriptionDetail from "@/components/DescriptionDetail/DescriptionDetail.vue"
	import TaskCardItem from "@/components/TaskCardItem/TaskCardItem.vue"
	const NEW_PRORECORD = Object.freeze({
		img,
		...list
	})
	export default {
		onLoad() {
			this.taskId = this.$parseURL().taskId
			//拿数据
			this.getBasic()
		},
		components: {
			DescriptionDetail,
			TaskCardItem
		},
		data() {
			return {
				menuList:["基本信息", "养护设备", "养护记录"],
				img: NEW_PRORECORD.img,
				TabCur: 0,
				taskId: "",
				areaKey: "",
				basicData: [],
				devData: [],
				proAllPlanData: [],
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				let menu = new Map([
					[0, "getBasic"],
					[1, "getDev"],
					[2, "getRecord"]
				])
				let temp = [...menu].filter(([key, value]) => key == e.currentTarget.dataset.id)[0]
				this[temp[1]]()
			},
			getBasic() {
				this.basicData = []
				let tempData = NEW_PRORECORD.proAllBasicData.filter(item => {
					return item.taskId == this.taskId
				})[0]
				this.basicData = NEW_PRORECORD.proBasic.map(item => {
					if (item.valueEnum && item.valueEnum.length !== 0) {
						item.value = handleEnumData(item.valueEnum, tempData[item.key])
					} else {
						item.value = tempData[item.key]
					}
					if (item.key === "areaKey") {
						this.areaKey = tempData[item.key]
					}
					return item
				}).filter(i => !i.hideInDetail)
			},
			getDev() {
				this.devData = []
				this.devData = NEW_PRORECORD.devData.filter(item => {
					return item.areaKey == this.areaKey
				}).map(item => {
					return {
						taskId: 0,
						titleLeft: item.devName,
						titleRight: item.devId,
						content: item.devType,
						footerRight: item.manufacturer
					}
				})
			},
			getRecord() {
				this.proAllPlanData = []
				this.proAllPlanData = NEW_PRORECORD.proAllPlanData.filter(item => {
					return item.taskId == this.taskId
				}).map(item => {
					return {
						taskId: item.recordId,
						titleLeft: item.startTime + " - " + item.endTime,
						content: item.proDesc,
						footerRight: item.proTime,
						type: item.ifnormal
					}
				})
				console.log(this.proAllPlanData)
			},
		}
	}
</script>
