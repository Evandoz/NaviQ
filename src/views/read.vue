<template>
  <div class="container">
    <list :websites="websites"></list>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import read from '@/assets/read'
import list from '@/components/list'

export default defineComponent({
  components: {
    list,
  },
  data() {
    return {
      websites: read,
    }
  },
})
</script>

<style lang="scss" scoped></style>
