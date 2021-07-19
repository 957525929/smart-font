<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom  bgColor="bg-gradual-blue"  :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">消息通知</block>
			</cu-custom>
			<view class="cu-bar bg-white solid-bottom margin-top">
						<view class="action">
							<text class="cuIcon-title text-orange "></text> 消息列表
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(../../static/notice/面性信息信息短信消息.png);"></view>
								<view class="content" >
									<navigator  :url="'/pages/notice/' +'chat'"  >
									<view class="text-cut">来自 系统 的公告</view>
									<view class="text-gray text-sm flex">
										<view class="text-cut">
											<text class="cuIcon-infofill text-red  margin-right-xs"></text>
											您于2021-07-20上午9：00有一个会议，地点位于XXX
										</view> 
									</view>
									</navigator>
								</view>
							
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								 <view class="cu-tag round bg-red sm">1</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(../../static/notice/面性信息信息短信消息.png)">
								<!-- <view class="cu-tag badge">99+</view> -->
							</view>
							<view class="content">
								<view class="text-cut">来自 系统 的公告</view>
									<!-- <view class="cu-tag round bg-orange sm">重要会议</view> -->
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										您于2021-07-19上午9：00有一个会议，地点位于XXX
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<!-- <view class="cuIcon-notice_forbid_fill text-gray"></view> -->
							</view>
						</view>
						<view class="cu-item ">
							<view class="cu-avatar radius lg" style="background-image:url(../../static/notice/面性信息信息短信消息.png);"></view>
							<view class="content">
								<view class="text-cut"><view class="text-cut">来自 系统 的公告</view></view>
								<view class="text-gray text-sm flex"> <view class="text-cut">您于2021-07-18上午9：00有一个会议，地点位于XXX</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<!-- <view class="cu-tag round bg-red sm">5</view> -->
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar radius lg" style="background-image:url(../../static/notice/面性信息信息短信消息.png);"></view>
								<view class="content">
									<view class="text-cut">来自 系统 的公告</view>
										<!-- <view class="cu-tag round bg-orange sm">会议未参加...</view> -->
									<view class="text-gray text-sm flex"> <view class="text-cut"> 您于2021-07-17上午9：00有一个会议，地点位于XXX
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<!-- <view class="cu-tag round bg-red sm">5</view> -->
							</view>
						</view>
						<view class="cu-item cur">
							<view class="cu-avatar radius lg" style="background-image:url(../../static/notice/面性信息信息短信消息.png);">
								<!-- <view class="cu-tag badge"></view> -->
							</view>
							<view class="content">
								<view>
									<view class="text-cut">来自 系统 的公告</view>
									<!-- <view class="cu-tag round bg-orange sm">重要会议</view> -->
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">来自 系统 的公告<text class="cuIcon-locationfill text-orange margin-right-xs"></text>  您于2021-07-17上午9：00有一个会议，地点位于XXX
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
							</view>
						</view>
					</view>
				</scroll-view>
	</view>
</template>

<script>
	import goTo from '../component/router.js'
	export default {
		data() {
			return {
				modalName: null,
			};
		},
		methods:{
			gotoDetail() {
				console.log("详情跳转")
				this.$navTo.goTo('chat')
			}
		}
		
	}
</script>

<style>
</style>
