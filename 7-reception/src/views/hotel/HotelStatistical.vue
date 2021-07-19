<template>
  <!-- 会议统计 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <a-col>
          <span>按预约类型筛选：</span>
        </a-col>
        <a-col>
          <a-select :style="{width:'150px'}" @change="handleChange" default-value="公司会议">
            <a-select-option value="公司会议">公司会议</a-select-option>
            <a-select-option value="个人">个人</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>按酒店名称筛选：</span>
        </a-col>
        <a-col>
          <a-select
            mode="tags"
            :style="{width:'300px'}"
            showSearch
            @change="handleChange"
            placeholder="请选择酒店名称"
            v-model="selectHotel"
          >
            <a-select-option value="华宜时尚酒店">华宜时尚酒店</a-select-option>
            <a-select-option value="香格里拉酒店">香格里拉酒店</a-select-option>
            <a-select-option value="福州品悦酒店">福州品悦酒店</a-select-option>
            <a-select-option value="世纪金源酒店">世纪金源酒店</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>按日期筛选：</span>
        </a-col>
        <a-col>
          <a-date-picker placeholder="请选择开始" :format="dateFormat" v-model="dateStart"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker
            placeholder="请选择结束"
            :format="dateFormat"
            :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"
          ></a-date-picker>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <!-- <a-button
            :style="{ background: '#49a9ee', color: 'white'}"
            icon="search"
            @click="searchQuery"
          >查询</a-button>-->
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
        </a-col>
      </a-row>
      <!-- <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            按酒店筛选：
            <a-select :style="{width:'60%'}" showSearch @change="handleChange">
              <a-select-option value="年度总结">年度总结</a-select-option>
              <a-select-option value="项目会议">项目会议</a-select-option>
              <a-select-option value="物流会议">物流管理</a-select-option>
              <a-select-option value="安全会议">安全管理</a-select-option>
              <a-select-option value="管理会议">管理会议</a-select-option>
               <a-select-option value="表彰会议">表彰会议</a-select-option>
                <a-select-option value="销售会议">销售会议</a-select-option>
            </a-select>
          </a-col>
          <a-col :xl="10" :lg="9" :md="10" :sm="24">
            按日期选择：
            <a-icon type="calendar" :style="{ fontSize: '20px', marginRight: '5px' }" />
            <span>从&nbsp;</span>
            <a-date-picker placeholder="请选择开始" :format="dateFormat">
              <a-icon slot="suffixIcon" type="suffixIcon" />
            </a-date-picker>
            <span>&nbsp;到&nbsp;</span>
            <a-date-picker placeholder="请选择结束" :format="dateFormat">
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
      </a-form>-->
    </div>

    <!-- 查询区域-END -->
    <!-- table区域-begin -->
    <!-- <div style="margin-top: 20px">
      <a-table :data-source="dataSta" :pagination="false" rowKey="theme">
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议次数" data-index="number" align="center"></a-table-column>
        <a-table-column title="与会人数" data-index="membersNumber" align="center"></a-table-column>
        <a-table-column title="会议预算" data-index="budget" align="center"></a-table-column>
      </a-table>
    </div>-->
    <br />
    <bar v-bind:dataSource="dataSource" v-bind:title="title" v-bind:height="height"></bar>
  </a-card>
</template>
<script>
import moment from 'moment'
import Bar from '@/components/chart/Bar'
const dataSource = [
  {
    x: '华宜时尚酒店',
    y: 10
  },
  {
    x: '香格里拉酒店',
    y: 3
  },
  {
    x: '福州品悦酒店',
    y: 3
  },
  {
    x: '世纪金源酒店',
    y: 7
  }
]
export default {
  components: {
    Bar
  },
  data() {
    return {
      dateFormat: 'YYYY年MM月DD日',
      dateStart: undefined,
      height: 300,
      selectHotel: [],
      dataSource,
      title: '酒店预约次数'
    }
  },
  created() {
    let start = moment(new Date())
      .subtract(1, 'months')
      .format('YYYY-MM-DD')
    this.dateStart = this.moment(start, 'YYYY-MM-DD')
  },
  methods: {
    moment,
    handleChange(value) {
      if (value.length == 0) {
        this.dataSource = dataSource
      } else {
        let hotelSelect = []
        value.forEach(element => {
          //console.log(element)
          dataSource.filter(item => {
            if (item.x.includes(element)) {
              hotelSelect.push(item)
            }
          })
        })
        this.dataSource = hotelSelect
      }
    },
    searchQuery() {},
    searchReset() {
      this.dataSource = dataSource
      this.selectHotel = []
    },
    getCurrentData() {
      return new Date().toLocaleDateString()
    }
  }
}
</script>