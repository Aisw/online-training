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
    <audio class="play" controls src="http://localhost:8888/file/video"/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
export default {
name: "Music",
  components: {
    NavBar
  },
  methods:{
    backClick(){
      this.$router.back()
    }
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