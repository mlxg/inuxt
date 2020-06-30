<template>
  <div>
    <swiper ref="sw" :options="options">
      <swiper-slide v-for="(item,index) in this.data[this.index]" :key="index">
        Slide {{ item }}
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev swiper-button-black" />
    <div class="swiper-button-next swiper-button-black" @click="nextHandle" />
  </div>
</template>

<script>
export default {
  name: 'Carrousel',

  data () {
    return {
      index: 0,
      photoIndex: 0,
      data: {
        0: [1, 2, 3],
        1: [4, 5, 6]
      },
      options: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.sw.$swiper
    }

  },
  mounted () {

  },
  methods: {
    nextHandle () {
      if (this.swiper.activeIndex === this.swiper.slides.length - 1) {
        this.swiper.activeIndex = 0
        this.index++
      }
    }
  }
}
</script>

<style>
  .swiper-container{
    background: #cccccc;
    height: 300px;
    width: 800px;
  }
  .swiper-button-disabled {
    opacity: 1;
    pointer-events: visible !important;
  }
</style>
