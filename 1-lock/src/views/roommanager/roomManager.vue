<template>
  <div>
    <roomCheck />

    <roomForm />
  </div>
</template>
<script>
import roomCheck from '../../components/roomManager/roomCheck.vue'
import roomForm from '../../components/roomManager/roomForm.vue'
export default {
  components: {
    roomCheck,
    roomForm,
  },
  data() {
    return {}
  },
}
</script>