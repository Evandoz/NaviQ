<template>
  <div class="hidden-scrollbar">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  overflow: hidden;
}
.hidden-scrollbar {
  margin-right: -20px;
  //overflow: auto
}
</style>
