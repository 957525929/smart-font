<template>
  <div class="dtroot">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="基本信息">
        <a-descriptions bordered>
          <a-descriptions-item label="车牌品牌" :span="3">{{ data.brand }}</a-descriptions-item>
          <a-descriptions-item label="车牌号" :span="3">{{ licenseNum }}</a-descriptions-item>
          <a-descriptions-item label="车辆种类" :span="3">{{ data.licenseType }}</a-descriptions-item>
          <a-descriptions-item label="购车时间" :span="3">{{ data.buyTime }}</a-descriptions-item>
          <a-descriptions-item label="座位数" :span="3">{{ data.seatNum }}</a-descriptions-item>
          <a-descriptions-item label="车辆状态" :span="3">{{ data.status }}</a-descriptions-item>
          <a-descriptions-item label="司机" :span="3">
            <a>{{ data.driver }}</a>
          </a-descriptions-item>
          <a-descriptions-item label="车辆图片" :span="3">
            <a>点击查看</a>
          </a-descriptions-item>
        </a-descriptions>
      </a-tab-pane>
      <a-tab-pane key="2" tab="保养信息">
        <a-descriptions bordered>
          <a-descriptions-item label="保险周期（月）" :span="3">12</a-descriptions-item>
          <a-descriptions-item label="年审周期（月）" :span="3">12</a-descriptions-item>
          <a-descriptions-item label="常规保养周期（月）" :span="3">6</a-descriptions-item>
          <a-descriptions-item label="常规保养路程周期" :span="3">5000</a-descriptions-item>
          <a-descriptions-item label="下次交强险时间" :span="3">2022-06-03</a-descriptions-item>
          <a-descriptions-item label="下次商业险时间" :span="3"></a-descriptions-item>
          <a-descriptions-item label="下次货物险时间" :span="3"></a-descriptions-item>
          <a-descriptions-item label="下次司机险时间" :span="3"></a-descriptions-item>
          <a-descriptions-item label="下次年审时间" :span="3">2022-06-03</a-descriptions-item>
          <a-descriptions-item label="下次保养时间" :span="3">2022-12-03</a-descriptions-item>
        </a-descriptions>
      </a-tab-pane>
      <a-tab-pane key="3" tab="其它信息">
        <a-descriptions bordered>
          <a-descriptions-item label="车架号" :span="3"></a-descriptions-item>
          <a-descriptions-item label="发动机号" :span="3"></a-descriptions-item>
          <a-descriptions-item label="备注" :span="3"></a-descriptions-item>
        </a-descriptions>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
const mockData = {
  licenseType: '小型轿车',
  seatNum: 5,
  brand: '奥迪',
  buyTime: '2019-03-15',
  status: '正常',
  driver: '张三',
}
export default {
  mounted() {
    console.log('详情传值', this.licenseNum)
  },
  data() {
    return {
      data: mockData,
    }
  },
  props: ['licenseNum'],
  methods: {
    callback(key) {
      console.log(key)
    },
  },
}
</script>

<style lang="less" scoped>
.dtroot {
  height: 100%;
  width: 100%;
}
</style>