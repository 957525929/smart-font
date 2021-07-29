<template>
  <!-- 会议室预约 -->
  <a-card :bordered="false">
    <div class="meetingApply">
      <table class="meetingInfo">
        <tbody>
          <tr>
            <td colspan="2">
              <label :style="{marginLeft:'100px'}">预约人姓名</label>
              <div class="bgc">
                <a-input placeholder="请输入负责人姓名" :style="{width:'80%'}" v-model="responsibleName"></a-input>
              </div>
            </td>
            <td>
              <label :style="{marginLeft:'100px'}">预约人电话</label>
              <div class="bgc">
                <a-input placeholder="请输入预约人电话" :style="{width:'60%'}" v-model="responsibleTel"></a-input>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label :style="{marginLeft:'100px'}">会议名称</label>
              <div class="bgc">
                <a-input placeholder="请输入会议名称" :style="{width:'80%'}" v-model="meetingName"></a-input>
              </div>
            </td>
            <td>
              <label :style="{marginLeft:'100px'}">参会人数</label>
              <div class="bgc">
                <a-input placeholder="请输入参会人数" :style="{width:'60%'}" v-model="meetingNumber"></a-input>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label :style="{marginLeft:'100px'}">会议时间</label>
              <div class="bgc">
                <a-date-picker
                  placeholder="请选择开始"
                  :style="{width:'210px'}"
                  :format="dateFormat"
                  :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"
                ></a-date-picker>
                <span>&nbsp;~&nbsp;</span>
                <a-date-picker
                  placeholder="请选择结束"
                  :format="dateFormat"
                  :style="{width:'210px'}"
                  :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"
                ></a-date-picker>
              </div>
            </td>
            <td colspan="2">
              <label :style="{marginLeft:'100px'}">会议时段</label>
              <div class="bgc">
                <a-select v-model="meetingRange" placeholder="请选择时段" :style="{width:'60%'}">
                  <a-select-option value="上午">上午</a-select-option>
                  <a-select-option value="下午">下午</a-select-option>
                  <a-select-option value="晚上">晚上</a-select-option>
                  <a-select-option value="全天">全天</a-select-option>
                </a-select>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label :style="{marginLeft:'100px'}">基本条件</label>
              <div class="bgc">
                <a-checkbox
                  :indeterminate="indeterminate"
                  :checked="checkAll"
                  @change="onCheckAllChange"
                >全部</a-checkbox>
                <br />
                <a-checkbox-group
                  v-model="meetingCondition"
                  :options="plainOptions"
                  @change="onChangeCond"
                />
              </div>
            </td>
            <td colspan="2">
              <label :style="{marginLeft:'100px'}">会议地点</label>
              <div class="bgc">
                <a-cascader
                  :options="optionsRoom"
                  placeholder="请选择会议室"
                  v-model="meetingRoom"
                  @change="onChangeRoom"
                  style="width: 500px"
                  :display-render="displayRender"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <label :style="{marginLeft:'100px'}">备注</label>
              <div class="bgc">
                <a-textarea
                  v-model="meetingComments"
                  placeholder="请输入会议备注信息"
                  :auto-size="{ minRows: 3, maxRows: 5 }"
                  :style="{width:'80%'}"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <a-button
                @click="submitApply"
                shape="round"
                size="large"
                :style="{ width: '150px', background: '#77acf1', color: 'white',marginLeft:'40%'}"
              >提交申请</a-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </a-card>
</template>
<script>
import moment from 'moment'
import { dataRoom } from './data/dataRoom.js'
const plainOptions = ['茶水', '白板', '空调', '投影仪', '电脑', '摄像机']
const optionsRoom = [
  {
    value: '中国烟草总公司福建省公司机关',
    label: '中国烟草总公司福建省公司机关',
    children: [
      {
        value: 'A区域',
        label: 'A区域',
        children: [
          {
            value: '1号楼',
            label: '1号楼',
            children: [
              {
                value: '会议室203',
                label: '会议室203'
              },
              {
                value: '会议室204',
                label: '会议室204'
              }
            ]
          },
          {
            value: '2号楼',
            label: '2号楼',
            children: [
              {
                value: '会议室204',
                label: '会议室204'
              },
              {
                value: '会议室205',
                label: '会议室205'
              }
            ]
          }
        ]
      },
      {
        value: 'B区域',
        label: 'B区域',
        children: [
          {
            value: '1号楼',
            label: '1号楼',
            children: [
              {
                value: '会议室204',
                label: '会议室204'
              },
              {
                value: '会议室205',
                label: '会议室205'
              }
            ]
          }
        ]
      }
    ]
  }
]
export default {
  data() {
    return {
      responsibleName: '王安',
      responsibleTel: '15877875112',
      meetingName: '安全管理会议',
      meetingNumber: '6',
      meetingRange: '全天',
      dateFormat: 'YYYY年MM月DD日', //会议时间
      meetingComments: '参与人：产品组所有人',
      plainOptions,
      indeterminate: true,
      checkAll: false,
      meetingCondition: ['茶水', '白板', '空调'],
      optionsRoom,
      meetingRoom: [],
      dataRoom: dataRoom
    }
  },
  methods: {
    moment,
    getCurrentData() {
      return new Date().toLocaleDateString()
    },
    submitApply() {},
    onChangeCond(checkedList) {
      console.log('条件', checkedList)
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length
      this.checkAll = checkedList.length === plainOptions.length
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        meetingCondition: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    },
    displayRender({ labels }) {
      return labels.join('.')
    },
    onChangeRoom() {}
  }
}
</script>

<style>
.meetingApply {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.meetingInfo {
  flex: 4;
  font-size: 14px;
  font-weight: bold;
  border-collapse: separate;
  /* border: 2px solid #f0f2f5; */
}

.meetingInfo tr td {
  margin-right: 10px;
}
.meetingInfo tr:nth-of-type(1) td {
  width: 20%;
  margin-top: 20px;
}
.meetingInfo tr td .bgc {
  padding: 6px 6px;
  border-radius: 10px;
  margin-left: 80px;
  font-weight: normal;
}
</style>
