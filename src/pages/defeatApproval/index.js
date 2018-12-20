import App from './defeatApproval'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '战败客户审核流程设置'
    }
}