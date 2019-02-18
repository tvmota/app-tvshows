<script>
import AppHeader from '@/components/common/header/AppHeader.vue'
import AppFooter from '@/components/common/footer/AppFooter.vue'

export default {
  name: 'App-Main',
  components: {
    AppHeader,
    AppFooter
  },
  created () {
    this.$store.dispatch('updateShowList')
  }
}
</script>
<template>
  <div class="container" id="app">
    <AppHeader />
    <main class="container-content" role="main">
      <router-view/>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import './assets/css/_base/_normalize';
@import './assets/css/_base/_base';
@import './assets/css/_utilities/_functions.scss';
@import './assets/css/_utilities/_mixins.scss';

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-content {
    @include flexContainer(flex, column, nowrap, flex-start, flex-start, flex-start);
    flex: 1 0 auto;
    padding: pxToRem(6) pxToRem(30) pxToRem(6) pxToRem(30);
    width: 100%;
  }
}
</style>
