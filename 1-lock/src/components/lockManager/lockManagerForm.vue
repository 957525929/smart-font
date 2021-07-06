<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <!-- slot-scope该插槽内部能搞抓取到的行数据、行号 -->
      <span slot="action" slot-scope="text, record, index">
        <!-- 绑定的功能 -->
        <!-- 传值 -->
        <a @click="showModal(index)">绑定</a>
        <a-modal v-model="visible" title="智能锁绑定" @ok="handleOk" ok-text="确认" cancel-text="取消">
          <a-row type="flex">
            <a-col :span="4">锁编号：</a-col>
            <a-col :span="10">{{ data[indexNum].lockNum }}</a-col>
          </a-row>
          <br />
          <a-row type="flex">
            <a-col :span="4">工号:</a-col>
            <a-col :span="10">
              <a-input></a-input>
            </a-col>
          </a-row>
          <br />
          <a-row type="flex">
            <a-col :span="4">姓名:</a-col>
            <a-col :span="10">
              <a-input></a-input>
            </a-col>
          </a-row>
          <br />
          <a-row type="flex">
            <a-col :span="4">部门:</a-col>
            <a-col :span="10">
              <a-select style="width: 100%" default-value="market">
                <a-select-option value="market"> 营销部</a-select-option>
                <a-select-option value="distribution"> 配送部</a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <br />
          <a-row type="flex">
            <a-col :span="4">房间：</a-col>
            <a-col :span="10">
              <a-input></a-input>
            </a-col>
          </a-row>
          <br />
        </a-modal>
        <!-- 绑定功能结束 -->

        <a-divider type="vertical" />

        <!-- 解绑的弹窗 -->
        <a @click="() => setModal1Visible(true)">解绑</a>
        <a-modal
          :visible="modal1Visible"
          cancel-text="取消"
          ok-text="确认"
          title="解绑"
          @cancel="() => setModal1Visible(false)"
          @ok="() => setModal1Visible(false)"
        >
          <a-radio-group>
            <a-radio value="1"> 解绑房间 </a-radio>
            <a-radio value="2"> 解绑员工 </a-radio>
          </a-radio-group>
        </a-modal>

        <a-divider type="vertical" />

        <!-- 报警的弹窗 -->
        <a @click="() => (modal2Visible = true)">报警</a>
        <a-modal
          v-model="modal2Visible"
          cancel-text="取消"
          ok-text="确认"
          title="智能锁信息通知"
          @cancle="() => (modal2Visible = false)"
          @ok="() => (modal2Visible = false)"
        >
          <a-row>
            <a-col :span="4">
              <span>通知类型:</span>
            </a-col>
            <a-col :span="10">
              <a-radio-group>
                <a-radio value="a"> 异常 </a-radio>
                <a-radio value="b"> 故障 </a-radio>
              </a-radio-group>
            </a-col>
          </a-row>

          <br />
          <a-row>
            <a-col :span="4">
              <span>通知内容:</span>
            </a-col>

            <a-col :span="10">
              <a-textarea :rows="3" placeholder="门锁故障" style="width: 100%" />
            </a-col>
          </a-row>
          <br />
          <a-row>
            <a-col :span="4">
              <span>房间:</span>
            </a-col>

            <a-col :span="10">
              <a-input placeholder="D001" style="width: 100%"></a-input>
            </a-col>
          </a-row>
          <br />
          <a-row>
            <a-col :span="4">
              <span>锁编号:</span>
            </a-col>
            <a-col :span="10">
              <a-input placeholder="S0009" style="width: 100%"></a-input>
            </a-col>
          </a-row>
        </a-modal>

        <a-divider type="vertical" />

        <!-- 初始化功能 -->
        <a @click="() => (modal3Visible = true)">初始化</a>
        <a-modal
          v-model="modal3Visible"
          cancel-text="取消"
          ok-text="初始化"
          title="智能锁初始化"
          @cancle="() => (modal3Visible = false)"
          @ok="() => (modal3Visible = false)"
        >
          <a-row>
            <a-col :span="4">
              <span>锁编号:</span>
            </a-col>
            <a-col :span="10">
              <a-input placeholder="S0009" style="width: 100%"></a-input>
            </a-col>
          </a-row>
          <br />
          <a-row>
            <a-col :span="4">
              <span>房间:</span>
            </a-col>

            <a-col :span="10">
              <a-input placeholder="D001" style="width: 100%"></a-input>
            </a-col>
          </a-row>
          <br />
          <a-row type="flex">
            <a-col :span="4">部门:</a-col>
            <a-col :span="10">
              <a-select default-value="market" style="width: 100%">
                <a-select-option value="market"> 营销部</a-select-option>
                <a-select-option value="distribution"> 配送部</a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <br />
          <a-row>
            <a-col :span="4">
              <span>姓名：</span>
            </a-col>
            <a-col :span="10">
              <a-select default-value="name1" style="width: 100%">
                <a-select-option value="name1"> 张三 </a-select-option>
                <a-select-option value="name2"> 李四 </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-modal>

        <a-divider type="vertical" />

        <a-popconfirm title="确定远程开锁吗？" ok-text="确定" cancel-text="取消">
          <a href="#">远程开锁</a>
        </a-popconfirm>
      </span>
    </a-table>
  </a-card>
</template>
<script>
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 80,
  },
  {
    title: '锁编号',
    dataIndex: 'lockNum',
    key: 'lockNum',
  },
  {
    title: '工号',
    dataIndex: 'Num',
    key: 'Num',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 80,
  },
  {
    title: '部门',
    dataIndex: 'apartment',
    key: 'apartment',
  },
  {
    title: '房间',
    dataIndex: 'room',
    key: 'room',
  },
  {
    title: '上班时间',
    dataIndex: 'workTime',
    key: 'workTime',
  },
  {
    title: '下班时间',
    dataIndex: 'endTime',
    key: 'endTime',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = [
  {
    key: '1',
    id: 1,
    lockNum: 'S0001',
    Num: 'A001',
    name: '张三',
    sex: '男',
    apartment: '配送部',
    room: 'B-402',
    workTime: '08:30',
    endTime: '18:00',
    status: '已锁',
  },
  {
    key: '2',
    id: 2,
    lockNum: 'S0002',
    Num: 'A002',
    name: '李四',
    sex: '女',
    apartment: '营销部',
    room: 'C-305',
    workTime: '09:00',
    endTime: '19:00',
    status: '密码锁故障',
  },
  {
    key: '3',
    id: 3,
    lockNum: 'S0003',
    Num: 'A003',
    name: '王五',
    sex: '男',
    apartment: '营销部',
    room: 'D-205',
    workTime: '07:40',
    endTime: '18:30',
    status: '已开锁',
  },
  {
    key: '4',
    id: 4,
    lockNum: 'S0004',
    Num: '',
    name: '',
    sex: '',
    apartment: '',
    room: '',
    workTime: '',
    endTime: '',
    status: '未绑定',
  },
]

export default {
  data() {
    return {
      data,
      columns,
      visible: false,
      modal1Visible: false,
      modal2Visible: false,
      modal3Visible: false,
      indexNum: 0,
    }
  },
  methods: {
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible
    },
    // 绑定的点击事件
    showModal(value) {
      this.visible = true
      // 获取index
      this.indexNum = value
    },

    // 绑定界面内的点击
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
  },
}
</script>