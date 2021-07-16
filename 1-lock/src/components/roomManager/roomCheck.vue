<template>
  <a-card>
    <!-- 上部 -->

    <span>位置：</span>
    <a-cascader
      style="width: 28%"
      :options="selectOptions"
      change-on-select
      @change="areaChange"
      placeholder="请选择位置"
    />

    <a-divider type="vertical" />

    <span>房间：</span>
    <a-input style="width: 11%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

    <span style="font-weight: bold"> &nbsp; | &nbsp; </span>

    <span>部门：</span>
    <a-select style="width: 16%" placeholder="请选择部门" @change="deptChange" allowClear>
      <a-select-option v-for="(item, index) in deptData" :key="index">
        {{ item.deptName }}
      </a-select-option>
    </a-select>

    <a-divider type="vertical" />

    <span>姓名：</span>
    <a-input style="width: 10%" placeholder="请输入姓名" v-model="name" allowClear></a-input>

    <a-divider type="vertical" />

    <span>工号：</span>
    <a-input style="width: 10%" placeholder="请输入工号" v-model="Num" allowClear></a-input>

    <br /><br />

    <!-- 下部 -->

    <a-row type="flex" justify="end">
      <a-col>
        <a-button @click="check">查询</a-button>
        <a-divider type="vertical" />
      </a-col>

      <a-upload accept=".xlsx,.xls">
        <a-button>导入房间</a-button>
      </a-upload>

      <a-col>
        <a-divider type="vertical" />
        <a-button @click="roomAdd">添加房间</a-button>

        <!-- 添加房间功能 -->
        <a-modal v-model="roomVisible" title="添加房间" @ok="roomOk">
          <a-row type="flex" align="middle">
            <a-col :span="4">位置：</a-col>
            <a-col :span="17">
              <a-cascader
                style="width: 100%"
                :options="selectOptions"
                change-on-select
                @change="areaChange"
                placeholder="请选择位置"
              />
            </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">房间号：</a-col>
            <a-col :span="17">
              <a-input style="width: 100%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>
            </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">员工：</a-col>
            <a-col :span="17">
              <a-select
                mode="multiple"
                placeholder="请选择员工"
                :value="selectedItems"
                style="width: 100%"
                @change="peopleChange"
              >
                <a-select-option v-for="item in filteredOptions" :key="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-modal>
        <!-- 添加房间功能结束 -->

        <a-divider type="vertical" />

        <a-button @click="showConfirm">导出</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
// import selectArea from '../check/selectArea.vue'
import { areaData } from './data/area.js'
import { deptData } from './data/dept.js'

const OPTIONS = ['张三', '李四', '王五', '赵柳']

export default {
  components: {
    // selectArea,
  },
  data() {
    return {
      selectOptions: areaData,
      roomNum: '',
      deptData: deptData,
      Num: '',
      name: '',
      roomVisible: false,
      selectedItems: [],
    }
  },
  computed: {
    //多选员工
    filteredOptions() {
      return OPTIONS.filter((o) => !this.selectedItems.includes(o))
    },
  },
  mounted() {},
  methods: {
    areaChange(value) {},
    deptChange(value) {},
    roomAdd() {
      this.roomVisible = true
    },
    roomOk() {
      this.roomVisible = false
      // console.log(this.selectedItems)
    },
    peopleChange(selectedItems) {
      this.selectedItems = selectedItems
    },
    check() {
      // console.log('点击查询')
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
</style>