<template>
    <swiper>
      <swiper-item v-for="(item, id) in banners" :key="id">
          <img :src="'http://127.0.0.1:8888/rec/'+item" alt="" @close="imageLoad">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper/index"

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
  components:{
    Swiper,
    SwiperItem
  },
  created() {
  },
  methods:{
    imageLoad(){
      if (!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    },
  }
}
</script>

<style scoped>

</style>
