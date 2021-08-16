<template>
  <div class="container">
    <list :websites="websites"></list>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import tool from '@/assets/tool'
import list from '@/components/list'

export default defineComponent({
  components: {
    list,
  },
  data() {
    return {
      websites: tool,
    }
  },
})
</script>

<style lang="scss" scoped></style>
