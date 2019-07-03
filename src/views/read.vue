<template>
  <div class="content">
    <list :websites="websites"></list>
  </div>
</template>

<script>

import read from "@/assets/read";
import list from '@/components/list'

export default {
  components: {
    list
  },
  data () {
    return {
      websites: read
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
