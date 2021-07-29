<template>
	<view>
		
		<view v-for="(item,index) in applylist" :key="index">
			<!-- 判断传递过来的值显示对应状态 -->
			<view v-if="item.id==value">
				<view class="card" @tap="recordDetail(item)">
					<span>
						<!-- 显示不同图片 -->
						<image class="card-img" :src="imgSrc[item.status]" mode="scaleToFill"
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
						<view :style="styleObject[item.status]">
							{{item.type}}
						</view>
<!-- 						<view class="text-red" style="margin-top: 18px;" @tap="showModal" data-target="DialogModal1">
							{{item.cancel}}
						</view> -->
					</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
						id:'0',
						status:'0',
						type:"审核中",
						cancel: '撤回',
						startTime:"14.00",
						endTime:"16.00"
					},
					// {
					// 	visit: '李二喜',
					// 	department: '财务管理处',
					// 	time: new Date().getFullYear() + "年" +
					// 		(new Date().getMonth() + 1) + "月" +
					// 		(new Date().getDate()) + "日" + " " + "09:05",
					// 	id:'0',
					// 	status:'0',
					// 	type:"审核中",
					// 	cancel: '撤回',
					// 	startTime:"15.00",
					// 	endTime:"17.00",
					// },
					{
						visit: '张冰冰',
						department: '财务管理处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth() + 1) + "月" +
							(new Date().getDate()) + "日" + " " + "11:20",
						id:'0',
						status:'1',
						type:"通过",
						cancel: '撤回',
						startTime:"12.30",
						endTime:"14.00"
					},
					// {
					// 	visit: '王莎莎',
					// 	department: '审计处',
					// 	time: new Date().getFullYear() + "年" +
					// 		(new Date().getMonth() - 1) + "月" +
					// 		(new Date().getDate() + 5) + "日" + " " + "09:00",
					// 	agreeTime: new Date().getFullYear() + "年" +
					// 		(new Date().getMonth() - 1) + "月" +
					// 		(new Date().getDate() + 5) + "日" + " " + '10:24',
					// 	id:'0',
					// 	status:'1',
					// 	type:"通过",
					// 	startTime:"13.30",
					// 	endTime:"15.00"
						
					// },
					{
						visit: '孙逸仙',
						department: '科技处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() + 10) + "日" + " " + "10:00",
						agreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() + 10) + "日" + " " + '11:42',
						id:'0',
						status:'2',
						type:"驳回",
						startTime:"15.30",
						endTime:"17.00"
					},
					// {
					// 	visit: '王宇轩',
					// 	department: '人事处',
					// 	time: new Date().getFullYear() + "年" +
					// 		(new Date().getMonth() + 1) + "月" +
					// 		(new Date().getDate()) + "日" + " " + "11:30",
					// 	agreeTime: new Date().getFullYear() + "年" +
					// 		(new Date().getMonth() + 1) + "月" +
					// 		(new Date().getDate()) + "日" + " " + '12:18',
					// 	id:'0',
					// 	status:'2',
					// 	type:"驳回",
					// 	startTime:"14.30",
					// 	endTime:"16.30"
					// },
					{
						visit: '林雨馨',
						department: '安全管理处',
						time: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 20) + "日" + " " + "12:18",
						disagreeTime: new Date().getFullYear() + "年" +
							(new Date().getMonth()) + "月" +
							(new Date().getDate() - 20) + "日" + " " + '13:24',
						id:'1',
						status:'1',
						disagree:'11',
						startTime:"14.00",
						endTime:"16.00"
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
						id:'1',
						status:'1',
						disagree:'11',
						startTime:"15.30",
						endTime:"17.00"
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

		props: {
			value: String
		},

		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			recordDetail(item){
				// console.log(e)
				this.$emit("send",item)			
			}
		}
	}
</script>

<style>
	.card {
		margin: 5px 10px 10px 10px;
		background-color: white;
		height: 90px;
		display: flex;
		border-radius: 10px;
		align-items: center;
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
