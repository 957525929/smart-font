<template>
  <a-modal
    :visible="visible"
    :title="title"
    okText="提交"
    @cancel="handleCancel"
    @ok="handleCancel"
    :width="750"
    destroyOnClose
  >
    <a-form
      layout="vertical"
      :form="form"
    >
      <a-row
        :gutter="28"
        type="flex"
        justify="center"
        class="formWrapper"
      >
        <a-card :bordered="false">
          <a-col
            v-for="item in infoDetail"
            :key="item.key"
            :span="infoDetail.length > 6 ? 12 : 24"
          >
            <a-form-item
              :label="item.title"
              class="formItem"
              :labelCol="{ span: 6 }"
              :wrapperCol="{ span: 18 }"
            >
              <a-select
                v-if="item.type === 'a-select'"
                :default-value="`${item.value}`"
              >
                <a-select-option
                  :value="x.tableValue"
                  v-for="x in Object.values(item.valueEnum)"
                  :key="x.code"
                >{{ x.tableValue }}
                </a-select-option>
              </a-select>
              <a-cascader
                v-else-if="item.type === 'a-cascader'"
                :options="item.valueEnum"
                placeholder=""
                change-on-select
                :default-value="item.value"
              >
              </a-cascader>
              <a-tree-select
                v-else-if="item.type === 'a-tree-select'"
                v-model="item.value"
                style="width: 100%"
                :tree-data="item.valueEnum"
                tree-checkable
                search-placeholder=""
              />
              <a-checkbox-group
                v-else-if="item.type === 'a-checkbox-group'"
                v-decorator="['checkbox-group']"
                style="width: 100%"
              >
                <a-row :gutter="24">
                  <a-col
                    :span="24"
                    v-for="x in item.valueEnum"
                    :key="x.code"
                  >
                    <a-checkbox :value="x.tableValue">
                      <span>{{ x.tableValue }}</span>
                    </a-checkbox>
                  </a-col>
                </a-row>
              </a-checkbox-group>
              <a-range-picker
                v-else-if="item.type === 'a-range-picker'"
                style="width: 100%"
                v-decorator="[`${item.key}`, { initialValue: `${item.value}` }]"
              />
              <a-input
                style="width: 100%"
                v-decorator="[`${item.key}`, { initialValue: `${item.value}` }]"
                v-else
              />
            </a-form-item>
          </a-col>
        </a-card>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script>
import moment from 'moment'
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
      form: this.$form.createForm(this, { name: 'modal_list' }),
    }
  },
  methods: {
    moment,
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
.formItem {
  flex-direction: row;
  align-items: center;
}
</style>
