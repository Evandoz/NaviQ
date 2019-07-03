<template>
  <div class="content">
    <list :websites="websites"></list>
  </div>
</template>

<script>

import other from "@/assets/other";
import list from '@/components/list'

export default {
  components: {
    list
  },
  data () {
    return {
      websites: other
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
