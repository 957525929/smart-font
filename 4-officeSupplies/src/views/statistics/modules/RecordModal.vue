<template>
  <a-timeline>
    <a-timeline-item  v-for="(item,index) in list"   :color="index%2 == 0 ? 'green' : 'blue'">
      <a-card :title="item.time" :bordered="false" :headStyle="headStyle" :bodyStyle="bodyStyle">
        <p>限额更改(元)：{{item.change}}</p>
        <p>理由：{{item.reason}}</p>
      </a-card>
    </a-timeline-item>
  </a-timeline>
</template>

<script>
  export default {
    name: "RecordModal",
    data () {
      return {
        headStyle: {
          backgroundColor:"#FAFAFA",
          color:"green"
        },
        bodyStyle: {
          backgroundColor:"white",
          color:"grey"
        },
        list: [
          {
            time:'2021-08-10 10:31:02',
            change:'2000 -> 2500',
            reason:'部门扩增'
          },
          {
            time:'2021-03-15 15:11:24',
            change:'1500 -> 2000',
            reason:'部门最近人员增加'
          },
          {
            time:'2020-12-03 16:25:21',
            change:'1300 -> 1500',
            reason:'部门业务增多'
          },
        ],
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style scoped>
.inputWitdh {
  width: 100%;
}
</style>