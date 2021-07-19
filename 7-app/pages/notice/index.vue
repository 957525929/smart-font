<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">列表</block>
			</cu-custom>
			<view class="cu-bar bg-white solid-bottom margin-top">
						<view class="action">
							<text class="cuIcon-title text-orange "></text> 消息列表
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(../../static/notice/面性信息信息短信消息.png);"></view>
							<view class="content">
								<view class="text-grey">来自 系统 的公告</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										<text class="cuIcon-infofill text-red  margin-right-xs"></text>
										您于2021-07-17上午9：00有一个会议，地点位于XXX
									</view> </view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(../../static/notice/面性设置齿轮.png)">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">
									<view class="text-cut">来自 系统 的公告</view>
									<view class="cu-tag round bg-orange sm">重要会议</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										您于2021-07-17上午9：00有一个会议，地点位于XXX
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
						<view class="cu-item ">
							<view class="cu-avatar radius lg" style="background-image:url(../../static/notice/面性时间时钟表.png);"></view>
							<view class="content">
								<view class="text-pink"><view class="text-cut">来自 系统 的公告</view></view>
								<view class="text-gray text-sm flex"> <view class="text-cut">您于2021-07-17上午9：00有一个会议，地点位于XXX</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item grayscale">
							<view class="cu-avatar radius lg" style="background-image:url(../../static/notice/面性销售价格标签价签.png);"></view>
							<view class="content">
								<view><view class="text-cut">来自 系统 的公告</view>
									<view class="cu-tag round bg-orange sm">会议未参加...</view>
								</view>
								<view class="text-gray text-sm flex"> <view class="text-cut"> 您于2021-07-17上午9：00有一个会议，地点位于XXX</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item cur">
							<view class="cu-avatar radius lg" style="background-image:url(../../static/notice/面性信息信息短信消息.png);">
								<view class="cu-tag badge"></view>
							</view>
							<view class="content">
								<view>
									<view class="text-cut">来自 系统 的公告</view>
									<view class="cu-tag round bg-orange sm">重要会议</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">来自 系统 的公告<text class="cuIcon-locationfill text-orange margin-right-xs"></text>  您于2021-07-17上午9：00有一个会议，地点位于XXX</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
					</view>
				</scroll-view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
	
			};
		},
		
	}
</script>

<style>
</style>
