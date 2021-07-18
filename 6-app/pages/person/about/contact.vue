<template>
	<view class="back secBack">
		<view v-for="(item, index) in contact" :key="index" class="card">
			<view class="card-left">
				<view class="" style="width: 80rpx; height: 80rpx;"><text :class="item.imgUrl" class="icons"></text>
				</view>
				<text class="fontColorMain font32">{{ item.title }}</text>
			</view>

			<iframe class="con-content font24 framediv" :srcdoc="item.content"></iframe>
		</view>
	</view>
</template>

<script>
	// import uniIcons from '../../../../components/public/uni-icons/uni-icons';
	import {contact } from "../../../../common/person/person.js";
	const NEW_CONTACT = Object.freeze({contact})
	import {
		judgeNull
	} from "@/common/util.js"
	export default {
		data() {
			return {
				contact:NEW_CONTACT.contact,
			};
		},
		onLoad() {
			let self = this;
			this.contact.map(item => {
				this.personApi['getContact']().then((res) => {
					item.content = judgeNull(res) ? res : "暂无";
				})
				return item
			})
		},
	};
</script>

<style>
	.framediv {
		border: none;
		width: 400rpx;
		height: 80rpx;
	}

	.icons {
		color: #27a176;
		font-size: 30px;
		line-height: 40px;
	}

	.card-left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.back {
		display: flex;
		flex-direction: column;
	}

	.card {
		padding: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.con-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 30rpx;
		/* height: 100%; */
	}

	iframe {
		height: 100%;
		width: 100%;
	}
</style>
