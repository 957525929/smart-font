<template>
    <a-drawer :title="title" :width="720" :visible="visible" :body-style="{ paddingBottom: '80px' }" @close="onClose">
        <a-descriptions bordered>
            <a-descriptions-item :label="item.title" :span="3" v-for="item in data" :key="item.key">
                <span>{{ item.value }} </span>
            </a-descriptions-item>
        </a-descriptions>
        <div v-for="i in imgs" :key="i.key">
            <a-divider />

            <h3>{{ i.title }}</h3>
            <a-row :gutter="24">
                <a-col v-for="item in i.value" :key="item">
                    <img :src="item" />
                </a-col>
            </a-row>
        </div>
    </a-drawer>
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
            imgs: this.infoDetail.filter((item) => item.key.indexOf('imgs') !== -1),
            data: this.infoDetail.filter((item) => item.key.indexOf('imgs') === -1),
        }
    },
    mounted() {
        console.log(this.infoDetail)
        // this.getDetail()
    },
    methods: {
        showDrawer() {
            this.visible = true
        },
        onClose() {
            this.visible = false
        }
    },
}
</script>