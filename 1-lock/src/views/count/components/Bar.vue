<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-bar position="year*sales" />
    </v-chart>
  </div>
</template>

<script>
const data = [
  { year: '101', sales: 3 },
  { year: '102', sales: 2 },
  { year: '201', sales: 0 },
  { year: '202', sales: 0 },
  { year: '203', sales: 4 }
]

const scale = [
  {
    dataKey: 'sales'
    // tickInterval: 20
  }
]

export default {
  data() {
    return {
      data,
      scale,
      height: 300,
      labelConfig: [
        'sales',
        {
          formatter: (val, year) => {
            return year.point.year
          }
        }
      ]
    }
  }
}
</script>
