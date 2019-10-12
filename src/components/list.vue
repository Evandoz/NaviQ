<template>
  <div class="cls-list">
    <div class="cls-item" v-for="(website, index) in websites" :key="index">
      <div class="cls-header">
        <h1 class="title">{{$t(website.class)}}</h1>
      </div>
      <!-- <div class="cls-content"> -->
        <transition-group class="cls-content" name="card" tag="div">
          <div class="card" v-for="(item, index) in website.content" :key="item-index">
            <!-- https://ico.mikelin.cn -->
            <!-- https://www.google.com/s2/favicons?domain= -->
            <a class="link" :href="item.url" target="_blank">
              <!-- <span class="tag">{{ item.tag }}</span> -->
              <img :src="'https://ico.mikelin.cn/'+item.url" :alt="item.title">
              <h2>{{ item.title }}</h2>
              <!-- <p v-if="item.desc">{{ item.desc }}</p> -->
            </a>
          </div>
        </transition-group>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    websites: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-enter,
.card-leave-to
/* .list-complete-leave-active for below version 2.1.8 */
  opacity: 0;
  transform: translate3d(10px, 10px, 0);

.card-move
  transition transform 1s

.cls-list
  margin: 0 auto
  @media screen and (min-width: 362px)
    width: 340px
  @media screen and (min-width: 554px)
    width: 520px
  @media screen and (min-width: 745px)
    width: 700px
  // screen = 768px -> width = 100% -> 700 / 0.94 = 745
  // @media screen and (min-width: 830px)
  //   width: 700px
  @media screen and (min-width: 1041px)
    width: 880px
  @media screen and (min-width: 1253px)
    width: 1060px
  @media screen and (min-width: 1466px)
    width: 1240px
  @media screen and (min-width: 1679px)
    width: 1420px
  .cls-item
    .cls-header
      margin: 20px 0
      h1
        line-height: 1.8
        font-size: 18px
        font-weight: 500
        color: #112233
    .cls-content
      display: flex
      flex-wrap: wrap
      width: calc(100% + 20px)
      @media screen and (max-width: 361px)
        width: 100%
        justify-content: space-between
      .card
        margin: 0 20px 20px 0
        background: #FFFFFF
        text-align: center
        border-radius: 3px
        @media screen and (max-width: 361px)
          margin-right: 0
        .link
          position: relative
          display: flex
          justify-content center
          width: 160px
          height: 46px
          padding: 15px 5px
          box-sizing: border-box
          text-decoration: none
          .tag
            position: absolute
            top: 0
            left: 0
            width: 40px
            height: 20px
            line-height: 20px
            text-align: center
            color: #ffffff
            border-top-left-radius: 2px
            background: #2db7f5
          img
            display: block
            vertical-align: top
          h2
            margin: 0 0 0 5px
            line-height: 16px
            font-size: 15px
            color: #222333
            font-weight: 500
          p
            margin: 10px 0 0
            line-height: 1.4
            font-size: 14px
            color: #556677
</style>
