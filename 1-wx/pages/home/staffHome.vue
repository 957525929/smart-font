<template>
	<view>
		<scroll-view scroll-y class="page bg-white">
			<view class="banner">
				<image src="/static/workplace/banner.png" mode="widthFix" class='response banner-back'></image>
				<view class="banner-title">预约管理</view>
			</view>

			<view class="nav-list">
				<navigator hover-class="none" :url="item.route" class="nav-li" navigateTo :class="'bg-'+item.color"
					:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements"
					:key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.enName}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '申请记录',
						name: 'applyList',
						color: 'red',
						cuIcon: 'calendar',
						enName: 'ApplyList',
						route: '/pages/index/staff?PageCur=applyList'
					},
					{
						title: '预约行程',
						name: 'trip',
						color: 'blue',
						cuIcon: 'taxi',
						enName: 'Trip',
						route: '/pages/index/staff?PageCur=trip'
					},
					{
						title: '个人中心',
						name: 'person1',
						color: 'cyan',
						cuIcon: 'people',
						enName: 'Person',
						route: '/pages/index/staff?PageCur=person1'
					},
				],
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style scoped>
	.page {
		height: 100vh;
	}

	.banner {
		position: relative;
	}

	.banner-title {
		width: 400rpx;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: '黑体';
		font-size: 100rpx;
		background-image: -webkit-linear-gradient(90deg, rgb(77, 205, 240), rgb(116, 226, 230), rgb(218, 247, 246));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.nav-li {
		width: 100%;
	}
</style>
