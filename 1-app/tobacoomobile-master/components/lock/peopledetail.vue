<template>
	<view>
		<view>
			<view class="cu-list menu sm-border">
				<view class="cu-form-group">
					<view class="title">位置：</view>
					<view class="flex-sub text-left">中国烟草总公司福建省公司机关A区域1号楼</view>
				</view>
				<view class="cu-form-group ">
					<view class="title">房间：</view>
					<view class="title flex-sub text-left">101</view>
				</view>
				<view v-if="type==3 || type==4" class="cu-form-group ">
					<view class="title">锁编号：</view>
					<view class="title flex-sub text-left">S0001</view>
				</view>
				<view class="cu-form-group">
					<view class="title">人员详细信息：</view>
				</view>
				<view class="people">
					<view class="cu-list grid col-3">
						<view class="cu-item">
							<text>姓名</text>
						</view>
						<view class="cu-item">
							<text>联系电话</text>
						</view>
						<view class="cu-item">
							<text>部门</text>
						</view>
					</view>
					<view class="cu-list grid col-3">
						<view>
							<text>张三</text>
						</view>
						<view>
							<text>15280375031</text>
						</view>
						<view>
							<text>烟叶管理处</text>
						</view>
					</view>
					<view class="cu-list grid col-3">
						<view>
							<text>李四</text>
						</view>
						<view>
							<text>13235902654</text>
						</view>
						<view>
							<text>烟叶管理处</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["type"],
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.people {
		background-color: white;
		padding-bottom: 2vh;
	}

</style>
