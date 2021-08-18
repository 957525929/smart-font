<template>
  <div>
    <a-card>
      <!-- <a-row type="flex"> -->
      <!-- <a-col :span="8"> -->
      <span>位置：</span>
      <a-cascader
        style="width: 30%"
        :options="selectOptions"
        change-on-select
        @change="areaChange"
        :default-value="['0']"
        placeholder="请选择位置"
        :display-render="displayRender"
      />

      <!-- <br /><br /><br />

          <span>房间：</span>
          <a-input style="width: 85%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

          <br /><br /><br /> -->

      <!-- <a-row type="flex"> -->
      <!-- <a-col> -->
      <a-divider type="vertical" />
      <a-button @click="check">查询</a-button>
      <a-divider type="vertical" />
      <a-button @click="showConfirm">导出</a-button>
      <!-- </a-col> -->
      <!-- </a-row> -->
      <!-- </a-col> -->
      <!-- <a-col :span="8">
          <span>
            <div class="bartitle">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 安装次数统计：</div>
            <br />
            <Pie :dataSource="dataSource" :height="180" />
          </span>
        </a-col>
        <a-col :span="8"></a-col> -->
      <!-- </a-row> -->
    </a-card>
    <!-- <a-card>
      <a-table :columns="columns" :data-source="data"></a-table>
    </a-card> -->
    <div class="countcard">
      <a-card class="leftcard">
        <div class="lccontent">
          <div style="font-weight: bold; margin-bottom: 20px">智能锁安装总体完成量</div>
          <a-progress type="circle" status="success" :percent="75" :format="(percent) => percent + '%'" />
        </div>
        <div style="margin-top: 20px">
          <span style="margin-right: 20px; font-weight: bold">已完成:75</span>
          <span style="font-weight: bold">需完成:100</span>
        </div>
      </a-card>
      <a-card class="rightcard">
        <div class="rccontent">
          <div style="font-weight: bold; maring: 20px">月智能锁增长折线图</div>
          <LineChartMultid style="width: 50vw" :aliases="aliases" :dataSource="dataSource" />
        </div>
      </a-card>
    </div>
    <div class="countcard">
      <a-card class="leftcard1">
        <div class="lc1content">
          <div style="font-weight: bold; margin-top: 20px; margin-left: 20px">各区域智能锁安装完成量</div>
          <Mutibar />
        </div>
      </a-card>
      <a-card class="rightcard1">
        <div class="rc1content">
          <div style="font-weight: bold; margin: 20px">各区域每天平均安装量</div>
          <NanD/>
        </div>
      </a-card>
      <a-card class="rightcard1">
        <div class="rc1content">
          <!-- <div style="font-weight: bold; margin: 20px">各区域每天平均安装量</div>
          <NanD/> -->
        </div>
      </a-card>
    </div>
  </div>
</template>
<script>
import { areaData } from '../../components/roomManager/data/area.js'

import LineChartMultid from '@/components/chart/LineChartMultid'
import Mutibar from './components/mutibar.vue'
import NanD from './components/NanD.vue'
// import Pie from '@/components/chart/Pie'
// import { installcount } from './data/installdata.js'

// const columns = [
//   { title: '位置', dataIndex: 'area', key: 'area', width: '40%' },
//   { title: '智能锁已安装', dataIndex: 'install', key: 'install', width: '15%' },
//   { title: '智能锁未安装', dataIndex: 'uninstall', key: 'uninstall' },
// ]

export default {
  data() {
    return {
      selectOptions: areaData,
      // roomNum: '',
      // dataSource: [
      //   { item: '已安装', count: 192 },
      //   { item: '未安装', count: 108 },
      // ],
      // data: installcount,
      // columns: columns,
      dataSource: [
        { type: '1月', jeecg: 0 },
        { type: '2月', jeecg: 30 },
        { type: '3月', jeecg: 67 },
        { type: '4月', jeecg: 90 },
        { type: '5月', jeecg: 100 },
        { type: '6月', jeecg: 100 },
        { type: '7月', jeecg: 110 },
        { type: '8月', jeecg: 150 },
      ],
      aliases: [{ field: 'jeecg', alias: '智能锁' }],
    }
  },
  components: {
    // Pie,
    LineChartMultid,
    Mutibar,
    NanD
  },
  methods: {
    displayRender({ labels }) {
      return labels.join('.')
    },
    areaChange(value) {},
    check() {
      // console.log(this.lockNum)
    },
    showConfirm() {
      this.$confirm({
        title: '是否导出当前表单？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          // console.log('OK')
        },
        onCancel() {
          // console.log('Cancel')
        },
      })
    },
  },
}
</script>
<style>
.countcard {
  display: flex;
  background: #f0f2f5;
}
.leftcard {
  flex: 1;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lccontent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rightcard {
  flex: 2;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rccontent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.leftcard1 {
  flex: 1;
  margin: 1px;
  width: 100%;
}
.lc1content{
  width: 100%;
}
.rightcard1 {
  flex: 1;
  margin: 1px;
  width: 100%;
}
.rc1content{
  width: 100%;
}
</style>