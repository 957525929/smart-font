
<template>
  <!-- 会议结算2 -->
  <a-card :bordered="false">
    <div>
      <router-link :to="{ path: '/meetingOrganization/MeetingSettlement'}" replace>
        <a-button :style="{ background: '#49a9ee', color: 'white' }" icon="rollback">返回上一级</a-button>
      </router-link>
    </div>
    <!-- table1区域-begin -->
    <div>
      <a-table rowKey="id" :data-source="dataSelet" :pagination="false">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="会议成员" data-index="members" align="center"></a-table-column>
      </a-table>
    </div>
    <!-- table2区域-begin -->
    <div>
      <a-table rowKey="id" :data-source="projectData" :pagination="false">
        <a-table-column title="文档编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="文档名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="备注" data-index="remark" align="center"></a-table-column>
        <a-table-column title="状态与操作" align="center">
          <template slot-scope="record">
            <a-button :style="{ background: 'orange', color: 'white' }" @click="Download(record)">下载</a-button>
            <!-- <a-button :style="{ background: 'red', color: 'white' }" @click="Delete(record)">删除</a-button> -->
            <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
              <a-button :style="{ background: 'red', color: 'white' }">删除</a-button>
            </a-popconfirm>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
  </a-card>
</template>

<script>
const projectData = [
  {
    id: 'A120101',
    name: '会议记录1',
    dateTime: '2021年6月5日',
    remark: '修改要点'
  },
  {
    id: 'A120102',
    name: '会议记录2',
    dateTime: '2021年6月5日',
    remark: '新战略'
  },
  {
    id: 'A120103',
    name: '会议记录3',
    dateTime: '2021年6月5日',
    remark: '新战略'
  },
  {
    id: 'A120104',
    name: '会议记录4',
    dateTime: '2021年6月5日',
    remark: '落实情况'
  },
  {
    id: 'A120105',
    name: '会议记录5',
    dateTime: '2021年6月5日',
    remark: '落实情况'
  }
]
export default {
  data() {
    return {
      projectData,
      dataSelet: [
        {
          id: '',
          name: '',
          dateTime: '',
          address: '',
          members: ''
        }
      ]
    }
  },
  mounted() {
    this.dataSelet[0].id = this.$route.query.record.id
    this.dataSelet[0].name = this.$route.query.record.name
    this.dataSelet[0].dateTime = this.$route.query.record.dateTime
    this.dataSelet[0].address = this.$route.query.record.address
    this.dataSelet[0].members = this.$route.query.record.members
  },
  methods: {
    onDelete(id) {
      const projectData = [...this.projectData]
      this.projectData = projectData.filter(item => item.id !== id)
    },
    Download() {
      console.log('会议结算下载')
    }
  }
}
</script>
<style scoped>
.icons-list >>> .anticon {
  font-size: 20px;
}
</style>