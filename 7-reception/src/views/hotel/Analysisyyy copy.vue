<template>
  <a-card :bordered="false">
    <div>
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div class="steps-content">{{ steps[current].content }}</div>
      <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
        >Done</a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">上一步</a-button>
      </div>
    </div>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '协议酒店',
          content: 'First-content'
        },
        {
          title: '就餐地点',
          content: 'Second-content'
        },
        {
          title: '会议地点',
          content: 'Last-content'
        },
        {
          title: '通知设置',
          content: 'Last-content'
        }
      ]
    }
  },
  methods: {
    next() {
      this.current++
    },
    prev() {
      this.current--
    }
  }
}
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
