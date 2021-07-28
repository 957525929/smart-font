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

		<DescriptionDetail :dataSource="basicData" :picList="img" v-if="TabCur===0"></DescriptionDetail>
		<view class="cu-card article" v-else-if="TabCur===1">
			<TaskCardItem :item="item" v-for="item in devData" :key="item.areaKey" hideTitleIcon></TaskCardItem>
			</view>
				<DescriptionDetail :dataSource="devData" :picList="img" v-else-if="TabCur===2"></DescriptionDetail>
				<FormDetail :dataSource="basicData" v-else-if="TabCur===3">
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
			this.getBasic()
			// this.getDev()
		},
		components: {
			DescriptionDetail,
			FormDetail,
			TaskCardItem
		},
		data() {
			return {
				img: NEW_PRODETAIL.img,
				TabCur: 0,
				taskId: "",
				areaKey: "",
				basicData: [],
				devData: [],
				menuList: [{
					label: "proAllBasicData",
					value: "基本信息",
					dataIndex: "proBasic"
				}, {
					label: "devData",
					value: "养护设备",
					dataIndex: "proDev"
				}, {
					label: "proAllPlanData",
					value: "养护记录",
					dataIndex: "proPlan"
				}, {
					label: "proForm",
					value: "表单上报",
					dataIndex: "proForm"
				}],
				//time-picker
				date: "",
				time: ""
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				let menu = new Map([
					[0, "getBasic"],
					[1, "getDev"],
					[2, "getBasic"],
					[3, "getBasic"]
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
				let self = this
				this.devData = NEW_PRODETAIL.devData.filter(item => {
					return item.areaKey == self.areaKey
				}).map(item => {
					return {
						taskId: 0,
						titleLeft: item.devName,
						titleRight: item.devId,
						content: item.devType,
						footerRight: item.manufacturer
					}
				})
				console.log(this.devData)
				// this.devData = NEW_PRODETAIL.proDev.filter(i=>!i.hideInDetail).map(item => {
				// 	item.value = tempData[item.key]
				// 	return item
				// })
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
