<template>

  <div class="video">
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item">视频</div>
      </div>
    </nav-bar>
    <video ref="myVideo" controls :src="urlPath" @click="videoPlay"/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";

import {setScore} from "../../network/study";

export default {
name: "music",
  components: {
    NavBar
  },
  data(){
    return{
      time: 0,
      urlPath: 'http://119.29.199.37:8888/file/video?id='+this.$route.query.id
    }
  },
  activated() {
    this.urlPath= 'http://119.29.199.37:8888/file/video?id='+this.$route.query.id
    console.log(this.urlPath,'urlPath');
  },
  mounted() {
    // 监听视频播放
    this.$refs.myVideo.addEventListener("play", () => {
      console.log("video is playing",this.$route.query.id);
      this.openTimer();
    });
    // 监听视频暂停
    this.$refs.myVideo.addEventListener("pause", () => {
      console.log("video is stop");
      this.closeTimer();
    });
  },
  methods:{
    backClick(){
      this.$router.back()
    },

    videoPlay(){
      console.log('视频播放')
    },

    // 开启定时器
    openTimer() {
      this.timer = setInterval(() => {
        // this.$emit("videoStudyTime", this.studyTime);
        this.time ++
        console.log(this.time,'open')
      }, 1000);
    },
    // 关闭定时器
    closeTimer() {
      clearInterval(this.timer);
      console.log(this.time,'end')
      setScore(this.$route.query.id,this.time)
      this.time = 0
      // this.$emit("videoStudyTime", this.studyTime);
    },


  }
}
</script>

<style scoped>
.video{
  top: 44px;
  width:100%;
  height: 260px;
}
.nav-bar{
  background-color: #008B00;
  color: #fff;
  left: 0;
  right: 0;
}
.back img{
  width: 30px;
  height: 30px;

  margin-top: 5px;
  margin-left: 10px;
}
.title{
  display: flex;
  font-size: 13px;

}
.title-item{
  flex: 1;
}
.video video{
  width: 100%;
  height: 100%;
  object-fit: fill;
}

</style>