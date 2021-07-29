<template>
  <!-- 会议安排1 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <a-col>
          <span>会议名称：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入会议名称" v-model="queryParam.name"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>编号：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入会议编号" v-model="queryParam.id"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>会议时间：</a-col>
        <a-col>
          <a-date-picker
            @change="onChange"
            placeholder="请选择开始"
            :format="dateFormat"
            v-model="queryParam.dateOne"
          ></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker
            @change="onChange"
            placeholder="请选择结束"
            :format="dateFormat"
            v-model="queryParam.dateTwo"
          ></a-date-picker>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <a-button
            :style="{ background: '#49a9ee', color: 'white' }"
            icon="search"
            @click="searchQuery"
          >查询</a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
        </a-col>
      </a-row>
      <!-- <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="名称或编号：">
              <a-input placeholder="请输入名称或编号" v-model="queryParam.IDName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="10" :lg="9" :md="10" :sm="24">
            <a-form-item label="时间范围：">
              <a-icon type="calendar" :style="{ fontSize: '20px', marginRight: '5px' }" />
              <span>从&nbsp;</span>
              <a-date-picker
                @change="onChange"
                placeholder="请选择开始"
                :format="dateFormat"
                v-model="queryParam.dateOne"
              >
                <a-icon slot="suffixIcon" type="suffixIcon" />
              </a-date-picker>
              <span>&nbsp;到&nbsp;</span>
              <a-date-picker
                @change="onChange"
                placeholder="请选择结束"
                :format="dateFormat"
                v-model="queryParam.dateTwo"
              >
                <a-icon slot="suffixIcon" type="suffixIcon" />
              </a-date-picker>
            </a-form-item>
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
    <div id="dataArrange">
      <a-table :data-source="data" :pagination="false" rowKey="id">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px" fixed="left"></a-table-column>
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议预算（元）" data-index="budget" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="参会人数" data-index="number" align="center"></a-table-column>
        <a-table-column title="负责人姓名" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column>
        <a-table-column title="操作" align="center">
          <router-link
            :to="{ path: '/meetingOrganization/MeetingArrangeEdit', query: { record } }"
            slot-scope="text, record"
            replace
          >
            <a-button :style="{ background: 'orange', color: 'white' }">会议安排</a-button>
          </router-link>
        </a-table-column>
      </a-table>
      <br />
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
  </a-card>
</template>
<script>
//只要显示待安排的数据
const data = [
  // {
  //   id: 'A1201',
  //   budget: '1000',
  //   name: '2020年年度总结',
  //   theme:"年度总结",
  //   dateTime: '2021年01月15日~2021年01月16日共2天',
  //   address: '会议室203',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '陈宏涛',
  //   dutyTel: '152690314587',
  //   state: '已通过'
  // },
  // {
  //   id: 'A1202',
  //   budget: '2000',
  //   name: '零售项目开展会议',
  //   theme:"项目会议",
  //   dateTime: '2021年06月05日~2021年06月08日共3天',
  //   address: '会议室204',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '李小玲',
  //   dutyTel: '152690314587',
  //   state: '0'
  // },
  // {
  //   id: 'A1203',
  //   budget: '2000',
  //   name: '物流管理会议',
  //   theme:"物流管理",
  //   dateTime: '2021年05月05日~2021年05月07日共2天',
  //   address: '会议室203',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '林诺汐',
  //   dutyTel: '152690314587',
  //   state: '0'
  // },
  // {
  //   id: 'A1204',
  //   budget: '3000',
  //   name: '安全管理会议',
  //   theme:"安全管理",
  //   dateTime: '2021年05月20日~2021年05月21日共2天',
  //   address: '会议室205',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '林诺汐',
  //   dutyTel: '152690314587',
  //    state: '未通过'
  // },
  {
    id: 'A1205',
    budget: '5000',
    name: '安全管理会议',
    theme: '安全管理',
    dateTime: '2021年07月25日~2021年07月26日',
    address: '总公司机关',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    number: '4',
    dutyName: '林诺汐',
    dutyTel: '152690314587',
    state: '待安排'
  },
  // {
  //   id: 'A1206',
  //   budget: '5000',
  //  name: '物流管理会议',
  //   theme:"物流管理",
  //   dateTime: '2021年05月05日~2021年05月07日共2天',
  //   address: '会议室205',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '林诺汐',
  //   dutyTel: '152690314587',
  //   state: '未通过'
  // },
  {
    id: 'A1207',
    budget: '5000',
    name: '物流管理会议',
    theme: '物流管理',
    dateTime: '2021年07月26日~2021年07月27日',
    address: '总公司机关',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    number: '4',
    dutyName: '林诺汐',
    dutyTel: '152690314587',
    state: '待安排'
  }
]
export default {
  data() {
    return {
      data,
      // dataSelet:[],
      queryParam: {
        id: undefined,
        name: undefined,
        dateOne: undefined,
        dateTwo: undefined
      },
      dateFormat: 'YYYY年MM月DD日'
    }
  },
  methods: {
    onChange() {
      //console.log(date, dateString)
      // console.log(dateString);
    },
    searchQuery() {
      // let IDName = this.queryParam.IDName
      // let newListData = []
      // let date1 = this.queryParam.dateOne
      // let date2 = this.queryParam.dateTwo
      // if (IDName && date1 && date2) {
      //   let dateSearch = date1.format('YYYY年MM月DD日') + '~' + date2.format('YYYY年MM月DD日')
      //   this.data.filter(item => {
      //     if ((item.id.includes(IDName) || item.name.includes(IDName)) && item.dateTime.includes(dateSearch)) {
      //       newListData.push(item)
      //     }
      //   })
      //   this.data = newListData
      // } else {
      //   if (IDName) {
      //     this.data.filter(item => {
      //       if (item.id.includes(IDName) || item.name.includes(IDName)) {
      //         newListData.push(item)
      //       }
      //     })
      //     this.data = newListData
      //   }
      //   if (date1 && date2) {
      //     let dateSearch = date1.format('YYYY年MM月DD日') + '~' + date2.format('YYYY年MM月DD日')
      //     //console.log(dateSearch);
      //     this.data.filter(item => {
      //       if (item.dateTime.includes(dateSearch)) {
      //         console.log(111)
      //         newListData.push(item)
      //       }
      //     })
      //     this.data = newListData
      //   }
      // }
    },
    searchReset() {
      this.data = data
      this.queryParam.IDName = ''
      this.queryParam.dateOne = undefined
      this.queryParam.dateTwo = undefined
    }
  }
}
</script>
<style scoped>
#dataArrange {
  margin-top: 20px;
}
</style>