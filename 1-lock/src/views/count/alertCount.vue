<template>
    <div>
        <countCheck />

        <countForm />
    </div>
</template>
<script>

import countCheck from '../../components/count/countCheck.vue'
import countForm from '../../components/count/countForm.vue'


export default {
    components:{
        countCheck,
        countForm
    }
}
</script>