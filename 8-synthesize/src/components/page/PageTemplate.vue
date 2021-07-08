<template>
  <a-row align="top">
    <a-col :span="24">
      <a-card style="width: 100%;margin-top:10px">
        <div>
          <SearchData :columns="searchData" />
          <FunctionButton :selectedRowKeys="selectedRowKeys" />
        </div>
        <slot></slot>
      </a-card>
    </a-col>
  </a-row>
</template> 

<script>
import FunctionButton from "../button/FunctionButton.vue"
import SearchData from "../search/SearchData.vue"
export default {
  name: 'WrapperdList',
  components: {
    FunctionButton,
    SearchData
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    formdata: {
      type: Array,
      default: () => []
    },
    selectedRowKeys: {
      type: Array,
      default: () => []
    },
  },
  mounted() {
    this.searchData = this.columns.filter(item => {
      return item.unhidden
    })
  },
  data() {
    return {
      searchData: []
    }
  }
}
</script>

<style>
</style>