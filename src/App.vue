<template>
  <div id="app">
    <div class="container">
      <Layout>
        <Header>
          <elheader></elheader>
        </Header>
        <Content>
            <keep-alive>
              <router-view/>
            </keep-alive>
        </Content>
        <Footer>
          <elfooter></elfooter>
        </Footer>
      </Layout>
    </div>
  </div>
</template>

<script>

import header from '@/components/header'
import footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    'elheader': header,
    'elfooter': footer
  }
}
</script>
<style lang="stylus">
#app
  height 100vh
  overflow: hidden
.container
  margin-right: -20px
  overflow: auto
.ivu-layout
  width: 100vw
  height: 100vh
  background: transparent
  .ivu-layout-header,
  .ivu-layout-content,
  .ivu-layout-footer
    padding: 0 3vw
  .ivu-layout-header
    height: 60px
    line-height: 60px
    background: #FFFFFF
  .ivu-layout-content
    flex: 1
    background: #EEEEEE
    .content
      margin: 50px auto
      @media screen and (min-width: 768px)
        width: 90%
        min-width: 722px
  .ivu-layout-footer
    background: #EEEEEE
</style>
