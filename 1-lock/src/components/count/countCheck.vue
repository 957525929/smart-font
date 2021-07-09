<template>
  <a-card>
    <!-- 上部 -->

    <span class="lockNum">锁编号：</span>
    <a-input style="width: 11%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>

    <a-divider type="vertical" />

    <span>楼号：</span>
    <a-select style="width: 11%" placeholder="请选择楼号" @change="buildChange" allowClear>
      <a-select-option value="1"> 1号楼 </a-select-option>
      <a-select-option value="2"> 2号楼 </a-select-option>
      <a-select-option value="3"> 3号楼 </a-select-option>
      <a-select-option value="4"> 4号楼 </a-select-option>
    </a-select>

    <a-divider type="vertical" />

    <span>房间：</span>
    <a-input style="width: 11%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

    <a-divider type="vertical" />

    <span>部门：</span>
    <a-select style="width: 11%" placeholder="请选择部门" @change="deptChange" allowClear>
      <a-select-option value="1"> 办公室 </a-select-option>
      <a-select-option value="2"> 生产部 </a-select-option>
      <a-select-option value="3"> 购销部 </a-select-option>
      <a-select-option value="4"> 信息中心 </a-select-option>
    </a-select>

    <br /><br />

    <!-- 下部 -->
    <a-row type="flex" justify="end">
      <a-col>
        <a-button @click="check">查询</a-button>
        <a-divider type="vertical" />
        <a-button @click="showConfirm">导出</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      lockNum: '',
      roomNum: '',
      startValue: null,
      endValue: null,
      endOpen: false,
    }
  },
  watch: {
    startValue(val) {
      console.log('startValue', val)
    },
    endValue(val) {
      console.log('endValue', val)
    },
  },
  methods: {
    //查询
    check() {
      console.log('点击查询')
      console.log(this.lockNum)
    },
    //获取单选框值
    buildChange(value) {
      console.log(value)
    },
    deptChange(value) {
      console.log(value)
    },

    // 开锁方式
    openlockChange(value) {
      console.log(value)
    },

    //日期选择
    disabledStartDate(startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open
    },

    // 导出点击功能
    showConfirm() {
      this.$confirm({
        title: '是否导出当前表单？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        },
        class: 'test',
      })
    },
  },
}
</script>
<style>
</style>