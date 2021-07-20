<template>
  <!-- 会议统计 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <a-col>
          <span>按主题筛选：</span>
        </a-col>
        <a-col>
          <a-select
            mode="tags"
            :style="{width:'300px'}"
            showSearch
            @change="ChangeTheme"
            placeholder="请选择会议主题"
            v-model="selectTheme"
          >
            <a-select-option value="年度总结">年度总结</a-select-option>
            <a-select-option value="项目会议">项目会议</a-select-option>
            <a-select-option value="物流会议">物流管理</a-select-option>
            <a-select-option value="安全会议">安全管理</a-select-option>
            <a-select-option value="管理会议">管理会议</a-select-option>
            <a-select-option value="表彰会议">表彰会议</a-select-option>
            <a-select-option value="销售会议">销售会议</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>按日期选择：</a-col>
        <a-col>
          <a-date-picker placeholder="请选择开始" :format="dateFormat" v-model="dateStart"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker
            placeholder="请选择结束"
            :format="dateFormat"
            :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"
          ></a-date-picker>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col>
          <!-- <a-button
            :style="{ background: '#49a9ee', color: 'white' }"
            icon="search"
            @click="searchQuery"
          >查询</a-button>-->
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
        </a-col>
      </a-row>
    </div>
  <!-- 图 -->
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="会议次数">
        <bar v-bind:dataSource="dataNumber"  v-bind:height="heightNumber"></bar>
      </a-tab-pane>
      <a-tab-pane key="2" tab="会议预算（元）" force-render>
        <bar v-bind:dataSource="dataBudget"  v-bind:height="heightBudget"></bar>-->
      </a-tab-pane>
    </a-tabs>
  </div>
    
    <!-- <br />
    <bar v-bind:dataSource="dataNumber" v-bind:title="titleNumber" v-bind:height="heightNumber"></bar>
    <bar v-bind:dataSource="dataBudget" v-bind:title="titleBudget" v-bind:height="heightBudget"></bar>-->
  </a-card>
</template>
<script>
import moment from 'moment'
import Bar from '@/components/chart/Bar'
const dataSta = [
  {
    theme: '项目会议',
    number: '30',
    membersNumber: '90',
    budget: '12500'
  },
  {
    theme: '物流管理',
    number: '4',
    membersNumber: '12',
    budget: '900'
  },
  {
    theme: '安全管理',
    number: '9',
    membersNumber: '30',
    budget: '18000'
  },
  {
    theme: '年度总结',
    number: '1',
    membersNumber: '30',
    budget: '21000'
  }
]
const dataNumber = [
  {
    x: '年度总结',
    y: 10
  },
  {
    x: '项目会议',
    y: 3
  },
  {
    x: '物流会议',
    y: 3
  },
  {
    x: '安全会议',
    y: 7
  },
  {
    x: '管理会议',
    y: 9
  },
  {
    x: '表彰会议',
    y: 6
  },
  {
    x: '销售会议',
    y: 5
  }
]
const dataBudget = [
  {
    x: '年度总结',
    y: 20000
  },
  {
    x: '项目会议',
    y: 5000
  },
  {
    x: '物流会议',
    y: 3000
  },
  {
    x: '安全会议',
    y: 9000
  },
  {
    x: '管理会议',
    y: 8500
  },
  {
    x: '表彰会议',
    y: 30000
  },
  {
    x: '销售会议',
    y: 5000
  }
]
export default {
  components: {
    Bar
  },
  data() {
    return {
      dateStart: undefined,
      dateFormat: 'YYYY年MM月DD日',
      dataSta,
      selectTheme: [],
      dataNumber,
      titleNumber: '会议次数',
      heightNumber: 300,
      dataBudget,
      titleBudget: '会议预算（元）',
      heightBudget: 300
    }
  },
  created() {
    let start = moment(new Date())
      .subtract(1, 'months')
      .format('YYYY-MM-DD')
    this.dateStart = this.moment(start, 'YYYY-MM-DD')
  },
  watch: {
    select(val) {
      console.log(val)
    }
  },
  methods: {
    moment,
    ChangeTheme(value) {
      console.log(value.length)
      if (value.length == 0) {
        this.dataNumber = dataNumber
        this.dataBudget = dataBudget
      } else {
        // console.log(value[value.length - 1])
        // dataNumber.filter(item => {
        //   if (item.x.includes(value[value.length - 1])) {
        //     this.ThemeSelect.push(item)
        //   }
        // })
        // this.dataNumber = this.ThemeSelect
        let themeSelect = []
        let budgetSelect = []
        value.forEach(element => {
          console.log(element)
          dataNumber.filter(item => {
            if (item.x.includes(element)) {
              themeSelect.push(item)
              budgetSelect.push(item)
            }
          })
        })
        this.dataNumber = themeSelect
        this.dataBudget = budgetSelect
      }
    },
    searchReset() {
      this.dataNumber = dataNumber
      this.dataBudget = dataBudget
      this.selectTheme = []
    },
    getCurrentData() {
      return new Date().toLocaleDateString()
    }
  }
}
</script>