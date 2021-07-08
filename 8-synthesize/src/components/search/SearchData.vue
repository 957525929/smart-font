<template>
  <!-- 查询区域 -->
  <div class="table-page-search-wrapper">
    <a-form layout="inline">
      <a-row :gutter="10">

        <a-col :md="5" :sm="10">
          <a-form-item label="任务名称">
            <a-input class="w140" placeholder="请输入任务名称"></a-input>
          </a-form-item>
        </a-col>

        <a-col :md="5" :sm="10">
          <a-form-item label="重要性">
            <a-select style="width:140px" placeholder="请选择重要性">
              <a-select-option value="0">高</a-select-option>
              <a-select-option value="1">中</a-select-option>
              <a-select-option value="2">低</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :md="5" :sm="9">
          <a-form-item label="任务状态">
            <a-select style="width:140px" placeholder="请选择状态">
              <a-select-option value="0">进行中</a-select-option>
              <a-select-option value="1">未开始</a-select-option>
              <a-select-option value="2">已完成</a-select-option>
              <a-select-option value="3">未完成</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :sm="9">
          <a-form-item label="时间">
            <a-date-picker placeholder="开始时间" class="w140" />
            ~
            <a-date-picker placeholder="结束时间" class="w140" />
          </a-form-item>
        </a-col>

      </a-row>
    </a-form>
  </div>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from "@/components/jeecg/JEllipsis";
export default {
  name: 'SearchData',
  mixins: [JeecgListMixin],
  components: {
    JEllipsis
  },
}
</script>

<style scope>
.w140 {
  width: 140px;
}
</style>