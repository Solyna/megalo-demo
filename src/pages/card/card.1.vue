<template>
  <div class="container">
    <div class="card-content">
      <image src="../../static/imgs/nini.jpg" class="avator"/>
      <div class="name-box">
        <span class="name">倪妮</span>
        <span class="position">销售总监</span>
        <image src="../../static/imgs/v.svg" class="v-card"/>
      </div>
      <div class="mobile-box">
        <image src="../../static/imgs/tel.svg" class="tel-svg"/>
        <span class="mobile">182 8888 8888</span>
      </div>
      <!-- 个人介绍 -->
      <div class="info-box">
        <span class="info-text">“ 请填写个人介绍请填写个人介绍请填写个人介绍请填写个人介绍。 ”</span>
      </div>
      <div class="middle_line"></div>
      <!-- 企业微信二维码 -->
      <div class="qr_code_box">
        <image src="../../static/imgs/not_support.svg" class="not_support_svg"/>
        <span class="not_support_text">请联系管理员上传企业微信二维码</span>
      </div>
      <!-- 品牌、店铺、地址 -->
      <div class="brand-info-box">
        <div class="band-info-item">
          <span class="info-left">品牌:</span>
          <span class="info-right">奇瑞、捷豹、路虎</span>
        </div>
        <div class="band-info-item">
          <span class="info-left">店铺:</span>
          <span class="info-right">上海长宁捷豹路虎4S加盟店</span>
        </div>
        <div class="band-info-item">
          <span class="info-left">地址:</span>
          <span class="info-right">上海长宁区凯旋路1188号</span>
        </div>
      </div>
    </div>
     <!-- 分享名片 存入相册 -->
      <div class="footer-box">
        <div class="share">
          <span class="share-text">分享名片</span>
        </div>
        <div class="save">
          <span class="save-text">存入相册</span>
        </div>
      </div>
      
  </div>
</template>

<script>
import List from '../../components/List';
export default {
  data() {
    return {
      
    };
  },
  created() {},
  computed:{
  
  },
  methods: {
    
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
  // border: 1px solid black;
}
.card-content{
  margin: 10px;
  margin-bottom: 90px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
}
.avator{
  width: 90px;
  height: 90px;
  margin-top: 24px;
  border-radius: 50%;
}
.name-box{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.v-card{
  width: 15px;
  height: 15px;
}
.name{
  font-weight: bold;
  font-size: 20px;
  color: #333;
  margin-right: 10px;
}
.position{
  font-size: 12px;
  color: #666;
  margin-right: 7px;
}
.mobile-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.tel-svg{
  width: 17px;
  height: 17px;
  margin-right: 7px;
}
.mobile{
  font-weight: bold;
  color: #20AB14;
  font-size: 17px;
}
.info-box{
  margin-top: 20px;
  padding-left: 28px;
  padding-right: 28px;
}
.info-text{
  font-weight: 400;
  font-size: 16px;
  color: #333;
  line-height: 20px;
}
.middle_line{
  margin-top: 34px;
  margin-left: 25px;
  margin-right: 25px;
  height: 1px;
  width:  325px;
  background-color: #dbdbdb
}
.qr_code_box{
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.not_support_svg{
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
}
.not_support_text{
  font-size: 14px;
  color: #999;

}
.brand-info-box{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding-left: 20px;
}
.band-info-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 30px;
}
.info-left{
  color: #666;
  font-size: 14px;
  margin-right: 10px;
}
.info-right{
  font-weight: 400;
  font-size: 14px;
  color: #333;

}
.footer-box{
  width: 100%;
  height: 65px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.share{
  padding: 7px 30px;
  border:1px solid #20AB14;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}
.share-text{
  font-weight: 400;
  font-size: 13px;
  color: #20AB14;
}
.save{
  padding: 7px 30px;
  border: 1px solid #20AB14;
  background-color:  #20AB14;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}
.save-text{
  font-weight: 400;
  font-size: 13px;
  color: white;
}

</style>