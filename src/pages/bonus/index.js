import App from './bonus'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()
export default {
    config: {
        navigationBarTitleText: '我的奖金'
    }
}
