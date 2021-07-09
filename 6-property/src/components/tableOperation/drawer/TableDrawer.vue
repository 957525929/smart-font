<template>
    <a-drawer :title="title" :width="720" :visible="visible" :body-style="{ paddingBottom: '80px' }" @close="onClose">
        <a-descriptions bordered>
            <!-- <view> -->
            <a-descriptions-item
                :label="item.title"
                :span="3"
                v-for="item in infoDetail"
                :key="item.key"
                >{{ item.value }}</a-descriptions-item
            >
            <!-- </view> -->
        </a-descriptions>
        <!-- <div
            :style="{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'center',
                zIndex: 1,
            }"
        >
            <a-button type="primary" @click="onClose"> 编辑 </a-button>
            <a-button :style="{ marginLight: '8px' }" @click="onClose"> 取消 </a-button>
        </div> -->
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
            // infoDetailData: [],
            visible: false,
        }
    },
    mounted() {
        console.log(this.infoDetail);
        // this.getDetail()
    },
    methods: {
        showDrawer() {
            this.visible = true
        },
        onClose() {
            this.visible = false
        },
        // getDetail() {
        //     this.infoDetailData = this.infoDetail
        // },
    },
}
</script>