<template>

<!--  <div>-->
<!--    <a-card :bordered="false">-->
<!--      &lt;!&ndash; 查询区域 &ndash;&gt;-->
<!--      <div class="table-page-search-wrapper">-->
<!--        <a-form layout="inline" :form="form1">-->
<!--          <a-row :gutter="24">-->
<!--            <a-col :xl="6" :lg="8" :md="9" :sm="24">-->
<!--              <a-form-item label="食料类别">-->
<!--                <a-input placeholder="请输入" v-decorator="['purchaseOrderNumber']"></a-input>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">-->
<!--              <a-col :md="6" :sm="24">-->
<!--                <a-button icon="search" @click='handleQueryOk'>查询</a-button>-->
<!--                <a-button icon="reload" style="margin-left: 8px" @click='handleReset'>重置</a-button>-->
<!--            </a-col>-->
<!--          </span>-->

<!--          </a-row>-->
<!--        </a-form>-->
<!--      </div>-->
<!--      &lt;!&ndash; 查询区域-END &ndash;&gt;-->
<!--      &lt;!&ndash; 操作按钮区域 &ndash;&gt;-->
<!--      <div class="table-operator">-->
<!--        <a-button type="link" icon="plus" @click='add'>新增</a-button>-->
<!--      </div>-->
<!--      &lt;!&ndash; table区域-begin &ndash;&gt;-->
<!--      <div>-->
<!--        <a-table-->
<!--          ref="table"-->
<!--          size="middle"-->
<!--          bordered-->
<!--          rowKey="id"-->
<!--          :columns="columns"-->
<!--          :dataSource="dataSource"-->
<!--          :pagination="{total:this.dataSource.length, showTotal:(total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`}"-->
<!--        >-->
<!--          <span slot="action" slot-scope="text, record">-->
<!--            <a @click='edit(record)'>编辑</a>-->
<!--            <a><a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style='margin-left: 10%;'>删除</a-popconfirm></a>-->
<!--          </span>-->
<!--        </a-table>-->
<!--      </div>-->
<!--    </a-card>-->
<!--    <a-modal-->
<!--      :title="title"-->
<!--      :width="800"-->
<!--      :visible="visible"-->
<!--      :confirmLoading="confirmLoading"-->
<!--      @ok="handleOk"-->
<!--      @cancel="handleCancel"-->
<!--      cancelText="关闭"-->
<!--      wrapClassName="ant-modal-cust-warp"-->
<!--      style="top:5%;height: 60%;overflow-y: hidden">-->

<!--      <a-spin :spinning="confirmLoading">-->
<!--        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">-->
<!--          <a-form-model-item label="食料类别" required prop="type">-->
<!--            <a-input v-model="model.type" placeholder="请输入食料类别名称"/>-->
<!--          </a-form-model-item>-->
<!--          <a-form-model-item label="备注"  prop="ps">-->
<!--            <a-textarea rows="5" v-model="model.ps" placeholder="请输入备注"/>-->
<!--          </a-form-model-item>-->
<!--        </a-form-model>-->
<!--      </a-spin>-->
<!--    </a-modal>-->
<!--  </div>-->

  <div>
    <a-card :bordered="false">
      <div>
        <a-row>
<!--          <a-col :span='4'>-->
<!--            <a-input-search style="margin-bottom: 8px; margin-top: 8px; width: 70%" placeholder="Search" @change="onChange" />-->
<!--            <a-tree-->

<!--              :show-line="true"-->
<!--              :expanded-keys="expandedKeys"-->
<!--              :auto-expand-parent="autoExpandParent"-->
<!--              :tree-data="gData"-->
<!--              @expand="onExpand"-->
<!--              @select="onSelect"-->
<!--            >-->
<!--              <template slot="title" slot-scope="{ title }">-->
<!--                <span v-if="title.indexOf(searchValue) > -1">-->
<!--                  {{ title.substr(0, title.indexOf(searchValue)) }}-->
<!--                  <span style="color: #f50">{{ searchValue }}</span>-->
<!--                  {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}-->
<!--                </span>-->
<!--                <span v-else>{{ title }}</span>-->
<!--              </template>-->
<!--            </a-tree>-->
<!--          </a-col>-->
          <a-col :span='24'>
            <a-table
              :dataSource="dataSource1"
              :columns="columns1"
              size="middle"
              :pagination="false"
              :expandedRowKeys="expandedRowKeys"
              @expandedRowsChange="handleExpandedRowsChange"
            >
<!--              <div slot='filterDropdown' slot-scope='{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }' style='padding: 8px'>-->
<!--                <a-input-->
<!--                  v-ant-ref='c => (searchInput = c)'-->
<!--                  :placeholder='`输入查询名称`'-->
<!--                  :value='selectedKeys[0]'-->
<!--                  style='width: 188px; margin-bottom: 8px; display: block;'-->
<!--                  @change='e => setSelectedKeys(e.target.value ? [e.target.value] : [])'-->
<!--                  @pressEnter='() => handleSearch1(selectedKeys, confirm, column.dataIndex)'-->
<!--                />-->
<!--                <a-button-->
<!--                  type='primary'-->
<!--                  icon='search'-->
<!--                  size='small'-->
<!--                  style='width: 90px; margin-right: 8px'-->
<!--                  @click='() => handleSearch1(selectedKeys, confirm, column.dataIndex)'-->
<!--                >-->
<!--                  确定-->
<!--                </a-button>-->
<!--                <a-button size='small' style='width: 90px' @click='() => handleReset1(clearFilters)'>-->
<!--                  重置-->
<!--                </a-button>-->
<!--              </div>-->
<!--              <a-icon-->
<!--                slot='filterIcon'-->
<!--                slot-scope='filtered'-->
<!--                type='search'-->
<!--                :style="{ color: filtered ? '#108ee9' : undefined }"-->
<!--              />-->
<!--              <template slot='customRender' slot-scope='text, record, index, column'>-->
<!--                <span v-if='searchText && searchedColumn === column.dataIndex'>-->
<!--                  <template v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">-->
<!--                    <mark v-if='fragment === searchText' :key='i' class='highlight'>{{ fragment }}</mark>-->
<!--                    <template v-else>{{ fragment }}</template>-->
<!--                  </template>-->
<!--                </span>-->
<!--                <template v-else>-->
<!--                  {{ text }}-->
<!--                </template>-->
<!--              </template>-->

              <span slot="action" slot-scope="text, record">
                <a v-if='record.children'  @click='add()'>添加下级</a>
                <a v-if='!record.children||!(record.children.length>0&&record.children[0].children)' style='margin-left: 5%' @click='edit(record)' >编辑</a>
                <a v-if='!record.children||!(record.children.length>0&&record.children[0].children)' style='margin-left: 5%' @click="deleteRecord(record)">删除</a>
               </span>
            </a-table>
          </a-col>
        </a-row>
      </div>
    </a-card>

    <a-modal
      :title="'操作'"
      :width="800"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="关闭"
      wrapClassName="ant-modal-cust-warp"
      style="top:5%;height: 40%;overflow-y: hidden">

      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">
          <a-form-model-item label="名称" required prop="name">
            <a-input v-model="model.name" placeholder="请输入名称"/>
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>
  </div>



</template>

<script>

import moment from 'moment';
const options= [
  {
    value: '蔬菜类',
    label: '蔬菜类',
    children: [
      {
        value: '根茎类',//大小均匀，根茎完整，无畸形，无折断，无腐烂，干净清洁，无药物残留。
        label: '根茎类',
        children: [
          {
            value: '萝卜',
            label: '萝卜',
          },
          {
            value: '胡萝卜',
            label: '胡萝卜',
          },
          {
            value: '水萝卜',
            label: '水萝卜',
          },
          {
            value: '大葱',
            label: '大葱',
          },
          {
            value: '圆葱',
            label: '圆葱',
          },
          {
            value: '莴苣',
            label: '莴苣',
          },
          {
            value: '大蒜',
            label: '大蒜',
          },
          {
            value: '大姜',
            label: '大姜',
          },
          {
            value: '莲藕',
            label: '莲藕',
          },
          {
            value: '山药',
            label: '山药',
          },
          {
            value: '芋头',
            label: '芋头',
          },
          {
            value: '土豆',
            label: '土豆',
          },
          {
            value: '地瓜',
            label: '地瓜',
          },
        ],
      },
      {
        value: '花叶类',//鲜嫩，无黄叶，无烂叶，叶茎完整，花球坚实，无折断，干净清洁，无药物残留。
        label: '花叶类',
        children: [
          {
            value: '白菜',
            label: '白菜',
          },
          {
            value: '大头菜',
            label: '大头菜',
          },
          {
            value: '菠菜',
            label: '菠菜',
          },
          {
            value: '油菜',
            label: '油菜',
          },
          {
            value: '苔菜',
            label: '苔菜',
          },
          {
            value: '芹菜',
            label: '芹菜',
          },
          {
            value: '香菜',
            label: '香菜',
          },
          {
            value: '韭菜',
            label: '韭菜',
          },
          {
            value: '蒜苗',
            label: '蒜苗',
          },
          {
            value: '菜花',
            label: '菜花',
          },
          {
            value: '西兰花',
            label: '西兰花',
          },
        ],
      },
      {
        value: '果菜类',//菜品新鲜、果肉坚实、无折断、无腐烂、无异味、干净清洁，无药物残留。
        label: '果菜类',
        children: [
          {
            value: '茄子',
            label: '茄子',
          },
          {
            value: '菜椒',
            label: '菜椒',
          },
          {
            value: '辣椒',
            label: '辣椒',
          },
          {
            value: '西红柿',
            label: '西红柿',
          },
          {
            value: '黄瓜',
            label: '黄瓜',
          },
          {
            value: '茭瓜',
            label: '茭瓜',
          },
          {
            value: '南瓜',
            label: '南瓜',
          },
          {
            value: '冬瓜',
            label: '冬瓜',
          },
          {
            value: '丝瓜',
            label: '丝瓜',
          },
          {
            value: '扁豆',
            label: '扁豆',
          },
          {
            value: '豆角',
            label: '豆角',
          },
          {
            value: '毛豆',
            label: '毛豆',
          },
          {
            value: '豌豆',
            label: '豌豆',
          },
        ],
      },
      {
        value: '食用菌类',//色泽、气味正常、无发霉、朵片完整，无药物残留。
        label: '食用菌类',
        children: [
          {
            value: '蘑菇',
            label: '蘑菇',
          },
          {
            value: '香菇',
            label: '香菇',
          },
          {
            value: '杏鲍菇',
            label: '杏鲍菇',
          },
          {
            value: '金针菇',
            label: '金针菇',
          },
          {
            value: '黑木耳',
            label: '黑木耳',
          },
          {
            value: '银耳',
            label: '银耳',
          },
        ],
      },
    ],
  },
  {
    value: '肉食类',
    label: '肉食类',
    children: [
      {
        value: '猪肉类',//肉质有弹性、新鲜无异味、无淤血、无注水、无寄生虫，有《动物检疫合格证明》。
        label: '猪肉类',
        children: [
          {
            value: '前肘肉',
            label: '前肘肉',
          },
          {
            value: '后肘肉',
            label: '后肘肉',
          },
          {
            value: '五花肉',
            label: '五花肉',
          },
          {
            value: '肉馅',
            label: '肉馅',
          },
          {
            value: '猪头',
            label: '猪头',
          },
          {
            value: '猪蹄',
            label: '猪蹄',
          },
          {
            value: '猪口条',
            label: '猪口条',
          },
          {
            value: '猪耳朵',
            label: '猪耳朵',
          },
          {
            value: '猪排骨',
            label: '猪排骨',
          },
          {
            value: '猪大骨',
            label: '猪大骨',
          },
        ],
      },
      {
        value: '鸡产品类',//肉质有弹性、新鲜无异味、无淤血、无注水、无寄生虫，有《动物检疫合格证明》。
        label: '鸡产品类',
        children: [
          {
            value: '鸡胸肉',
            label: '鸡胸肉',
          },
          {
            value: '鸡腿',
            label: '鸡腿',
          },
          {
            value: '翅肩肉',
            label: '翅肩肉',
          },
          {
            value: '鸡背',
            label: '鸡背',
          },
          {
            value: '鸡叉',
            label: '鸡叉',
          },
          {
            value: '翅根',
            label: '翅根',
          },
          {
            value: '鸡脖',
            label: '鸡脖',
          },
          {
            value: '鸡肝',
            label: '鸡肝',
          },
          {
            value: '鸡胗',
            label: '鸡胗',
          },
          {
            value: '鸡爪',
            label: '鸡爪',
          },
          {
            value: '白条',
            label: '白条',
          },
          {
            value: '鸡',
            label: '鸡',
          },
        ],
      },
      {
        value: '丸滑类',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
        label: '丸滑类',
        children: [
          {
            value: '鸡脯丸',
            label: '鸡脯丸',
          },
          {
            value: '鸡柳',
            label: '鸡柳',
          },
          {
            value: '牛肉丸',
            label: '牛肉丸',
          },
          {
            value: '四喜丸',
            label: '四喜丸',
          },
          {
            value: '千页豆腐',
            label: '千页豆腐',
          },
        ],
      },
      {
        value: '禽蛋类',//蛋壳干净，无破损，有《检验检测中心检验报告》。
        label: '禽蛋类',
        children: [
          {
            value: '鸡蛋',
            label: '鸡蛋',
          },
          {
            value: '鸭蛋',
            label: '鸭蛋',
          },
          {
            value: '鹅蛋',
            label: '鹅蛋',
          },
          {
            value: '鸽子蛋',
            label: '鸽子蛋',
          },
          {
            value: '鹌鹑蛋',
            label: '鹌鹑蛋',
          },
        ],
      },
    ],
  },
  {
    value: '粮油类',
    label: '粮油类',
    children: [
      {
        value: '原粮',//未加工
        label: '原粮',
        children: [
          {
            value: '稻谷',
            label: '稻谷',
          },
          {
            value: '小麦',
            label: '小麦',
          },
          {
            value: '玉米',
            label: '玉米',
          },
          {
            value: '高粱',
            label: '高粱',
          },
          {
            value: '谷子',
            label: '谷子',
          },
          {
            value: '大麦',
            label: '大麦',
          },
          {
            value: '荞麦',
            label: '荞麦',
          },
          {
            value: '大豆',
            label: '大豆',
          },
          {
            value: '小豆',
            label: '小豆',
          },
          {
            value: '绿豆',
            label: '绿豆',
          },
          {
            value: '蚕豆',
            label: '蚕豆',
          },
          {
            value: '芸豆',
            label: '芸豆',
          },
          {
            value: '甘薯',
            label: '甘薯',
          },
        ],
      },
      {
        value: '成品粮',//经加工
        label: '成品粮',
        children: [
          {
            value: '大米',
            label: '大米',
          },
          {
            value: '小米',
            label: '小米',
          },
          {
            value: '小麦粉',
            label: '小麦粉',
          },
          {
            value: '油菜籽',
            label: '油菜籽',
          },
          {
            value: '白芝麻',
            label: '白芝麻',
          },
          {
            value: '黑芝麻',
            label: '黑芝麻',
          },
          {
            value: '棉籽',
            label: '棉籽',
          },
          {
            value: '葵花籽',
            label: '葵花籽',
          },
          {
            value: '香瓜籽',
            label: '香瓜籽',
          },
          {
            value: '油茶籽',
            label: '油茶籽',
          },
          {
            value: '棕榈籽',
            label: '棕榈籽',
          },
        ],
      },
      {
        value: '油脂',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
        label: '油脂',
        children: [
          {
            value: '花生油',
            label: '花生油',
          },
          {
            value: '菜油',
            label: '菜油',
          },
          {
            value: '香油',
            label: '香油',
          },
          {
            value: '葵花籽油',
            label: '葵花籽油',
          },
          {
            value: '蓖麻籽油',
            label: '蓖麻籽油',
          },
          {
            value: '大豆油',
            label: '大豆油',
          },
          {
            value: '色拉油',
            label: '色拉油',
          },
          {
            value: '调味油',
            label: '调味油',
          },
          {
            value: '调和油',
            label: '调和油',
          },
        ],
      },
      {
        value: '粮油制品',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
        label: '粮油制品',
        children: [
          {
            value: '生切面',
            label: '生切面',
          },
          {
            value: '挂面',
            label: '挂面',
          },
          {
            value: '米粉',
            label: '米粉',
          },
          {
            value: '豆腐',
            label: '豆腐',
          },
          {
            value: '豆奶',
            label: '豆奶',
          },
          {
            value: '面包',
            label: '面包',
          },
          {
            value: '烧饼',
            label: '烧饼',
          },
          {
            value: '汤圆',
            label: '汤圆',
          },
          {
            value: '面筋',
            label: '面筋',
          },
          {
            value: '花生酱',
            label: '花生酱',
          },
        ],
      },
    ],
  },
  {
    value: '海鲜类',
    label: '海鲜类',//无伤残、无畸形、无病害、新鲜无变质。
    children: [
      {
        value: '鱼类',
        label: '鱼类',
        children: [
          {
            value: '大黄鱼',
            label: '大黄鱼',
          },
          {
            value: '小嘴鱼',
            label: '小嘴鱼',
          },
          {
            value: '多宝鱼',
            label: '多宝鱼',
          },
          {
            value: '海黑鱼',
            label: '海黑鱼',
          },
          {
            value: '先生鱼',
            label: '先生鱼',
          },
          {
            value: '海鳝鱼',
            label: '海鳝鱼',
          },
          {
            value: '海鲶鱼',
            label: '海鲶鱼',
          },
          {
            value: '沙鱼',
            label: '沙鱼',
          },
          {
            value: '八爪鱼',
            label: '八爪鱼',
          },
          {
            value: '沙丁鱼',
            label: '沙丁鱼',
          },
          {
            value: '胖头鱼',
            label: '胖头鱼',
          },
          {
            value: '三文鱼',
            label: '三文鱼',
          },
          {
            value: '金枪鱼',
            label: '金枪鱼',
          },
        ],
      },
      {
        value: '贝类',
        label: '贝类',
        children: [
          {
            value: '柽子王',
            label: '柽子王',
          },
          {
            value: '大海螺',
            label: '大海螺',
          },
          {
            value: '小海鲜',
            label: '小海鲜',
          },
          {
            value: '蝴蝶贝',
            label: '蝴蝶贝',
          },
          {
            value: '海蛎壳',
            label: '海蛎壳',
          },
          {
            value: '象拔蚌',
            label: '象拔蚌',
          },
          {
            value: '花螺',
            label: '花螺',
          },
          {
            value: '北极贝',
            label: '北极贝',
          },
          {
            value: '龙眼贝',
            label: '龙眼贝',
          },
          {
            value: '麻蚬子',
            label: '麻蚬子',
          },
        ],
      },
      {
        value: '虾类',
        label: '虾类',
        children: [
          {
            value: '龙虾',
            label: '龙虾',
          },
          {
            value: '基围虾',
            label: '基围虾',
          },
          {
            value: '皮皮虾',
            label: '皮皮虾',
          },
          {
            value: '青虾',
            label: '青虾',
          },
          {
            value: '大海虾',
            label: '大海虾',
          },
          {
            value: '小河虾',
            label: '小河虾',
          },
          {
            value: '小红虾',
            label: '小红虾',
          },
        ],
      },
      {
        value: '海藻类',
        label: '海藻类',
        children: [
          {
            value: '发菜',
            label: '发菜',
          },
          {
            value: '紫菜',
            label: '紫菜',
          },
          {
            value: '海带',
            label: '海带',
          },
          {
            value: '海白菜',
            label: '海白菜',
          },
          {
            value: '裙带菜',
            label: '裙带菜',
          },
        ],
      },
    ],
  },
  {
    value: '水果类',
    label: '水果类',//果形端正、大小均匀、色泽正常、无腐烂、无异味、干净清洁，无药物残留。
    children: [
      {
        value: '瓜类',
        label: '瓜类',
        children: [
          {
            value: '西瓜',
            label: '西瓜',
          },
          {
            value: '哈密瓜',
            label: '哈密瓜',
          },
          {
            value: '香瓜',
            label: '香瓜',
          },
          {
            value: '木瓜',
            label: '木瓜',
          },
        ],
      },
      {
        value: '蕉类',
        label: '蕉类',
        children: [
          {
            value: '香蕉',
            label: '香蕉',
          },
          {
            value: '芭蕉',
            label: '芭蕉',
          },
          {
            value: '大蕉',
            label: '大蕉',
          },
          {
            value: '红香蕉',
            label: '红香蕉',
          },
          {
            value: '皇帝蕉',
            label: '皇帝蕉',
          },
        ],
      },
      {
        value: '桃类',
        label: '桃类',
        children: [
          {
            value: '猕猴桃',
            label: '猕猴桃',
          },
          {
            value: '水蜜桃',
            label: '水蜜桃',
          },
          {
            value: '黄桃',
            label: '黄桃',
          },
          {
            value: '杨桃',
            label: '杨桃',
          },
          {
            value: '油桃',
            label: '油桃',
          },
        ],
      },
      {
        value: '果类',
        label: '果类',
        children: [
          {
            value: '苹果',
            label: '苹果',
          },
          {
            value: '无花果',
            label: '无花果',
          },
          {
            value: '芒果',
            label: '芒果',
          },
          {
            value: '蔷薇果',
            label: '蔷薇果',
          },
        ],
      },
      {
        value: '葡萄类',
        label: '葡萄类',
        children: [
          {
            value: '葡萄',
            label: '葡萄',
          },
          {
            value: '提子',
            label: '提子',
          },
          {
            value: '醋栗',
            label: '醋栗',
          },
        ],
      },
      {
        value: '柑类',
        label: '柑类',
        children: [
          {
            value: '橘子',
            label: '橘子',
          },
          {
            value: '柚子',
            label: '柚子',
          },
          {
            value: '橙子',
            label: '橙子',
          },
          {
            value: '砂甜桔',
            label: '砂甜桔',
          },
        ],
      },
    ],
  },
  {
    value: '面食类',
    label: '面食类',//形态完整，美观，无霉点，无使用色素及非食用添加剂，口味适中。
    children: [
      {
        value: '馒头',
        label: '馒头',
        children: [
          {
            value: '牛奶馒头',
            label: '牛奶馒头',
          },
          {
            value: '戗面馒头',
            label: '戗面馒头',
          },
          {
            value: '白面馒头',
            label: '白面馒头',
          },
          {
            value: '杂粮馒头',
            label: '杂粮馒头',
          },
        ],
      },
      {
        value: '花卷',
        label: '花卷',
        children: [
          {
            value: '椒盐花卷',
            label: '椒盐花卷',
          },
          {
            value: '麻酱花卷',
            label: '麻酱花卷',
          },
          {
            value: '葱油花卷',
            label: '葱油花卷',
          },
        ],
      },
      {
        value: '面条',
        label: '面条',
        children: [
          {
            value: '刀削面',
            label: '刀削面',
          },
          {
            value: '焖面',
            label: '焖面',
          },
          {
            value: '油泼面',
            label: '油泼面',
          },
          {
            value: '饸饹',
            label: '饸饹',
          },
          {
            value: '剔尖',
            label: '剔尖',
          },
          {
            value: '炸酱面',
            label: '炸酱面',
          },
          {
            value: '龙须面',
            label: '龙须面',
          },
          {
            value: '清汤牛肉面',
            label: '清汤牛肉面',
          },
        ],
      },
      {
        value: '饺子',
        label: '饺子',
        children: [
          {
            value: '蒸饺',
            label: '蒸饺',
          },
          {
            value: '煎饺',
            label: '煎饺',
          },
          {
            value: '汤饺',
            label: '汤饺',
          },
          {
            value: '锅贴饺子',
            label: '锅贴饺子',
          },
          {
            value: '炸饺子',
            label: '炸饺子',
          },
          {
            value: '生饺子',
            label: '生饺子',
          },
        ],
      },
      {
        value: '包子',
        label: '包子',
        children: [
          {
            value: '灌汤包子',
            label: '灌汤包子',
          },
          {
            value: '蒸包子',
            label: '蒸包子',
          },
          {
            value: '烤包子',
            label: '烤包子',
          },
          {
            value: '叉烧包',
            label: '叉烧包',
          },
          {
            value: '糖三角',
            label: '糖三角',
          },
          {
            value: '水煎包',
            label: '水煎包',
          },
        ],
      },
    ],
  },
  {
    value: '酒水类',
    label: '酒水类',//货真价实，无假货，无过期产品。
    children: [
      {
        value: '蒸馏酒',
        label: '蒸馏酒',
        children: [
          {
            value: '白酒',
            label: '白酒',
          },
          {
            value: '白兰地',
            label: '白兰地',
          },
          {
            value: '威士忌',
            label: '威士忌',
          },
          {
            value: '伏特加',
            label: '伏特加',
          },
          {
            value: '兰姆酒',
            label: '兰姆酒',
          },
          {
            value: '阿拉克酒',
            label: '阿拉克酒',
          },
        ],
      },
      {
        value: '发酵酒',
        label: '发酵酒',
        children: [
          {
            value: '黄酒',
            label: '黄酒',
          },
          {
            value: '啤酒',
            label: '啤酒',
          },
          {
            value: '葡萄酒',
            label: '葡萄酒',
          },
          {
            value: '果子酒',
            label: '果子酒',
          },
        ],
      },
      {
        value: '配制酒',
        label: '配制酒',
        children: [
          {
            value: '露酒',
            label: '露酒',
          },
          {
            value: '香槟酒',
            label: '香槟酒',
          },
          {
            value: '汽酒',
            label: '汽酒',
          },
          {
            value: '药酒',
            label: '药酒',
          },
          {
            value: '滋补酒',
            label: '滋补酒',
          },
        ],
      },
    ],
  },
];
let gData = []
let dataSource1=[]

const generateData = (options) => {
  let arr1=[];
  for(let i=0; i<options.length; i++){
    let arr2=[];
    let temp1={};
    temp1.key=options[i].label
    temp1.name=options[i].label
    for(let j=0; j<options[i].children.length; j++){
      let arr3=[];
      let temp2={};
      temp2.key=options[i].children[j].label
      temp2.name=options[i].children[j].label
      for(let k=0; k<options[i].children[j].children.length; k++){
        let temp3={}
        temp3.key=options[i].children[j].children[k].label
        temp3.name=options[i].children[j].children[k].label
        arr3.push(temp3)
      }
      temp2.children=arr3
      arr2.push(temp2)
    }
    temp1.children=arr2
    arr1.push(temp1)
  }
  dataSource1=arr1
  console.log(dataSource1)
};
generateData(options);

const generateData1 = (options) => {
  let arr1=[];
  for(let i=0; i<options.length; i++){
    let arr2=[];
    let temp1={};
    temp1.title=options[i].label
    temp1.key=options[i].label
    temp1.scopedSlots = { title: 'title' }
    for(let j=0; j<options[i].children.length; j++){
      let arr3=[];
      let temp2={};
      temp2.title=options[i].children[j].label
      temp2.key=options[i].children[j].label
      temp2.scopedSlots = { title: 'title' }
      for(let k=0; k<options[i].children[j].children.length; k++){
        let temp3={}
        temp3.title=options[i].children[j].children[k].label
        temp3.key=options[i].children[j].children[k].label
        temp3.scopedSlots = { title: 'title' }
        arr3.push(temp3)
      }
      temp2.children=arr3
      arr2.push(temp2)
    }
    temp1.children=arr2
    arr1.push(temp1)
  }
  gData=arr1
  console.log(gData)
};
generateData1(options);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    const title = node.title;
    dataList.push({ key, title: title });
    if (node.children) {
      generateList(node.children);
    }
    // console.log(dataList)
  }
};

generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};



export default {
  name: "Category",
  components: {},
  mounted() {},
  data () {
    return {
      todayTime: moment(new Date().toLocaleDateString(), 'YYYY-MM-DD'),
      form1: this.$form.createForm(this),
      dataSource: [
        {
          id: '1',
          type: '肉类',
          ps: '暂无',
        },
        {
          id: '2',
          type: '青菜类',
          ps: '暂无',
        },
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key: 'rowIndex',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
        {
          title: '食料类别',
          align: "center",
          dataIndex: 'type'
        },
        {
          title: '备注',
          align: "center",
          dataIndex: 'ps'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: "center",
          scopedSlots: { customRender: 'action' },
        }
      ],
      toggleSearchStatus: false,
      selectedRowKeys: [],

      title: "操作",
      visible: false,
      model: {},
      layout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 },
      },
      confirmLoading: false,
      validatorRules: {
        name: [
          { required: true, message: '请输入食料分类名称!' },
        ],
      },

      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      gData,
      expandedRowKeys: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns1: [
        {
          title: '食料名称',
          dataIndex: 'name',
          key: 'name',
          align: 'left',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          },
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
          align: 'left',
        }
      ],
      dataSource1,
      // dataSource1: [
      //   {
      //     'id': '9502685863ab87f0ad1134142788a385',
      //     'key': '9502685863ab87f0ad1134142788a385',
      //     'name': '首页',
      //     'parentId': '',
      //   },
      //   {
      //     'id': '1244876622988214274',
      //     'key': '1244876622988214274',
      //     'name': '库存管理',
      //     'parentId': '',
      //     'children': [
      //       {
      //         'id': '1261213213500452866',
      //         'key': '1261213213500452866',
      //         'name': '入库管理',
      //         'parentId': '1244876622988214274',
      //         'children': [
      //           {
      //             'id': '1244877762060517378',
      //             'key': '1244877762060517378',
      //             'name': '采购入库',
      //             'parentId': '1261213213500452866',
      //           }
      //         ],
      //       },
      //     ]
      //   }
      // ]
    }
  },
  computed: {},
  methods: {
    handleToggleSearch() {
      if(this.toggleSearchStatus) this.toggleSearchStatus=false;
      else this.toggleSearchStatus=true;
    },
    deletConfirm(e) {
      console.log(e);
      this.$message.success('删除成功');
    },
    handleReset() {
      this.form1.resetFields();//重置基本信息
    },
    handleQueryOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('基本信息：', values)
        }
      })
    },

    add () {
      this.edit({});
    },
    edit (record) {
      console.log(record)
      this.model = Object.assign({}, record);
      console.log(this.model)
      this.visible = true;
    },
    deleteRecord(record) {
      console.log(record)
    },
    close () {
      this.$emit('close');
      this.visible = false;
    },
    handleOk () {
      const that = this;
      // 触发表单验证
      this.$refs.form.validate(valid => {
        if (valid) {
          that.confirmLoading = true;
          let obj;
          if(!this.model.id){
            // obj=addRole(this.model);
          }else{
            // obj=editRole(this.model);
          }
          // obj.then((res)=>{
          //   if(res.success){
          //     that.$message.success(res.message);
          //     that.$emit('ok');
          //   }else{
          //     that.$message.warning(res.message);
          //   }
          // }).finally(() => {
          //   that.confirmLoading = false;
          //   that.close();
          // })
          that.confirmLoading = false;
          that.close();
        }else{
          return false;
        }
      })
    },
    handleCancel () {
      this.close()
    },

    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onChange(e) {
      const value = e.target.value;
      console.log(value)
      const expandedKeys = dataList
        .map(item => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, gData);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      console.log(expandedKeys)
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
      });
    },
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    handleExpandedRowsChange(expandedRows) {
      this.expandedRowKeys = expandedRows
    },
    handleSearch1(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },
    handleReset1(clearFilters) {
      clearFilters();
      this.searchText = '';
    },
  }

}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';

.table-page-search-wrapper {
  margin-bottom: 8px;
}

.table-page-search-wrapper .ant-form-item,
.table-page-search-wrapper .table-page-search-submitButtons {
  margin-top: 12px;
  margin-bottom: 12px;
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
