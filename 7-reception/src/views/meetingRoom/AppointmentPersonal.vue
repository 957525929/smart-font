<template>
  <a-card :bordered="false">
    <a-row type="flex" align="middle">
      <a-col :span="1"></a-col>
      <a-col>
        <span>预约人姓名：</span>
      </a-col>
      <a-col>
        <a-input placeholder="请输入负责人姓名" :style="{width:'300px'}" v-model="responsibleName"></a-input>
      </a-col>
      <a-col :span="2"></a-col>
      <a-col>
        <span>预约人电话：</span>
      </a-col>
      <a-col>
        <a-input placeholder="请输入预约人电话" :style="{width:'300px'}" v-model="responsibleTel"></a-input>
      </a-col>
    </a-row>
    <br />
    <a-row type="flex" align="middle">
      <a-col :span="1"></a-col>
      <a-col>
        <span>会议名称：</span>
      </a-col>
      <a-col>
        <a-input placeholder="请输入会议名称" :style="{width:'300px'}" v-model="meetingName"></a-input>
      </a-col>
      <a-col :span="2"></a-col>
      <a-col>
        <span>参会人数：</span>
      </a-col>
      <a-col>
        <a-input placeholder="请输入参会人数" :style="{width:'300px'}" v-model="meetingNumber"></a-input>
      </a-col>
    </a-row>
    <br />
    <a-row type="flex" align="middle">
      <a-col :span="1"></a-col>
      <a-col>
        <span>会议日期：</span>
      </a-col>
      <a-col>
        <a-date-picker
          placeholder="请选择开始"
          :style="{width:'200px'}"
          :format="dateFormat"
          :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"
        ></a-date-picker>
        <span>&nbsp;~&nbsp;</span>
        <a-date-picker
          placeholder="请选择结束"
          :format="dateFormat"
          v-model="dateEnd"
          :style="{width:'200px'}"
          :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"
        ></a-date-picker>
      </a-col>
      <a-col :span="2"></a-col>
      <a-col>
        <span>时段：</span>
      </a-col>
      <a-col>
        <a-select v-model="meetingRange" placeholder="请选择时段"    :style="{width:'300px'}">
          <a-select-option value="上午">上午</a-select-option>
          <a-select-option value="下午">下午</a-select-option>
          <a-select-option value="晚上">晚上</a-select-option>
          <a-select-option value="全天">全天</a-select-option>
        </a-select>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      responsibleName: '王安',
      responsibleTel: '15877875112',
      meetingName: '',
      meetingNumber: '',
      meetingRange: '全天',
            dateFormat: 'YYYY年MM月DD日', //会议时间
    }
  },
  methods: {
    moment,
    getCurrentData() {
      return new Date().toLocaleDateString()
    }
  }
}
</script>