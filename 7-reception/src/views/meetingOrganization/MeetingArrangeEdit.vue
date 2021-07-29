<template>
  <!-- 会议安排 -->
  <a-card :bordered="false">
    <div>
      <a-table :data-source="dataSelect" :pagination="false" rowKey="id">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px" fixed="left"></a-table-column>
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议预算（元）" data-index="budget" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="参会人数" data-index="number" align="center"></a-table-column>
        <a-table-column title="负责人姓名" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column>
      </a-table>
    </div>
    <br />
    <div>
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <!-- 选择协议酒店 -->
      <div class="steps-content" slot="description" v-if="current == 0">
        <a-form-model
          ref="ruleFormHotel"
          :model="formHotel"
          :rules="rulesHotel"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" prop="dateStart">
            <a-date-picker
              v-model="formHotel.dateStart"
              placeholder="选择开始日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
            <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
            <a-date-picker
              v-model="formHotel.dateEnd"
              placeholder="选择结束日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
          </a-form-model-item>

          <a-form-model-item label="选择协议酒店" prop="hotel">
            <a-select v-model="formHotel.hotel" placeholder="请选择协议酒店" @change="selectHotel">
              <a-select-option value="福州富力威斯汀酒店">福州富力威斯汀酒店</a-select-option>
              <a-select-option value="福州品悦酒店">福州品悦酒店</a-select-option>
              <a-select-option value="福州世纪金源酒店">福州世纪金源酒店</a-select-option>
            </a-select>
          </a-form-model-item>

          <!-- 酒店详情 -->
          <div v-show="flagHotel">
            <a-row type="flex" align="middle">
              <a-col :span="1"></a-col>
              <a-col>
                <span>协议编号：{{hotelIDInfor}}</span>
              </a-col>
              <a-col :span="2"></a-col>
              <a-col>
                <span>星级：{{hotelLevelInfor}}</span>
              </a-col>
            </a-row>
            <br />
            <a-row type="flex" align="middle">
              <a-col :span="1"></a-col>
              <a-col>
                <span>位置：{{hotelAddressInfor}}</span>
              </a-col>
              <a-col :span="1"></a-col>
              <a-col>
                <span>价格范围（元）：{{hotelPriceInfor}}</span>
              </a-col>
            </a-row>
            <br />
            <a-row type="flex" align="middle">
              <a-col :span="1"></a-col>
              <a-col>
                <span>联系人：{{hotelNameInfor}}</span>
              </a-col>
              <a-col :span="1"></a-col>
              <a-col>
                <span>联系电话：{{hotelTelInfor}}</span>
              </a-col>
            </a-row>
            <br />
            <a-row type="flex" align="middle">
              <a-col :span="1"></a-col>
              <a-col>
                <span>通知消息：</span>
              </a-col>
              <a-col :span="7">
                <a-input type="textarea" v-model="defaultInfor" :style="{height:'80px'}"/>
              </a-col>
            </a-row>
          </div>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitHotel">创建</a-button>
            <a-button style="margin-left: 10px;" @click="resetFormHotel">重置</a-button>
          </a-form-model-item>
        </a-form-model>
        <!-- 协议酒店表格 -->
        <a-table
          :data-source="dataHotel"
          :scroll="{ y: 450 }"
          :pagination="false"
          rowKey="hotelIndex"
        >
          <a-table-column title="序号" data-index="hotelIndex" align="center"></a-table-column>
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="协议酒店" data-index="hotel" align="center"></a-table-column>
          <a-table-column title="操作" align="center">
            <template slot-scope="record">
              <a href="javascript:;" @click="hotelModify(record)" :style="{  color: 'blue' }">修改</a>
              <a-divider type="vertical" />
              <a-popconfirm title="确定删除吗?" @confirm="() => hotelDelete(record.hotelIndex)">
                <a href="javascript:;" :style="{  color: 'red' }">删除</a>
              </a-popconfirm>
            </template>
          </a-table-column>
        </a-table>
      </div>
      <!-- 选择就餐地点 -->
      <div class="steps-content" slot="description" v-if="current == 1">
        <a-form-model
          ref="ruleFormEat"
          :model="formEat"
          :rules="rulesEat"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" prop="dateStart">
            <a-date-picker
              v-model="formEat.dateStart"
              placeholder="选择开始日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
            <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
            <a-date-picker
              v-model="formEat.dateEnd"
              placeholder="选择结束日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
          </a-form-model-item>
          <a-form-model-item label="餐别" prop="type">
            <a-select v-model="formEat.type" placeholder="请选择餐别">
              <a-select-option value="早餐">早餐</a-select-option>
              <a-select-option value="午餐">午餐</a-select-option>
              <a-select-option value="晚餐">晚餐</a-select-option>
              <a-select-option value="三餐">三餐</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="就餐地点" prop="way">
            <a-select v-model="formEat.way" placeholder="选择就餐方式">
              <a-select-option :value="eatHotel">{{eatHotel}}</a-select-option>
              <a-select-option value="食堂">食堂</a-select-option>
            </a-select>
          </a-form-model-item>

          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitEat">创建</a-button>
            <a-button style="margin-left: 10px;" @click="resetFormEat">重置</a-button>
          </a-form-model-item>
        </a-form-model>
        <!-- 就餐地点表格 -->
        <a-table :data-source="dataEat" :pagination="false" rowKey="eatIndex">
          <a-table-column title="序号" data-index="eatIndex" align="center"></a-table-column>
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="餐别" data-index="type" align="center"></a-table-column>
          <a-table-column title="就餐地点" data-index="way" align="center"></a-table-column>
          <a-table-column title="操作" align="center">
            <template slot-scope="record">
              <a href="javascript:;" @click="eatModify(record)" :style="{  color: 'blue' }">修改</a>
              <a-divider type="vertical" />
              <a-popconfirm title="确定删除吗?" @confirm="() => eatDelete(record.eatIndex)">
                <a href="javascript:;" :style="{  color: 'red' }">删除</a>
              </a-popconfirm>
            </template>
          </a-table-column>
        </a-table>
      </div>
      <!-- 选择会议室地点 -->
      <div class="steps-content" slot="description" v-if="current == 2">
        <a-form-model
          ref="ruleFormRoom"
          :model="formRoom"
          :rules="rulesRoom"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" prop="dateStart">
            <a-date-picker
              v-model="formRoom.dateStart"
              placeholder="选择开始日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
            <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
            <a-date-picker
              v-model="formRoom.dateEnd"
              placeholder="选择结束日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
          </a-form-model-item>
          <a-form-model-item label="选择时段" prop="range">
            <a-select v-model="formRoom.range" placeholder="请选择时段">
              <a-select-option value="上午">上午</a-select-option>
              <a-select-option value="下午">下午</a-select-option>
              <a-select-option value="晚上">晚上</a-select-option>
              <a-select-option value="全天">全天</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="选择会议地点" prop="room">
            <a-cascader
              :options="optionsRoom"
              placeholder="请选择会议室"
              v-model="formRoom.room"
              @change="onChangeRoom"
              style="width: 460px;textAlign:left"
              :display-render="displayRender"
            />
          </a-form-model-item>
          <!-- 会议室详情信息 -->
          <div v-show="flagRoom">
            <a-row type="flex" align="middle">
              <a-col :span="2"></a-col>
              <a-col>
                <span>容纳人数：{{numberRoomInfor}}</span>
              </a-col>
            </a-row>
            <br />
            <a-row type="flex" align="middle">
              <a-col :span="2"></a-col>
              <a-col>
                <span>基本条件：{{conditionRoomInfor}}</span>
              </a-col>
            </a-row>
          </div>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitRoom">创建</a-button>
            <a-button style="margin-left: 10px;" @click="resetFormRoom">重置</a-button>
          </a-form-model-item>
        </a-form-model>
<!-- 会议室安排表格 -->
        <a-table
          :data-source="dataRoom"
          :scroll="{ y: 450 }"
          :pagination="false"
          rowKey="roomIndex"
        >
          <a-table-column title="序号" data-index="roomIndex" align="center"></a-table-column>
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="时段" data-index="range" align="center"></a-table-column>
          <a-table-column title="会议地点" data-index="room" align="center"></a-table-column>
          <a-table-column title="操作" align="center">
            <template slot-scope="record">
              <a href="javascript:;" @click="roomModify(record)" :style="{  color: 'blue' }">修改</a>
              <a-divider type="vertical" />
              <a-popconfirm title="确定删除吗?" @confirm="() => roomDelete(record.roomIndex)">
                <a href="javascript:;" :style="{  color: 'red' }">删除</a>
              </a-popconfirm>
            </template>
          </a-table-column>
        </a-table>
      </div>
      <div class="steps-content" slot="description" v-if="current == 3">
        <a-form-model :label-col="labelCol" :wrapper-col=" { span: 4 }">
          <a-form-model-item label="会议开始前（天）">
            <a-input v-model="numDate"></a-input>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 3, offset: 4 }">
            <a-button type="primary" @click="onSubmitB">确定设置</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
        <a-button v-if="current == steps.length - 1" type="primary" @click="complete">会议安排提交</a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">上一步</a-button>
      </div>
    </div>
    <!-- 修改协议酒店 -->
    <a-modal v-model="visibleHotel" title="修改协议酒店" footer>
      <a-form-model
        ref="ruleFormHotel"
        :model="ModifyHotel"
        :rules="rulesHotel"
        :label-col="labelColModify"
        :wrapper-col="wrapperColModify"
      >
        <a-form-model-item label="日期" prop="dateStart">
          <a-date-picker
            v-model="ModifyHotel.dateStart"
            placeholder="选择开始日期"
            style="width: 45%;"
            :format="dateFormat"
          ></a-date-picker>
          <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
          <a-date-picker
            v-model="ModifyHotel.dateEnd"
            placeholder="选择结束日期"
            style="width: 45%;"
            :format="dateFormat"
          ></a-date-picker>
        </a-form-model-item>
        <a-form-model-item label="选择协议酒店" prop="hotel">
          <a-select v-model="ModifyHotel.hotel" placeholder="请选择协议酒店">
            <a-select-option value="福州富力威斯汀酒店">福州富力威斯汀酒店</a-select-option>
            <a-select-option value="福州品悦酒店">福州品悦酒店</a-select-option>
            <a-select-option value="福州世纪金源酒店">福州世纪金源酒店</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 17, offset:8 }">
          <a-button type="primary" @click="SubmitModifyHotel()">修改</a-button>
          <a-button style="margin-left: 10px;" @click="CancelModifyHotel()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <!-- 修改就餐地点 -->
    <a-modal v-model="visibleEat" title="修改就餐地点" footer>
      <a-form-model
        ref="ruleFormEat"
        :model="ModifyEat"
        :rules="rulesEat"
        :label-col="labelColModify"
        :wrapper-col="wrapperColModify"
      >
        <a-form-model-item label="日期" prop="dateStart">
          <a-date-picker
            v-model="ModifyEat.dateStart"
            placeholder="选择开始日期"
            style="width: 45%;"
            :format="dateFormat"
          ></a-date-picker>
          <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
          <a-date-picker
            v-model="ModifyEat.dateEnd"
            placeholder="选择结束日期"
            style="width: 45%;"
            :format="dateFormat"
          ></a-date-picker>
        </a-form-model-item>
        <a-form-model-item label="餐别" prop="type">
          <a-select v-model="ModifyEat.type" placeholder="请选择餐别">
            <a-select-option value="早餐">早餐</a-select-option>
            <a-select-option value="午餐">午餐</a-select-option>
            <a-select-option value="晚餐">晚餐</a-select-option>
            <a-select-option value="三餐">三餐</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="就餐地点" prop="way">
          <a-select v-model="ModifyEat.way" placeholder="选择就餐方式">
            <a-select-option :value="eatHotel">{{eatHotel}}</a-select-option>
            <a-select-option value="食堂">食堂</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 17, offset:8 }">
          <a-button type="primary" @click="SubmitModifyEat()">修改</a-button>
          <a-button style="margin-left: 10px;" @click="CancelModifyEat()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <!-- 修改会议地点 -->
    <a-modal v-model="visibleRoom" title="修改会议地点" footer width="600px">
      <a-form-model
        ref="ruleFormRoom"
        :model="ModifyRoom"
        :rules="rulesRoom"
        :label-col="labelColModifyRoom"
        :wrapper-col="wrapperColModifyRoom"
      >
        <a-form-model-item label="日期" prop="dateStart">
          <a-date-picker
            v-model="ModifyRoom.dateStart"
            placeholder="选择开始日期"
            style="width: 45%;"
            :format="dateFormat"
          ></a-date-picker>
          <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
          <a-date-picker
            v-model="ModifyRoom.dateEnd"
            placeholder="选择结束日期"
            style="width: 45%;"
            :format="dateFormat"
          ></a-date-picker>
        </a-form-model-item>
        <a-form-model-item label="选择时段" prop="range">
          <a-select v-model="ModifyRoom.range" placeholder="请选择时段">
            <a-select-option value="上午">上午</a-select-option>
            <a-select-option value="下午">下午</a-select-option>
            <a-select-option value="晚上">晚上</a-select-option>
            <a-select-option value="全天">全天</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="选择会议地点" prop="room">
          <a-cascader
            :options="optionsRoom"
            placeholder="请选择会议室"
            v-model="ModifyRoom.room"
            @change="onChangeRoom"
            style="width: 420px"
            :display-render="displayRender"
          />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 17, offset:8 }">
          <a-button type="primary" @click="SubmitModifyRoom()">修改</a-button>
          <a-button style="margin-left: 10px;" @click="CancelModifyRoom()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </a-card>
</template>
<script>
import moment from 'moment'
const dataHotelIn = [
  {
    id: 'N1201',
    dutyName: '李霞',
    dutyTel: '13759655332',
    hotel: '福州富力威斯汀酒店',
    level: '五',
    address: '福州江滨中大道366号',
    price: '135~215',
    remark: '折扣力度3折',
    innerData: [
      {
        key: 21,
        roomType: '普通单人间',
        price: 135
      },
      {
        key: 21,
        roomType: '普通双人间',
        price: 185
      },
      {
        key: 22,
        roomType: '豪华单人间',
        price: 160
      },

      {
        key: 22,
        roomType: '豪华双人间',
        price: 215
      }
    ]
  },
  {
    id: 'N1202',
    dutyName: '尤晓梅',
    dutyTel: '13053955537',
    hotel: '福州品悦酒店',
    address: '福州东浦路59号',
    level: '四',
    remark: '折扣力度4折',
    price: '120~190',
    innerData: [
      {
        key: 21,
        roomType: '普通单人间',
        price: 120
      },
      {
        key: 21,
        roomType: '普通双人间',
        price: 165
      },
      {
        key: 22,
        roomType: '豪华单人间',
        price: 140
      },

      {
        key: 22,
        roomType: '豪华双人间',
        price: 190
      }
    ]
  },
  {
    id: 'N1203',
    dutyName: '黄丽娟',
    dutyTel: '13659655381',
    hotel: '福州世纪金源酒店',
    address: '福州温泉公园路59号',
    price: '120~180',
    level: '四',
    remark: '折扣力度3折',
    innerData: [
      {
        key: 21,
        roomType: '普通单人间',
        price: 120
      },
      {
        key: 21,
        roomType: '普通双人间',
        price: 150
      },
      {
        key: 22,
        roomType: '豪华单人间',
        price: 140
      },

      {
        key: 22,
        roomType: '豪华双人间',
        price: 180
      }
    ]
  }
]
let optionsRoom = [
  {
    value: '中国烟草总公司福建省公司机关',
    label: '中国烟草总公司福建省公司机关',
    children: [
      {
        value: 'A区域',
        label: 'A区域',
        children: [
          {
            value: '1号楼',
            label: '1号楼',
            children: [
              {
                value: '会议室203',
                label: '会议室203'
              },
              {
                value: '会议室204',
                label: '会议室204'
              }
            ]
          },
          {
            value: '2号楼',
            label: '2号楼',
            children: [
              {
                value: '会议室204',
                label: '会议室204'
              },
              {
                value: '会议室205',
                label: '会议室205'
              }
            ]
          }
        ]
      },
      {
        value: 'B区域',
        label: 'B区域',
        children: [
          {
            value: '1号楼',
            label: '1号楼',
            children: [
              {
                value: '会议室204',
                label: '会议室204'
              },
              {
                value: '会议室205',
                label: '会议室205'
              }
            ]
          }
        ]
      }
    ]
  }
]
const dataRoomIn = [
  {
    index: 1,
    area: '中国烟草总公司福建省公司机关.A区域.1号楼',
    number: '5-6',
    dutyName: '李霞',
    dutyTel: '13759655332',
    room: '会议室203',
    condition: '茶水，投影仪，白板，摄像机'
  },
  {
    index: 1,
    area: '中国烟草总公司福建省公司机关.A区域.1号楼',
    number: '5-6',
    dutyName: '李霞',
    dutyTel: '13759655332',
    room: '会议室204',
    condition: '茶水，投影仪，白板，摄像机'
  },
  {
    index: 2,
    area: '中国烟草总公司福建省公司机关.A区域.2号楼',
    number: '6-8',
    dutyName: '王莉莉',
    dutyTel: '13759655348',
    room: '会议室204',
    condition: '茶水，空调，投影仪，白板'
  },
  {
    index: 2,
    area: '中国烟草总公司福建省公司机关.A区域.2号楼',
    number: '6-8',
    dutyName: '王莉莉',
    dutyTel: '13759655348',
    room: '会议室205',
    condition: '茶水，空调，投影仪，白板'
  },
  {
    index: 3,
    area: '中国烟草总公司福建省公司机关.B区域.1号楼',
    number: '3-4',
    dutyName: '尤晓梅',
    dutyTel: '13053955537',
    room: '会议室205',
    condition: '茶水，投影仪，电脑'
  },
  {
    index: 4,
    area: '中国烟草总公司福建省公司机关.B区域.1号楼',
    number: '4-6',
    dutyName: '黄丽娟',
    dutyTel: '13659655381',
    room: '会议室205',
    condition: '茶水，空调，投影仪，电脑，白板'
  }
]
export default {
  data() {
    return {
      flagHotel: false,
      dataSelect: [
        {
          id: this.$route.query.record.id,
          theme: this.$route.query.record.theme,
          name: this.$route.query.record.name,
          budget: this.$route.query.record.budget,
          dateTime: this.$route.query.record.dateTime,
          number: this.$route.query.record.number,
          dutyName: this.$route.query.record.dutyName,
          dutyTel: this.$route.query.record.dutyTel
        }
      ],
      hotelInfor: undefined,
      hotelIDInfor: undefined,
      hotelLevelInfor: undefined,
      hotelAddressInfor: undefined,
      hotelPriceInfor: undefined,
      hotelNameInfor: undefined,
      hotelTelInfor: undefined,
      defaultInfor: undefined,
      flagRoom: false,
      roomInfor: undefined,
      numberRoomInfor: undefined,
      conditionRoomInfor: undefined,
      eatHotel: '',
      numDate: '1',
      current: 0,
      steps: [
        {
          title: '协议酒店',
          content: "First-content"
        },
        {
          title: '就餐地点',
          content: 'Second-content'
        },
        {
          title: '会议地点',
          content: 'Last-content'
        },
        {
          title: '通知设置',
          content: 'Last-content'
        }
      ],
      dateFormat: 'YYYY-MM-DD',
      labelCol: { span: 2 },
      wrapperCol: { span: 7 },
      formHotel: {
        index: '',
        hotel: undefined,
        dateStart: undefined,
        dateEnd: undefined
      },
      dataHotel: [],
      hotelIndex: 1,
      rulesHotel: {
        hotel: [
          {
            required: true,
            message: '请选择协议酒店',
            trigger: 'change'
          }
        ],
        dateStart: [{ required: true, message: '请选择日期', trigger: 'change' }]
      },
      visibleHotel: false,
      labelColModify: { span: 6 },
      wrapperColModify: { span: 18 },
      ModifyHotel: {
        hotel: undefined,
        dateStart: undefined,
        dateEnd: undefined
      },
      formEat: {
        dateStart: undefined,
        dateEnd: undefined,
        type: undefined,
        way: undefined
      },
      dataEat: [],
      eatIndex: 1,
      rulesEat: {
        type: [
          {
            required: true,
            message: '请选择餐别',
            trigger: 'change'
          }
        ],
        way: [
          {
            required: true,
            message: '请选择就餐方式',
            trigger: 'change'
          }
        ],
        dateStart: [{ required: true, message: '请选择日期', trigger: 'change' }]
      },
      visibleEat: false,
      ModifyEat: {
        dateStart: undefined,
        dateEnd: undefined,
        type: undefined,
        way: undefined
      },
      formRoom: {
        room: undefined,
        dateStart: undefined,
        dateEnd: undefined,
        range: "全天"
      },
      roomS: '',
      optionsRoom,
      dataRoom: [],
      roomIndex: 1,
      rulesRoom: {
        room: [
          {
            required: true,
            message: '请选择会议地点',
            trigger: 'change'
          }
        ],
        dateStart: [{ required: true, message: '请选择日期', trigger: 'change' }],
        range: [{ required: true, message: '请选择时段', trigger: 'change' }]
      },
      visibleRoom: false,
      ModifyRoom: {
        room: undefined,
        dateStart: undefined,
        dateEnd: undefined,
        range: undefined
      },
      labelColModifyRoom: { span: 6 },
      wrapperColModifyRoom: { span: 18 }
    }
  },
  created() {
    console.log(this.$route.query.record)
    let dateAr = this.$route.query.record.dateTime.split('~')
    this.formHotel.dateStart = this.moment(dateAr[0], 'YYYY-MM-DD')
    this.formHotel.dateEnd = this.moment(dateAr[1], 'YYYY-MM-DD')
    this.formEat.dateStart = this.moment(dateAr[0], 'YYYY-MM-DD')
    this.formEat.dateEnd = this.moment(dateAr[1], 'YYYY-MM-DD')
    this.formRoom.dateStart = this.moment(dateAr[0], 'YYYY-MM-DD')
    this.formRoom.dateEnd = this.moment(dateAr[1], 'YYYY-MM-DD')
  },
  methods: {
    moment,
    next() {
      this.current++
    },
    prev() {
      this.current--
    },
    displayRender({ labels }) {
      return labels.join('.')
    },
    onChangeRoom(value) {
      console.log(value)
      this.roomS = value[0] + '.' + value[1] + '.' + value[2] + '.' + value[3]
      let area = value[0] + '.' + value[1] + '.' + value[2]
      this.flagRoom = true
      this.roomInfor = this.roomS
      dataRoomIn.filter(item => {
        if (area == item.area && value[3] == item.room) {
          this.numberRoomInfor = item.number
          this.conditionRoomInfor = item.condition
        }
      })
      // console.log(this.formRoom.room)
    },
    onSubmitHotel() {
      console.log(this.formHotel.dateStart)
      this.$refs.ruleFormHotel.validate(valid => {
        if (valid) {
          if (!this.formHotel.dateEnd) {
            this.$message.error('请输入结束日期')
          }
          let startDate = this.formHotel.dateStart.format('YYYY年MM月DD日')
          let endDate = this.formHotel.dateEnd.format('YYYY年MM月DD日')
          let dateTime = startDate + '~' + endDate
          console.log(dateTime)
          let a = {
            hotelIndex: this.hotelIndex++,
            dateTime: dateTime,
            hotel: this.formHotel.hotel
          }
          this.dataHotel.push(a)
          // alert("添加成功!");
          this.$message.success('添加成功!')
          this.eatHotel = this.formHotel.hotel
          this.formHotel.hotel = undefined
            this.flagHotel=false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormHotel() {
      this.$refs.ruleFormHotel.resetFields()
      this.formHotel.hotel = undefined
      this.flagHotel=false
    },
    selectHotel(value) {
      console.log(value)
      this.flagHotel = true
      this.hotelInfor = value
      dataHotelIn.filter(item => {
        if (item.hotel == value) {
          this.hotelIDInfor = item.id
          this.hotelLevelInfor = item.level
          this.hotelAddressInfor = item.address
          this.hotelPriceInfor = item.price
          this.hotelNameInfor = item.dutyName
          this.hotelTelInfor = item.dutyTel
          this.defaultInfor =
            '本公司人员将于' +
            this.formHotel.dateStart.format('YYYY年MM月DD日') +
            '~' +
            this.formHotel.dateEnd.format('YYYY年MM月DD日') +
            '入住' +
            value +
            '，协议编号' +
            this.hotelIDInfor +
            '，入住人数' +
            this.$route.query.record.number +
            '，需双人间2间，请安排！'
        }
      })
    },
    onSubmitEat() {
      this.$refs.ruleFormEat.validate(valid => {
        if (valid) {
          if (!this.formEat.dateEnd) {
            // alert("请输入结束日期");
            this.$message.error('请输入结束日期')
          }
          let startDate = this.formEat.dateStart.format('YYYY年MM月DD日')
          let endDate = this.formEat.dateEnd.format('YYYY年MM月DD日')
          let dateTime = startDate + '~' + endDate
          console.log(dateTime)
          let a = {
            eatIndex: this.eatIndex++,
            dateTime: dateTime,
            type: this.formEat.type,
            way: this.formEat.way
          }
          this.dataEat.push(a)
          this.$message.success('添加成功!')
          this.formEat.type = undefined
          this.formEat.way = undefined
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormEat() {
      this.$refs.ruleFormEat.resetFields()
      this.formEat.type = undefined
      this.formEat.way = undefined
    },
    onSubmitRoom() {
      this.$refs.ruleFormRoom.validate(valid => {
        if (valid) {
          if (!this.formRoom.dateEnd) {
            this.$message.error('请输入结束日期')
          }
          let startDate = this.formRoom.dateStart.format('YYYY年MM月DD日')
          let endDate = this.formRoom.dateEnd.format('YYYY年MM月DD日')
          let dateTime = startDate + '~' + endDate
          console.log(dateTime)
          let a = {
            roomIndex: this.roomIndex++,
            dateTime: dateTime,
            // room: this.roomS,'
            room: this.formRoom.room,
            range: this.formRoom.range
          }
          this.dataRoom.push(a)
          this.$message.success('添加成功!')
           this.flagRoom=false
          this.formRoom.room = undefined
          this.formRoom.range = undefined
          
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormRoom() {
      this.$refs.ruleFormRoom.resetFields()
      this.formRoom.room = undefined
      this.formRoom.range = undefined
       this.flagRoom=false
    },
    complete() {
      this.$message.success('提交成功!')
      //this.visibleNotice = true
      this.$confirm({
        title: '是否立刻预通知',
        content: '',
        okText: '是',
        cancelText: '否'
      })
    },
    onSubmitB() {},
    // 修改
    hotelModify(record) {
      this.visibleHotel = true
      console.log(1)
      console.log(record)
      this.ModifyHotel.hotel = record.hotel
      let dateA = record.dateTime.split('~')
      this.ModifyHotel.dateStart = this.moment(dateA[0], 'YYYY-MM-DD')
      this.ModifyHotel.dateEnd = this.moment(dateA[1], 'YYYY-MM-DD')
    },
    SubmitModifyHotel() {
      this.visibleHotel = false
    },
    CancelModifyHotel() {
      this.visibleHotel = false
    },
    hotelDelete(hotelIndex) {
      const dataHotel = [...this.dataHotel]
      this.dataHotel = dataHotel.filter(item => item.hotelIndex !== hotelIndex)
    },
    eatModify(record) {
      this.visibleEat = true
      this.ModifyEat.type = record.type
      this.ModifyEat.way = record.way
      let dateA = record.dateTime.split('~')
      this.ModifyEat.dateStart = this.moment(dateA[0], 'YYYY-MM-DD')
      this.ModifyEat.dateEnd = this.moment(dateA[1], 'YYYY-MM-DD')
    },
    SubmitModifyEat() {
      this.visibleEat = false
    },
    CancelModifyEat() {
      this.visibleEat = false
    },
    eatDelete(eatIndex) {
      const dataEat = [...this.dataEat]
      this.dataEat = dataEat.filter(item => item.eatIndex !== eatIndex)
    },
    roomDelete(roomIndex) {
      const dataRoom = [...this.dataRoom]
      this.dataRoom = dataRoom.filter(item => item.roomIndex !== roomIndex)
    },
    roomModify(record) {
      this.visibleRoom = true
      console.log(111)
      console.log(record)
      this.ModifyRoom.range = record.range
      let dateA = record.dateTime.split('~')
      this.ModifyRoom.dateStart = this.moment(dateA[0], 'YYYY-MM-DD')
      this.ModifyRoom.dateEnd = this.moment(dateA[1], 'YYYY-MM-DD')
      this.ModifyRoom.room = record.room
    },
    SubmitModifyRoom() {
      this.visibleRoom = false
    },
    CancelModifyRoom() {
      this.visibleRoom = false
    }
  }
}
</script>
<style scoped>
.steps-content {
  /* margin-top: 16px; */
  /* border: 1px dashed #e9e9e9; */
  border-radius: 6px;
  /* background-color: #fafafa; */
  min-height: 200px;
  text-align: center;
  padding-top: 20px;
}

#description {
  width: 800px;
}
.steps-action {
  margin-top: 24px;
}
#title1 {
  width: 1000px;
}
</style>
