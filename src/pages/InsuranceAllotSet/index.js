import App from './InsuranceAllotSet'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '新增续保客户分配设置'
    }
}