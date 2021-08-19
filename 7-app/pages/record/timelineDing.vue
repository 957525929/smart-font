<template>
  <view>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true" style="height: 5px;">
      <block slot="backText">返回</block><block slot="content">时间轴</block>
    </cu-custom>

    <view  class="padding" :class="size?'solids':'solid'" style="padding: 3px 0 3px 0;">
      <view class="cu-form-group">
        <text >选择时间范围</text>
        <!-- <picker mode="date" :value="date" start="2010-01" end="2030-01"  fields='month' @change="DateChange"> -->
        <picker mode="date" :value="date" start="2010-01-01" end="2090-01-01"   @change="DateChange">
          <view class="picker">
            {{date}}
          </view>
        </picker>
        <picker mode="date" :value="enddate" start="2010-01-01" end="2090-01-01"   @change="DateChange1">
          <view class="picker">
            {{enddate}}
          </view>
        </picker>
      </view>
    </view>
    <view class="cu-modal" :class="modalVisable==true?'show':''">
      <view class="cu-dialog">
        <view class="cu-bar bg-white justify-end">
          <view class="content">预约详情</view>
          <view class="action" @tap="hideModal1">
            <text class="cuIcon-close text-red"></text>
          </view>
        </view>
        <view class="padding-xl m-view">
          <view class="m-bottom">
            【食堂对接人】：{{curData.reservations}}
          </view>
          <view class="m-bottom">
            【食堂对接人电话】：{{curData.reserphone}}   <button class="smallBtn"  @tap="call(curData.reserphone)">拨打</button>
          </view>
          <view class="m-bottom">
            【预约时段】：{{curData.time}}{{curData.period}}
          </view>
          <view class="m-bottom">
            【吃饭人数】：{{curData.peoples}}人
          </view>
          <view class="m-bottom">
            【备注】：{{curData.remark}}
          </view>
        </view>
        <button  v-if="curData.state=='已预约'" class="bg-blue cu-btn round" style="margin-top: 10px;margin-bottom: 10px;"  @tap="showModal" data-target="Modal">取消预约</button>
        
      </view>
    </view>
    <view class="cu-timeline"  v-for="(item,index) in meetingdate">
      <view class="cu-item text-blue" @click="detial(item)">
        <view class="cu-list menu-avatar radius" >
          <view class="cu-item bg-gradual-blue">
            <view class="content" style="left: 8px;">
              <text>{{item.time}}</text>
              {{item.period}}
             <view class="margin-top">预计{{item.peoples}}人</view>
            </view>
            <view class="action" style="margin-right: 8px">
              <view class="text-white text-xs">{{item.seconde}}</view>
              <view  :class="item.color">{{item.state}}</view>
            </view>
          </view>
        </view>
      </view>
      <view class="cu-modal" :class="modalName=='Modal'?'show':''">
        <view class="cu-dialog" >
          <view class="cu-bar bg-white justify-end">
            <view class="content">【提示】</view>
            <view class="action" @tap="hideModal">
              <text class="cuIcon-close text-red"></text>
            </view>
          </view>
          <view class="padding-xl">
            您已成功取消食堂就餐预约申请
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
      modalName: null,
      modalName1: null,
      indexDate:0,
      date: "2021-06-01",
      enddate:"2021-08-30",
      size: false,
      //tag:true,
      curData:{},
      modalVisable:false,
      meetingdate:[
        {
          reservations:"胡樟",
          reserphone:"15877875112",
          time:'2021-08-04',
          period:"午餐",
          state:"已预约",
          color:"bg-green  cu-tag round sm",
          peoples:10,
          remark:"需要饭菜口味偏甜，少辣",
        }, 
		{
		  reservations:"胡樟",
		  reserphone:"15877875112",
		  time:'2021-07-04',
		  period:"晚餐",
		  state:"已完成",
		  color:"bg-gray  cu-tag round sm",
		  peoples:8,
		  remark:"需要饭菜口味偏香辣",
		}, 
      ]
    };
  },
  methods:{
    //下拉框
    DateChange(e) {
      this.date = e.detail.value
    },
    DateChange1(e) {
      this.enddate = e.detail.value
    },
    detial(item) {
      this.curData = item;
      this.modalVisable = true;
    },
    //撤销对话框
    showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
      this.curData.state="已完成";
      this.curData.color="bg-gray  cu-tag round sm";
    },
    hideModal(e) {
      this.modalName = null
    },
    hideModal1(e) {
      this.modalVisable = false
    },
    showModal2(e,curData) {
      //console.log("111",e,item)
      //this.itemdata=curData;
      this.modalName1 = e.currentTarget.dataset.target;
      //console.log("111",this.itemdata)
    },
    hideModal2(e) {
      this.modalName1 = null
    },
    call(telephone){
    	// if (util.phoneAvailable(telephone)) {
    		uni.makePhoneCall({
    			phoneNumber:telephone
    		})
    	//}
    }
   
  }
}
</script>

<style>
.m-view {
  text-align: left;
}
.m-bottom {
  margin-bottom: 10rpx;
}
.smallBtn {
	background-color: rgba(39, 161, 118, 1);
	color: #fff;
	border-radius: 25px;
	line-height: 20px;
	font-size: 12px;
	display: inline-block;
	margin-left: 10px;
}
</style>

