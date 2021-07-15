<template>
	<view>
		<cu-custom bgColor="bg-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		<view class="cu-list menu sm-border card-menu margin-top">
			<view class="cu-form-group">
				<view class="title">位置：</view>
				<view class="title flex-sub text-left">福建烟草总公司机关A区域1号楼</view>
			</view>
			<view class="cu-form-group ">
				<view class="title">房间：</view>
				<view class="title flex-sub text-left">101</view>
			</view>
			<view class="cu-form-group">
				<view class="title">人员详细信息：</view>
			</view>
			<view class="people">
				<view>
					<view>
						<text>姓名</text>
					</view>
					<view>
						<text>联系电话</text>
					</view>
				</view>
				<view>
					<view>
						<text>张三</text>
					</view>
					<view>
						<text>15280375031</text>
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

			}
		},
		methods: {

		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.people {
		height: 30vh;
		background-color: white;
	}
</style>
