<template>
  <!-- 会议统计 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            按主题筛选：
            <a-select  :style="{width:'60%'}" showSearch @change="handleChange">
              <a-select-option value="周例会">周例会</a-select-option>
              <a-select-option value="项目会议">项目会议</a-select-option>
              <a-select-option value="物流会议">物流管理</a-select-option>
              <a-select-option value="安全会议">安全管理</a-select-option>
              <a-select-option value="管理会议">年度总结</a-select-option>
            </a-select>
          </a-col>
          <a-col :xl="10" :lg="9" :md="10" :sm="24">
            按日期选择： <a-icon type="calendar" :style="{ fontSize: '20px', marginRight: '5px' }" />
            <!-- <a-range-picker            
              :format="dateFormat"
            /> -->
             <span>从&nbsp;</span>
              <a-date-picker
                placeholder="请选择开始"
                :format="dateFormat"
              >
                <a-icon slot="suffixIcon" type="suffixIcon" />
              </a-date-picker>
              <span>&nbsp;到&nbsp;</span>
              <a-date-picker
                placeholder="请选择结束"
                :format="dateFormat"
              >
                <a-icon slot="suffixIcon" type="suffixIcon" />
              </a-date-picker>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-button
              :style="{ background: '#49a9ee', color: 'white' }"
              icon="search"
              @click="searchQuery"
            >查询</a-button>
            <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->
    <!-- table区域-begin -->
    <div style="margin-top: 20px">
      <a-table :data-source="dataSta" :pagination="false" rowKey="theme">
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议次数" data-index="number" align="center"></a-table-column>
        <a-table-column title="与会人数" data-index="membersNumber" align="center"></a-table-column>
        <a-table-column title="会议预算" data-index="budget" align="center"></a-table-column>
      </a-table>
    </div>
  </a-card>
</template>
<script>
import moment from 'moment'
const dataSta=[
  {
    theme:"周例会",
    number:"10",
    membersNumber:"56",
    budget:"10000"
  },
    {
    theme:"项目会议",
    number:"30",
    membersNumber:"90",
    budget:"12500"
  },
    {
    theme:"物流管理",
    number:"4",
    membersNumber:"12",
    budget:"900"
  },
    {
    theme:"安全管理",
    number:"9",
    membersNumber:"30",
    budget:"18000"
  },
    {
    theme:"年度总结",
    number:"1",
    membersNumber:"30",
    budget:"21000"
  }
]
export default {
  data() {
    return {
       dateFormat: 'YYYY年MM月DD日',
       dataSta
    }
  },
  methods: {
     moment,
    handleChange(){},
    searchQuery(){},
    searchReset(){
      this.dataSta=dataSta;
    }
  }
}
</script>