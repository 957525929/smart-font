<template>
  <!-- 会议通知 -->
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
          <a-col :xl="6" :lg="7" :md="6" :sm="24">
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
      <a-table rowKey="id" :data-source="dataSource" :scroll="{ y: 450 }" :pagination="false">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="备注" data-index="remark" align="center"></a-table-column>
        <a-table-column title="状态与操作" data-index="notice" align="center">
          <template slot-scope="notice,record,index">
            <div v-if="notice == '1'">
              <span :style="{ color: 'green' }">已通知</span>
            </div>
            <div v-else>
              <a-button
                :style="{ background: 'orange', color: 'white' }"
                @click="noticeClick(record,index)"
              >一键通知</a-button>
            </div>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
  </a-card>
</template>

<script>
const dataSource = [
  {
    id: 'A1201',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    remark: '',
    notice: '0'
  },
  {
    id: 'A1202',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    remark: '',
    notice: '0'
  },
  {
    id: 'A1203',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月07日共2天',
    address: '省公司',
    remark: '',
    notice: '1'
  },
  {
    id: 'A1204',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    remark: '',
    notice: '1'
  },
  {
    id: 'A1205',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    remark: '',
    notice: '1'
  },
  {
    id: 'A1206',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    remark: '',
    notice: '1'
  },
  {
    id: 'A1207',
    name: 'XX项目周例会0605',
    dateTime: '2021年06月05日~2021年06月08日共3天',
    address: '省公司',
    remark: '',
    notice: '1'
  }
]
export default {
  data() {
    return {
      dataSource,
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
        this.dataSource.filter(item => {
          if ((item.id.includes(IDName) || item.name.includes(IDName)) && item.dateTime.includes(dateSearch)) {
            newListData.push(item)
          }
        })
        this.dataSource = newListData
      } else {
        if (IDName) {
          this.dataSource.filter(item => {
            if (item.id.includes(IDName) || item.name.includes(IDName)) {
              newListData.push(item)
            }
          })
          this.dataSource = newListData
        }
        if (date1 && date2) {
          let dateSearch = date1.format('YYYY年MM月DD日') + '~' + date2.format('YYYY年MM月DD日')
          //console.log(dateSearch);
          this.dataSource.filter(item => {
            if (item.dateTime.includes(dateSearch)) {
              console.log(111)
              newListData.push(item)
            }
          })
          this.dataSource = newListData
        }
      }
    },
    searchReset() {
      this.dataSource = dataSource
      this.queryParam.IDName = ''
      this.queryParam.dateOne = undefined
      this.queryParam.dateTwo = undefined
    },
    noticeClick(record, index) {
      //console.log(record, index);
      this.dataSource[index].notice = 1
    }
  }
}
</script>
