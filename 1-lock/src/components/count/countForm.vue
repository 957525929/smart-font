<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </a-card>
</template>
<script>
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    width: 80,
  },
  {
    title: "锁编号",
    dataIndex: "lockNum",
    key: "lockNum",
  },
  {
    title: "房间",
    dataIndex: "room",
    key: "room",
  },

  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "部门",
    dataIndex: "apartment",
    key: "apartment",
  },

  {
    title: "日",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "月",
    dataIndex: "month",
    key: "month",
  },
  {
    title: "年",
    dataIndex: "year",
    key: "year",
  },
  {
    title: "全部",
    dataIndex: "all",
    key: "all",
  },
];

const data = [
  {
    key: "1",
    id: 1,
    lockNum: "S0001",
    name: "张三",
    apartment: "配送部",
    room: "B-402",
    day: "8",
    month: "180",
    year: "2400",
    all: "2400",
  },
  {
    key: "2",
    id: 2,
    lockNum: "S0002",
    name: "李四",
    apartment: "营销部",
    room: "C-305",
    day: "10",
    month: "200",
    year: "2861",
    all: "2861",
  },
  {
    key: "3",
    id: 3,
    lockNum: "S0003",
    name: "王五",
    apartment: "营销部",
    room: "D-205",
    day: "18",
    month: "230",
    year: "2890",
    all: "2890",
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>