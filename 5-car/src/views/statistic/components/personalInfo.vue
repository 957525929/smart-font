<template>
  <div>
    <a-descriptions>
      <a-descriptions-item label="姓名" :span="3"> {{info.name}} </a-descriptions-item>
      <a-descriptions-item label="手机号" :span="3"> {{generatePhoneNum()}} </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
import { generatePhoneNum } from '@/components/_util/mathFunc.js'
export default {
    props:['info'],
    methods:{
        generatePhoneNum
    }
}
</script>

<style>
</style>