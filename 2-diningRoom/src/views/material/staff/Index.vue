<template>
  <div>
    <a-card :bordered="false">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="采购人员">
          <purch-people/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="审核人员">
          <CheckPeople/>
        </a-tab-pane>
        <a-tab-pane key="3" tab="留样人员">
          <people/>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>

</template>

<script>
import PurchPeople from './PurchPeople'
import CheckPeople from './CheckPeople'
import People from '../../food/finished/People'

export default {
  name: "Index",
  components: {
    People,
    PurchPeople,
    CheckPeople,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';

</style>
