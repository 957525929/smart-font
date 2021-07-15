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
                    <a-card hoverable class="ControlCard prt1 text">
                      <a-icon type="lock" class="icon" />
                      安消管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt2 text">
                      <a-icon type="lock" class="icon" />
                      食堂管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt3 text">
                      <a-icon type="lock" class="icon" />
                      资产管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt4 text">
                      <a-icon type="lock" class="icon" />
                      办公用品管理系统
                    </a-card>
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
                    <a-card hoverable class="ControlCard prt5 text">
                      <a-icon type="lock" class="icon" />
                      车辆管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt6 text">
                      <a-icon type="lock" class="icon" />
                      车辆管理系统</a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt7 text"> 模块七 </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt8 text"> 模块八 </a-card>
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
   background-image: url(~@/assets/image/bg1.png);
}
.prt2 {
  background-image: url(~@/assets/image/bg2.png);
}
.prt3 {
  background-image: url(~@/assets/image/bg3.png);
}
.prt4 {
  background-image: url(~@/assets/image/bg4.png);
}
.prt5 {
  background-image: url(~@/assets/image/bg5.png);
}
.prt6 {
  background-image: url(~@/assets/image/bg6.png);
}
.prt7 {
  background-image: url(~@/assets/image/bg7.png);
}
.prt8 {
  background-image: url(~@/assets/image/bg8.png);
}
.text {
  color: whitesmoke;
  text-align: center;
  font-size: 40px;
  line-height: 3
}
.icon {
  display: block;
  font-size: 100px;
}
</style>