<template>
	<view class="text-gray">
		<cu-custom bgColor="bg-purple" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">维修详情</block>
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
		<FormDetail :dataSource="fixForm" v-else-if="TabCur===1">
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
			<view class="handCenter" slot="ownerWrite">
				<canvas class="handWriting bg-grey" disable-scroll="true" @touchstart="uploadScaleStart"
					@touchmove="uploadScaleMove" @touchend="uploadScaleEnd" canvas-id="handWriting">
				</canvas>
			</view>
		</FormDetail>
	</view>
</template>

<script>
	import Handwriting from "./js/signature.js"
	import list from "./js/index.js"
	import {
		getNow
	} from "@/common/util.js"
	//vue
	import DescriptionDetail from "@/components/DescriptionDetail/DescriptionDetail.vue"
	import FormDetail from "@/components/FormDetail/FormDetail.vue"
	const NEW_FIXDETAIL = Object.freeze(list)
	export default {
		onLoad() {
			this.taskId = this.$parseURL().taskId
			this.date = getNow()[0].join("-")
			this.time = getNow()[1].join(":")
			//拿数据
			this.getBasic()
			//手写板
			this.handwriting = new Handwriting({
				lineColor: "black",
				slideValue: 50,
				canvasName: 'handWriting'
			})
		},
		components: {
			DescriptionDetail,
			FormDetail
		},
		data() {
			return {
				menuList: ["基本信息", "维修上报"],
				img: NEW_FIXDETAIL.img,
				TabCur: 0,
				taskId: "",
				basicData: [],
				fixForm: [],
				date: "",
				time: ""
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				if (this.TabCur === 0) {
					this.getBasic()
				} else if (this.TabCur === 1) {
					this.getForm()
				}

			},
			getBasic() {
				this.basicData = []
				let tempData = NEW_FIXDETAIL.taskAllBasicData.filter(item => {
					return item.taskId == this.taskId
				})[0]
				this.basicData = NEW_FIXDETAIL.fixBasic.map(item => {
					item.value = tempData[item.key]
					if (item.key === "areaKey") {
						this.areaKey = tempData[item.key]
					}
					return item
				}).filter(i => !i.hideInDetail)
			},
			getForm() {
				this.fixForm = NEW_FIXDETAIL.fixRecord.filter(item => !item.hideInForm)
				console.log()
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			uploadScaleStart(event) {
				this.handwriting.uploadScaleStart(event)
			},
			uploadScaleMove(event) {
				this.handwriting.uploadScaleMove(event)
			},
			uploadScaleEnd(event) {
				this.handwriting.uploadScaleEnd(event)
				this.handwriting.saveCanvas().then(res => {
					// this.showimg = res;
					console.log(res);
				}).catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>

<style>
	.handCenter {
		border: 2upx dashed #e9e9e9;
		flex: 3;
		overflow: hidden;
		box-sizing: border-box;
		width: 100%;
		margin: 10upx auto;
	}
</style>