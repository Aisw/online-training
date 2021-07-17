<template>
<div class="point">
  <nav-bar class="home-nav">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.png" alt="" >
    </div>
    <div slot="center">积分</div>
  </nav-bar>
  <van-empty
      class="custom-image"
      image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
      :description="score"
  />

  <van-panel
      v-for="(item,key) in list" :key="key"
      :title="item.time" :desc="item.name" :status="'+'+item.score+''">
<!--    <div>内容</div>-->
  </van-panel>
</div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";

import {getTotal,getDetail} from "../../network/point";

export default {
name: "Point",
  components:{
    NavBar
  },
  data(){
    return{
      score: 0.0+'',
      list: [],
      loading: false,
      finished: false,
    }
  },
  activated() {
    //获取总积分
    this.getTotal();
    //获取积分信息
    this.getDetail()
  },
  methods:{
  //返回事件
    backClick(){
      this.$router.back()
    },

    //获取总积分
    getTotal(){
      getTotal().then(res => {
        this.score = res.data+''
        console.log(this.score,'score')
      })
    },
    //获取积分项详细信息
    getDetail(){
      getDetail().then(res => {
        this.list = res.data
        console.log(this.list,'detail')
      })
    },

  }
}
</script>

<style scoped>
.point{
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
</style>