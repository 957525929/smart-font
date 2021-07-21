<template>
	<view>
		<view v-for="(item,index) in applylist" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.type==cardType.type">
				<view class="card">
					<span>
						<!-- 显示不同图片 -->
						<image class="card-img" :src="imgSrc[cardType.id]" mode="scaleToFill"
							style="width: 60px; height: 60px;"></image>
					</span>
					<span class="card-center">
						<view>
							被访人：{{item.visit}}
						</view>
						<view>
							被访部门：{{item.department}}
						</view>
						<view>
							申请时间：{{item.time}}
						</view>
					</span>
					<span class="card-right">
						<!-- 切换不同颜色 -->
						<view :style="styleObject[cardType.id]">
							{{item.type}}
						</view>
						<view class="text-red" style="margin-top: 17px;" @tap="showModal" data-target="DialogModal1">
							{{item.cancel}}
						</view>
					</span>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">撤回</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					是否确定撤回？
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// created: function() {

		// 	let aData = new Date();

		// 	this.date =
		// 		aData.getFullYear() + "年" +
		// 		(aData.getMonth() + 1) + "月" +
		// 		(aData.getDate()) + "日"  

		// },
		data() {
			return {
				// date:'',
				modalName: null,
				applylist: [{
						visit: '张三',
						department: '信息中心',
						time: '2020年1月21日 13:46',
						type: '待审核',
						cancel: '撤回'
					},
					{
						visit: '李四',
						department: '机关服务中心',
						time: '2020年1月21日 13:46',
						type: '待审核',
						cancel: '撤回'
					},
					{
						visit: '王五',
						department: '财务管理处',
						time: '2020年1月21日 13:46',
						type: '待审核',
						cancel: '撤回'
					},
					{
						visit: '张三',
						department: '审计处',
						time: '2020年1月21日 13:46',
						type: '已通过',
					},
					{
						visit: '李四',
						department: '科技处',
						time: '2020年1月21日 13:46',
						type: '已通过',
					},
					{
						visit: '王五',
						department: '人事处',
						time: '2020年1月21日 13:46',
						type: '已通过',
					},
					{
						visit: '魏佳楠',
						department: '安全管理处',
						time: '2020年1月21日 13:46',
						type: '已拒绝',
					},
					{
						visit: '赵六',
						department: '烟叶管理处',
						time: '2020年1月21日 13:46',
						type: '已拒绝',
					},
				],
				// 图片
				imgSrc: [
					"../../static/待审核.png",
					"../../static/已通过.png",
					"../../static/已拒绝.png"
				],
				// 颜色
				styleObject: [{
						color: '#3f7dcc',
						fontSize: '16px',
					},
					{
						color: '#31bb50',
						fontSize: '16px',
					},
					{
						color: '#f93c3c',
						fontSize: '16px',
					},
				],

			}
		},

		props: ["cardType"],

		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style>
	.card {
		margin: 5px 10px 0px 10px;
		background-color: white;
		height: 70px;
		display: flex;
		border-radius: 10px;
	}

	.card-img {
		margin: 5px;
	}

	.card-center {
		margin-top: 5px;
	}

	.card-right {
		margin-left: 30px;
		margin-top: 5px;
	}

	.card-type {
		color: #3f7dcc;
		font-size: 16px;
	}
</style>
