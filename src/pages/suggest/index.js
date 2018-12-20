import App from './suggest'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '意见反馈'
    }
}