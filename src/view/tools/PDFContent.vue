<template>
  <div class="video">
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item">电子书</div>
      </div>
    </nav-bar>


    <div class="pdf" v-show="fileType === 'pdf'">


      <pdf
          :src="src"
      :page="currentPage"
      @num-pages="pageCount=$event"
      @page-loaded="currentPage=$event"
      @loaded="loadPdfHandler">
      </pdf>
      <p class="arrow">
        <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">上一页</span>
        {{currentPage}} / {{pageCount}}
        <span @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">下一页</span>
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import pdf from 'vue-pdf'
import {setScore} from "../../network/study";
export default {
  name: "PDF",
  components: {
    NavBar,
    pdf
  },
  data(){
    return{

      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: 'pdf', // 文件类型
      src: 'http://119.29.199.37:8888/file/video?id='+this.$route.query.id,
      time: 0,
      resId: 0,
    }
  },
// created() {
//   this.src = pdf.createLoadingTask(data.wjdz) // pdf地址
//
// },
  activated() {
    this.src= 'http://119.29.199.37:8888/file/video?id='+this.$route.query.id
    this.resId = this.$route.query.id
    this.timer = setInterval(() => {
      // this.$emit("videoStudyTime", this.studyTime);
      this.time ++
      console.log(this.time,'pdf-open')
    }, 1000);
    console.log(this.src);
  },
  deactivated() {
    clearInterval(this.timer);
    console.log(this.time,'pdf-end')
    setScore(this.resId,this.time)
    this.time = 0
    this.resId = 0
  },
  methods:{
    backClick(){
      this.$router.back()
    },

// 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage (val) {
      // console.log(val)
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--
        // console.log(this.currentPage)
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++
        // console.log(this.currentPage)
      }
    },
    // pdf加载时
    loadPdfHandler () {
      this.currentPage = 1 // 加载的时候先加载第一页
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