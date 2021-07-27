<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">保养任务详情</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''"
					v-for="(item,index) in menuList" :key="item.label" @tap="tabSelect" :data-id="index">
					{{item.value}}
				</view>
			</view>
		</scroll-view>
		<view class="cu-card article" v-if="comType==='TaskCardItem'">
			<TaskCardItem v-for="item in sourceData" :key="item.devId" :item="item"></TaskCardItem>
		</view>
		<DescriptionDetail v-else-if="comType==='DescriptionDetail'" :dataSource="sourceData" :picList="img">
		</DescriptionDetail>
		<FormDetail v-else-if="comType==='FormDetail'" :dataSource="sourceData">
			<textarea slot="reason" placeholder="请输入" class="bg-grey radius margin"></textarea>
			<textarea slot="handle" placeholder="请输入" class="bg-grey radius margin"></textarea>
			<picker mode="time" :value="time" :start="time" @change="TimeChange" slot="ficDoneTime">
				<view class="picker">
					{{time}}
				</view>
			</picker>
			<picker mode="date" :value="date" :start="date" @change="DateChange" slot="ficDoneDate">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</FormDetail>
	</view>
</template>

<script>
	import list from "@/common/public.js"
	import data from '@/pages/workplace/protectTask/js/index.js';
	import {
		getNow,
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
			//获取当前时间
			this.date = getNow()[0].join("-")
			this.time = getNow()[1].join(":")
			//拿数据
			this.getData('proAllBasicData', 'proBasic')
		},
		components: {
			DescriptionDetail,
			FormDetail,
			TaskCardItem
		},
		computed: {
			comType() {
				return this.menuList[this.TabCur].comType
			}
		},
		data() {
			return {
				img: NEW_PRODETAIL.img,
				TabCur: 0,
				taskId: "",
				currentData:[],
				sourceData: [],
				menuList: [{
					label: "proAllBasicData",
					value: "基本信息",
					dataIndex: "proBasic",
					comType: "DescriptionDetail",
					key:"taskId"
				}, {
					label: "devData",
					value: "养护设备",
					dataIndex: "proDev",
					comType: "TaskCardItem",
					key:"devId"
				}, {
					label: "proAllPlanData",
					value: "养护记录",
					dataIndex: "proPlan",
					comType: "DescriptionDetail"
				}, {
					label: "proForm",
					value: "表单上报",
					dataIndex: "proForm",
					comType: "FormDetail",
					key:"taskId"
				}],
				//time-picker
				date: "",
				time: ""
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.matchData(this.menuList[this.TabCur].label,this.menuList[this.TabCur].key)
				this.getData(this.menuList[this.TabCur].label,this.menuList[this.TabCur].dataIndex)
			},
			matchData(name,key){
				if (name !== "proForm") {
					this.currentData = NEW_PRODETAIL[name].filter(item => {
						return item[key] == this.taskId
					})[0]
				} 			
			},
			getData(name,dataIndex) {
				this.sourceData = []
				if (name !== "proForm") {
					this.sourceData = NEW_PRODETAIL[dataIndex].filter(i => !i.hideInDetail).map(item => {
						if (item.valueEnum && item.valueEnum.length !== 0) {
							item.value = handleEnumData(item.valueEnum, this.currentData[item.key])
						} else {
							item.value = this.currentData[item.key]
						}
						return item
					})
				} else {
					this.sourceData = NEW_PRODETAIL[dataIndex]
				}
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
		}
	}
</script>
