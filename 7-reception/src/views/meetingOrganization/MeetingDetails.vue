<template>
  <!-- 会议查看详情 -->
  <div>
    <a-card :bordered="false">
      <a-button :style="{marginBottom:'10px'}">
        <a-icon type="download" />导出
      </a-button>
        <span>&nbsp;&nbsp;</span>
      <a-button>
        <a-icon type="upload" />上传附件
      </a-button>
      <!-- <a href="javascript:;" :style="{  color: 'orange' }">增加附件</a> -->
      <a-collapse @change="changeActivekey" v-model="activeKey">
        <a-collapse-panel key="1" header="会议申请信息" :disabled="false" :style="{fontWeight:'700'}">
          <a-descriptions :style="{fontWeight:'400'}">
            <a-descriptions-item label="会议名称">安全管理会议</a-descriptions-item>
            <a-descriptions-item label="会议预算">1000</a-descriptions-item>
            <a-descriptions-item label="负责人姓名">陈宏涛</a-descriptions-item>
            <a-descriptions-item label="负责人电话">152690314587</a-descriptions-item>
            <a-descriptions-item label="会议时间">2021年07月18日~2021年07月20日</a-descriptions-item>
            <a-descriptions-item label="会议地点">总公司机关</a-descriptions-item>
            <a-descriptions-item label="会议安排成员">陈宏涛；李小玲；林诺汐；陈熙雨</a-descriptions-item>
            <a-descriptions-item label="备注">安全管理</a-descriptions-item>
          </a-descriptions>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="会议审核信息" :style="{fontWeight:'700'}">
          <a-descriptions :style="{fontWeight:'400'}">
            <a-descriptions-item label="审核意见">通过</a-descriptions-item>
            <a-descriptions-item label="审核日期">2021年07月15日</a-descriptions-item>
            <a-descriptions-item label="审核人">刘小小</a-descriptions-item>
            <a-descriptions-item label="审核人电话">1526631568</a-descriptions-item>
          </a-descriptions>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="会议安排信息" :style="{fontWeight:'700'}">
          <a-collapse :default-active-key="an" :style="{fontWeight:'400'}">
            <a-collapse-panel key="6" header="协议酒店">
              <a-table :data-source="dataHotel" :pagination="false" rowKey="dateTime">
                <a-table-column title="序号" data-index="id" align="center"></a-table-column>
                <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
                <a-table-column title="协议酒店" data-index="hotel" align="center"></a-table-column>
              </a-table>
            </a-collapse-panel>
            <a-collapse-panel key="7" header="就餐地点">
              <a-table :data-source="dataEat" :pagination="false" rowKey="dateTime">
                <a-table-column title="序号" data-index="id" align="center"></a-table-column>
                <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
                <a-table-column title="餐别" data-index="type" align="center"></a-table-column>
                <a-table-column title="就餐地点" data-index="way" align="center"></a-table-column>
              </a-table>
            </a-collapse-panel>
            <a-collapse-panel key="8" header="会议地点">
              <a-table :data-source="dataRoom" :pagination="false" rowKey="dateTime">
                <a-table-column title="序号" data-index="id" align="center"></a-table-column>
                <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
                <a-table-column title="时段" data-index="range" align="center"></a-table-column>
                <a-table-column title="会议地点" data-index="room" align="center"></a-table-column>
              </a-table>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
        <a-collapse-panel key="4" header="签到记录" :style="{fontWeight:'700'}">
          <a-table :data-source="dataArrive" :pagination="false" rowKey="dateTime" :style="{fontWeight:'400'}"> 
            <a-table-column title="序号" data-index="id" align="center"></a-table-column>
            <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
            <a-table-column title="签到人员" data-index="Arrive" align="center"></a-table-column>
            <a-table-column title="未签到人员" data-index="noArrive" align="center"></a-table-column>
          </a-table>
        </a-collapse-panel>
        <a-collapse-panel key="5" header="会议记录" :style="{fontWeight:'700'}">
          <a-upload :style="{fontWeight:'400'}"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :default-file-list="defaultFileList"
          >
            <a-button>
              <a-icon type="upload" />上传附件
            </a-button>
          </a-upload>
          <a-table :data-source="dataNote" :pagination="false" rowKey="dateTime" :style="{fontWeight:'400'}">
            <a-table-column title="文档编号" data-index="NoteId" align="center"></a-table-column>
            <a-table-column title="文档名称" data-index="name" align="center"></a-table-column>
            <a-table-column title="上传时间" data-index="dateTime" align="center"></a-table-column>
            <a-table-column title="操作" data-index="action" align="center">
              <template slot-scope="record">
                <a href="javascript:;" @click="Download(record)">下载</a>
                <a-divider type="vertical" />
                <a href="javascript:;" :style="{  color: 'orange' }">增加附件</a>
              </template>
            </a-table-column>
          </a-table>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
  </div>
</template>
<script>
const dataHotel = [
  {
    id: '1',
    dateTime: '2021年07月18日~2021年07月20日',
    hotel: '香格里拉酒店'
  }
]
const dataEat = [
  {
    id: '1',
    dateTime: '2021年07月18日~2021年07月18日',
    type: '早餐',
    way: '香格里拉酒店'
  },
  {
    id: '2',
    dateTime: '2021年07月18日~2021年07月18日',
    type: '午餐',
    way: '食堂'
  },
  {
    id: '3',
    dateTime: '2021年07月18日~2021年07月18日',
    type: '晚餐',
    way: '食堂'
  },
  {
    id: '4',
    dateTime: '2021年07月19日~2021年07月19日',
    type: '三餐',
    way: '香格里拉酒店'
  },
  {
    id: '5',
    dateTime: '2021年07月20日~2021年07月20日',
    type: '三餐',
    way: '食堂'
  }
]
const dataRoom = [
  {
    id: '1',
    dateTime: '2021年07月18日~2021年07月19日',
    room: '中国烟草总公司福建省公司机关.A区域.1号楼.会议室203',
    range: '全天'
  },
  {
    id: '2',
    dateTime: '2021年07月19日~2021年07月20日',
    room: '中国烟草总公司福建省公司机关.A区域.1号楼.会议室204',
    range: '全天'
  }
]
const dataNote = [
  {
    NoteId: 'B120201',
    name: '安全管理会议视频记录',
    dateTime: '2021-07-19 18:30:05'
  },
  {
    NoteId: 'B120202',
    name: '安全管理会议谈话记录',
    dateTime: '2021-07-20 18:00:05'
  }
]
const dataArrive = [
  {
    id: '1',
    dateTime: '2021年07月18日~2021年07月18日全天',
    Arrive: '陈宏涛；李小玲；林诺汐',
    noArrive: '陈熙雨'
  },
  {
    id: '2',
    dateTime: '2021年07月19日~2021年07月19日全天',
    Arrive: '陈宏涛；李小玲；林诺汐',
    noArrive: '陈熙雨'
  },
  {
    id: '3',
    dateTime: '2021年07月20日~2021年07月20日全天',
    Arrive: '陈宏涛；李小玲；林诺汐',
    noArrive: '陈熙雨'
  }
]
export default {
  data() {
    return {
      activeKey: ['1', '2', '3', '4', '5'],
      an: ['8', '6', '7'],
      dataHotel,
      dataEat,
      dataRoom,
      dataNote,
      dataArrive,
      defaultFileList: [
        {
          uid: '1',
          name: '安全管理会议视频记录.video',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png'
        },
        {
          uid: '2',
          name: '安全管理会议谈话记录.world',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png'
        }
      ]
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
