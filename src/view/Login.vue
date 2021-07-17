<template>
  <div class="content">

    <nav-bar class="nav-bar">
      <div slot="center" class="title">
        <div class="title-item">登录</div>
      </div>
    </nav-bar>

    <van-form @submit="loginClick">
      <van-field
          v-model="loginForm.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"/>

      <van-field
          v-model="loginForm.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"/>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";

import {login} from "../network/login";
import {Notify} from "vant";

export default {
  name: 'Login',
  components: {
    NavBar
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    loginClick(){
      console.log(this.loginForm,'loginForm')
      login(this.loginForm.username,this.loginForm.password).then(res => {
        let a = JSON.parse(res);//将json字符串转换成json对象
        if (a.code == 200) {
          console.log(a.data,'token')
          localStorage.setItem('token', a.data)
          // 成功通知
          Notify({type: 'success', message: '登录成功'});
          this.$store.commit('setLogin')
          // this.$store.commit('setLoginURL','/profile')


          this.$bu.$emit('indexChanged')
          this.$router.replace('/profile')
          this.loginForm.username = ''
          this.loginForm.password = ''
        } else {
        // 危险通知
          Notify({ type: 'danger', message: '登录失败' });
        }
      })
    },
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

.login-avatar img{
  width: 100%;
  height: 100%;
}

.login input{
  width: 100%;
  height: 44px;

  border: 1px solid black;
  border-radius: 10px;

  font-size: 14px;
}

</style>