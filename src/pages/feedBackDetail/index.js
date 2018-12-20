import App from './feedBackDetail'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '反馈详情'
    }
}