<template>
    <div>

    </div>
</template>
<script>
export default {
        data() {
        return {
            infoDetail
        }
    },
    props:{
        infoDetail:Array
    },
    methods: {
        onClose() {
            this.$emit('onClose')
        }
    },
}
</script>