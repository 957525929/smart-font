<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true" style="height: 5px;">
			<block slot="backText">返回</block>
			<block slot="content">时间轴</block>
		</cu-custom>
		<view class="padding" :class="size?'solids':'solid'" style="padding: 3px 0 3px 0;">
			<view class="cu-form-group">
				<text>选择时间</text>
				<picker mode="date" :value="date" start="2010-01" end="2030-01" fields='month' @change="DateChange">
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
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl m-view">
					<view class="m-bottom">
						预订时间：{{curData.time}}
					</view>
					<view class="m-bottom">
						酒店名称：{{curData.name}}
					</view>
					<view class="m-bottom">
						酒店位置：{{curData.address}}
					</view>
					<view class="m-bottom">
						联系人：{{curData.linkman}}
					</view>
					<view class="m-bottom">
						手机号：{{curData.telephone}}
					</view>
					<view class="m-bottom">
						备注：{{curData.remark}}
					</view>
				</view>
			</view>
		</view>
		<view class="cu-timeline" v-for="(item,index) in hoteldate">
			<view class="cu-item text-blue" @click="detial(item)">
				<view class="cu-list menu-avatar radius">
					<view class="cu-item bg-gradual-blue">
						<view class="content" style="left: 8px;">
							<text>{{item.time}}</text>
							<view class="margin-top">{{item.name}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="cu-modal" :class="modalVisable2==true?'show':''">
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
			</view> -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexDate: 0,
				date: "2021-06",
				size: false,
				k: "",
				modalVisable:false,
				curData:{},
				// modalVisable: false,
				// modalVisable1: false,
				// modalVisable2: false,
				// modalVisable3: false,
				hoteldate: [{
						time: '2021-06-05',
						name: '福州富力威斯汀酒店预定',
						address:'福州东浦路',
						linkman:'李霞',
						telephone:'13759655332',
						remark: "两间标间,入住人:刘嘉林,李查,林夕,郑华"
					},
					{
						time: '2021-06-06',
						name: '福州品悦酒店',
						address:'福州东浦路59号',
						linkman:'尤晓梅',
						telephone:'13053955537',
						remark: "备注:一间标间,入住人:刘毅,吴查"
					},
					{
						time: '2021-06-07',
						name: '福州温泉公园路59号',
						linkman:'林梅',
						telephone:'13053955097',
						remark: "一间标间,入住人:刘毅,吴查"
					},
				]
			};
		},
		methods: {
			//下拉框
			DateChange(e) {
				this.date = e.detail.value
			},
			//撤销对话框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
			},
			hideModal(e) {
				this.modalVisable = false
			},
			detial(item) {
				this.curData = item;
				this.modalVisable = true;
			}
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
