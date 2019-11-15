<template>
  <div class="container">
    <list :websites="websites"></list>
  </div>
</template>

<script>

import tool from "@/assets/tool";
import list from '@/components/list'

export default {
  components: {
    list
  },
  data () {
    return {
      websites: tool
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
