<template>
  <div>
    <a-card>
      <a-row type="flex">
        <a-col :span="8">
          <span>位置：</span>
          <a-cascader
            style="width: 85%"
            :options="selectOptions"
            change-on-select
            @change="areaChange"
            :default-value="['0', '01']"
            placeholder="请选择位置"
            :display-render="displayRender"
          />

          <br /><br /><br />

          <span>房间：</span>
          <a-input style="width: 85%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

          <br /><br /><br />

          <a-row type="flex">
            <a-col>
              <a-button @click="check">查询</a-button>
              <a-divider type="vertical" />
              <a-button @click="showConfirm">导出</a-button>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <span>
            <div class="bartitle">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 安装次数统计：</div>
            <br />
            <Pie :dataSource="dataSource" :height="180" />
          </span>
        </a-col>
        <a-col :span="8"></a-col>
      </a-row>
    </a-card>
    <a-card>
      <a-table :columns="columns" :data-source="data"></a-table>
    </a-card>
  </div>
</template>
<script>
import { areaData } from '../../components/roomManager/data/area.js'
import Pie from '@/components/chart/Pie'
import { installcount } from './data/installdata.js'

const columns = [
  { title: '位置', dataIndex: 'area', key: 'area', width: '40%' },
  { title: '智能锁已安装', dataIndex: 'install', key: 'install', width: '15%' },
  { title: '智能锁未安装', dataIndex: 'uninstall', key: 'uninstall' },
]

export default {
  data() {
    return {
      selectOptions: areaData,
      roomNum: '',
      dataSource: [
        { item: '已安装', count: 192 },
        { item: '未安装', count: 108 },
      ],
      data: installcount,
      columns: columns,
    }
  },
  components: {
    Pie,
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