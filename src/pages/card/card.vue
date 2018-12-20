<template>
  <div class="container">
    <canvas class="hut-progress-inner" canvas-id="canvasId"></canvas>
    <cover-view class="footer-box">
      <!-- 分享名片 存入相册 -->
      <cover-view class="share" @click="shareCard">分享名片</cover-view>
      <cover-view class="save" @click="saveCard">存入相册</cover-view>
    </cover-view>
  </div>
</template>

<script>
const width = wx.getSystemInfoSync().windowWidth; //屏幕宽度
const height = wx.getSystemInfoSync().windowHeight; //屏幕高度
export default {
  data() {
    return {
      canvasId: "card",
      tmpCanvasImage: null, //最后生成的图片
      //保存相册微信授权
      wxAuthName: null,
      //sa信息
      userInfo: {
        type: Object,
        schema: {
          //头像信息
          faceAttachmentUrl: {
            type: String
          },
          //真实姓名
          realName: {
            type: String
          },
          //店铺职位
          shopPosition: {
            type: String
          },
          //店铺名称
          storeName: {
            type: String
          },
          storeBrand: {
            type: Array,
            items: {
              type: String
            }
          },
          //自我介绍
          selfIntro: {
            type: String
          },
          //手机号
          mobile: {
            type: String
          },
          //店铺地址
          address: {
            type: String
          },
          //微信小程序码
          vxCodeUrl: {
            type: String
          }
        }
      },
      networkImages: {
        bg: {
          url:
            "https://img08.lechebangstatic.com/share/minapp/newCar/saveCard.png",
          tmpUrl: ""
        },
        vip: {
          url: "https://img08.lechebangstatic.com/share/minapp/newCar/vip.png",
          tmpUrl: ""
        },
        phone: {
          url:
            "https://img08.lechebangstatic.com/share/minapp/newCar/phone.png",
          tmpUrl: ""
        },
        location: {
          url:
            "https://img08.lechebangstatic.com/share/minapp/newCar/local.png",
          tmpUrl: ""
        },
        vxCode: {
          url:
            "https://ocpvh3dgz.qnssl.com/f0555fd5-3bfb-46bf-85fb-91758ea7aec7.png",
          tmpUrl: ""
        }
      }
    };
  },

  created() {},
  mounted() {
    this.drawCard();
  },
  computed: {
    width() {
      return width;
    },
    height() {
      return height;
    }
  },
  methods: {
    saveCard() {
      if (!this.tmpCanvasImage) {
        wx.showToast({
          title: "海报正在生成，请稍后保存"
        });
        return;
      }

      wx.saveImageToPhotosAlbum({
        filePath: this.tmpCanvasImage,
        success(res){
           //保存成功
          wx.showToast({
            title: "海报已经保存到系统相册，快去分享吧～"
          });
        },
        fail(err){
          if (err.errMsg && err.errMsg.indexOf("cancel") !== -1) return;
          // 拒绝权限
          this.wxAuthName = "scope.writePhotosAlbum";
          return null;
        }
      })
    },
    drawCard() {
      let ctx = wx.createCanvasContext("canvasId");
      console.log(ctx);
      //加上背景色
      ctx.setFillStyle("#fff");
      ctx.fillRect(10, 10, width - 20, height + 30);

      //绘制头像
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.width / 2, 88, 45, 0, 2 * Math.PI);
      // ctx.setFillStyle("red");
      ctx.fill();
      ctx.clip();
      let url = "../../static/imgs/nini.jpg";
      ctx.drawImage(url, 131, 40, 112, 112);
      ctx.restore(); //恢复之前保存的绘图上下文
      // 绘制昵称
      this.drawOneLineTxt(
        ctx,
        "倪妮",
        this.width / 2 - 50,
        88 + 58,
        "#333",
        20
      );
      // 绘制职位
      this.drawOneLineTxt(ctx, "销售总监", this.width / 2, 88 + 64, "#666", 12);
      // 绘制vip
      this.drawVipIcon(ctx);
      //绘制PhoneIcon
      this.drawPhoneIcon(ctx);
      //绘制店铺电话
      this.drawPhone(ctx);

      //绘制个人简介
      this.drawTextSelfIntro(ctx);

      // 绘制分割线
      ctx.moveTo(30, this.width - 75);
      ctx.setLineWidth(0.5);
      ctx.lineTo(this.width - 30, this.width - 75);
      ctx.setStrokeStyle("#e9e9e9");
      ctx.stroke();

      // 绘制小程序码
      this.drawXcode(ctx);
      //绘制店铺品牌文字
      this.drawOneLineTxt(ctx, "品牌：", 30, 460, "#333", 15);
      this.drawOneLineTxt(ctx, "店铺：", 30, 490, "#333", 15);
      this.drawOneLineTxt(ctx, "地址：", 30, 520, "#333", 15);

      // 绘制品牌
      this.drawBrands(ctx);
      this.drawOneLineTxt(ctx, "上海长宁捷豹路虎4S加盟店", 80, 490, "#333", 15);
      this.drawOneLineTxt(ctx, "上海长宁区凯旋路1188号", 80, 520, "#333", 15);

      new Promise(resolve => {
        ctx.draw(true, function() {
          setTimeout(() => {
            resolve();
          }, 100);
        });
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: 650,
              height: 850,
              canvasId: "canvasId",
              fileType: "jpg",
              quality: 1,
              success(res) {
                resolve(res);
              }
            });
          });
        })
        .then(res => {
          //这里面就是生成的图片数据了
          console.log(res);
          this.tmpCanvasImage = res.tempFilePath;
        });
      // ctx.draw();
    },
    //封装图片绘制
    drawImg(ctx, filePath, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
      if (!filePath) return;
      ctx.drawImage(filePath, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    },
    //绘制头像
    drawCover() {
      let ctx = wx.createCanvasContext(this.canvasId);
      ctx.save();
      ctx.beginPath();
      ctx.arc(96, 96, 56, 0, 2 * Math.PI);
      ctx.setFillStyle("white");
      ctx.fill();
      ctx.clip();
      ctx.drawImage(this.networkImages.vxCode.url, 40, 40, 112, 112);
      ctx.restore();
    },
    //绘制单行文本
    drawOneLineTxt(ctx, str, x, y, fillStyle, fontSize, align = "left") {
      ctx.save();
      ctx.beginPath();
      ctx.setFontSize(fontSize);
      ctx.setTextAlign(align);
      ctx.setFillStyle(fillStyle);
      ctx.setTextBaseline("top");
      ctx.fillText(str, x, y);
      ctx.fill();
      ctx.restore();
    },
    //绘制vipIcon
    drawVipIcon(ctx) {
      //要根据职位文字长度自适应
      // let { shopPosition = '' } = this.userInfo
      let url = "/static/imgs/v.svg";
      let posWidth = ctx.measureText("倪妮").width;

      this.drawImg(ctx, url, this.width / 2 + 30 + posWidth, 88 + 64, 17, 17);
    },
    //绘制honeIcon
    drawPhoneIcon(ctx) {
      let url = "../../static/imgs/tel.svg";
      this.drawImg(ctx, url, this.width / 2 - 50, 88 + 58 + 44, 18, 18);
    },
    //绘制店铺电话
    drawPhone(ctx) {
      this.drawOneLineTxt(
        ctx,
        "187 8509 0909",
        this.width / 2 - 30,
        88 + 58 + 40,
        "#20AB14",
        18
      );
    },

    //绘制个人简介
    drawTextSelfIntro(ctx) {
      // let { selfIntro } = this.userInfo
      let selfIntro = "“ 我拥有专业的汽车相关知识 随时准备竭诚为您服务。 ”";
      // selfIntro = selfIntro || '我拥有专业的汽车相关知识 随时准备竭诚为您服务'
      let maxWidth = 300;

      //获取当前文本的总宽度
      let textWidth = ctx.measureText(selfIntro).width;
      //单行文本
      if (textWidth <= maxWidth) {
        this.drawOneLineTxt(ctx, selfIntro, 200, 200, "#333", 18, "center");
        return;
      }

      //多行文本
      let strArr = selfIntro.split("");
      let dotWidth = 20; //...的宽度
      let sum = 0;
      if (textWidth > maxWidth * 2 - dotWidth) {
        // 计算是否超过2行，如果超过两行，截断并补充...
        let extraSum = 0;
        for (let i = 0; i < strArr.length; i++) {
          extraSum += ctx.measureText(strArr[i]).width;
          if (extraSum >= maxWidth * 2 - dotWidth) {
            selfIntro = selfIntro.slice(0, i) + "...";
            break;
          }
        }
      }

      //现在都变成2行了
      let textArr = [];
      for (let i = 0; i < strArr.length; i++) {
        sum += ctx.measureText(strArr[i]).width;
        if (sum > maxWidth) {
          textArr[0] = selfIntro.slice(0, i);
          textArr[1] = selfIntro.slice(i);
          break;
        }
      }

      //分别绘制每一行
      this.drawOneLineTxt(
        ctx,
        textArr[0],
        this.width / 2,
        220,
        "#3A3E4F",
        18,
        "center"
      );
      this.drawOneLineTxt(
        ctx,
        textArr[1],
        this.width / 2,
        250,
        "#3A3E4F",
        18,
        "center"
      );
    },
    //绘制小程序码
    drawXcode(ctx) {
      // if (!this.networkImages.vxCode.tmpUrl) return
      ctx.save();
      ctx.beginPath();
      ctx.arc(
        this.width / 2 - 50,
        88 + 58 + 40 + 60 + 50 + 30,
        180,
        0,
        2 * Math.PI
      );
      ctx.setFillStyle("red");
      ctx.clip();
      let url = "../../static/imgs/code.png";
      ctx.drawImage(
        url,
        this.width / 2 - 50,
        88 + 58 + 40 + 60 + 50 + 30,
        100,
        100
      );
      ctx.restore();
    },
    //绘制店铺品牌文字
    drawBrand() {
      this.drawOneLineTxt("品牌：", 48, 358, "#ffffff", 24);
    },

    //绘制店铺品牌
    drawBrands(ctx) {
      //这是一个数组，多项品牌，依次绘制
      // let { storeBrand } = this.userInfo
      let storeBrand = ["奇瑞、捷豹、路虎、大众"];
      if (!storeBrand || storeBrand.length < 1) return;

      ctx.setFontSize(13);
      let widthArr = storeBrand.map(item => ctx.measureText(item).width);

      let padRight = 15;
      let startX = 80;

      for (let index = 0; index < storeBrand.length; index++) {
        let item = storeBrand[index];
        let itemWidth = widthArr[index];

        //每循环一次，都需要计算之前的n个文字长度之和 + n个padding + n个整圆
        let x = 0; //之前已有的累积
        let countWidth = 0;
        for (let i = 0; i < index; i++) {
          countWidth += widthArr[i];
        }
        x = countWidth + index * (padRight + 32);

        //这个时候已经放不下最后一个了
        if (x > 500 - itemWidth + padRight) {
          //如果剩余空间大于 更多 两个字，就显示更多
          let moreWidth = ctx.measureText("更多").width;
          if (itemWidth > moreWidth) {
            // this.drawCycleBg(startX + x, 277, moreWidth, 32, '#8c8e98')
            //绘制文本
            this.drawOneLineTxt(ctx, "更多", startX + x, 460, "#333", 15);
          }
          break;
        }

        // this.drawCycleBg(startX + x, 277, itemWidth, 32, '#8c8e98')
        //绘制文本
        this.drawOneLineTxt(ctx, item, startX + x, 460, "#333", 15);
      }
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 65px;
}
.hut-progress-inner {
  display: flex;
  // position: absolute;
  width: 100%;
  height: 100%;
}
.footer-box {
  width: 100%;
  height: 65px;
  background-color: white;
  position: fixed;
  // top:550px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.share {
  // padding: 7px 30px;
  width: 130px;
  height: 35px;
  border: 1px solid #20ab14;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 35px;
  text-align: center;
  border-radius: 3px;
  font-weight: 400;
  font-size: 13px;
  color: #20ab14;
}
.share-text {
  font-weight: 400;
  font-size: 13px;
  color: #20ab14;
}
.save {
  // padding: 7px 30px;
  height: 35px;
  width: 130px;
  border: 1px solid #20ab14;
  background-color: #20ab14;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-weight: 400;
  font-size: 13px;
  color: white;
  line-height: 35px;
  text-align: center;
}
.save-text {
  font-weight: 400;
  font-size: 13px;
  color: white;
}
</style>