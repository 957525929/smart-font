<template>
  <a-card>
    <!-- 上部 -->
    <span>工号：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>姓名：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>部门：</span>
    <a-select style="width: 150px" default-value="market">
      <a-select-option value="market"> 营销部</a-select-option>
      <a-select-option value="distribution"> 配送部</a-select-option>
    </a-select>
    <a-divider type="vertical"/>
    <span>房间：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>锁编号：</span>
    <a-input style="width: 150px"></a-input>
    <br/><br/>

    <!-- 下部 -->
    <a-row type="flex" justify="end">
      <a-col>
        <a-button>查询</a-button>
        <a-divider type="vertical"/>
        <a-button @click="showConfirm">导出</a-button>
        <a-divider type="vertical"/>

        <!-- 绑定的功能 -->
        <a-button type="primary" @click="showModal">绑定</a-button>
        <a-modal
          v-model="visible"
          title="智能锁绑定"
          @ok="handleOk"
          ok-text="确认"
          cancel-text="取消"
        >
          <a-row type="flex">
            <a-col :span="4">工号:</a-col>
            <a-col :span="10">
              <a-input></a-input>
            </a-col>
          </a-row>

          <br/>

          <a-row type="flex">
            <a-col :span="4">姓名:</a-col>
            <a-col :span="10">
              <a-input></a-input>
            </a-col>
          </a-row>

          <br/>

          <a-row type="flex">
            <a-col :span="4">部门:</a-col>
            <a-col :span="10">
              <a-select style="width: 100%" default-value="market">
                <a-select-option value="market"> 营销部</a-select-option>
                <a-select-option value="distribution"> 配送部</a-select-option>
              </a-select>
            </a-col>
          </a-row>

          <br/>

          <a-row type="flex">
            <a-col :span="4">房间：</a-col>
            <a-col :span="10">
              <a-input></a-input>
            </a-col>
          </a-row>

          <br/>

          <a-row type="flex">
            <a-col :span="4">锁编号：</a-col>
            <a-col :span="10">
              <a-input></a-input>
            </a-col>
          </a-row>

          <br/>
        </a-modal>
        <!-- 绑定功能结束 -->

      </a-col>
    </a-row>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    // 绑定的点击事件
    showModal() {
      this.visible = true;
    },

    // 绑定界面内的点击
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },

    // 导出点击功能
    showConfirm() {
      this.$confirm({
        title: "是否导出当前表单？",
        okText: '确认',
        cancelText: '取消',
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test",
      });
    },
  },
};
</script>