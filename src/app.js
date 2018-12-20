import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [  
      'pages/my/index',
      'pages/index/index',
      'pages/message/index',
      'pages/suggest/index',
      'pages/bonus/index',
      'pages/setting/index',
      'pages/rule/index',
      'pages/cardData/index',
      'pages/changeStore/index',
      'pages/problem/index',
      'pages/card/index',
      'pages/myFeedBack/index',
      'pages/feedBackDetail/index',
      'pages/renewClinetSet/index',
      'pages/defeatApproval/index',
      'pages/InsuranceAllotSet/index'

    ],
    tabBar: {
      color: '#333',
      selectedColor: '#007d37',
      list: [  
        {
          pagePath: 'pages/my/index',
          text: '我的',
          iconPath: '/static/imgs/mine.png',
          selectedIconPath: '/static/imgs/mine_on.png',
        },  
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: '/static/imgs/home.png',
          selectedIconPath: '/static/imgs/home_on.png',
        },
        {
          pagePath: 'pages/message/index',
          text: '消息',
          iconPath: '/static/imgs/mine.png',
          selectedIconPath: '/static/imgs/mine_on.png',
        },
        
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '乐车邦',
      navigationBarTextStyle: 'black'
    }
  }
}