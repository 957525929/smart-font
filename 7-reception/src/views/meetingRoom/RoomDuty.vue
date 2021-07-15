<template>
  <!--会议室管理人员 -->
  <a-card :bordered="false">
    <!-- 搜索操作区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <a-col>
          <span>区域：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入区域" v-model="queryParam.area" width="50px"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>负责人：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入负责人" v-model="queryParam.dutyName"></a-input>
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
        <a-col>
          <a-button
            @click="addDuty()"
            icon="plus"
            :style="{ color: 'white', background:'orange'}"
          >新增负责人</a-button>
          <a-button>
            <a-icon type="download" />导出
          </a-button>
        </a-col>
      </a-row>
    </div>
    <!-- 搜索操作区域-END -->

    <!-- table区域-begin -->
    <div id="dataDutyTable">
      <a-table :data-source="dataDuty" :pagination="false" rowKey="index">
          <a-table-column title="序号" data-index="index" align="left" fixed="left"></a-table-column>
        <a-table-column title="负责区域" data-index="area" align="center" ></a-table-column>
        <a-table-column title="负责人" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column>
        <!-- <a-table-column title="备注信息" data-index="remark" align="center"></a-table-column> -->
        <a-table-column title="操作" align="center" fixed="right">
          <template slot-scope="record">
            <!-- <a-button :style="{ background: 'orange', color: 'white' }" @click="Modify(record)">修改</a-button> -->
            <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.index)">
              <!-- <a-button :style="{ background: 'red', color: 'white' }">删除</a-button> -->
              <a href="javascript:;" :style="{  color: 'red' }">删除</a>
            </a-popconfirm>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>

    <!-- 新增 -->
    <a-Modal v-model="visibleAdd" title="新增会议室管理人员" footer>
      <a-form-model
        ref="ruleForm"
        :model="formAdd"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="area" label="负责区域" prop="area" placeholder="请输入酒店名称">
          <a-input v-model="formAdd.area"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="负责人" prop="dutyName" placeholder="请输入联系人">
          <a-input v-model="formAdd.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="负责人电话" prop="dutyTel" placeholder="请输入联系电话">
          <a-input v-model="formAdd.dutyTel"></a-input>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitAdd()">创建</a-button>
          <a-button style="margin-left: 10px;" @click="resetFormAdd()">重置</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
    <!--修改信息 -->
    <a-Modal v-model="visibleModify" title="修改会议室管理人员" footer>
      <a-form-model
        :label-col="labelCol"
        :model="formModify"
        :wrapper-col="wrapperCol"
        :rules="rules"
      >
        <a-form-model-item label="负责区域" prop="area">
          <a-input v-model="formModify.area"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="负责人" prop="dutyName">
          <a-input v-model="formModify.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="负责人电话" prop="dutyTel">
          <a-input v-model="formModify.dutyTel"></a-input>
        </a-form-model-item>
        <!-- <a-form-model-item label="备注信息">
          <a-input v-model="formModify.remark" type="textarea" />
        </a-form-model-item> -->
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitModify()">修改</a-button>
          <a-button style="margin-left: 10px;" @click="CancelModify()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
  </a-card>
</template>

<script>
const dataDuty = [
  {
    index: 1,
    dutyName: '李霞',
    dutyTel: '13759655332',
    area: "福建烟草公司机关A区域1号楼",
  },
  {
     index: 2,
    dutyName: '王莉莉',
    dutyTel: '13759655348',
    area: "福建烟草公司机关A区域2号楼",
  },
  {
      index: 3,
    dutyName: '尤晓梅',
    dutyTel: '13053955537',
     area:"福建烟草公司机关B区域1号楼",
  },
  {
     index: 4,
    dutyName: '黄丽娟',
    dutyTel: '13659655381',
    area: "福建烟草公司机关B区域2号楼",
  }
]

export default {
  data() {
    return {
      dataDuty,
      queryParam: {
        dutyName: '',
        area: ''
      },

      visibleAdd: false,
      visibleModify: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      formAdd: {
        area: '',
        dutyName: '',
        dutyTel: '',
      },
      formModify: {},
      rules: {
        area: [
          {
            required: true,
            message: '请输入区域',
            trigger: 'blur'
          }
        ],
        dutyName: [
          {
            required: true,
            message: '请输入负责人',
            trigger: 'blur'
          }
        ],
        dutyTel: [
          {
            required: true,
            message: '请输入负责人电话',
            trigger: 'blur'
          }
        ],
      }
    }
  },
  methods: {
    searchQuery() {
    },
    searchReset() {
      this.dataDuty = dataDuty
    },
    addDuty() {
      this.visibleAdd = true
    },
    onSubmitAdd() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // let length = this.dataHotel.length;
          // this.dataHotel[length] = this.formAdd;
          //this.dataHotel.push(this.formAdd)
          this.$message.success('添加成功!')
          this.formAdd = {}
          this.visibleAdd = false
          // this.$confirm({
          //   title: "您是否确定新建此会议安排？",
          //   content: <div style="color:red;"></div>,
          //   onOk() {
          //     //console.log(length);
          //   },
          //   onCancel() {
          //     console.log("Cancel");
          //   },
          //   class: "test"
          // });
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormAdd() {
      this.$refs.ruleForm.resetFields()
    },
    onDelete(index) {
      const dataDuty= [...this.dataDuty]
      this.dataDuty = dataDuty.filter(item => item.index !== index)
    },
    Download() {
      console.log('下载')
    },
    Modify(record) {
      this.visibleModify = true
      console.log(record)
      this.formModify.area = record.area
      this.formModify.dutyName = record.dutyName
      this.formModify.dutyTel = record.dutyTel
    },
    onSubmitModify() {
      this.visibleModify = false
      this.$message.success('修改成功')
    },
    CancelModify() {
      this.visibleModify = false
    }
  }
}
</script>
<style >
#dataDutyTable {
  margin-top: 20px;
}
</style>
