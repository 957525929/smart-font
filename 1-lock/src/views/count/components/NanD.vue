<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-axis dataKey="country" :label="label" />
      <v-bar position="country*平均量" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { country: 'D区域', '平均量': 15 },
    { country: 'C区域', '平均量': 10 },
    { country: 'B区域', '平均量': 14 },
    { country: 'A区域', '平均量': 7 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'sort',
    field: ['平均量'],
    // callback(a, b) {
    //   return a.population - b.population > 0;
    // },
  });
  const data = dv.rows;

  const label = { offset: 12 };

  export default {
    data() {
      return {
        data,
        height: 300,
        label: label,
      };
    }
  };
</script>