<template>
    <a-modal :visible="visible" :title="title" okText="提交" @cancel="handleCancel" @ok="handleCancel">
        <a-form layout="vertical" :form="form">
            <a-row :gutter="24" type="flex" justify="center">
                <a-col v-for="(item, index) in infoDetail" :key="item.key" :span="18" class="formWrapper">
                    <a-form-item
                        :label="item.title"
                        class="collection-create-form_last-form-item"
                        :labelCol="{ span: 5 }"
                        :wrapperCol="{ span: 18 }"
                    >
                        <component
                            :is="item.type || 'a-input'"
                            style="width: 100%"
                            v-decorator="[`${item.key}`]"
                        ></component>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </a-modal>
</template>
<script>

export default {
    props: {
        title: {
            type: String,
            default: '详情',
            require: true,
        },
        infoDetail: {
            type: Array,
            default: () => [],
            require: true,
        },
    },
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        showModal() {
            this.visible = true
        },
        handleCancel() {
            this.visible = false
        },
    },
}
</script>
<style scoped>
.formWrapper {
    /* margin:20px; */
}
</style>
