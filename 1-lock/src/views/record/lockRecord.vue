<template>
  <div>

    <lockCheck></lockCheck>



    <lockForm></lockForm>
    
  </div>
</template>

<script>

import lockCheck from '../../components/lockRecord/lockRecordCheck.vue'
import lockForm from '../../components/lockRecord/lockRecordForm.vue'

export default {
   components: {
    lockCheck,
    lockForm
  },
}
</script>
