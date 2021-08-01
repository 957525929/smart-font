<template>
  <view>
    <cu-custom  bgColor="bg-gradual-blue"  :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">会议室预约</block>
    </cu-custom>
    <form>
      <view class="cu-form-group margin-top">
        <view class="title">预约人姓名</view>
        <input v-model="meetingdata.reservations" name="input"></input>
      </view>
      <view class="cu-form-group">
        <view class="title">预约人电话</view>
        <input v-model="meetingdata.phone" name="input"></input>
      </view>
      <view class="cu-form-group">
        <view class="title">会议名称</view>
        <input v-model="meetingdata.name" name="input"></input>
      </view>
      <view class="cu-form-group" style="margin-top: 10px;">
        <text class="cuIcon-title text-orange" ></text>参会人数
        <input  v-model="meetingdata.peoples"  name="input"  style="padding-left: 10px;"></input>
      </view>
      <view class="cu-form-group">
        <text class="cuIcon-title text-orange "></text> 会议日期
        <picker mode="date" :value="date" start="2015-09-01" end="2030-09-01" @change="DateChange">
          <view class="picker">
            {{meetingdata.time}}
          </view>
        </picker>
      </view>
      <view class="cu-form-group">
        <text class="cuIcon-title text-orange "></text> 会议时段
        <picker @change="PickerChange" :value="index" :range="time">
          <view class="picker">
            {{meetingdata.period}}
          </view>
        </picker>
      </view>
      <view class="cu-bar bg-white margin-top" style="margin-top: 0;">
        <view class="action">
          <text ></text> 基本条件
        </view>
        <view class="action">
          <button class="cu-btn bg-green shadow" @tap="showModal" data-target="ChooseModal">选择</button>
        </view>
      </view>
      <view class="bg-white margin-top" style="margin-top: 0;">
        <view style="margin-left: 3%;">
          <view v-for="item in checkbox" v-if="item.checked" class="cu-tag round bg-blue light" style="font-size: 14.5px;">{{item.name}}</view>
        </view>
      </view>
      <view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
        <view class="cu-dialog" @tap.stop="">
          <view class="cu-bar bg-white">
            <view class="action text-blue" @tap="hideModal">取消</view>
            <view class="action text-green" @tap="hideModal">确定</view>
          </view>
          <view class="grid col-3 padding-sm">
            <view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
              <button class="cu-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox"
                      :data-value="item.value"> {{item.name}}
              </button>
            </view>
          </view>
        </view>
      </view>
      <view class="cu-form-group">
        <view class="title">会议地点</view>
        <picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
          <view class="picker" style="font-size: 15px;">
            {{multiArray[0][multiIndex[0]]}}.{{multiArray[1][multiIndex[1]]}}.{{multiArray[2][multiIndex[2]]}}
          </view>
        </picker>

        <!-- <text class='cuIcon-locationfill text-orange'></text> -->
      </view>
      <view class="cu-form-group align-start">
        <view class="title">备注</view>
        <textarea maxlength="-1" name="input" v-model="meetingdata.remark" ></textarea>
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
            您已成功提交会议室预约申请
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
      time: ['上午','下午','晚上','全天'],
      switchA: false,
      switchB: true,
      modalName: null,
      radio: 'radio1',
      //条件选择
      checkbox: [{
        value: 0,
        name: '茶水',
        checked: true,
      }, {
        value: 1,
        name: '投影仪',
        checked: true,
      }, {
        value: 2,
        name: '白板',
        checked: true,
      }, {
        value: 3,
        name: '电脑',
        checked: true,
      }, {
        value: 4,
        name: '空调',
        checked: true,
      }, {
        value: 5,
        name: '摄像机',
        checked: true,
      }],
      //会议室选择
      multiIndex: [0, 0, 0],
      multiArray: [
        ['A区域', 'B区域'],
        ['1号楼', '2号楼','3号楼'],
        ['1-105','1-205','1-305','1-405'],
      ],
      meetingdata:{
        reservations:"王安",
        phone:"15877875112",
        name:"项目周例会",
        peoples:"10人",
        time:"2021-07-25",
        period:"上午",
        condition:["白板","投影仪"],
        room:"A区域.1号楼.1-105",
        remark:"参与人:产品组所有人                                      内容:第一期XX项目周例会",
      },
    };
  },
  onLoad(option) {
    this.curData=JSON.parse(option.curData);
    this.meetingdata.name=this.curData.title;
    this.meetingdata.peoples=this.curData.peoples;
    this.meetingdata.time=this.curData.time;
    this.meetingdata.period=this.curData.period;
    this.meetingdata.remark=this.curData.remark;
    console.log("主页面",this.meetingdata);
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
    //条件选择
    ChooseCheckbox(e) {
      console.log(e)
      let items = this.checkbox;
      let values = e.currentTarget.dataset.value;
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        if (items[i].value == values)
        {
          console.log("当前选中",items[i].name)
          items[i].checked = !items[i].checked;
          break
        }
      }

    },
    //会议室选择
    MultiChange(e) {
      this.multiIndex = e.detail.value
    },
    MultiColumnChange(e) {
      let data = {
        multiArray: this.multiArray,
        multiIndex: this.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['1号楼', '2号楼','3号楼'];
              data.multiArray[2] = ['1-105','1-205','1-305','1-405'];
              break;
            case 1:
              data.multiArray[1] = ['4号楼', '5号楼'];
              data.multiArray[2] = ['4-106','4-206','4-306','4-406'];
              break;
          }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:
          switch (data.multiIndex[0]) {
            case 0:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['1-105','1-205','1-305','1-405'];
                  break;
                case 1:
                  data.multiArray[2] = ['2-301','2-302','2-303','2-304'];
                  break;
                case 2:
                  data.multiArray[2] = ['3-101','3-102','3-103','3-104'];
                  break;
                  // case 3:
                  // 	data.multiArray[2] = ['4-205','4-206'];
                  // 	break;
                  // case 4:
                  // 	data.multiArray[2] = ['5-101','5-102','5-103'];
                  // 	break;
              }
              break;
            case 1:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['4-106','4-206','4-306','4-406'];
                  break;
                case 1:
                  data.multiArray[2] = ['5-303', '5-304'];
                  break;
                  // case 2:
                  // 	data.multiArray[2] = ['8-205', '8-206', '8-207'];
                  // 	break;
              }
              break;
          }
          data.multiIndex[2] = 0;
          break;
      }
      this.multiArray = data.multiArray;
      this.multiIndex = data.multiIndex;
    },
  }
}
</script>

<style>
.cu-form-group {
  font-size: 15px;
}
.cu-form-group .title {
  min-width: calc(4em + 15px);
}

.box {
  margin: 20upx 0;
}

.box view.cu-bar {
  margin-top: 20upx;
}
.cardItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
  width: 300px;
  flex-wrap: wrap;
  color: #000000;
}
</style>

