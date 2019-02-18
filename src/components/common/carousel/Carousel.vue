<script>
import Swiper from 'swiper'
import * as eva from 'eva-icons'

// pensar em esquema para carregar img mediante a banda de internet
export default {
  name: 'Carousel',
  props: {
    listItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      carouselInst: {}
    }
  },
  mounted () {
    eva.replace()
    this.carouselInst = new Swiper(this.$refs.carousel, {
      lazy: true,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1920: { slidesPerView: 5, spaceBetween: 10 },
        1440: { slidesPerView: 4, spaceBetween: 10 },
        1366: { slidesPerView: 4, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        680: { slidesPerView: 2, spaceBetween: 20 },
        520: { slidesPerView: 1, spaceBetween: 10 }
      }
    })
  }
}
</script>
<template>
  <div class="swiper-container">
    <div class="swiper-container" ref="carousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in  listItems" :key="item.id" @click="$emit('get-serie-id', item.id)">
          <img :alt="item.name" class="swiper-slide-img" :src="item.image.original">
          <div class="swiper-slide-img-description">
            <h3>{{ item.name }}</h3>
            <!--span>{{ item.genres.join(' - ') }}</span-->
            <ol class="swiper-slide-img-description-generes">
              <li class="swiper-slide-img-description-generes-item" v-for="(genere, index) in item.genres" :key="index">{{ genere }}</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next">
        <i class="icon-lg icon-color" data-eva="arrow-ios-forward" data-eva-height="38" data-eva-width="38"></i>
      </div>
      <div class="swiper-button-prev icon-color">
        <i class="icon-lg" data-eva="arrow-ios-back" data-eva-height="38" data-eva-width="38"></i>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '../../../../node_modules/swiper/dist/css/swiper.css';
@import '../../../assets/css/_utilities/_variables.scss';
@import '../../../assets/css/_utilities/_functions.scss';

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  cursor:pointer;
  text-align: center;
  height: pxToRem(540);
  font-size: pxToRem(18);
  background: $color-white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  &-img {
    height: 100%;
    position: relative;
    width: 100%;
  }

  &-img-description {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(63, 63, 63, 0.8);
    color: $color-gray;
    visibility: hidden;
    opacity: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    line-height: pxToRem(20);
    padding-bottom: pxToRem(80);
    padding-left: pxToRem(14);
    text-align: left;
    transition: opacity .2s, visibility .2s;

    &-generes {
      list-style: disc;
      padding-left: pxToRem(18);

      &-item {
        float: left;
        margin-right: pxToRem(24);
      }
    }
  }
}

.swiper-slide:hover .swiper-slide-img-description {
  visibility: visible;
  opacity: 1;
}

//Fallback's para customização dos icones de proximo e anterior
.swiper-button-next, .swiper-button-prev {
  background-image: none
}

.swiper-pagination-bullet-active {
  background: $color-primary !important;
}

.icon-lg {
  transform: scale(1.8);
}

.icon-color {
  fill: $color-secondary;

  &:hover {
    fill: $color-primary;
  }
}
</style>
