<template>
  <a-tree-select
    v-model="value"
    show-search
    style="width: 200PX"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="请选择会议地点"
    @change="onchange"
  >
    <a-tree-select-node key="random" value="福建烟草公司机关A区域1号楼" title="福建烟草公司机关A区域1号楼" :selectable="false">
      <a-tree-select-node key="random1" value="福建烟草公司机关A区域1号楼会议室203" title="会议室203" />
      <a-tree-select-node key="random2" value="福建烟草公司机关A区域1号楼会议室204" title="会议室204" />
    </a-tree-select-node>
    <a-tree-select-node key="random3" value="福建烟草公司机关A区域2号楼" title="福建烟草公司机关A区域2号楼" :selectable="false">
      <a-tree-select-node key="random4" value="福建烟草公司机关A区域2号楼会议室203" title="会议室203" />
      <a-tree-select-node key="random5" value="福建烟草公司机关A区域2号楼会议室204" title="会议室204" />
    </a-tree-select-node>
    <a-tree-select-node key="random6" value="福建烟草公司机关B区域1号楼" title="福建烟草公司机关B区域1号楼" :selectable="false">
      <a-tree-select-node  key="random7" value="福建烟草公司机关B区域1号楼会议室205" title="会议室203" />
      <a-tree-select-node  key="random8" value="福建烟草公司机关B区域1号楼会议室206" title="会议室204" />
    </a-tree-select-node>
  </a-tree-select>
  <!--  -->
  <!-- <a-tree-select
    v-model="value"
    show-search
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    :show-checked-strategy="SHOW_PARENT"
  >
    <a-tree-select-node key="0-1" value="福建烟草公司机关A区域" title="福建烟草公司机关A区域">
    </a-tree-select-node>
    <a-tree-select-node key="0-2" value="福建烟草公司机关B区域" title="福建烟草公司机关B区域">
    </a-tree-select-node>
  </a-tree-select>-->
</template>

<script>
export default {
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined
    }
  },
  methods:{
    onchange(){
      console.log(this.value)
    }
  }
}
</script>
