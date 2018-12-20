
# megalo-demo

### 1.运行

微信小程序：

```bash
npm run dev:wechat
```

支付宝小程序：

```bash
npm run dev:alipay
```

百度智能小程序：

```bash
npm run dev:swan
```
### 2.采坑指南

1. 跳转到底部tab对应的页面时，需要用到wx.switchTab
2. 小程序背景图不能是本地图片，必须是服务器上的
3. 小程序不支持：position：sticky
4. scroll-view内部要使用弹性布局，必须用view包一层，并且设置flex：1，否则弹性布局无效。
5. 调用wx.getUserInfo方法，默认返回的城市和省份字段是英文的，可以添加lang=‘zh-CN’，返回中文
6. 小程序的块级元素，默认都是overflow:hidden
7. 调用wx.openSetting打开授权界面时，必须由button组件调起或者点击事件，不能由js主动调起。
8. 要支持async  await 需要安装regenerator库(npm install regenerator)，引入regenerator.js
***
9. canvas不显示问题，需要 检查下page是否有高度，一般在app.js里将page的宽高设置100%
10. canvas图片
>   1. 不能直接使用网络图片，在真机上画不出  
        * 思路1：调用wx.getImageInfo下载网络图片到本地路径
        * 思路2：用ctx.drawImage绘制图片
>   2. 不能圆角、图片如果是方形的不会再处理 
