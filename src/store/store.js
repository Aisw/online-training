import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: false,
    },
    getters: {
        getLogin:state => {
            return state.login
        }
    },
    mutations: {
        //所有mutations中的方法的第一个参数一定是state变量，用来进行对state中的状态的操作
        //第二个参数是可选参数，用于调用该 mutations 方法的时候传参
        setLogin (state, login) {
            state.login = login
        },
        // addNewBook (state, book) {
        //     state.books.unshift(book)
        // }
    }
})

export default store