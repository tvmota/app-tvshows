<script>
import Carousel from '@/components/common/carousel/Carousel.vue'
import { VueAutosuggest } from 'vue-autosuggest'
import { searchQueryShow } from '../services/TvshowService'

export default {
  name: 'home',
  components: {
    Carousel,
    VueAutosuggest
  },
  data () {
    return {
      selectedShow: {},
      autoCompleteOpt: {
        suggestions: [],
        inputProps: {
          id: 'searchShowInput',
          onInputChange: this.fetchShows,
          placeholder: 'Procure sua série favorita',
          name: 'autoCompleteShows'
        }
      }
    }
  },
  computed: {
    showList () {
      return this.$store.getters.getShowList
    }
  },
  methods: {
    fetchShows (value) {
      searchQueryShow(value).then(resp => {
        let filtered = resp.map(item => item.show)
        this.autoCompleteOpt.suggestions = [{ data: filtered }]
      })
    },
    selectedHandler (item) {
      this.$router.push({ path: `/details/${item.item.id}` })
    },
    navigateDetail (id) {
      this.$router.push({ path: `/details/${id}` })
    }
  }
}
</script>
<template>
  <div class="home-container">
    <div class="autocomplete-wrap">
      <vue-autosuggest
        ref="autocomplete"
        :suggestions="autoCompleteOpt.suggestions"
        :inputProps="autoCompleteOpt.inputProps"
        @selected="selectedHandler">
          <template slot-scope="{ suggestion }">
            <div>{{suggestion.item.name}}</div>
          </template>
      </vue-autosuggest>
    </div>
    <div class="carousel-wrap">
      <Carousel :list-items="showList" v-on:get-serie-id="navigateDetail"/>
    </div>
  </div>
</template>
<style lang="scss">
@import '../assets/css/_utilities/_mixins.scss';
@import '../assets/css/_utilities/_variables.scss';
@import '../assets/css/_utilities/_functions.scss';

.home-container{
  @include flexContainer(flex, column, nowrap, flex-start, flex-start, flex-start);
  padding-top: pxToRem(36);
  padding-bottom: pxToRem(16);
  width: 100%;
}

.autocomplete-wrap {
  width: 100%;
  margin-bottom: pxToRem(50);

  #searchShowInput {
    background-color: $color-white;
    border-radius: pxToRem(26);
    outline: none;
    position: relative;
    display: block;
    font-size: pxToRem(20);
    border: pxToRem(1) solid $color-secondary;
    padding: pxToRem(6) pxToRem(6) pxToRem(6) pxToRem(12);
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    ul:nth-child(1) > .autosuggest__results_title {
      border-top: none;
    }

    &::-moz-selection {
      background: $color-primary;
      color: $color-white;
    }

    &:selection {
      background: $color-primary;
      color: $color-white;
    }
  }

  .autosuggest__input-open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .autosuggest__results-container {
    position: relative;
    width: 100%;
  }

  .autosuggest__results {
    font-weight: 300;
    margin: 0;
    position: absolute;
    z-index: 10000001;
    width: 100%;
    border: pxToRem(1) solid $color-gray;
    border-bottom-left-radius: pxToRem(4);
    border-bottom-right-radius: pxToRem(4);
    background: $color-white;
    padding: 0;
    overflow: scroll;
    max-height: pxToRem(300);
  }

  .autosuggest__results ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .autosuggest__results .autosuggest__results_item {
    cursor: pointer;
    color: $color-secondary;
    padding: pxToRem(10);
  }

  .autosuggest__results .autosuggest__results_title {
    font-size: pxToRem(10);
    margin-left: 0;
    padding: pxToRem(14) pxToRem(12) pxToRem(4);
    border-top: pxToRem(1) solid $color-gray;
  }

  .autosuggest__results .autosuggest__results_item {
    &:active, &:hover, &:focus, &.autosuggest__results_item-highlighted {
      background-color: $color-primary;
      color: $color-white;
    }
  }
}

.carousel-wrap {
  width: 100%;
  height: 100%;
}
</style>
