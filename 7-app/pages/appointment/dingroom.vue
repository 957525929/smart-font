<template>
	<view>
	  <cu-custom  bgColor="bg-gradual-blue"  :isBack="true">
	    <block slot="backText">返回</block>
	    <block slot="content">食堂预订</block>
	  </cu-custom>
	  <form>
	    <view class="cu-form-group">
	      <text class="cuIcon-title text-orange "></text> 预订日期
	      <picker mode="date" :value="date" start="2015-09-01" end="2030-09-01" @change="DateChange">
	        <view class="picker">
	          {{dingroomdata.time}}
	        </view>
	      </picker>
	    </view>
	  <view class="cu-form-group" style="margin-top: 10px;">
	      <text class="cuIcon-title text-orange "></text> 预订时段
	      <picker @change="PickerChange" :value="index" :range="time">
	        <view class="picker">
	          {{dingroomdata.period}}
	        </view>
	      </picker>
	    </view>
		<view class="cu-form-group" style="margin-top: 10px;">
	      <text class="cuIcon-title text-orange" ></text>预计人数
	      <input  v-model="dingroomdata.peoples"  name="input"  style="padding-left: 10px;"></input>
	    </view>
	    <view class="cu-form-group align-start"  style="margin-top: 10px;">
	      <view class="title">备注</view>
	      <textarea maxlength="-1" name="input" v-model="dingroomdata.remark" ></textarea>
	    </view>
	   <view class="box"  style="margin-top: 10px;">
	      <view class="cu-bar btn-group">
	        <button class="cu-btn bg-orange shadow-blur round lg" @tap="showModal" data-target="Modal">提交</button>
	      </view>
	    </view>
	    <view class="cu-modal" :class="modalName=='Modal'?'show':''">
	      <view class="cu-dialog">
	        <view class="cu-bar bg-white justify-end">
	          <view class="content">【提示】</view>
	          <view class="action" @tap="hideModal">
	            <text class="cuIcon-close text-red"></text>
	          </view>
	        </view>
	        <view class="padding-xl">
	          您已成功提交食堂预约申请
	        </view>
	      </view>
	    </view>
	  </form>
	</view>
</template>

<script>
	export default {
	  data() {
	    return {
	      // time: '08:00',
	      // timeend:'09:00',
	      date: '2021-07-25',
	      curData:"",
	      index: 0,
	      time: ['早餐','午餐','晚餐','全天'],
	      switchA: false,
	      switchB: true,
	      modalName: null,
	      radio: 'radio1',
		  dingroomdata:{
			  time:"2021-07-25",
			  period:"午餐",
			  peoples:"10",
			  remark:" 需要饭菜口味偏甜，少辣 ",
		  },
	    };
	  },
	  methods: {
	    //时段选择
	    PickerChange(e) {
	      this.index = e.detail.value
	      this.meetingdata.period=this.time[this.index]
	    },
	    DateChange(e) {
	      this.meetingdata.time = e.detail.value
	    },
	    SwitchA(e) {
	      this.switchA = e.detail.value
	    },
	    SwitchB(e) {
	      this.switchB = e.detail.value
	    },
	    showModal(e) {
	      this.modalName = e.currentTarget.dataset.target
	      console.log(this.meetingdata)
	    },
	    hideModal(e) {
	      this.modalName = null
	    },
	    RadioChange(e) {
	      this.radio = e.detail.value
	    }, 
	  }
	}
</script>

<style>
</style>
