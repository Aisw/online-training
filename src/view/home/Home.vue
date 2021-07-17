<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left" class="back">
        <img src="~assets/img/common/role.png" alt="">
      </div>
      <div slot="center">在线培训</div>
    </nav-bar>

    <div class="content">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view></home-recommend-view>
      <group-item :groups="groups"></group-item>
    </div>


  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import HomeSwiper from "./HomeSwiper";
import HomeRecommendView from "./HomeRecommendView";
import GroupItem from "./GroupItem";

import {getBanners,getScroller} from "@/network/home";

export default {
  name: "Home",
  components: {
    GroupItem,
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  data() {
    return {
      banners: [],
      groups:{
        list: Array,
      } ,
    }
  },
  created() {
    //1.加载图片
    this.getBanners()
    //2.加载培训及其资料图片
    this.getScroller()
    //3.监听item中图片加载完成
    this.$bu.$on('itemImageLoad',() => {
      this.$refs.scroll && this.$refs.scroll.refresh()
    })
  },
  methods:{
    //网络请求获取滚动图片
    getBanners(){
      getBanners().then(res => {
        this.banners = res.data
      })
    },

    //获取推荐培训
    getScroller(){
      getScroller().then(res => {
        this.groups.list = res.data
        console.log(this.groups)
      })
    }

  }
}
</script>

<style scoped>

#home{
  height: 100vh;
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  right:0;
}

.home-nav{
  background-color: #008B00;
  color: #fff;
  left: 0;
  right: 0;
}

.back img{
  width: 30px;
  height: 30px;

  margin-top: 7px;
  margin-left: 20px;
}

.content{
  margin-bottom: 44px;
}
</style>
