<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline" :form="form1">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="8" :md="9" :sm="24">
            <a-form-item label="卡号">
              <a-input placeholder="请输入" v-decorator="['sampleNumber']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="8" :lg="8" :md="9" :sm="24">
            <a-form-item label="余额">
              <a-input placeholder="请输入" style="width: 47%;" />
              <span class="query-group-split-cust"></span>
              <a-input placeholder="请输入" style="width: 47%;" />
            </a-form-item>
          </a-col>

          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
            <a-col :md="6" :sm="24">
              <a-button icon="search" @click="handleQueryOk">查询</a-button>
              <a-button icon="reload" style="margin-left: 8px" @click="handleReset">重置</a-button>
            </a-col>
          </span>
        </a-row>
      </a-form>
    </div>
    <a-tabs>
      <a-tab-pane key="1" tab="消费记录"> <consume /></a-tab-pane>
      <a-tab-pane key="2" tab="充值记录" force-render><recharge /> </a-tab-pane>
      <a-tab-pane key="3" tab="退款记录"> <refund /></a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>
import consume from './components/consume.vue'
import refund from './components/refund.vue'
import recharge from './components/recharge.vue'
export default {
  components: { consume, recharge, refund },
  data() {}
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>
