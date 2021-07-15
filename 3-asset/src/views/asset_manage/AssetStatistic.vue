<template>
  <div>
    <!--    <bar :data-source="dataSource" :fields="fields" :height="1000"></bar>-->
    <bar height="800"></bar>
  </div>
</template>

<script>
import Bar from '@/components/chart/BarMultid'
export default {
  name: "AssetStatistic",
  components: {
    Bar,
  },
  data() {
    return {
      dataSource:"",
    }
  },
  created() {

  },
  methods: {

  }
}

</script>

<style scoped>

</style>