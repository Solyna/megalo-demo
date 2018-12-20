import App from './rule'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '规则设置'
    }
}