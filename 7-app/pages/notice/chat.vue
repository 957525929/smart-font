<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">系统通知</block></cu-custom>
		<view class="cu-chat">
			<view class="cu-item"  @tap="showModal" >
				<view class="cu-avatar radius" style="background-image:url(../../static/notice/面性信息信息短信消息.png);"></view>
				<view class="main">
					<view class="content shadow">
						<text>您于2021-07-20上午9：00有一个会议，地点位于XXX</text>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view>
			
			
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow">发送</button>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0,
				modalName: null,
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
</style>
