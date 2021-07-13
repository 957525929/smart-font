<template>
  <div>
    <a-collapse @change="changeActivekey">
      <a-collapse-panel key="1" header="会议申请信息" :disabled="false">
        <a-descriptions>
          <a-descriptions-item label="会议名称">2020年年度总结</a-descriptions-item>
          <a-descriptions-item label="会议预算">1000</a-descriptions-item>
          <a-descriptions-item label="负责人姓名">陈宏涛</a-descriptions-item>
          <a-descriptions-item label="负责人电话">152690314587</a-descriptions-item>
          <a-descriptions-item label="会议时间">2021年01月15日~2021年01月16日共2天</a-descriptions-item>
          <a-descriptions-item label="会议地点">会议室203</a-descriptions-item>
          <a-descriptions-item label="会议安排成员">陈宏涛；李小玲；林诺汐；陈熙雨</a-descriptions-item>
          <a-descriptions-item label="备注">2020年年度总结</a-descriptions-item>
        </a-descriptions>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="会议审核信息">
        <a-descriptions>
          <a-descriptions-item label="审核人">刘小小</a-descriptions-item>
          <a-descriptions-item label="审核人电话">1526631568</a-descriptions-item>
          <a-descriptions-item label="审核日期">2021年01月08日</a-descriptions-item>
        </a-descriptions>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="会议安排信息">
        <a-collapse default-active-key="4">
          <a-collapse-panel key="5" header="酒店安排">
            <a-table :data-source="dataHotel" :pagination="false" rowKey="dateTime">
              <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
              <a-table-column title="入住酒店" data-index="hotel" align="center"></a-table-column>
            </a-table>
          </a-collapse-panel>
          <a-collapse-panel key="6" header="就餐安排">
            <a-table :data-source="dataEat" :pagination="false" rowKey="dateTime">
              <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
              <a-table-column title="餐别" data-index="type" align="center"></a-table-column>
              <a-table-column title="就餐方式" data-index="way" align="center"></a-table-column>
            </a-table>
          </a-collapse-panel>
          <a-collapse-panel key="7" header="会议室安排">
            <a-table :data-source="dataRoom" :pagination="false" rowKey="dateTime">
              <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
              <a-table-column title="会议室" data-index="room" align="center"></a-table-column>
            </a-table>
          </a-collapse-panel>
        </a-collapse>
      </a-collapse-panel>
      <a-collapse-panel key="4" header="与会记录">
        <a-table :data-source="dataNote" :pagination="false" rowKey="dateTime">
          <a-table-column title="文档编号" data-index="NoteId" align="center"></a-table-column>
          <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="会议签到记录" data-index="sign" align="center"></a-table-column>
          <a-table-column title="会议记录" data-index="note" align="center"></a-table-column>
          <a-table-column title="备注" data-index="remark" align="center"></a-table-column>
        </a-table>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
const dataHotel = [
  {
    dateTime: '2021年01月15日~2021年01月16日',
    hotel: '香格里拉酒店'
  }
]
const dataEat = [
  {
    dateTime: "2021年06月05日~2021年06月05日",
    type: "早餐",
    way: "香格里拉酒店"
  },
  {
    dateTime: "2021年06月05日~2021年06月05日",
    type: "午餐",
    way: "食堂"
  },
    {
    dateTime: "2021年06月05日~2021年06月05日",
    type: "晚餐",
    way: "食堂"
  },
    {
    dateTime: "2021年06月05日~2021年06月06日",
    type: "早餐",
    way: "香格里拉酒店"
  },
  {
    dateTime: "2021年06月05日~2021年06月06日",
    type: "午餐",
    way: "食堂"
  },
    {
    dateTime: "2021年06月05日~2021年06月06日",
    type: "晚餐",
    way: "食堂"
  }
]
const dataRoom = [
  {
    dateTime: '2021年01月15日~2021年01月16日',
    room: '会议室203'
  }
]
const dataNote = [
  {
    NoteId:'B120201',
    dateTime: '2021年06月05日~2021年06月05日',
    sign:'陈宏涛；李小玲；林诺汐；陈熙雨',
    note: '总结了2020年的公司情况',
    remark:'2020年年度总结'
  }
]
export default {
  data() {
    return {
      dataHotel,
      dataEat,
      dataRoom,
      dataNote
    }
  },
  mounted() {
    console.log(this.$route.query.record)
  },
  methods: {
    changeActivekey(key) {
      console.log(key)
    }
  }
}
</script>
