<template>
  <!-- 会议申请 -->
  <div class="meetingApply">
    <!-- 会议申请信息 -->
    <table class="meetingInfo">
      <tbody>
        <tr>
          <td colspan="2">
            <label for="meetingTheme" :style="{marginLeft:'20px'}">会议主题</label>
            <div class="bgc">
              <a-select
                id="meetingTheme"
                :default-value="meetingTheme"
                :style="{width:'80%'}"
                @change="handleChange"
              >
                <a-select-option value="周例会">周例会</a-select-option>
                <a-select-option value="项目会议">项目会议</a-select-option>
                <a-select-option value="物流会议">物流管理会议</a-select-option>
                <a-select-option value="安全会议">安全管理会议</a-select-option>
                <a-select-option value="管理会议">年度总结会议</a-select-option>
              </a-select>
            </div>
          </td>
          <td>
            <label for="meetingName" :style="{marginLeft:'20px'}">会议名称</label>
            <div class="bgc">
              <a-input
                id="meetingName"
                placeholder="请输入会议名称"
                :style="{width:'80%'}"
                :value="meetingName"
              ></a-input>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label for="responsibleName" :style="{marginLeft:'20px'}">负责人姓名</label>
            <div class="bgc">
              <a-input
                id="responsibleName"
                placeholder="请输入负责人姓名"
                :style="{width:'80%'}"
                :value="responsibleName"
              ></a-input>
            </div>
          </td>
          <td>
            <label for="responsibleTelphone" :style="{marginLeft:'20px'}">负责人电话</label>
            <div class="bgc">
              <a-input
                id="responsibleTelphone"
                placeholder="请输入负责电话"
                :style="{width:'80%'}"
                :value="responsibleTelphone"
              ></a-input>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <label :style="{marginLeft:'20px'}">会议时间</label>
            <div class="bgc">
              <a-icon type="schedule" :style="{ fontSize: '24px', marginRight: '2px' }" />
              <a-range-picker @change="timeChange" :style="{width:'60%', border:'none'}" />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label for="meetingAddress" :style="{marginLeft:'20px'}">会议地点</label>
            <div class="bgc">
              <a-input
                id="meetingAddress"
                placeholder="请输入会议地点"
                :style="{width:'80%'}"
                :value="meetingAddress"
              ></a-input>
            </div>
          </td>
          <td colspan="2">
            <label for="meetingBarget" :style="{marginLeft:'20px'}">会议预算</label>
            <div class="bgc">
              <a-input
                id="meetingBarget"
                placeholder="请输入会议预算"
                :style="{width:'80%'}"
                :value="meetingBarget"
                type="number"
              ></a-input>元
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <label :style="{marginLeft:'20px'}">会议成员</label>
            <div class="bgc">
              <span>请从右侧选择参会人员</span>
              <!-- <div style="tex-align:left">
                    <a-tag v-for="(item) in meetingJoinsMembers" :key="item.key"  closable  color='#77acf1'  @close="handleClose(item)">
                      {{ item.title }}
                    </a-tag>
              </div>-->
              <ul class="clearfix">
                <li
                  class="fl"
                  v-for="(item) in meetingJoinsMembers"
                  :key="item.key"
                  :style="{position:'relative'}"
                >{{item.title}}</li>
              </ul>
              <!-- <ul class="clearfix">
                    <li class="fl" v-for="(item) in meetingJoinsMembers" :key="item.key" :style="{position:'relative'}">
                      {{item.title}}
                      <a-avatar shape="square" :size="64" :src="item.imageSrc" ></a-avatar>
                      <a-icon type="minus-square"  :style="{fontSize: '24px', position:'absolute', top:'40px', left: '40px', backgroundColor: '#77acf1', color: '#fff'}" />
                      <p>{{item.name}}</p>
                    </li>
              </ul>-->
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <label for="meetingComments" :style="{marginLeft:'20px'}">备注</label>
            <div class="bgc">
              <a-textarea
                id="meetingComments"
                :value="meetingComments"
                placeholder="请输入会议备注信息"
                :auto-size="{ minRows: 3, maxRows: 5 }"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="text-align:center">
            <a-button
              @click="submitApply"
              shape="round"
              size="large"
              :style="{ width: '300px', background: '#77acf1', color: 'white', marginRight: '20PX'}"
            >提交申请</a-button>
            <a-button
              shape="round"
              size="large"
              :style="{ width: '300px', background: '#77acf1', color: 'white' }"
            >保存草稿</a-button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 会议成员 -->
    <div class="nemberList">
      <a-tree
        :tree-data="treeDatas"
        v-model="checkedKeys"
        checkable
        :expanded-keys="expandedKeys"
        :auto-expand-parent="autoExpandParent"
        :selected-keys="selectedKeys"
        @expand="onExpand"
        @select="onSelect"
      />
      <!-- <div class="departmentLists">
            <div class="departmentName">
              <a-checkbox @change="menbersInfoChange">运营A组 (1/5) </a-checkbox>
              <a-icon type="caret-down" />
            </div>
            <div class="departmentNumbers">
              <ul class="clearfix">
                <li class="fl" style="margin-right: 20px" v-for="(item) in meetingMembers" :key="item.id" :style="{position:'relative'}">
                  <a-avatar shape="square" :size="64" :src="item.imageSrc" ></a-avatar>
                  <a-icon v-if="true" type="plus-square"  :style="{fontSize: '24px', position:'absolute', top:'40px', left: '40px', backgroundColor: '#77acf1', color: '#fff'}" />
                  <a-icon v-else type="minus-square"  :style="{fontSize: '24px', position:'absolute', top:'40px', left: '40px', backgroundColor: '#77acf1', color: '#fff'}" />
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import Mock from 'mockjs'
const treeData = [
  {
    title: '物流管理处',
    key: '0-0',
    children: [
      { title: '王小帅', key: '0-0-0-0' },
      { title: '刘晓霞', key: '0-0-0-1' },
      { title: '游小美', key: '0-0-0-2' }
    ]
  },
  {
    title: '信息中心',
    key: '0-1',
    children: [
      { title: '刘晓梅', key: '0-1-0-0' },
      { title: '陈小媚', key: '0-1-0-1' },
      { title: '刘小小', key: '0-1-0-2' }
    ]
  },
  {
    title: '烟叶管理处',
    key: '0-2',
    children: [
      { title: '吴芳菲', key: '0-2-0-0' },
      { title: '李丽晶', key: '0-2-0-1' },
      { title: '王亚亚', key: '0-2-0-2' }
    ]
  },
  {
    title: '安全管理处',
    key: '0-3',
    children: [
      { title: '陈思思', key: '0-3-0-0' },
      { title: '刘潇', key: '0-3-0-1' },
      { title: '王菲', key: '0-3-0-2' }
    ]
  },
  {
    title: '卷烟销售管理处',
    key: '0-4',
    children: [
      { title: '吴燕燕', key: '0-4-0-0' },
      { title: '陈思成', key: '0-4-0-1' },
      { title: '刘雨菲', key: '0-4-0-2' }
    ]
  }
]
export default {
  data() {
    return {
      meetingTheme: '周例会', //会议主题
      meetingName: '项目周例会', //会议名称
      responsibleName: '张三', //负责人姓名
      responsibleTelphone: '188600111111', //负责人电话
      dateFormat: 'YYYY年MM月DD日', //会议时间
      meetingAddress: '会议室203', //会议地点
      meetingBarget: 1000, //会议预算
      meetingJoinsMembers: [], //会议成员
      meetingComments: '第一期项目周例会', //备注

      //会议人员目录树
      treeDatas: [], //目录树信息汇总
      MembersAll: [], //所有待选参会人员汇总
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: []
    }
  },
  watch: {
    checkedKeys(val) {
      this.meetingJoinsMembers = this.MembersAll.filter(item => {
        return val.includes(item.key)
      })
    }
  },
  mounted() {
    console.log(this.meetingJoinsMembers.length)
    // let datas = Mock.mock({
    // 'members|6': [{
    //     'id|+1': 11100,
    //     'name|1': '@cname()',
    //     'imageSrc|1': '@image(64)'
    // }]
    // })
    // console.log(datas)

    //模拟参会人员列表数据
    // let departmentsLists = Mock.mock({
    //     'treeDatas|4': [{
    //         'title|1': ["运营A组", "运营B组", "研发A组",  "研发B组"],
    //         'key': '@guid()',
    //         'children|4': [{
    //           'title|1':'@cname()',
    //           'key|+1': '@guid()',
    //         }]
    //     }]
    // })
    // console.log(departmentsLists)
    // this.treeDatas = departmentsLists.treeDatas;

    this.treeDatas = treeData
    //汇总所有人员名单
    this.meetingJoinsMembers = this.treeDatas.forEach(item => {
      this.MembersAll = this.MembersAll.concat(item.children)
    })
  },
  methods: {
    handleChange(value) {
      this.meetingTheme = value
    },
    timeChange(date, dateString) {
      console.log(date, dateString)
    },
    menbersInfoChange() {},
    // handleClose(tag){
    //   var arr = this.checkedKeys;
    //   this.checkedKeys = [];
    //   arr.forEach(item=>{
    //     if(item != tag.key){
    //       this.checkedKeys.push(item);
    //     }
    //   })
    //   console.log( this.checkedKeys )
    // },
    //目录树选择变更
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck(checkedKeys) {
      console.log(checkedKeys)
      this.checkedKeys = checkedKeys
      console.log(this.checkedKeys)
    },
    onSelect(selectedKeys, info) {
      this.selectedKeys = selectedKeys
    },
    submitApply(event) {
      var apllyMeetingInfos = {}
    }
  }
}
</script>

<style>
ul li {
  list-style: none;
  margin-right: 10px;
}
button {
  background-color: #77acf1;
}
.clearfix {
  display: block;
  content: '';
  clear: both;
}
.fl {
  float: left;
}
.meetingApply {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.meetingInfo {
  flex: 3;
  font-size: 14px;
  font-weight: bold;
  border-collapse: separate;
  margin-right: 20px;
}
.nemberList {
  flex: 1;
  background-color: #f5f8fe;
  border-radius: 10px;
  height: 600px;
  overflow: auto;
  padding: 20px 0 0 20px;
}
.meetingInfo tr td {
  margin-right: 10px;
}
.meetingInfo tr:nth-of-type(1) td {
  width: 30%;
}
.meetingInfo tr td .bgc {
  padding: 8px 8px;
  background-color: #f5f8fe;
  border-radius: 20px;
  text-align: center;
}
.nemberList .departmentName {
  width: 200px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  padding-left: 10px;
  font-size: 14px;
  font-weight: bold;
}
.nemberList .departmentNumbers {
  padding-top: 5px;
  text-align: left;
}
</style>
