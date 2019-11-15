<template>
  <div class="container">
    <list :websites="websites"></list>
  </div>
</template>

<script>

import design from "@/assets/design";
import list from '@/components/list'

export default {
  components: {
    list
  },
  data () {
    return {
      websites: design
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
