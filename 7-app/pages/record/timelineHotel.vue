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
			
			<view class="cu-item text-blue" @click="modalVisable1 = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-05</text> 
							<view class="margin-top">福州富力威斯汀酒店酒店预定</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item text-blue" @click="modalVisable2 = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item  bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-06</text> 
							<view class="margin-top">福州品悦酒店酒店预定</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cu-item text-blue" @click="modalVisable3 = true">
				<view class="cu-list menu-avatar radius" >
					<view class="cu-item  bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>2021-06-07</text> 
							<view class="margin-top">福州世纪金源酒店酒店预定</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-modal" :class="modalVisable1==true?'show':''">
				<view class="cu-dialog" style="height: 30%;">
					<view class="cu-bar bg-white justify-end">
						<view class="content">预订详情</view>
						<view class="action" @tap="modalVisable1 = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:65%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="预定酒店：福州富力威斯汀酒店
											预约时间：2021-06-5号至8号(共3天)
											酒店地址:福州江滨中大道366号
											联系人:李霞   电话号码:13759655332
											备注:两间标间,入住人:刘嘉林,李查,林夕,郑华
											"
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
						<view class="content">预订详情</view>
						<view class="action" @tap="modalVisable2 = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:65%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="预定酒店：福州品悦酒店
											预约时间：2021-06-06号至10号(共4天)
											酒店地址:福州东浦路59号
											联系人:尤晓梅   电话号码:13053955537
											备注:一间标间,入住人:刘毅,吴查
											"
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
						<view class="content">预订详情</view>
						<view class="action" @tap="modalVisable3 = false">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="padding: 0px;height:100%;">
						<view class="cu-form-group align-start"  style="height:65%;">
							<textarea maxlength="-1" disabled=true @input="textareaBInput"  style="height:100%;text-align:left;"
							placeholder="预定酒店：福州世纪金源酒店
											预约时间：2021-06-07号至09号(共2天)
											酒店地址:福州温泉公园路59号
											联系人:黄丽娟   电话号码:13659655381
											备注:一间大床房,入住人:张钰
											"
							>
							</textarea>
							</br>
						</view>
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
				indexDate:0,
				date: "2021-06",
				size: false,
				modalVisable: false,
				modalVisable1: false,
				modalVisable2: false,
				modalVisable3: false,
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
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style>

</style>