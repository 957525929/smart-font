<template>
  <a-layout class="GroundStyle">
    <a-col :span="24">
      <a-layout-content>
        <div class="TopBarStyle"></div>
        <a-row>
          <a-col :span="22" :offset="1">
            <br />
            <br />
            <div style="height: 330px">
              <a-row :gutter="16" style="height: 100%">
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt1"> 模块一 </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard"> 模块二 </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard"> 模块三 </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard"> 模块四 </a-card>
                  </div>
                </a-col>
              </a-row>
            </div>
            <br />
            <br />
            <div style="height: 330px">
              <a-row :gutter="16" style="height: 100%">
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard"> 模块五 </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard"> 模块六 </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard"> 模块七 </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard"> 模块八 </a-card>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-col>
  </a-layout>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.GroundStyle {
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0px;
  bottom: 0px;
}
.TopBarStyle {
  width: 100%;
  height: 115px;
  background-image: url(~@/assets/topbar.png);
  background-size: cover;
}
.ControlWarp {
  background-image: url('~@/assets/corner-lt.png'), url('~@/assets/corner-rt.png'), url('~@/assets/corner-lb.png'),
    url('~@/assets/corner-rb.png');
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: top left, top right, bottom left, bottom right;
  height: 100%;
  width: 100%;
  border: 1px solid rgb(54, 67, 80);
}
.ControlCard {
  background-size: cover;
  height: 96%;
  width: 98%;
  left: 1%;
  top: 2%;
}
.prt1 {
  // background-image: url(~@/assets/cardbg.png);
}
</style>