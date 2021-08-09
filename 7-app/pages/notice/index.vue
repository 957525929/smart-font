<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">消息通知</block>
			</cu-custom>
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 消息列表
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item" @click="modalVisable = true">
					<view class="cu-avatar radius lg">
						<!-- 显示不同图片 -->
						<image  src="../../static/notice/message.png" mode="scaleToFill" style="width: 55px; height: 55px;"></image>
					</view>
					<!-- <view class="cu-avatar radius  lg" style="background-image:url(../../static/notice/消息.png);">
					</view> -->
					<view class="content">
						<!-- <navigator  :url="'/pages/notice/' +'chat'"  > -->
						<view class="text-cut">【会议室预约通知】</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<!-- <text class="cuIcon-infofill text-red  margin-right-xs"></text> -->
								您于2021-07-20上午预约的会议，已预约成功。
							</view>
						</view>
						<!-- </navigator> -->
					</view>

					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-red sm">1</view>
					</view>
				</view>
				<view class="cu-item"  @click="modalVisable1 = true">
					<view class="cu-avatar radius lg">
						<!-- 显示不同图片 -->
						<image  src="../../static/notice/notice.png" mode="scaleToFill" style="width: 55px; height: 55px;"></image>
					</view>
					<!-- <view class="cu-avatar radius lg" style="background-image:url(../../static/notice/提醒.png)">
						
					</view> -->
					<view class="content">
						<view class="text-cut">【会议室预约通知】</view>
						<!-- <view class="cu-tag round bg-orange sm">重要会议</view> -->
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<text class="  margin-right-xs"></text>
								您于2021-07-19上午预约的会议，已被撤销。
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">23:00</view>
						<view class="cu-tag round bg-red sm">1</view>
						<!-- <view class="cuIcon-notice_forbid_fill text-gray"></view> -->
					</view>
				</view>
				<view class="cu-item ">
					<view class="cu-avatar radius lg">
						<!-- 显示不同图片 -->
						<image  src="../../static/notice/message.png" mode="scaleToFill" style="width: 55px; height: 55px;"></image>
					</view>
					<!-- <view class="cu-avatar radius lg" style="background-image:url(../../static/notice/消息.png);">
					</view> -->
					<view class="content">
						<view class="text-cut">
							<view class="text-cut">【会议室预约通知】</view>
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								您于2021-07-19上午预约的会议，已预约成功。
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<!-- <view class="cu-tag round bg-red sm">5</view> -->
					</view>
				</view>
				<view class="cu-item">
					<view class="cu-avatar radius lg">
						<!-- 显示不同图片 -->
						<image  src="../../static/notice/message.png" mode="scaleToFill" style="width: 55px; height: 55px;"></image>
					</view>
<!-- 					<view class="cu-avatar radius lg" style="background-image:url(../../static/notice/消息.png);"> -->
					<!-- </view> -->
					<view class="content">
						<view class="text-cut">【会议室预约通知】</view>
						<!-- <view class="cu-tag round bg-orange sm">会议未参加...</view> -->
						<view class="text-gray text-sm flex">
							<view class="text-cut"> 
								您于2021-07-18上午预约的会议，已预约成功。
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<!-- <view class="cu-tag round bg-red sm">5</view> -->
					</view>
				</view>
				<view class="cu-item cur">
					<view class="cu-avatar radius lg">
						<!-- 显示不同图片 -->
						<image  src="../../static/notice/message.png" mode="scaleToFill" style="width: 55px; height: 55px;"></image>
					</view>
					<!-- <view class="cu-avatar radius lg" style="background-image:url(../../static/notice/消息.png);">
						<view class="cu-tag badge"></view> 
					</view> -->
					<view class="content">
						<view>
							<view class="text-cut">【会议室预约通知】</view>
							<!-- <view class="cu-tag round bg-orange sm">重要会议</view> -->
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<!-- <text class="cuIcon-locationfill text-orange margin-right-xs"></text> -->
								您于2021-07-17上午预约的会议，已预约成功。
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="cu-modal" :class="modalVisable==true?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">【会议室预约通知】</view>
					<view class="action" @tap="modalVisable = false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl" style="text-align:left;">您于2021-07-20上午预约的会议，已预约成功。</view>
				<!-- <view class="padding-xs">日期：2021-07-20</view>
				<view class="padding-xs">时间：上午9：00 </view>
				<view class="padding-xs">地点：XXX</view> -->
			</view>
		</view>
		
		<view class="cu-modal" :class="modalVisable1==true?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">【会议室预约通知】</view>
					<view class="action" @tap="modalVisable1 = false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl"  style="text-align:left;">您于2021-07-19上午预约的会议，已被撤销。具体原因：XXX</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import goTo from '../component/router.js'
	export default {
		data() {
			return {
				modalName: null,
				modalVisable: false,
				modalVisable1: false,
			};
		},
		methods: {
			gotoDetail() {
				console.log("详情跳转")
				this.$navTo.goTo('chat')
			},
		}

	}
</script>

<style>
	.cu-avatar.lg {
		height: 55px;
		width: 55px;
	}
</style>
