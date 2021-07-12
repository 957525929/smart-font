<template>
  <!-- 会议结算1 -->
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
      <a-table :data-source="data" :scroll="{ y: 450 }" :pagination="false" rowKey="id">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="会议成员" data-index="members" align="center"></a-table-column>
        <a-table-column title="文档信息" data-index="Information" align="center">
          <router-link
            :to="{ path: '/meetingOrganization/MeetingSettlementIn',query: {record}}"
            slot-scope="text,record"
            replace
          >
            <a-button :style="{ background: '#49a9ee', color: 'white' }">查看详情</a-button>
          </router-link>
        </a-table-column>
        <a-table-column title="状态与操作" data-index="archive" align="center">
          <template slot-scope="archive,record,index">
            <div v-if="archive == '0'">
              <!-- <a-button type="danger">不通过</a-button> -->
              <a-button
                :style="{ background: 'green', color: 'white' }"
                @click="archiveClick(record,index)"
              >归档</a-button>
            </div>
            <div v-else>
              <span :style="{ color: 'green' }">已归档</span>
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
    id: 'A1201',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    archive: '0'
  },
  {
    id: 'A1202',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    archive: '0'
  },
  {
    id: 'A1203',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月07日共2天',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    archive: '1'
  },
  {
    id: 'A1204',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    archive: '1'
  },
  {
    id: 'A1205',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    archive: '1'
  },
  {
    id: 'A1206',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    archive: '1'
  },
  {
    id: 'A1207',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    archive: '1'
  }
]

export default {
  data() {
    return {
      data,
      queryParam: {
        IDName: '',
        dateOne: undefined,
        dateTwo: undefined
      },
      dateFormat: 'YYYY年MM月DD日'
    }
  },
  methods: {
    onChange() {},
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
    archiveClick(record, index) {
      this.data[index].archive = 1
    }
  }
}
</script>
