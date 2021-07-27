<template>
	<view class="back backColor">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="back">返回</block>
			<block slot="content">司机工作详情</block>
		</cu-custom>
		<view class="backColor">
			<form>
				<view class="cu-form-group">
					<view class="title">车牌号</view>
					<input value="测A123401" name="user"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用车人</view>
					<input value="姜轶枫" name="user"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用车人电话</view>
					<input value="13756372788" name="phone"></input>
					<view class="cu-capsule radius">
						<view class='cu-tag bg-blue '>
							+86
						</view>
						<view class="cu-tag line-blue">
							中国大陆
						</view>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">用车事由</view>
					<input value="公务出差"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">出发地</view>
					<input value="福建省福州市闽侯县创业大厦"></input>
					<text class='cuIcon-locationfill text-orange'></text>
				</view>
				<view class="cu-form-group">
					<view class="title">目的地</view>
					<input value="南安市自然资源局"></input>
					<text class='cuIcon-locationfill text-orange'></text>
				</view>
				<view class="cu-form-group">
					<view class="title">往返类型</view>
					<input value="单程"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用车时间</view>
					<input value="2021-07-18 15:00"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">收车时间</view>
					<input value="2021-07-18 17:00"></input>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
