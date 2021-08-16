<template>
  <div class="container">
    <list :websites="websites"></list>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import develop from '@/assets/develop'
import list from '@/components/list'

export default defineComponent({
  components: {
    list,
  },
  data() {
    return {
      websites: develop,
    }
  },
})
</script>

<style lang="scss" scoped></style>
