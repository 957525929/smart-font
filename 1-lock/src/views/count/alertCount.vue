<template>
  <div>
    <countCheck />

    <alertcountForm />
  </div>
</template>
<script>
import countCheck from '../../components/count/countCheck.vue'
import alertcountForm from '../../components/count/alertcountForm.vue'

export default {
  components: {
    countCheck,
    alertcountForm,
  },
}
</script>