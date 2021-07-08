<template>
    <a-modal :visible="visible" :title="title" okText="提交" @cancel="handleCancel" @ok="handleCancel" :width="750">
        <a-form layout="vertical" :form="form">
            <a-row :gutter="28" type="flex" justify="center" class="formWrapper">
                <a-card :bordered="false">
                    <a-col v-for="(item, index) in infoDetail" :key="item.key" :span="12">
                        <a-form-item
                            :label="item.title"
                            class="formItem"
                            :labelCol="{ span: 5 }"
                            :wrapperCol="{ span: 19 }"
                        >
                            <component
                                :is="item.type || 'a-input'"
                                style="width: 100%"
                                v-decorator="[`${item.key}`]"
                            ></component>
                        </a-form-item>
                    </a-col>
                </a-card>
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
            form:this.$form.createForm(this, { name: 'modal_list' }),
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
    justify-content: center;
    align-items: center;
}
.formItem{
    flex-direction: row;
    align-items: center;
}
</style>
