<script>
export default {
  name: 'App-Footer'
}
</script>
<template>
  <footer class="container-footer" role="contentinfo">
    <h3>Tiago Mota</h3>
  </footer>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_variables.scss';

.container-footer {
  background-color: $color-gray;
  color: $color-primary;
  flex: none;
  padding: 10px;
  text-align: right;
}
</style>
