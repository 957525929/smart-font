<template>
  <!-- 会议室预约审核 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
       <a-row type="flex" align="middle">
        <a-col>
          <span>预约类型：</span>
        </a-col>
        <a-col>
            <a-select :style="{width:'150px'}"  @change="handleChange" placeholder="请选择预约方式">
            <a-select-option value="公司会议">公司会议</a-select-option>
            <a-select-option value="个人">个人</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>区域或房间号：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入区域或房间号" v-model="queryParam.word"></a-input>
        </a-col>
          <a-col :span="1"></a-col>
        <a-col>
          <a-button
            :style="{ background: '#49a9ee', color: 'white'}"
            icon="search"
            @click="searchQuery"
          >查询</a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
        </a-col>
        <a-col :span="8"></a-col>
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
      </a-form> -->
    </div>
    <!-- 查询区域-END -->
    <!-- table区域-begin -->
    <div id="RoomAudit">
      <a-table rowKey="index" :data-source="data" :pagination="false">
        <a-table-column title="序号" data-index="index" align="left"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="参会人数" data-index="number" align="center"></a-table-column>
        <a-table-column title="会议室容纳人数" data-index="numberA" align="center"></a-table-column>
        <a-table-column title="预约负责人" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="预约负责人电话" data-index="dutyTel" align="center"></a-table-column>
        <a-table-column title="预约类型" data-index="type" align="center"></a-table-column>
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
            </div>
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
import moment from 'moment'
const data = [
  {
    id:"A1202",
    index: '1',
    name: '零售项目开展会议',
    dateTime: '2021年07月18日~2021年07月20日',
    address: '福建烟草公司机关A区域1号楼会议室203',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '项目会议',
    number: '4',
    numberA:"5-6",
    dutyName: '李小玲',
    dutyTel: '152690314587',
    type:"个人",
    audit: '0'
  },
  {
    id:"A1203",
    index: '2',
    name: '物流管理会议',
    dateTime: '2021年07月20日~2021年07月21日',
    address: '福建烟草公司机关A区域2号楼会议室204',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨',
    remark: '物流管理',
    number: '4',
    numberA:"6-8",
    dutyName: '林诺汐',
    dutyTel: '152690314587',
    type:"公司会议",
    audit: '0'
  }
]

export default {
  data() {
    return {
      data,
     
      visibleReason: false,
      labelCol: { span: 3 },
      wrapperCol: { span: 18 },
      queryParam: {
        IDName: ''
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
    created() {
    let start = moment(new Date())
      .subtract(1, 'months')
      .format('YYYY-MM-DD')
    this.dateStart = this.moment(start, 'YYYY-MM-DD')
  },
  methods: {
    moment,

    // onChange(date, dateString) {
    //   console.log(date, dateString)
    // },
    handleChange(){},
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
      // this.queryParam.IDName = ''
      // this.queryParam.dateOne = undefined
      // this.queryParam.dateTwo = undefined
    },
    onChange(){},
    ignoreClick(id, index) {
      this.visibleReason = true
        this.formReason.index = index
      this.formReason.id = id
    },
    sureClick(id, index) {
      this.data[index].audit = '已通过'
            const data = [...this.data]
      this.data = data.filter(item => item.id !== id)
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
<style >
#RoomAudit {
  margin-top: 20px;
}
</style>