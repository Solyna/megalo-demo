<template>
  <div class="container">
      <div class="titleBox">
        <span class="title">个人信息</span>
      </div>
      <List>  
          <span>姓名</span>
          <span class="rightText">宋玲</span>    
      </List>
      <List>  
          <span>手机号</span>
          <span class="rightText">13800000000</span>    
      </List>
      <div style="background-color:white">
        <div @click="onClickModal" class="avator-list">
          <span>头像</span>
          <image class="avator" :src="photoHidden?default_photo:image_photo"/>    
        </div>
      </div>
      <List>  
          <span>微信</span>
          <span class="rightText">预览<image class="go" src="../../static/imgs/go.svg"/></span>    
      </List>
      <div class="list">
        <span class="list-text">个人介绍</span>
        <textarea 
          placeholder="请填写30字左右个人介绍"
          placeholder-style="font-size: 13px;color: #999;" 
          class="textarea" cols="30" rows="10"></textarea>
      </div>
      <div class="titleBox">
        <span class="title">职业信息</span>
      </div>
      <List>  
          <span>4S店</span>
          <span class="rightText">新组织架构测试店</span>    
      </List>
      <List>  
          <span>主营品牌</span>
          <span class="rightText">国产斯柯达</span>    
      </List>
      <List>  
          <span>职位</span>
          <input class="rightText text-input" placeholder="请填写职位"/> 
      </List>
      <List>  
          <span>地址</span>
          <span class="rightText">贵州省</span>    
      </List>
    <!-- <div class="btn">保存</div> -->
    <!--相机弹框 -->
    <div class="modal" v-if="showChoose" @click="onClickModal">
      <div class="content">
        <div class="modal-item" @click="chooseImage('camera')">拍照</div>
        <div class="modal-item" @click="chooseImage('album')">从本机相册中选取</div>
        <div class="modal-item modal-cancel" @click="onClickModal">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import List from '../../components/List';
export default {
  data() {
    return {
      image_photo:"http://tmp/wxf05e9bce118be9c5.o6zAJszRIpJSM6YTmRvrAHCc1mUE.t5bpcIApW98z0dfdcc6b05df12b499476bae18c78385.jpg",
      photoHidden: true,
      showChoose:false,
      default_photo:"../../static/imgs/header@2x.png"
    };
  },
  created() {},
  computed:{
  
  },
  methods: {
    onClickModal(){
      var that = this
      that.showChoose=!that.showChoose;
    },
    chooseImage(type){
      var that = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: [type], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
 
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          console.log(res)
          that.image_photo=tempFilePaths[0];
          console.log(that.image_photo);
          that.photoHidden=false;

          that.showChoose=false;
        }
      })
    }
  },
  components:{
    List
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #f4f4f8;
  // border: 1px solid black;
}
.titleBox {
  width: 100%;
  padding-left: 15px;
  height: 23px;
  display: flex;
  align-items: center;
}
.title{
  font-size: 12px;
  color: #333;
}
.avator{
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.list {
  border-bottom: 1px solid #f4f4f4;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #333;
  background-color: white;
}
.avator-list {
  background-color: white;
  border-bottom: 1px solid #f4f4f4;
  height: 45px;
  margin-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #333;
}
.list-text{
  line-height: 45px;
  text-align:left;
}
.textarea{
  width: 94%;
  height: 77px;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
  padding: 5px 10px 5px 10px;
}
.go{
  width: 12px;
  height: 12px;
  margin-left: 5px;
}
.rightText{
  font-size: 14px;
  color: #999;
}
.text-input{
  text-align: right;
}
.btn{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18x;
  background-color: #4E8CEE;
  color: white;
  margin-top: 100px;
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // z-index: 1;
}
.modal{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 888;
}
.content{
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 999;
  background-color: #f4f4f8;
}
.modal-item{
  height: 45px;
  background-color: white;
  text-align: center;
  color: #333;
  font-size: 15px;
  line-height: 45px;
  border-bottom: 1px solid #f4f4f4;
}
.modal-cancel{
  margin-top: 10px;
}
</style>