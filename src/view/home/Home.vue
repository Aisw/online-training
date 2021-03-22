<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left" class="back">
        <img src="~assets/img/common/role.png" alt="">
      </div>
      <div slot="center">在线培训</div>
    </nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load='true'>
          <home-swiper :banners="banners"></home-swiper>
<!--<img src="http://127.0.0.1:8888/rec/2.png" alt="" />-->
      <home-recommend-view></home-recommend-view>
<!--          <task-group v-for="(taskGroup,id) in taskGroups"-->
<!--                  :task-group = "taskGroup"-->
<!--                  :key="id"></task-group>-->

    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import HomeSwiper from "./HomeSwiper";
import HomeRecommendView from "./HomeRecommendView";

import {getBanners} from "../../network/home";
export default {
  name: "Home",
  components: {
    // TaskGroup,
    NavBar,
    Scroll,
    HomeSwiper,
    HomeRecommendView,
  },
  data() {
    return {
      banners: [],
      taskGroups:[],
    }
  },
  created() {
    //1.加载图片
    this.getBanners()

    //3.监听item中图片加载完成
    this.$bu.$on('itemImageLoad',() => {
      console.log('imgLoad')
      this.$refs.scroll && this.$refs.scroll.refresh()
    })
  },
  methods:{
    //网络请求获取滚动图片
    getBanners(){
      getBanners().then(res => {
        this.banners = res.data
        console.log(this.banners),'banners';
      })
    },

  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
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

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.back img{
  width: 30px;
  height: 30px;

  margin-top: 7px;
  margin-left: 20px;
}
</style>
