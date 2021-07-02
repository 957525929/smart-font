<template>
  <div>
    <repairCheck></repairCheck>

    <repairForm></repairForm>
  </div>
</template>

<script>

import repairCheck from '../../components/repairRecord/repairRecordCheck.vue'
import repairForm from '../../components/repairRecord/repairRecordForm.vue'

export default {
  components:{
    repairCheck,
    repairForm
  }
}
</script>
