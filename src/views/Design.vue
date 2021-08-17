<template>
  <div class="container">
    <list :websites="websites"></list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import design from '@/assets/design'
import list from '@/components/list.vue'

export default defineComponent({
  components: {
    list,
  },
  data() {
    return {
      websites: design,
    }
  },
})
</script>

<style lang="scss" scoped></style>
