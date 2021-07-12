<template>
  <!-- 会议室预约审核 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="名称或编号：">
              <a-input placeholder="请输入名称或编号" v-model="queryParam.IDName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="10" :lg="9" :md="10" :sm="24">
            <a-form-item label="时间范围：">
              <a-icon type="calendar" :style="{fontSize:'20px',marginRight:'5px'}" />
              <span>从&nbsp;</span>
              <a-date-picker
                @change="onChange"
                placeholder="请选择开始"
                :format="dateFormat"
                v-model="queryParam.dateOne"
              >
                <a-icon slot="suffixIcon" type="none" />
              </a-date-picker>
              <span>&nbsp;到&nbsp;</span>
              <a-date-picker
                @change="onChange"
                placeholder="请选择结束"
                :format="dateFormat"
                v-model="queryParam.dateTwo"
              >
                <a-icon slot="suffixIcon" type="none" />
              </a-date-picker>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-button
              :style="{ background: '#49a9ee', color: 'white'}"
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
    <div>
      <a-table rowKey="id" :data-source="data" :scroll="{ y: 450 }" :pagination="false">
        <a-table-column title="预约编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="会议成员" data-index="members" align="center"></a-table-column>
        <a-table-column title="备注" data-index="remark" align="center"></a-table-column>
        <a-table-column title="状态与操作" data-index="state" align="center">
          <template slot-scope="state,record,index">
            <div v-if="state == '0'">
              <!-- <a-button type="danger">不通过</a-button> -->
              <a-button
                :style="{ background: 'red', color: 'white' }"
                @click="ignoreClick(record,index)"
              >不通过</a-button>
              <a-button
                :style="{ background: 'green', color: 'white' }"
                @click="sureClick(record,index)"
              >通过</a-button>
            </div>
            <div v-else-if="state == '1'">
              <span :style="{ color: 'green' }">已通过</span>
            </div>
            <div v-else>
              <span :style="{ color: 'red' }">未通过</span>
            </div>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
  </a-card>
</template>

<script>
const data = [
  {
    id: 'D1201',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司203会议室',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '第一期项目周例会',
    state: '0'
  },
  {
    id: 'D1202',
    name: 'XX项目周例会0606',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司204会议室',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '第二期项目周例会',
    state: '0'
  },
  {
    id: 'A1203',
    name: 'XX项目周例会0607',
    dateTime: '2021年6月5日~2021年6月8日共3天',
    address: '省公司205会议室',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '第三期项目周例会',
    state: '1'
  },
  {
    id: 'A1204',
    name: 'XX项目周例会0608',
    dateTime: '2021年06月05日~2021年06月07日共2天',
    address: '省公司206会议室',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '第四期项目周例会',
    state: '2'
  },
  {
    id: 'A1205',
    name: 'XX项目周例会0609',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司207会议室',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '第五期项目周例会',
    state: '1'
  },
  {
    id: 'A1206',
    name: 'XX项目周例会0610',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司208会议室',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '第六期项目周例会',
    state: '1'
  },
  {
    id: 'A1207',
    name: 'XX项目周例会0611',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司204会议室',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '第七期项目周例会',
    state: '1'
  }
]

export default {
  data() {
    return {
      data,
      queryParam: {
        IDName: ''
      },
      dateFormat: 'YYYY年MM月DD日'
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
    searchQuery() {
      let IDName = this.queryParam.IDName
      let newListData = []
      let date1 = this.queryParam.dateOne
      let date2 = this.queryParam.dateTwo
      if (IDName && date1 && date2) {
        let dateSearch = date1.format('YYYY年MM月DD日') + '~' + date2.format('YYYY年MM月DD日')
        this.data.filter(item => {
          if ((item.id.includes(IDName) || item.name.includes(IDName)) && item.dateTime.includes(dateSearch)) {
            newListData.push(item)
          }
        })
        this.data = newListData
      } else {
        if (IDName) {
          this.data.filter(item => {
            if (item.id.includes(IDName) || item.name.includes(IDName)) {
              newListData.push(item)
            }
          })
          this.data = newListData
        }
        if (date1 && date2) {
          let dateSearch = date1.format('YYYY年MM月DD日') + '~' + date2.format('YYYY年MM月DD日')
          //console.log(dateSearch);
          this.data.filter(item => {
            if (item.dateTime.includes(dateSearch)) {
              console.log(111)
              newListData.push(item)
            }
          })
          this.data = newListData
        }
      }
    },
    searchReset() {
      this.data = data
      this.queryParam.IDName = ''
      this.queryParam.dateOne = undefined
      this.queryParam.dateTwo = undefined
    },
    ignoreClick(record, index) {
      this.data[index].state = 2
    },
    sureClick(record, index) {
      this.data[index].state = 1
    }
  }
}
</script>
