<template>
  <div class="icons-list">
    <!-- <icon-font type="icon-tuichu" />
    <icon-font type="icon-facebook" />
    <icon-font type="icon-twitter" /> -->
     <icon-font type="icon-zuzhiguanli" :style="{ background: '#49a9ee', color: 'white',fontSize:'16px',padding: '5px'}"/> 
     <icon-font type="icon-bulujiesuan" /> 
     <icon-font type="icon-fanhui" /> 
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2656393_wq7tp4x9sm.js'
});
export default {
  components: {
    IconFont,
  },
};
</script>
