import App from './cardData'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '名片资料'
    }
}