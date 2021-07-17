<template>
<div>

  <nav-bar class="home-nav">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.png" alt="" >
    </div>
    <div slot="center">学习</div>
  </nav-bar>

  <van-panel v-for="(item,id) in pros" :title="item.name" :key="id" >
    <van-card v-for="(res,id) in item.resNamePathList" :key="id"
              :title="res.name"
              :desc = "res.type"
              :thumb="'http://119.29.199.37:8888/rec/'+res.path" @click="docClick(res)"/>
  </van-panel>
</div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";

import {getProgram} from "../../network/study";

export default {
name: "Study",
  components:{NavBar},
  data(){
  return{
    pros: [],
  }
  },
  created() {
  this.getProgram()
  },
  activated() {
  this.getProgram()
  },
  methods:{
    getProgram(){
      getProgram().then(res => {
        this.pros = res.data
        console.log(this.pros)
      })
    },
    backClick(){
      this.$router.back()
    },
    docClick(res){

      let id = res.id
      if(res.type == 'video'){
        console.log('video',res)
        this.$router.push({
          path: '/video',
          query: {id}
        })
      }else if (res.type == 'music'){
        console.log('music',res)
        this.$router.push({
          path: '/music',
          query: {id}
        })
      }else{
        console.log('dianzishu',res.type)
        this.$router.push({
          path: '/pdf',
          query: {id}
        })
      }

    }
  }
}
</script>

<style scoped>
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