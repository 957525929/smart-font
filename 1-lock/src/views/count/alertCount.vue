<template>
  <div>
    <alertcountCheck />

    <alertcountForm />
  </div>
</template>
<script>
import alertcountCheck from '../../components/count/alertcountCheck.vue'
import alertcountForm from '../../components/count/alertcountForm.vue'

export default {
  components: {
    alertcountCheck,
    alertcountForm,
  },
}
</script>