import App from './renewClinetSet'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '续保客户跟进规则设置'
    }
}