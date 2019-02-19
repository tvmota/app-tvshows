<script>
import * as eva from 'eva-icons'

export default {
  name: 'Show-Card',
  props: {
    showInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showClassImg: {
        backgroundImage: ''
      },
      bookmarkIcon: 'bookmark-outline'
    }
  },
  computed: {
    listSavedShows () {
      return this.$store.getters.getSavedShows
    }
  },
  mounted () {
    eva.replace()
  },
  updated () {
    this.showClassImg.backgroundImage = `url('${this.showInfo.image.original}')`
    if (this.listSavedShows.indexOf(this.showInfo.id) >= 0) {
      this.bookmarkIcon = 'bookmark'
    }
    eva.replace()
  }
}
</script>
<template>
  <div class="show-card" :style="showClassImg">
    <div class="show-card-overlay"></div>
    <div class="show-card-share">
      <button class="show-card-share__icon" @click="$emit('bookmark-serie-id', showInfo.id)">
        <i class="show-card-share__icon-bookmark" :data-eva="bookmarkIcon" data-eva-height="28" data-eva-width="28"></i>
      </button>
    </div>
    <div class="show-card-content">
      <div class="show-card-content-header">
        <h1 class="show-card-content-header__title">{{ showInfo.name }}</h1>
        <h4 class="show-card-content-header__info">
          ({{ showInfo.premiered }}) {{ showInfo.genres }}
        </h4>
      </div>
      <p class="show-card-content-desc">{{ showInfo.summary }}</p>
    </div>
  </div>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_functions.scss';
@import '../../../assets/css/_utilities/_variables.scss';

.show-card {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  max-width: pxToRem(800);
  height: pxToRem(580);
  min-height: pxToRem(300);
  display: block;
  overflow: hidden;
  margin: 8vh auto;
  border-radius: pxToRem(8);
  box-shadow: pxToRem(0) pxToRem(8) pxToRem(12) pxToRem(0) rgba(0,0,0,0.25);
  position: relative;

  @media screen and (max-width: pxToRem(800)) {
    width: 95%;
    max-width: 95%;
  }

  @media screen and (max-width: pxToRem(600)) {
    background-position: 50% 0%;
    background-size: cover;
    height: pxToRem(500);
  }

  &-overlay {
    width:100%;
    height: 100%;
    border-radius: pxToRem(8);
    background: linear-gradient(to right, rgba(42,159,255,.2) 0%,rgba(33,33,32,1) 60%,rgba(33,33,32,1) 100%);
    background-blend-mode: multiply;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    @media screen and (max-width: pxToRem(600)) {
      background: linear-gradient(to bottom, rgba(42,159,255,.2) 0%,rgba(33,33,32,1) 60%,rgba(33,33,32,1) 100%);
    }
  }

  &-share {
    padding: 1rem;
    display: inline-block;
    width: 100%;

    @media screen and (max-width: pxToRem(600)) {
      display: block;
      width: 100%;
    }

    &__icon {
      border: none;
      opacity: .9;
      background: none;

      &-bookmark {
        fill: $color-white;
        font-size: 1.2rem;
      }
    }
  }

  &-content {
    width: 100%;
    max-width: pxToRem(370);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position:relative;
    float: right;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;

    @media screen and (max-width: pxToRem(1000)) {
      width: 50%;
    }
    @media screen and (max-width: pxToRem(600)) {
      margin-top: 4.2rem;
      width: 100%;
      float: inherit;
      max-width: 100%;
      padding: 0 1rem 1rem;
    }

    &-header {
      margin-bottom: 2rem;

      &__title {
        color: #ffffff;
        margin-bottom: 1rem;
        line-height: 1;
        opacity: .75;
        text-transform: uppercase;
        letter-spacing: pxToRem(2);
        line-height: 1;
        font-weight: 400;
      }

      &__info {
        text-transform: uppercase;
        letter-spacing: pxToRem(2);
        font-size: .8rem;
        color: $color-primary;
        line-height: 1;
        margin: 0;
        font-weight: 700;
        opacity:.7;
      }
    }

    &-desc {
      color: $color-white;
      font-weight: 300;
      opacity: .84;
      margin-bottom: 2rem;
    }
  }
}
</style>
