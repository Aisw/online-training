<template>
  <div class="video">
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item">音频</div>
      </div>
    </nav-bar>
    <audio ref="music" controls :src="urlPath"/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import {setScore} from "../../network/study";

export default {
name: "Music",
  components: {
    NavBar
  },
  data(){
    return{
      time:0,
      urlPath: 'http://119.29.199.37:8888/file/video?id='+this.$route.query.id
    }
  },
  mounted() {
    // 监听视频播放
    this.$refs.music.addEventListener("play", () => {
      console.log("music is playing");
      this.time ++
      this.openTimer();
    });
    // 监听视频暂停
    this.$refs.music.addEventListener("pause", () => {
      console.log("music is stop");
      setScore(this.$route.query.id,this.time)
      this.time = 0
      this.closeTimer();
    });
  },
  activated() {
    this.urlPath= 'http://119.29.199.37:8888/file/video?id='+this.$route.query.id
    console.log(this.urlPath);
  },
  methods:{
    backClick(){
      this.$router.back()
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
.video audio{
  width: 100%;
  height: 100%;
  object-fit: fill;
}

</style>