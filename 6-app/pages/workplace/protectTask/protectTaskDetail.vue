<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">保养任务详情</block>
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
		<FormDetail :dataSource="proForm" v-else-if="TabCur===3">
			<textarea slot="proDesc" placeholder="请输入" class="bg-grey radius margin"></textarea>
			<radio-group class="block" @change="RadioChange" slot="ifnormal">
				<radio class='orange radio' :class="ifnormal==1?'checked':''" :checked="ifnormal==1?true:false"
					value="1"><text class="margin-left-sm">否</text></radio>
				<radio class='orange radio margin-left' :class="ifnormal==0?'checked':''"
					:checked="ifnormal==0?true:false" value="0"><text class="margin-left-sm">是</text></radio>
			</radio-group>
		</FormDetail>
	</view>
</template>

<script>
	import list from "@/common/public.js"
	import data from '@/pages/workplace/protectTask/js/detail.js';
	import {
		handleEnumData
	} from "@/common/util.js"
	//vue
	import DescriptionDetail from "@/components/DescriptionDetail/DescriptionDetail.vue"
	import FormDetail from "@/components/FormDetail/FormDetail.vue"
	import TaskCardItem from "@/components/TaskCardItem/TaskCardItem.vue"
	const self = this
	const NEW_PRODETAIL = Object.freeze({
		...list,
		...data
	})
	export default {
		onLoad() {
			this.taskId = this.$parseURL().taskId
			//拿数据
			this.getBasic()
		},
		components: {
			DescriptionDetail,
			FormDetail,
			TaskCardItem
		},
		data() {
			return {
				img: NEW_PRODETAIL.img,
				menuList: ["基本信息", "养护设备", "养护任务", "表单上报"],
				TabCur: 0,
				taskId: "",
				areaKey: "",
				basicData: [],
				devData: [],
				proAllPlanData: [],
				proForm: [],
				ifnormal: 0,
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				let menu = new Map([
					[0, "getBasic"],
					[1, "getDev"],
					[2, "getRecord"],
					[3, "getForm"]
				])
				let temp = [...menu].filter(([key, value]) => key == e.currentTarget.dataset.id)[0]
				this[temp[1]]()
			},
			getBasic() {
				this.basicData = []
				let tempData = NEW_PRODETAIL.proAllBasicData.filter(item => {
					return item.taskId == this.taskId
				})[0]
				this.basicData = NEW_PRODETAIL.proBasic.map(item => {
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
				this.devData = NEW_PRODETAIL.devData.filter(item => {
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
				this.proAllPlanData = NEW_PRODETAIL.proAllPlanData.filter(item => {
					console.log(item, this.taskId)
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
			getForm() {
				this.proForm = NEW_PRODETAIL.proPlan.filter(item => !item.hideInForm)
			},
			RadioChange(e) {
				this.ifnormal = e.detail.value
			}
		}
	}
</script>
