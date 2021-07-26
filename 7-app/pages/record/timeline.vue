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
		<view class="cu-timeline">
			<view class="cu-item text-blue" @click="modalVisable = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-07</text> 
							无记录
						</view>
						<view class="action" style="margin-right: 8px">
							<view class="text-white text-xs">22:20</view>
							<view v-if="tag==true" class="cu-tag round bg-green sm" >待开会</view>
							<view v-if="tag==false" class="cu-tag round bg-orange sm">已撤销</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue" @click="modalVisable1 = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-06</text> 
							XX会议记录5
							<view class="margin-top">出售烟草战略5</view>
						</view>
						<view class="action" style="margin-right: 8px">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-gray sm">已完成</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue" @click="modalVisable2 = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-05</text> 
							XX会议记录4
							<view class="margin-top">出售烟草战略4</view>
						</view>
						<view class="action" style="margin-right: 8px">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-orange sm">已撤销</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue" @click="modalVisable3 = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-04</text> 
							XX会议记录3
							<view class="margin-top">出售烟草战略3</view>
						</view>
						<view class="action" style="margin-right: 8px">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-red sm">强制撤销</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item text-blue" @click="modalVisable4 = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-03</text> 
							XX会议记录1
							<view class="margin-top">出售烟草战略2</view>
						</view>
						<view class="action" style="margin-right: 8px">
							<view class="text-white text-xs">22:20</view>
							<view class="cu-tag round bg-gray sm">已完成</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-modal" :class="modalVisable==true?'show':''">
				<view class="cu-dialog" style="height: 30%;">
					<view class="cu-bar bg-white justify-end">
						<view class="content">预约详情</view>
						<view class="action" @tap="modalVisable = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:55%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="会议名称：项目周例会议
											预约时间：2021-06-07 上午 
											预约会议室:烟草公司.A区域.1号楼.1-205 会议室
											参会人数:10人"
							>
							</textarea>
							</br>
						</view>
						<button  v-if="tag==true" class="bg-blue cu-btn round" style="margin-top: 10px;"  @tap="showModal" data-target="Modal">撤销会议</button>
					</view>
				</view>
			</view>
			<view class="cu-modal" :class="modalVisable1==true?'show':''">
				<view class="cu-dialog" style="height: 30%;">
					<view class="cu-bar bg-white justify-end">
						<view class="content">预约详情</view>
						<view class="action" @tap="modalVisable1 = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:55%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="会议名称：项目周例会议
											预约时间：2021-06-06 上午 
											预约会议室:烟草公司.A区域.1号楼.1-205 会议室
											参会人数:10人"
							>
							</textarea>
							</br>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-modal" :class="modalVisable2==true?'show':''">
				<view class="cu-dialog" style="height: 30%;">
					<view class="cu-bar bg-white justify-end">
						<view class="content">预约详情</view>
						<view class="action" @tap="modalVisable2 = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:55%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="会议名称：项目周例会议
											预约时间：2021-06-05 上午 
											预约会议室:烟草公司.A区域.1号楼.1-205 会议室
											参会人数:10人"
							>
							</textarea>
							</br>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-modal" :class="modalVisable3==true?'show':''">
				<view class="cu-dialog" style="height: 30%;">
					<view class="cu-bar bg-white justify-end">
						<view class="content">预约详情</view>
						<view class="action" @tap="modalVisable3 = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:55%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="会议名称：项目周例会议
											预约时间：2021-06-04 上午 
											预约会议室:烟草公司.A区域.1号楼.1-205 会议室
											参会人数:10人"
							>
							</textarea>
							</br>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-modal" :class="modalVisable4==true?'show':''">
				<view class="cu-dialog" style="height: 30%;">
					<view class="cu-bar bg-white justify-end">
						<view class="content">预约详情</view>
						<view class="action" @tap="modalVisable4 = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:55%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="会议名称：项目周例会议
											预约时间：2021-06-03 上午 
											预约会议室:烟草公司.A区域.1号楼.1-205 会议室
											参会人数:10人"
							>
							</textarea>
							</br>
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
				modalVisable: false,
				modalVisable1: false,
				modalVisable2: false,
				modalVisable3: false,
				modalVisable4: false,
				size: false,
				tag:true
			};
		},
		methods:{
			//下拉框
			DateChange(e) {
				this.date = e.detail.value
			},
			//撤销对话框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
				this.tag=false;
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style>

</style>
