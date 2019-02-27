<script>
import { searchShow } from '../services/TvshowService'
import ShowCard from '@/components/custom/show-card/ShowCard.vue'

export default {
  name: 'detail',
  components: {
    ShowCard
  },
  data () {
    return {
      showDetailsObj: {}
    }
  },
  methods: {
    getBookmarkSerie (showId) {
      this.$store.dispatch('handleSavedshow', showId)
    }
  },
  created () {
    searchShow(this.$route.params.id).then(resp => {
      this.showDetailsObj = resp
    })
  }
}
</script>
<template>
  <div class="detail-container">
    <ShowCard :show-info="showDetailsObj" v-on:bookmark-serie-id="getBookmarkSerie"/>
  </div>
</template>
<style lang="scss">
@import '../assets/css/_utilities/_functions.scss';

.detail-container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: pxToRem(16);
  padding: pxToRem(18);
  position: relative;
  width: 100%;
}
</style>
