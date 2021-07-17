<template>
  <div class="recommend">
    <div class="recommend-item">
      <img src="~assets/img/home/study.png" alt="" @click="studyClick">
      <div>学习</div>
    </div>

    <div class="recommend-item">
      <img src="~assets/img/home/integral.png" alt="" @click="pointsClick">
      <div>积分</div>
    </div>

  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "HomeRecommendView",
  data(){
    return{

    }
  },
  methods:{
    studyClick(){
      if (this.$store.getters.getLogin == false){
        Toast('未登录')
        console.log('false')
      }else{
        console.log('true')
        this.$router.push('/study')
      }

      // console.log(this.$store.getters.getLogin,'login')
    },
    pointsClick(){
      // if (this.$store.getters.getLogin == false){
      //   Toast('未登录')
      //   console.log('false')
      // }else{
        console.log('true')
        this.$router.push('/point')
      // }

    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding:10px 0 20px;
    border-bottom: 8px solid #eee;

  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 38px;
    height: 36px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
