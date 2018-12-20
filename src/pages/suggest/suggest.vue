<template>
  <div class="container">
    <div class="list-item">
      <span class="item-span">请选择问题分类</span>
      <image class="go" src="../../static/imgs/go.svg"/>
    </div>
    <div class="textarea">
      <textarea
        class="textarea-content"
        placeholder="请输入您的意见,我们会做的更好！"
        placeholder-style="font-size: 13px;color: #999;"
        name
        id="1"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="upload-container">
      <div class="upload-files">
        <template v-for="(item,index) in files">
          <div class="upload-bg" :key="index">
            <!-- http://tmp/wxf05e9bce118be9c5.o6zAJszRIpJSM6YTmRvrAHCc1mUE.S5W477eTwvxP102f0301a9e8b89d73c1ee6482ffa791.jpg -->
            <image class="weui-uploader__img" :src="item" mode="scaleToFill"/>
          </div>
        </template>

        <div class="upload-bg" @click="chooseImage">
          <span class="upload-bg-text">
            <image class="add" src="../../static/imgs/add.svg"/>
          </span>
        </div>
      </div>
      <p class="upload-title">可上传1-5张图片</p>
    </div>
    <navigator url="../myFeedBack/index">
      <div class="list-item">
        <span class="item-span">我的反馈</span>
        <image class="go" src="../../static/imgs/go.svg"/>
      </div>
    </navigator>
    
    <div class="btn">保存</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      maxImg: 5,
      files: [],
      hideChoose: false
    };
  },
  created() {},
  methods: {
    chooseImage(e) {
      let i = 0; // 多图上传时使用到的index
      let that = this;
      let max = that.maxImg; //最大选择数
      let upLength; //图片数组长度
      let imgFilePaths; //图片的本地临时文件路径列表
      wx.chooseImage({
        count: max || 1, //一次最多可以选择的图片张数
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          let len = that.files.concat(res.tempFilePaths);
          console.log(res);

          imgFilePaths = res.tempFilePaths;
          upLength = imgFilePaths.length;
          if (len.length > max) {
            wx.showToast({ title: `图片最多只能选择${max}张`, icon: "none" });
            return false;
          }
          /**
           * 上传完成后把文件上传到服务器
           */
          wx.showLoading({
            title: "上传中..."
          });
          that.files = len;
          console.log(that.files);
          if (that.files.length > 0) {
            wx.hideLoading();
          }
          // if (that.files.length == max) {
          //   that.hideChoose = true;
          // }
          // that.upLoad(imgFilePaths, i, upLength); //上传操作
        },
        fail: function() {
          console.log("fail");
        },
        complete: function() {
          console.log("commplete");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  // border: 1px solid black;
}
.list-item {
  background-color: white;
  border-bottom: 1px solid #f4f4f4;
  height: 50px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}
.go {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
}
.item-span {
  font-size: 15px;
  color: #666;
}
.textarea {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.textarea-content {
  width: 80%;
  height: 80px;
  border: 1px solid #f4f4f4;
  padding: 5px 15px 5px 15px;
  margin-top: 10px;
  border-radius: 2px;
}
.upload-container {
  padding: 10px 15px 5px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  flex-wrap: wrap;
}
.upload-bg {
  width: 65px;
  height: 65px;
  background-color: #f4f4f8;
  line-height: 65px;
  text-align: center;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.upload-bg-text {
  font-size: 20px;
}
.upload-files {
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.upload-title {
  font-size: 13px;
  color: #999;
  margin-top: 10px;
}
.weui-uploader__img {
  display: block;
  width: 65px;
  height: 65px;
  border-radius: 4px;
}
.add {
  width: 18px;
  height: 18px;
}
.btn{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18x;
  background-color: #4E8CEE;
  color: white;
  position: absolute;
  bottom: 0;
}
</style>