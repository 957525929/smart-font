<template>
	<view class="back" style="background-color: #F5F5F5">
		<view class="noNet">
			<view class="noNet-div">
				<image src="../../static/public/noNetwork.jpg" mode="widthFix"></image>
				<view class="backBtn mainBackColor font28">
					<text class="fontColorWhite">再试一次</text>
				</view>				
			</view>

		</view>
		
	</view>
</template>

<script>
	export default{ 

	}
</script>

<style>
	.noNet{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.noNet-div{
		left: 50%;
		top: 45%;
		position: absolute;
		transform: translate(-50%,-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.noNet-div image{
		width: 400rpx;
	}
	.backBtn{
		margin-top: 10px;
		position: relative;
		width: 200rpx;
		padding: 5px 30rpx;
		border-radius: 5px;
		text-align: center;
	}
</style>
