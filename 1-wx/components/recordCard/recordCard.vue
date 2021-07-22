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
						<view v-if="cardType.id==1">
							通过时间：{{item.agreeTime}}
						</view>
						<view v-if="cardType.id==2">
							拒绝时间：{{item.disagreeTime}}
						</view>
					</span>
					<span class="card-right">
						<!-- 切换不同颜色 -->
						<view :style="styleObject[cardType.id]">
							{{item.type}}
						</view>
						<view class="text-red" style="margin-top: 18px;" @tap="showModal" data-target="DialogModal1">
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
						visit: '赵大华',
						department: '财务管理处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + "08:00",
						type: '待审核',
						cancel: '撤回'
					},
					{
						visit: '李二喜',
						department: '财务管理处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + "09:05",
						type: '待审核',
						cancel: '撤回'
					},
					{
						visit: '张冰冰',
						department: '财务管理处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + "11:20",
						type: '待审核',
						cancel: '撤回'
					},
					{
						visit: '王莎莎',
						department: '审计处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() - 1) + "月" +
							(new Date().getDate() + 5) + "日" + " " + "09:00",
						agreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth() - 1) + "月" +
							(new Date().getDate() + 5) + "日" + " " + '10:24',
						type: '已通过',
					},
					{
						visit: '孙逸仙',
						department: '科技处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() + 10) + "日" + " " + "10:00",
						agreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() + 10) + "日" + " " + '11:42',
						type: '已通过',
					},
					{
						visit: '王宇轩',
						department: '人事处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + "11:30",
						agreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + '12:18',
						type: '已通过',
					},
					{
						visit: '林雨馨',
						department: '安全管理处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 20) + "日" + " " + "12:18",
						disagreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '13:24',
						type: '已拒绝',
					},
					{
						visit: '王尼玛',
						department: '烟叶管理处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + "13:20",
						disagreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth()+1) + "月" +
							(new Date().getDate()) + "日" + " " + '14:34',
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
		height: 90px;
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
