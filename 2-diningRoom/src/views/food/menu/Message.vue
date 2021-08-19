<template>
  <div>
    <a-card>
      <div style="font-weight:bold; margin-bottom:20px">选择要推送消息的食堂师傅</div>
      <a-transfer
        :data-source="mockData"
        show-search
        :filter-option="filterOption"
        :target-keys="targetKeys"
        :render="item => `${item.title} - ${item.description}`"
        @change="handleChange"
        @search="handleSearch"
        :list-style="{
          width: '20%',
          height: '400px'
        }"
      />
      <div class="btn">
        <a-button type="primary" style="width: 100px">推送通知</a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mockData: [],
      targetKeys: []
    }
  },
  mounted() {
    this.getMock()
  },
  methods: {
    getMock() {
      const targetKeys = []
      const mockData = [
        {
          key: 1,
          title: '张三',
          description: '15286245789'
        },
        {
          key: 2,
          title: '李四',
          description: '13256478547'
        },
        {
          key: 3,
          title: '王五五',
          description: '15864785235'
        },
        {
          key: 4,
          title: '赵六流',
          description: '13850641547'
        },
        {
          key: 5,
          title: '胜七',
          description: '17654787878'
        }
      ]
      // for (let i = 0; i < 20; i++) {
      //   const data = {
      //     key: i.toString(),
      //     title: `content${i + 1}`,
      //     description: `description of content${i + 1}`
      //   }
      //   // if (data.chosen) {
      //   //   targetKeys.push(data.key)
      //   // }
      //   mockData.push(data)
      // }
      this.mockData = mockData
      this.targetKeys = targetKeys
    },
    filterOption(inputValue, option) {
      return option.description.indexOf(inputValue) > -1
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys)
      this.targetKeys = targetKeys
    },
    handleSearch(dir, value) {
      console.log('search:', dir, value)
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 20px;
}
</style>
