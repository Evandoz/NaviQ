<template>
  <div class="container">
    <list :websites="websites"></list>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import other from '@/assets/other'
import list from '@/components/list'

export default defineComponent({
  components: {
    list,
  },
  data() {
    return {
      websites: other,
    }
  },
})
</script>

<style lang="scss" scoped></style>
