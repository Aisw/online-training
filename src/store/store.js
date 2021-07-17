import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        login: false,
        loginURL: '/login',
    },

    getters: {
        getLogin:state => {
            return state.login
        },
        getLoginURL:state => {
            console.log(state.loginURL,'getloginurl')
            return state.loginURL
        }
    },

    mutations: {
        //所有mutations中的方法的第一个参数一定是state变量，用来进行对state中的状态的操作
        //第二个参数是可选参数，用于调用该 mutations 方法的时候传参
        setLogin (state) {
            state.login = true
        },
        setLogout(state){
            state.login = false
        },

        setLoginURL (state,url) {
            state.login = url
            console.log(url,'url')
        },
        setLogoutURL(state,url){
            state.login = url
        },
        // addNewBook (state, book) {
        //     state.books.unshift(book)
        // }
    }
})

export default store