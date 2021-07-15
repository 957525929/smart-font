<template>
  <div>
    <!-- 查询 -->
    <lockCheck></lockCheck>

    <!-- 主体表单 -->
    <lockForm></lockForm>
  </div>
</template>

<script>
import lockCheck from '../../components/lockManager/lockManagerCheck.vue'
import lockForm from '../../components/lockManager/lockManagerForm.vue'

export default {
  components: {
    lockCheck,
    lockForm,
  },

  data() {
    return {}
  },
}
</script>
<style>
</style>
