<template>
  <div>
    <countCheck />

    <repaircountForm />
  </div>
</template>
<script>
import countCheck from '../../components/count/countCheck.vue'
import repaircountForm from '../../components/count/repaircountForm.vue'

export default {
  components: {
    countCheck,
    repaircountForm,
  },
}
</script>