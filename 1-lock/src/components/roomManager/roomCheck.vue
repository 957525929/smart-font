<template>
  <a-card>
    <!-- 上部 -->

    <span>区域：</span>
    <a-cascader :options="selectOptions" change-on-select @change="onChange" placeholder="请选择区域" />

    <a-divider type="vertical" />

    <span>房间：</span>
    <a-input style="width: 11%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

    <br /><br />

    <span>部门：</span>
    <a-select style="width: 11%" placeholder="请选择部门" @change="deptChange" allowClear>
      <a-select-option value="1"> 办公室 </a-select-option>
      <a-select-option value="2"> 生产部 </a-select-option>
      <a-select-option value="3"> 购销部 </a-select-option>
      <a-select-option value="4"> 信息中心 </a-select-option>
    </a-select>

    <a-divider type="vertical" />

    <span>工号：</span>
    <a-input style="width: 11%" placeholder="请输入工号" v-model="Num" allowClear></a-input>

    <a-divider type="vertical" />

    <span>姓名：</span>
    <a-input style="width: 11%" placeholder="请输入姓名" v-model="name" allowClear></a-input>

    <br /><br />

    <!-- 下部 -->

    <a-row type="flex" justify="end">
      <a-col>
        <a-button @click="add">添加房间</a-button>

        <!-- 添加房间功能 -->
        <a-modal v-model="visible" title="添加房间" @ok="handleOk">
          <a-row type="flex" align="middle">
            <a-col :span="4">区域：</a-col>
            <a-col :span="10">
              <a-cascader :options="selectOptions" change-on-select @change="onChange" placeholder="请选择区域" />
            </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">房间号：</a-col>
            <a-col :span="10">
              <a-input style="width: 100%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>
            </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">部门：</a-col>
            <a-col :span="10">
              <a-select style="width: 100%" placeholder="请选择部门" @change="deptChange" allowClear>
                <a-select-option value="1"> 办公室 </a-select-option>
                <a-select-option value="2"> 生产部 </a-select-option>
                <a-select-option value="3"> 购销部 </a-select-option>
                <a-select-option value="4"> 信息中心 </a-select-option>
              </a-select>
            </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">员工：</a-col>
            <a-col :span="10">
              <a-select
                mode="multiple"
                placeholder="请选择员工"
                :value="selectedItems"
                style="width: 100%"
                @change="peopleChange"
              >
                <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-modal>
        <!-- 添加房间功能结束 -->

        <a-divider type="vertical" />

        <a-button @click="check">查询</a-button>

        <a-divider type="vertical" />

        <a-button @click="showConfirm">导出</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
const OPTIONS = ['张三', '李四', '王五', '赵柳']

export default {
  data() {
    return {
      lockNum: '',
      name: '',
      Num: '',
      roomNum: '',
      visible: false,
      selectedItems: [],
      selectOptions: [
        {
          value: 'FJYC',
          label: '福建烟草',
          children: [
            {
              value: 'A',
              label: 'A区域',
              children: [
                {
                  value: '1',
                  label: '1号楼',
                },
                {
                  value: '2',
                  label: '2号楼',
                },
              ],
            },
            {
              value: 'B',
              label: 'B区域',
            },
          ],
        },
      ],
    }
  },
  computed: {
    //多选员工
    filteredOptions() {
      return OPTIONS.filter((o) => !this.selectedItems.includes(o))
    },
  },
  methods: {
    //区域
    onChange(value) {
      console.log(value)
    },

    //查询
    check() {
      console.log('点击查询')
      console.log(this.roomNum)
    },
    //获取单选框值
    buildChange(value) {
      console.log(value)
    },
    deptChange(value) {
      console.log(value)
    },
    //添加人员
    add() {
      console.log('add')
      this.visible = true
    },
    handleOk() {
      console.log('ok')
      console.log(this.roomNum)
      console.log(this.selectedItems)
      this.visible = false
    },
    //选择员工
    peopleChange(selectedItems) {
      this.selectedItems = selectedItems
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