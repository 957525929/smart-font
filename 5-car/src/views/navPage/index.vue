<template>
  <a-layout class="GroundStyle">
    <a-col :span="24">
      <a-layout-content>
        <div class="TopBarStyle">中国烟草总公司福建省公司机关服务平台</div>
        <a-row>
          <a-col :span="22" :offset="1">
            <br />
            <br />
            <div style="height: 330px">
              <a-row :gutter="16" style="height: 100%">
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt1 text" @click="goto(1)">
<!--                      <a-icon type="lock" class="icon" />-->
                      安消管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt2 text" @click="goto(2)">
<!--                      <a-icon type="lock" class="icon" />-->
                      食堂管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt3 text" @click="goto(3)">
<!--                      <a-icon type="lock" class="icon" />-->
                      资产管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt4 text" @click="goto(4)">
<!--                      <a-icon type="lock" class="icon" />-->
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
                    <a-card hoverable class="ControlCard prt5 text" @click="goto(5)">
<!--                      <a-icon type="lock" class="icon" />-->
                      车辆管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt6 text" @click="goto(6)">
<!--                      <a-icon type="lock" class="icon" />-->
                      物业管理系统</a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt7 text" @click="goto(7)">
<!--                      <a-icon type="lock" class="icon" />-->
                      接待管理系统
                    </a-card>
                  </div>
                </a-col>
                <a-col :span="6" style="height: 100%">
                  <div class="ControlWarp">
                    <a-card hoverable class="ControlCard prt8 text" @click="goto(8)">
<!--                      <a-icon type="lock" class="icon" />-->
                      综合管理系统
                    </a-card>
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
export default {
  methods:{
    goto(index) {
      var url = 'http://172.16.1.219:3001/';
      switch (index) {
        case 2:
          url = 'http://172.16.1.219:3002/';
          break;
        case 3:
          url = 'http://172.16.1.219:3003/';
          break;
        case 4:
          url = 'http://172.16.1.219:3004/';
          break;
        case 5:
          url = 'http://172.16.1.219:3005/';
          break;
        case 6:
          url = 'http://172.16.1.219:3006/';
          break;
        case 7:
          url = 'http://172.16.1.219:3007/';
          break;
        case 8:
          url = 'http://172.16.1.219:3008/';
          break;
      }
      window.open( url);
    }
  }
}
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
/*  background-image: url(~@/assets/topbar.png);*/
  background-size: cover;
  text-align: center;
  color: blue;
  font-size: 40px;
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
  line-height: 5
}
.icon {
  display: block;
  font-size: 100px;
}
</style>