<template>
  <a-card :bordered="false">
    <h1 style="font-weight:bold">基本信息：</h1>
    <a-divider />
    <a-row :gutter="16">
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>申请人：</div>
          <div>{{ detailsData.applicant }}</div>
        </div>
      </a-col>
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>申请名称：</div>
          <div>{{ detailsData.headline }}</div>
        </div>
      </a-col>
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>申请时间：</div>
          <div>{{ detailsData.applyTime }}</div>
        </div>
      </a-col>
      <a-col :xl="4" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>备注：</div>
          <div>{{ detailsData.note }}</div>
        </div>
      </a-col>
      <!-- <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>采购总数：</div>
          <div>{{ detailsData.purchaseNum }}</div>
        </div>
      </a-col>
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>供应商：</div>
          <div>{{ detailsData.provider }}</div>
        </div>
      </a-col>
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top" v-if="detailsData.checkState != 0">
          <div>审核人：</div>
          <div>{{ detailsData.checkoutPeople }}</div>
        </div>
      </a-col>
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top" v-if="detailsData.checkState != 0">
          <div>审核日期：</div>
          <div>{{ detailsData.checkoutDate }}</div>
        </div>
      </a-col> -->
    </a-row>
    <a-row>
      <div class="detail-top" v-if="detailsData.checkState == -1">
        <div>未通过理由：</div>
        <div style="font-size: large;font-family: fangsong;font-weight: bold; color:red">{{ '鸡肉变质' }}</div>
      </div>
    </a-row>

    <h1 style="font-weight:bold">采购明细：</h1>
    <a-divider />
    <a-table
      size="middle"
      bordered
      rowKey="id"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="{
        total: this.dataSource.length,
        showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`
      }"
    >
    </a-table>
  </a-card>
</template>

<script>
export default {
  name: 'ouputDetails',

  mounted() {
    console.log(this.detailsData)
  },
  data() {
    return {
      detailsData: this.$route.params,
      dataSource: [
        {
          id: '1',
          materialName: '蔬菜类 / 花叶类 / 油菜',
          materialCategory: '青菜类',
          materialUnits: '公斤',
          materialPrice: '10.00',
          materialNum: '10',
          materialTotalValue: '100.00'
        },
        {
          id: '2',
          materialName: '蔬菜类 / 花叶类 / 芹菜',
          materialCategory: '肉类',
          materialUnits: '公斤',
          materialPrice: '10.00',
          materialNum: '10',
          materialTotalValue: '100.00'
        }
      ],
      columns: [
        {
          title: '#',
          dataIndex: '',
          key: 'rowIndex',
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '食料名称',
          align: 'center',
          dataIndex: 'materialName'
        },
        {
          title: '计量单位',
          align: 'center',
          dataIndex: 'materialUnits'
        },
        {
          title: '采购单价(元)',
          align: 'center',
          dataIndex: 'materialPrice'
        },
        {
          title: '采购数量',
          align: 'center',
          dataIndex: 'materialNum'
        },
        {
          title: '合计(元)',
          align: 'center',
          dataIndex: 'materialTotalValue'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';

.detail-top {
  vertical-align: middle;
  margin-bottom: 20px;
}
</style>
