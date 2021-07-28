<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true" style="height: 5px;">
			<block slot="backText">返回</block><block slot="content">时间轴</block>
		</cu-custom>
		
		<view  class="padding" :class="size?'solids':'solid'" style="padding: 3px 0 3px 0;">
			<view class="cu-form-group">
				<text >选择时间</text> 
				<picker mode="date" :value="date" start="2010-01" end="2030-01"  fields='month' @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
		</view>
		
		<view class="cu-modal" :class="modalVisable==true?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">预约详情</view>
						<view class="action" @tap="hideModal1">
							<text class="cuIcon-close text-red"></text>
						</view>
					
				</view>
				
				<view class="padding-xl m-view">
					<view class="m-bottom">
						会议名称：{{curData.title}}
					</view>
					<view class="m-bottom">
						预约人：{{curData.reservations}}
					</view>
					<view class="m-bottom">
						预约人电话：{{curData.reserphone}}
					</view>
					<view class="m-bottom">
						预约时段：{{curData.time}}{{curData.period}}
					</view>
					<view class="m-bottom">
						预约会议室：{{curData.room}}
					</view>
					<view class="m-bottom">
						参会人数：{{curData.peoples}}人
					</view>
					<view class="m-bottom">
						备注：{{curData.remark}}
					</view>
				</view>
			<button  v-if="curData.tag==true" class="bg-blue cu-btn round" style="margin-top: 10px;margin-bottom: 10px;"  @tap="showModal" data-target="Modal">撤销会议</button>
			</view>
		</view>
		<view class="cu-timeline"  v-for="(item,index) in meetingdate">
			<view class="cu-item text-blue" @click="detial(item)">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>{{item.time}}</text> 
							      {{item.title}}
							<view class="margin-top">{{item.content}}</view>
						</view>
						<view class="action" style="margin-right: 8px">
							<view class="text-white text-xs">{{item.seconde}}</view>
							<view v-if="item.tag!=null ">
								<view v-if="item.tag==true" class="cu-tag round bg-green sm" >待开会</view>
								<view v-if="item.tag==false" class="cu-tag round bg-orange sm">已撤销</view>
							</view>
							<view v-else="item.tag==null " >
								<view  :class="item.color">{{item.state}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>	
			<view class="cu-modal" :class="modalName=='Modal'?'show':''">
				<view class="cu-dialog" >
					<view class="cu-bar bg-white justify-end">
						<view class="content">【提示】</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						您已成功撤销会议室预约申请
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				indexDate:0,
				date: "2021-06",
				size: false,
				tag:true,
				curData:{},
				modalVisable:false,
				meetingdate:[
					{
						reservations:"王安",
						reserphone:"15877875112",
						tag:true,
						title:"XX会议记录6",
						content:"出售烟草战略6",
						seconde:"22:20",
						time:'2021-06-07',
						period:"上午",
						room:"烟草公司.A区域.1号楼.1-205",
						detail:"会议名称：项目周例会议 预约时间：2021-06-07 上午	预约会议室:烟草公司.A区域.1号楼.1-205 会议室  参会人数:10人",
						state:"待开会",
						color:"bg-green  cu-tag round sm",
						peoples:10,
						remark:"参与人:产品组所有人  内容:第一期XX项目周例会",
					},
					{
						reservations:"王安",
						reserphone:"15877875112",
						tag:null,
						title:"XX会议记录5",
						content:"出售烟草战略5",
						seconde:"22:20",
						time:'2021-06-06',
						period:"上午",
						room:"烟草公司.A区域.1号楼.1-205",
						detail:"会议名称：项目周例会议 预约时间：2021-06-06 上午	预约会议室:烟草公司.A区域.1号楼.1-205 会议室  参会人数:10人"	,
						state:"已完成",
						color:"bg-gray  cu-tag round sm",
						peoples:10,
						remark:"参与人:产品组所有人  内容:第一期XX项目周例会",
					},
					{
						reservations:"王安",
						reserphone:"15877875112",
						tag:null,
						title:"XX会议记录4",
						content:"出售烟草战略4",
						seconde:"22:20",
						time:'2021-06-05',
						period:"上午",
						room:"烟草公司.A区域.1号楼.1-205",
						detail:"会议名称：项目周例会议 预约时间：2021-06-05 上午	预约会议室:烟草公司.A区域.1号楼.1-205 会议室  参会人数:10人"	,
						state:"已撤销",
						color:"bg-orange  cu-tag round sm",
						peoples:10,
						remark:"参与人:产品组所有人  内容:第一期XX项目周例会",
					},
					{
						reservations:"王安",
						reserphone:"15877875112",
						tag:null,
						title:"XX会议记录3",
						content:"出售烟草战略3",
						seconde:"22:20",
						time:'2021-06-04',
						period:"上午",
						room:"烟草公司.A区域.1号楼.1-205",
						detail:"会议名称：项目周例会议 预约时间：2021-06-04 上午	预约会议室:烟草公司.A区域.1号楼.1-205 会议室  参会人数:10人"	,
						state:"强制撤销",
						color:"bg-red  cu-tag round sm",
						peoples:10,
						remark:"参与人:产品组所有人  内容:第一期XX项目周例会",
					},
					{
						reservations:"王安",
						reserphone:"15877875112",
						tag:null,
						title:"XX会议记录2",
						content:"出售烟草战略2",
						seconde:"22:20",
						time:'2021-06-03',
						period:"上午",
						room:"烟草公司.A区域.1号楼.1-205",
						detail:"会议名称：项目周例会议 预约时间：2021-06-03 上午	预约会议室:烟草公司.A区域.1号楼.1-205 会议室  参会人数:10人"	,
						state:"已完成",
						color:"bg-gray  cu-tag round sm",
						peoples:10,
						remark:"参与人:产品组所有人  内容:第一期XX项目周例会",
					},
				]
			};
		},
		methods:{
			//下拉框
			DateChange(e) {
				this.date = e.detail.value
			},
			detial(item) {
				this.curData = item;
				this.modalVisable = true;
			},
			//撤销对话框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
				this.curData.tag=false;
			},
			hideModal(e) {
				this.modalName = null
			},
			hideModal1(e) {
				this.modalVisable = false
			},
		}
	}
</script>

<style>
.m-view {
	text-align: left;
}
.m-bottom {
	margin-bottom: 10rpx;
}
</style>
