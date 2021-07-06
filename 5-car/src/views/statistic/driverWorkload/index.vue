<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx"></div>
    </div>
    <div class="corePrt">
        司机工作量统计
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.root {
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .filterPrt {
    width: 98%;
    height: 50px;
    background-color: #ffffff;
    .filterCtx {
      margin-left: 20px;
      margin-top: 8px;
    }
  }
  .corePrt {
    margin-top: 10px;
    width: 98%;
    background-color: #ffffff;
    padding: 20px;
  }
}
</style>