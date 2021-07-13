<template>
  <!-- 会议统计 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            按会议室筛选：
            <a-select  :style="{width:'60%'}" showSearch @change="handleChange">
              <a-select-option value="会议室203">会议室203</a-select-option>
              <a-select-option value="会议室204">会议室204</a-select-option>
              <a-select-option value="会议室205">会议室205</a-select-option>
              <a-select-option value="会议室203">会议室206</a-select-option>
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
      <a-table :data-source="dataSta" :pagination="false" rowKey="id">
        <a-table-column title="会议室编号" data-index="id" align="center"></a-table-column>
        <a-table-column title="会议室地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="使用次数" data-index="number" align="center"></a-table-column>
      </a-table>
    </div>
  </a-card>
</template>
<script>
import moment from 'moment'
const dataSta=[
  {
    id:"F1201",
    address:"会议室203",
    number:"6",
  },
    {
    id:"F1201",
    address:"会议室204",
    number:"5",
  },
    {
      id:"F1203",
    address:"会议室205",
    number:"10",
  },
    {
     id:"F1204",
    address:"会议室206",
    number:"20",
  },
    {
      id:"F1205",
    address:"会议室207",
    number:"30",
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