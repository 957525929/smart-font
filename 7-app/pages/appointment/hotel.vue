<template>
  <view>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">酒店预订</block>
    </cu-custom>

    <form :model="hoteldata">
      <view class="cu-form-group margin-top">
        <view class="title">预约人姓名</view>
        <input  v-model="hoteldata.reservations" name="input"></input>
      </view>
      <view class="cu-form-group">
        <view class="title">预约人电话</view>
        <input v-model="hoteldata.reserphone"  name="input"></input>
      </view>
      <view class="cu-form-group margin-top">
        <view class="title">预约时间</view>
		
        <picker mode="date" :value="date" start="2021-07-19" end="2025-09-01" @change="DateChange">
          <view class="picker">
            {{hoteldata.starttime}}
          </view>
        </picker>
        至
        <picker mode="date" :value="date" start="2021-07-19" end="2025-09-01" @change="DateChange1">
          <view class="picker">
            {{hoteldata.endtime}}
          </view>
        </picker>
        <!-- <text >共{{}}天</text> -->
      </view>
      <view class="cu-form-group margin-top"  @tap="showModal1">
        <view class="title" >酒店预定</view>{{details[index].name}}
		<text class="cuIcon-right text-blue" style="font-size: 20px;"></text>
        <!-- <picker @change="PickerChange" :value="index" :range="hotels" >
          <view class="picker">
            {{hotels[index]}}
          </view>
        </picker> -->
      </view>
      <view class="cu-form-text">
        <view class="title"  style="font-size: 15px;">酒店详情</view>
        <view class="padding-xl m-view" style="margin-left: 80px; padding: 0;">
		<!-- <view class="m-bottom">
			酒店名：{{details[index].name}}
		</view> -->
          <view class="m-bottom">
            地址：{{details[index].address}}
          </view>
          <view class="m-bottom">
            星级：{{details[index].star}}
          </view>
          <view class="m-bottom">
            价格：{{details[index].price}}
          </view>
          <view class="m-bottom">
            联系人：{{details[index].linkpoeple}}
          </view>
          <view class="m-bottom">
            电话：{{details[index].phone}}
			<text class="cuIcon-phone text-green" style="font-size: 20px;" @tap="call(details[index].phone)"></text>
          </view>
        </view>

      </view>

      <view class="cu-form-group align-start">
        <view class="title">备注</view>
        <textarea maxlength="-1" v-model="hoteldata.remark"   name="input"></textarea>
      </view>
      <view class="box">
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
            您已成功联系协议酒店
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
      modalName: null,
      modalName1: null,
      time: '12:01',
      date: '2021-07-19',
      date1: '2021-07-20',
      switchA: false,
      switchB: true,
	  pages:"",
	  prevPage:"",
	  currPage:"",
      //协议酒店
      index: 0,
      hotels: ['福州富力威斯汀酒店', '福州品悦酒店', '福州世纪金源酒店'],
      details:[
        {name:'福州富力威斯汀酒店',address:'福州江滨中大道366号',price:'135-215',star:'五星级',linkpoeple:'李霞',phone:'13759655332'},
        {name:'福州品悦酒店',address:'福州东浦路59号	',price:'120~190',star:'四星级',linkpoeple:'尤晓梅',phone:'13053955537'},
        {name:'福州世纪金源酒店',address:'福州温泉公园路59号',price:'120~180',star:'四星级',linkpoeple:'黄丽娟',phone:'13659655381'},
      ],
      hoteldata:
          {
            reservations:"王安",
            reserphone:"15877875112",
            starttime:"2021-07-19",
            endtime:"2021-07-20",
            name: '',
            hotel:"",
            address:'',
            linkman:'',
            telephone:'',
            remark: " 两间双人间                                                入住人:刘嘉林,李查,林夕,郑华",
          },

    };
  },
  // onLoad(option) {
  // 	this.index=JSON.parse(option.index);
  	
  // 	console.log("2",this.index);
  // },
  onShow:function() {
	  console.log("index",this.index)
      this.pages = getCurrentPages(); 
      this.currPage = this.pages[this.pages.length-1];
	    console.log("index",this.currPage)
      this.index=this.currPage.index;//这就是传递的参数
	  console.log("2",this.index);
  },
  methods: {
    TimeChange(e) {
      this.time = e.detail.value
    },
    DateChange(e) {
      console.log(e)
      this.hoteldata.starttime = e.detail.value
    },
    DateChange1(e) {
      this.hoteldata.endtime = e.detail.value

    },
    SwitchA(e) {
      this.switchA = e.detail.value
    },
    SwitchB(e) {
      this.switchB = e.detail.value
    },
    showModal(e) {
      console.log("完成",e)
      this.modalName = e.currentTarget.dataset.target
    },
    hideModal(e) {
      this.modalName = null
      console.log(this.hoteldata);
    },

    //酒店选择
    showModal1(e) {
      console.log("打开详情",e)
      console.log(111);
      uni.navigateTo({
      	url: './hotellist'
      });
    },
    hideModal1(e) {
      this.modalName1 = null
    },
    PickerChange(e) {

      console.log(e.detail.value)
      this.index = e.detail.value;
      this.hoteldata.hotel=this.hotels[this.index];

    },
	call(e){
		uni.makePhoneCall({
			phoneNumber:e
		})
	},
  }
}
</script>

<style>
.cu-form-group .title {
  min-width: calc(4em + 15px);
}

.cu-form-text {
  background-color: #ffffff;
  padding: 1upx 30upx;
  align-items: center;
  min-height: 100upx;
  justify-content: space-between;

}
.box {
  margin: 20upx 0;
  bottom: 10px;
}

.box view.cu-bar {
  margin-top: 20upx;
}
</style>
