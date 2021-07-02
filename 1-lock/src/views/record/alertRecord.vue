<template>
  <div >
    <alertCheck></alertCheck>

    <alertForm></alertForm>
  </div>
</template>

<script>

import alertCheck from '../../components/alertRecord/alertRecordCheck.vue'
import alertForm from '../../components/alertRecord/alertRecordForm.vue'

export default {
  components:{
    alertCheck,
    alertForm
  }
}
</script>

