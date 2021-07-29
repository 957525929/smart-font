<template>
  <div id="components-form-demo-advanced-search">
    <a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
      <a-row :gutter="24">
        <a-col v-for="(item, index) in columns" :key="item.dataIndex" :span="8"
          :style="{ display: index < count ? 'block' : 'none' }">
          <a-form-item :label="item.title" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18 }">
            <a-select v-if="item.type === 'a-select'" v-decorator="[`${item.dataIndex}`]">
              <a-select-option v-for="x in item.valueEnum" :key="x.searchValue" :value="x.searchValue">
                {{ x.searchValue }}
              </a-select-option>
            </a-select>
            <a-cascader v-else-if="item.type === 'a-cascader'" :options="item.valueEnum" placeholder="" change-on-select
              :displayRender="renderFormat" />
            <a-range-picker
              :ranges="{ '今日': [moment(), moment()], '本月': [moment().startOf('month'), moment().endOf('month')] , '本年': [moment().startOf('year'), moment().endOf('year')]}"
              v-else-if="item.type === 'a-range-picker'" v-decorator="[`${item.key}`]"
              :default-value="[moment().startOf('month'), moment().endOf('month')]" />
            <component style="width: 100%" :is="item.type || 'a-input'" v-decorator="[`${item.key}`]" v-else>
            </component>
            <!-- :placeholder="ifshowPlace(item.type,item.title)" v-decorator="[`${item.key}`]"-->
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" :style="{ textAlign: 'right' }">
          <a-button type="primary" html-type="submit" icon="search"> 查询 </a-button>
          <a-button :style="{ marginLeft: '8px' }" @click="handleReset" icon="reload"> 重置 </a-button>
          <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">{{ expand ? '收起' : '展开' }}
            <a-icon :type="expand ? 'up' : 'down'" />
          </a>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'SearchCard',
  props: {
    searchCon: Object,
    columns: {
      type: Array,
      required: true,
      default: () => [],
    },
    renderFormat: {
      type: Function,
      default: ({ labels, selectedOptions }) => labels.join(' · '),
    },
  },
  mounted() {
    // console.log(this.columns)
  },
  data() {
    return {
      expand: false,
      form: this.$form.createForm(this, { name: 'devList_search' }),
    }
  },
  computed: {
    count() {
      return this.expand ? 20 : 3
    },
  },
  methods: {
    moment,
    ifshowPlace(type, title) {
      if (type === 'a-input') {
        return `请输入${title}`
      } else {
        return ''
      }
    },
    handleSearch(e) {
      e.preventDefault()
      this.form.validateFields((error, values) => {
        console.log('error', error)
        console.log('Received values of form: ', values)
      })
    },

    handleReset() {
      this.form.resetFields()
    },

    toggle() {
      this.expand = !this.expand
    },
    displayRender({ labels, selectedOptions }) {
      return selectedOptions.map((o) => o.label).join('-')
    },
    // onChange(value, selectedOptions) {
    //   this.text = selectedOptions.map((o) => o.label).join('·')
    // },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>