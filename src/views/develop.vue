<template>
  <div class="content">
    <list :websites="websites"></list>
  </div>
</template>

<script>

import develop from "@/assets/develop";
import list from '@/components/list'

export default {
  components: {
    list
  },
  data () {
    return {
      websites: develop
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
