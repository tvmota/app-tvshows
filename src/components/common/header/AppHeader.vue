<script>
import * as eva from 'eva-icons'

export default {
  name: 'App-Header',
  mounted () {
    eva.replace()
  }
}
</script>
<template>
  <header aria-level="1" class="container-header" role="heading">
    <router-link class="home-link" to="/">
      <i class="container-header-icon" data-eva="tv" data-eva-height="38" data-eva-width="38"></i>
      <h2 class="container-header-title">Tv Shows App</h2>
    </router-link>
  </header>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_variables.scss';
@import '../../../assets/css/_utilities/_functions.scss';

.container-header {
  background-color: $color-secondary;
  color:$color-white;
  flex: none;
  display: flex;
  padding: pxToRem(16);
  justify-content: flex-start;
  align-items: center;

  &-icon {
    fill: $color-white;
  }

  &-title {
    margin-left: pxToRem(10)
  }

  .home-link {
    align-items: center;
    color: $color-white;
    display: flex;
    text-decoration: none;
  }
}
</style>
