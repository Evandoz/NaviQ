<template>
  <div class="content">
    <list :websites="websites"></list>
  </div>
</template>

<script>

import media from "@/assets/media";
import list from '@/components/list'

export default {
  components: {
    list
  },
  data () {
    return {
      websites: media
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
