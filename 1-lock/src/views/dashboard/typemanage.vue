<template>
    <div>
        <a-card>
            <span> 事件类型： </span>
            <a-input style="width: 20%" placeholder="请输入事件类型" v-model="thingtype" allowClear></a-input>

            <a-divider type="vertical" />

            <a-button @click="check">查询</a-button>

            <a-divider type="vertical" />

            <a-button @click="showConfirm">导出</a-button>
        </a-card>
        <a-card>
            <a-button @click="handleAdd">新增</a-button>
            <a-modal v-model="addVisible" title="新增" @ok="addOk">
                <a-row type="flex" align="middle">
                    <a-col :span="4">事件类型：</a-col>
                    <a-col :span="10">
                        <a-input
                            style="width: 100%"
                            placeholder="请输入事件类型"
                            v-model="addtype"
                            allowClear
                        ></a-input>
                    </a-col>
                </a-row>
            </a-modal>

            <br /><br />

            <a-table :columns="columns" :data-source="data">
                <span slot="action" slot-scope="text, record">
                    <a @click="edit(record)">编辑</a>
                    <a-modal v-model="visibleEdit" title="编辑" @ok="editOk">
                        <a-row type="flex" align="middle">
                            <a-col :span="4">事件类型：</a-col>
                            <a-col :span="14">
                                <a-input
                                    style="width: 100%"
                                    placeholder="请输入事件类型"
                                    v-model="rowrecord.type"
                                    allowClear
                                ></a-input>
                            </a-col>
                        </a-row>
                    </a-modal>

                    <a-divider type="vertical" />

                    <a-popconfirm
                        title="确定删除吗？"
                        ok-text="确定"
                        cancel-text="取消"
                        @confirm="confirm"
                        @cancel="cancel"
                    >
                        <a href="#">删除</a>
                    </a-popconfirm>
                </span>
            </a-table>
        </a-card>
    </div>
</template>

<script>
const columns = [
    {
        title: '事件类型',
        dataIndex: 'type',
        key: 'type',
        width: '20%',
    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
    },
]

const data = [
    {
        key: '1',
        type: '低电量',
    },
    {
        key: '2',
        type: '故障',
    },
    {
        key: '3',
        type: '失联',
    },
]

export default {
    data() {
        return {
            thingtype: '',
            addVisible: false,
            addtype: '',
            data,
            columns,
            visibleEdit: false,
            rowrecord: '',
        }
    },
    methods: {
        check() {},
        showConfirm() {
            this.$confirm({
                title: '是否导出当前表单？',
                okText: '确认',
                cancelText: '取消',
                onOk() {
                    // console.log('OK')
                },
                onCancel() {
                    // console.log('Cancel')
                },
            })
        },
        handleAdd() {
            this.addVisible = true
        },
        addOk() {
            this.addVisible = false
        },
        edit(record) {
            this.visibleEdit = true
            this.rowrecord = record
        },
        editOk() {
            this.visibleEdit = false
        },
        del() {},
        confirm() {
            // console.log('ok')
        },
        cancel() {
            // console.log('no')
        },
    },
}
</script>

<style lang="scss" scoped>
</style>