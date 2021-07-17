<template>
<div>
  <nav-bar class="home-nav">
    <div slot="left" class="back">
      <img src="~assets/img/common/role.png" alt="">
    </div>
    <div slot="center">{{ person.name }}</div>
  </nav-bar>

  <van-cell-group>
    <van-cell title="名称" :value="person.name" />
    <van-cell title="性别" :value="person.sex"/>
    <van-cell title="生日" :value="person.birthday"/>
    <van-cell title="电话" :value="person.phone"/>
    <van-cell title="第一学历" :value="person.firstDegree"/>
    <van-cell title="单位" :value="person.unit"/>
    <van-cell title="职位" :value="person.station"/>
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="logout">退出</van-button>
  </div>
</div>

</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import {getPerson} from "../../network/home";
import {logout} from "../../network/login";
import {Notify} from "vant";

export default {
name: "Profile",
  created() {
  this.getPerson()
  },
  components:{
    NavBar
  },
  data(){
    return{
      person: Object
    }
  },
  methods:{
  //获取个人信息
    getPerson(){
      getPerson().then(res => {
        console.log(res,'employee');
        this.person = res.data
        console.log(this.person,'person');
      })
    },

    //退出
    logout(){
      logout().then(res => {
        // 成功通知
        Notify({type: 'success', message: res.data});
      })
      localStorage.setItem('token','')

      this.$store.commit('setLogout')
      // this.$store.commit('setLogoutURL')
      this.$router.replace('/login')
      this.$bu.$emit('indexChanged')
      // this.$router.push('/login')
    }
  },
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