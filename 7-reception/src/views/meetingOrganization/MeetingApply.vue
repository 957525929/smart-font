<template>
  <!-- 会议申请 -->
  <div class="page-header-index-wide">
    <a-row :gutter="24">
      <a-col :sm="24" :md="24" :xl="18" :style="{ marginBottom: '24px' }">
        <a-form :form="form">
          <ul class="clearfix">
            <li class="fl nav-item">
              会议名称
              <a-input placeholder="请输入会议名称" :style="{width:'300px'}"></a-input>
            </li>
            <li class="fl nav-item">
              负责人姓名
              <a-input placeholder="请输入负责人姓名" :style="{width:'300px'}"></a-input>
            </li>
            <li class="fl nav-item">
              负责人电话
              <a-input placeholder="请输入负责人电话" :style="{width:'300px'}"></a-input>
            </li>
            <li class="nav-item">
              会议时间
              <a-input placeholder="请输入会议时间" :style="{width:'500px'}">
                <a-icon
                  type="calendar"
                  :style="{fontSize:'20px',marginRight:'5px'}"
                  @change="onChange"
                />
              </a-input>
            </li>
            <li class="fl nav-item">
              会议地点
              <a-input placeholder="请输入会议地点" :style="{width:'350px'}"></a-input>
            </li>
            <li class="fl nav-item" :style="{marginLeft:'100px'}">
              会议预算
              <a-input placeholder="请输入会议预算" :style="{width:'350px'}"></a-input>
            </li>
            <li class="nav-item">
              会议成员
              <img src="./成员.png" alt width="240px" height="80px" />
            </li>
            <li class="nav-item">
              备注
              <a-textarea placeholder="请输入会议备注" :auto-size="{ minRows: 4, maxRows: 6 }" :style="{width:'800px'}"/>
              <!-- <a-input placeholder="请输入会议备注" type="textarea" :style="{width:'800px'}"></a-input> -->
            </li>
          </ul>
          <a-button :style="{ background: '#49a9ee', color: 'white' }">提交申请</a-button>
          <a-button :style="{ background: '#49a9ee', color: 'white' }">保存草稿</a-button>
        </a-form>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6" :style="{ marginBottom: '24px',background:'blue'}">
        <img src="./成员.png" alt width="240px" height="80px" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      dateFormat: 'YYYY年MM月DD日'
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>
<style>
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
  padding: 24px 0px;
  text-align: center;
}
#app #components-layout-demo-basic .ant-layout-sider {
  background: #aaa;
  color: #fff;
  text-align: center;
}

#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
/* fffff */
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
.nav-item {
  width: 90px;
  margin-right: 250px;
  margin-bottom: 20px;
}
</style>