<template>
<div class="content">
  <nav-bar class="nav-bar">
    <div slot="center" class="title">
      <div class="title-item">登录</div>
    </div>
  </nav-bar>
  <div class="login-avatar">
    <img src="~assets/img/common/role.png" alt=""/>
  </div>
  <div class="login-content">
    <div class="login">
        <input type="text" placeholder="用户名" v-model="loginForm.username">
        <input type="password" placeholder="密码" v-model="loginForm.password">
    </div>
  </div>
  <div class="login-bot" @click = "loginClick">登录</div>
</div>
</template>

<script>

import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: 'Login',
  components: {NavBar},
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    loginClick(){
      // login(this.loginForm.username,this.loginForm.password).then(res =>{
      //   let a = JSON.parse(res);//将json字符串转换成json对象
      //   if (a.code == 400){
      //     console.log("认证失败")
      //   }else if (a.code == 200){
      //     this.GLOBAL.token = a.data;
      //     this.GLOBAL.profile = '/profileDetail'
      //     this.GLOBAL.isLogin = true
      //     this.indexChanged()
      //     this.$router.push(this.GLOBAL.profile)
      //     console.log(this.GLOBAL.token)
      //   }
      // })
    },
    indexChanged(){
      this.$bu.$emit('indexChanged');
    }
  }
}
</script>

<style>
.content{
  position:absolute;
  top: 0;
  bottom:0;
  left:0;
  right:0;
}

.nav-bar{
  background-color: #008B00;
  color: #fff;
  left: 0;
  right: 0;
}

.login-avatar{
  width: 80px;
  height: 80px;

  position: relative;
  left: 0;
  top: 50px;
  right: 0;
  bottom: 200px;
  margin: auto;

  background-color: bisque;
  border-radius: 50%;
  overflow: hidden;
}
.login-avatar img{
  width: 100%;
  height: 100%;
}
.login{
   margin-top: 120px;
 }
.login input{
  width: 100%;
  height: 44px;

  border: 1px solid black;
  border-radius: 10px;

  font-size: 14px;
}

.login-bot{
  margin-top: 4px;
  margin-left: 20px;
  margin-right: 20px;

  height: 44px;
  background-color: skyblue;
  border-radius: 12px;

  text-align: center;
  font-size: 24px;
}
</style>