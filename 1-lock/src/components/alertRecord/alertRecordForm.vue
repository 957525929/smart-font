<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="action">
        <a-popconfirm
          title="确定删除当前记录吗？"
          ok-text="确定"
          cancel-text="取消"
        >
          <a href="#">删除</a>
        </a-popconfirm>
      </span>
    </a-table>
  </a-card>
</template>
<script>
const columns = [
  {
    title: "房间",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "锁编号",
    dataIndex: "lockNum",
    key: "lockNum",
  },
  {
    title: "报警时间",
    dataIndex: "repairTime",
    key: "repairTime",
  },
  {
    title: "报警内容",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    lockNum: "S0001",
    room: "B-402",
    repairTime: "2020-01-12 14:35:25",
    content: "密码锁故障",
  },
  {
    key: "2",
    lockNum: "S0002",
    room: "C-305",
    repairTime: "2021-05-12 18:30:28",
    content: "密码锁故障",
  },
  {
    key: "3",
    lockNum: "S0003",
    room: "D-205",
    repairTime: "2021-03-21 19:11:46",
    content: "...",
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