<template>
  <div class="cls-list">
    <div class="cls-item" v-for="(website, index) in websites" :key="index">
      <div class="cls-header">
        <h1 class="title">{{ $t(website.class) }}</h1>
      </div>
      <transition-group class="cls-content" name="card" tag="div">
        <div
          class="card"
          v-for="(item, index) in website.content"
          :key="`${item}-${index}`"
        >
          <!-- https://ico.mikelin.cn -->
          <!-- https://www.google.com/s2/favicons?domain= -->
          <a class="link" :href="item.url" target="_blank">
            <!-- <span class="tag">{{ item.tag }}</span> -->
            <div class="item-header">
              <img
                :src="'https://ico.mikelin.cn/' + item.url"
                :alt="item.title"
              />
              <h2>{{ item.title }}</h2>
            </div>
            <p v-if="item.desc">{{ item.desc }}</p>
          </a>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    websites: {
      type: Array,
    },
  },
})
</script>

<style lang="scss" scoped>
.card-enter,
.card-leave-to {
  /* .list-complete-leave-active for below version 2.1.8 */
  opacity: 0;
  transform: translate3d(10px, 10px, 0);
}
.card-move {
  transition: transform 1s;
}

.cls-list {
  margin: 0 auto;
  @media screen and (min-width: 554px) {
    width: 520px;
  }
  @media screen and (min-width: 745px) {
    width: 700px;
  }
  /* screen = 768px -> width = 100% -> 700 / 0.94 = 745*/
  @media screen and (min-width: 830px) {
    width: 700px;
  }
  @media screen and (min-width: 934px) {
    width: 790px;
  }
  @media screen and (min-width: 1253px) {
    width: 1060px;
  }
  @media screen and (min-width: 1572px) {
    width: 1330px;
  }
  @media screen and (min-width: 1891px) {
    width: 1600px;
  }
}
.cls-header {
  margin: 20px 0;
  h1 {
    line-height: 1.8;
    font-size: 18px;
    font-weight: 500;
    color: #112233;
  }
}
.cls-content {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  @media screen and (max-width: 553px) {
    width: 100%;
    justify-content: space-between;
  }
}
.card {
  margin: 0 20px 20px 0;
  background: #ffffff;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  @media screen and (max-width: 553px) {
    margin-right: 0;
  }
}
.link {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 90px;
  padding: 15px 5px;
  box-sizing: border-box;
  text-decoration: none;
  @media screen and (max-width: 553px) {
    width: 88vw;
  }
  .tag {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    border-top-left-radius: 2px;
    background: #2db7f5;
  }
  .item-header {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
    }
    h2 {
      margin: 0 0 0 5px;
      line-height: 16px;
      font-size: 15px;
      color: #222333;
      font-weight: 500;
    }
  }
  p {
    margin: 10px 0 0;
    line-height: 1.4;
    font-size: 14px;
    color: #556677;
  }
}
</style>
