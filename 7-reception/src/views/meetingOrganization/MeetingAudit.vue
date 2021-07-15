<template>
  <!-- 会议审核 -->
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
              @click="searchQuery()"
            >查询</a-button>
            <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 查询区域-END -->
    <!-- table区域-begin -->
    <div>
      <a-table rowKey="id" :data-source="data" :pagination="false">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px" fixed="left"></a-table-column>
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议预算（元）" data-index="budget" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="参会人数" data-index="number" align="center"></a-table-column>
        <a-table-column title="负责人姓名" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column>
        <!-- <a-table-column title="操作" data-index="audit" align="center" fixed="right">
          <template slot-scope="audit,record,index">
            <div v-if="audit=='已通过'">
              <span :style="{color:'green'}">已通过</span>
            </div>
            <div v-else-if="audit=='未通过'">
              <span :style="{color:'red'}">未通过</span>
            </div>
            <div v-else>
              <a-button
                :style="{background:'red',color:'white',width:'100px'}"
                @click="ignoreClick(record,index)"
              >不通过</a-button>
              <a-button
                :style="{background:'green',color:'white',width:'100px'}"
                @click="sureClick(record,index)"
              >通过</a-button>
            </div>
                 <a href="javascript:;" @click="see(record)">查看附件</a>
          </template>    
        </a-table-column>-->
        <a-table-column title="操作" align="center" data-index="audit">
          <template slot-scope="audit,record,index">
            <div v-if="audit=='0'">
              <a
                href="javascript:;"
                @click="ignoreClick(record.id,index)"
                :style="{  color: 'red' }"
              >不通过</a>
              <a-divider type="vertical" />
              <a
                href="javascript:;"
                @click="sureClick(record.id,index)"
                :style="{  color: 'green' }"
              >通过</a>
              <a-divider type="vertical" />
              <a href="javascript:;" @click="see(record)">查看附件</a>
            </div>
            <!-- <a href="javascript:;" @click="ignoreClick(record)" :style="{  color: 'red' }">不通过</a>
            <a-divider type="vertical" />
            <a href="javascript:;" @click="sureClick(record,index)" :style="{  color: 'green' }">通过</a>
            <a-divider type="vertical" />
            <a href="javascript:;" @click="see(record)">查看附件</a>-->
          </template>
        </a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
    <!-- 不通过填写原因 -->
    <a-modal
      v-model="visibleReason"
      title="不通过原因填写"
      @ok="handleOkReason"
      @cancel="handleCancelReason"
    >
      <a-form-model
        ref="ruleForm"
        :model="formReason"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="原因" prop="reason">
          <a-input v-model="formReason.reason" type="textarea" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </a-card>
</template>

<script>
const data = [
  // {
  //   id: 'A1201',
  //   budget: '1000',
  //   name: '2020年年度总结',
  //   theme: '年度总结',
  //   dateTime: '2021年01月15日~2021年01月16日共2天',
  //   address: '会议室203',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '陈宏涛',
  //   dutyTel: '152690314587',
  //   audit: '已通过'
  // },
  {
    id: 'A1202',
    budget: '2000',
    name: '零售项目开展会议',
    theme: '项目会议',
    dateStart:'2021-07-18',
    dateEnd:'2021-07-20',
    dateTime: '2021年07月18日~2021年07月20日',
    address: '总公司机关',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    number: '4',
    dutyName: '李小玲',
    dutyTel: '152690314587',
    audit: '0'
  },
  {
    id: 'A1203',
    budget: '2000',
    name: '物流管理会议',
    theme: '物流管理',
     dateStart:'2021-07-20',
    dateEnd:'2021-07-21',
    dateTime: '2021年07月20日~2021年07月21日',
    address: '总公司机关',
    number: '4',
    dutyName: '林诺汐',
    dutyTel: '152690314587',
    audit: '0'
  }
  // {
  //   id: 'A1204',
  //   budget: '3000',
  //   name: '安全管理会议',
  //   theme: '安全管理',
  //   dateTime: '2021年05月20日~2021年05月21日共2天',
  //   address: '会议室205',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '林诺汐',
  //   dutyTel: '152690314587',
  //   audit: '未通过'
  // },
  // {
  //   id: 'A1205',
  //   budget: '5000',
  //   name: '安全管理会议',
  //   theme: '安全管理',
  //   dateTime: '2021年05月20日~2021年05月21日共2天',
  //   address: '会议室205',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '林诺汐',
  //   dutyTel: '152690s314587',
  //   audit: '已通过'
  // },
  // {
  //   id: 'A1206',
  //   budget: '5000',
  //   name: '物流管理会议',
  //   theme: '物流管理',
  //   dateTime: '2021年05月05日~2021年05月07日共2天',
  //   address: '会议室205',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '林诺汐',
  //   dutyTel: '152690314587',
  //   audit: '未通过'
  // },
  // {
  //   id: 'A1207',
  //   budget: '5000',
  //   name: '安全管理会议',
  //   theme: '安全管理',
  //   dateTime: '2021年06月03日~2021年06月05日共2天',
  //   address: '会议室205',
  //   members: '陈宏涛；李小玲；林诺汐；陈熙雨',
  //   dutyName: '林诺汐',
  //   dutyTel: '152690314587',
  //   audit: '已通过'
  // }
]
export default {
  data() {
    return {
      data,
      visibleReason: false,
      labelCol: { span: 3 },
      wrapperCol: { span: 18 },
      queryParam: {
        IDName: '',
        dateOne: undefined,
        dateTwo: undefined
      },
      dateFormat: 'YYYY年MM月DD日',
      formReason: {
        reason: '',
        index: '',
        id: ''
      },
      rules: {
        reason: [
          {
            required: true,
            message: '请输入原因',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
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
    ignoreClick(id, index) {
      this.visibleReason = true
      this.formReason.index = index
      this.formReason.id = id
      //   this.data[index].audit = '未通过'
      //  const data = [...this.data];
      //   this.data = data.filter(item => item.id !== id);
    },
    sureClick(id, index) {
      this.data[index].audit = '已通过'
      const data = [...this.data]
      this.data = data.filter(item => item.id !== id)
    },
    searchReset() {
      this.data = data
      this.queryParam.IDName = ''
      this.queryParam.dateOne = undefined
      this.queryParam.dateTwo = undefined
    },
    handleCancelReason() {
      this.visibleReason = false
    },
    handleOkReason() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let index = this.formReason.index
          let id = this.formReason.id
          this.data[index].audit = '未通过'
          const data = [...this.data]
          this.data = data.filter(item => item.id !== id)
          this.visibleReason = false
          this.formReason.reason = ''
        }
      })
    }
  }
}
</script>
