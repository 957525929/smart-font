<template>
  <div>
    <span>区域：</span>
    <a-cascader :options="selectOptions" change-on-select @change="areaChange" placeholder="请选择区域" />
  </div>
</template>
<script>
import { areaData } from './data/area.js'

export default {
  data() {
    return {
      selectOptions: areaData,
    }
  },
  method: {
    areaChange(value) {
      console.log(value)
    },
  },
}
</script>