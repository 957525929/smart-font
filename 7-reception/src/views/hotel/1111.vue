<template>
  <div>
    <a-range-picker
      :default-value="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
      :format="dateFormat"
    />
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
    };
  },
  methods: {
    moment,
  },
};
</script>
