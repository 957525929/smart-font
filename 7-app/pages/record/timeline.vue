<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block><block slot="content">时间轴</block></cu-custom>
		<view class="cu-timeline">
			<view class="cu-time">2021</view>
			<view class="cu-item cur cuIcon-noticefill">
				<view class="content bg-green shadow-blur">
					<text>2021-06-04</text> 
					无记录
				</view>
			</view>
			<view class="cu-item text-red cuIcon-attentionforbidfill">
				<view class="content bg-red shadow-blur">
					<text>2021-06-05</text> 
					<view class="margin-top">出售烟草战略1
					</view>
				</view>
			</view>
			<view class="cu-item text-grey cuIcon-evaluate_fill">
				<view class="content bg-red shadow-blur">
					<text>2021-06-06</text> 
					XX会议记录1
					<view class="margin-top">出售烟草战略2
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue content">
					<text>2021-06-07</text>
					XX会议记录2
					<view class="margin-top">出售烟草战略3
					</view>
				</view>
				<view class="bg-cyan content">
					<text>2021-06-08</text>
					XX会议记录3
				</view>
			</view>
		</view>

	<!-- 	<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue shadow-blur content">
					<view class="cu-list menu-avatar radius">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content">
								<view class="text-grey">文晓港</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-infofill text-red"></text> 消息未送达</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">文晓港
									<view class="cu-tag round orange sm">SVIP</view>
								</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-redpacket_fill text-red"></text> 收到红包</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<text class="cuIcon-notice_forbid_fill text-gray"></text>
							</view>
						</view>
					</view>
				</view>
			</view> -->
	
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
