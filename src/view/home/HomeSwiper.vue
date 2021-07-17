<template>
  <div class="home-swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <img v-lazy="'http://119.29.199.37:8888/swiper/'+image" />
      </van-swipe-item>
    </van-swipe>
  </div>

</template>

<script>

export default {
name: "HomeSwiper",
  data(){
    return{
      isLoad:false,
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },

  created() {
  },
  methods:{
  }
}
</script>

<style scoped>
.home-swiper{
  /*margin-top: 44px;*/
  overflow-y:auto;
}
</style>
