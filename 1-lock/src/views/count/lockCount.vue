<template>
  <div>
    <countCheck />

    <lockcountForm />
  </div>
</template>
<script>
import countCheck from '../../components/count/countCheck.vue'
import lockcountForm from '../../components/count/lockcountForm.vue'

export default {
  components: {
    countCheck,
    lockcountForm,
  },
}
</script>