import App from './my'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarTitleText: '我的',
        // backgroundTextStyle: 'light',
        // navigationBarBackgroundColor: '#297fde',
        // navigationBarTextStyle: 'white'
    }
}