<template>
  <div class="hut-progressbar">
    <canvas v-if="canvasId" :style="canvasUnit" class="hut-progress-inner" :canvas-id="canvasId"></canvas>
    <!-- 损失奖励 -->
    <div
      class="btnBaseStyle"
      :style="{right: width - (greenStartX - liasLength) + 'px', top: greenStartY - liasLength * n - 26 + 'px'}"
      @click="onClickTip('loss')"
    >
      <div class="lossContent">
        <span style="color:#1AAD67;font-size:12px;">￥</span>
        <span style="color:#1AAD67;font-size:18px;">0</span>
        <span style="color:#1AAD67;font-size:12px;">(0%)</span>
      </div>
      <div class="lossContent" style="border-bottom:0">
        <image style="width: 12px; height: 12px;" src="/static/imgs/info.png"/>
        <span style="margin-right: 5px; color: white; font-size: 12px">损失奖励</span>    
      </div>
    </div>
    <!-- 获得奖励 -->
    <div 
      class="btnBaseStyle" 
      @click="onClickTip('get')"
      :style="{left: redStartX + liasLength +'px', top: redStartY + liasLength * n - 26+'px'}">
      <div class="gainContent">
        <span style="color:#F85B52;font-size:12px;">￥</span>
        <span style="color:#F85B52;font-size:18px;">0</span>
        <span style="color:#F85B52;font-size:12px;">(0%)</span>
      </div>
      <div class="gainContent" style="border-bottom:0">
        <image src="/static/imgs/info.png" style="width: 12px; height: 12px;"/>
        <span style="margin-right: 5px; color: white; font-size: 12px">获得奖励</span>
      </div>
    </div>
        <div class="tip-modal" @click="onClickTip" v-if="showTip">
      <div class="tip-content" v-if="showLoss">
        <p class="tip-title">主动抢单且获得用户好评才能得到订单奖励</p>
        <ul>
          <li class="tip-item">
            <div style="color: #999;">* 未主动抢单损失</div>￥315
          </li>
          <li class="tip-item">
            <div style="color: #999;">* 客户未点评损失</div>￥250
          </li>
          <li class="tip-item">
            <div style="color: #999;">* 未得到好评损失</div>￥70
          </li>
        </ul>
      </div>
      <div class="tip-content" v-if="showGet">
        <p class="tip-title">
          您获得的奖励超越了
          <span style="color: #fa5a4b;">67%</span>的用户
        </p>
        <ul>
          <li class="tip-item" style="color: #fa5a4b;">
            <div style="color: #999;">* 订单好评获得</div>￥315
          </li>
          <li class="tip-item" style="color: #fa5a4b;">
            <div style="color: #999;">* 邀请好友获得</div>￥250
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const CANVAS_UNIT = 150;
const width = wx.getSystemInfoSync().windowWidth; //屏幕宽度
const height = (width * 2) / 3; //画布高度250
const gain = 1; //获得奖励
const loss = 5; //损失奖励
const r = 65; //小圆半径
const R = 68.75; //大圆半径
const strokeBgWidth = 30; //小圆描边宽度
const strokeWidth = 37.5; //大圆描边宽度
const liasLength = 25; //45度倾斜线的长度
const total = gain + loss || 1;
const n = gain / total < 0.5 ? -1 : 1; //角度正负
const percent = gain / loss;
const lossNum = (((total - gain) * 100) / total).toFixed(0);
const gainNum = ((gain * 100) / total).toFixed(0);
const greenStartX =
  width / 2 +
  (r + strokeBgWidth / 2) * Math.sin(Math.PI + 1/2 * (gain / total) * 2 * Math.PI);
const greenStartY =
  height / 2 -
  (r + strokeBgWidth / 2) * Math.cos(Math.PI + 1/2 * (gain / total) * 2 * Math.PI);
const redStartX =
  width / 2 + (R + strokeWidth / 2) * Math.sin(1/2 * (gain / total) * 2 * Math.PI);
const redStartY =
  height / 2 - (R + strokeWidth / 2) * Math.cos(1/2 * (gain / total) * 2 * Math.PI);

export default {
  data() {
    return {
      tmpCanvasImage: null,
      showTip: false,
      showLoss: false,
      showGet: true,
    };
  },
  props: {
    // 线条的端点样式
    lineCap: {
      type: String,
      default: "round"
    },
    //canvas临时路径
    tmpCanvasImage: {
      type: String
    },
    // canvasId
    canvasId: {
      type: String,
      required: true
    },
    // 进度百分比
    percent: {
      type: Number,
      default: 0.5
    },
    // canvas 宽度和高度
    unit: {
      type: String,
      default: width
    },
    // 进度条背景颜色
    strokeBgColor: {
      type: String,
      default: "#f3f3f3"
    },
    // 进度条颜色
    strokeColor: {
      type: String,
      default: "#1890ff"
    },
    // 进度条宽度
    strokeWidth: {
      type: Number,
      default: 4
    },
    // 进度条背景宽度
    strokeBgWidth: {
      type: Number,
      default: 4
    },
    // 圆形或者圆形缺口
    strokeType: {
      type: String,
      default: "gap"
    }
  },
  computed: {
    canvasUnit() {
      // return `width:${this.unit}rpx;height:${this.unit}rpx`;
      return `width:${width}px;height:${height}px`;
    },
    width(){
      return width;
    },
    greenStartX(){
      return greenStartX;
    },
    greenStartY(){
      return greenStartY;
    },
    liasLength(){
      return liasLength;
    },
    n(){
      return n;
    },
    redStartX(){
      return redStartX;
    },
    redStartY(){
      return redStartY
    }
  },
  watch: {
    percent(newValue) {
      this.getRpx().then(rpx => {
        let canvasBg = this.canvasId + "-inner";
        this.drawProgress(rpx, newValue, canvasBg);
      });
    }
  },
  methods: {
    // 获取自适应单位
    getRpx() {
      let rpx = 1; // 相对单位
      return new Promise(resolve => {
        wx.getSystemInfo({
          success: function(res) {
            rpx = res.windowWidth / 375;
            resolve(rpx);
          }
        });
      });
    },
    // 进度条背景
    drawProgressbg(rpx, canvasId) {
      // 绘制小圆
      let ctxStart, ctxEnd;
      ctxStart = 0;
      ctxEnd = 2;

      let ctx = wx.createCanvasContext(canvasId);
      ctx.setLineWidth(this.strokeBgWidth); // 设置圆环的宽度
      ctx.setStrokeStyle(this.strokeBgColor); // 设置圆环的颜色
      ctx.setLineCap(this.lineCap); // 设置圆环端点的形状
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        r,
        ctxStart * Math.PI,
        ctxEnd * Math.PI,
        true
      );
      ctx.stroke();
      // ctx.draw();

      // 绘制绿线条
      ctx.moveTo(greenStartX, greenStartY);
      ctx.setLineWidth(2);
      ctx.lineTo(greenStartX - liasLength, greenStartY - liasLength * n);
      ctx.stroke();
      // 绘制横线
      // ctx.moveTo(greenStartX - liasLength, greenStartY - liasLength * n);
      // ctx.setLineWidth(2);
      // ctx.lineTo(greenStartX - liasLength * 3, greenStartY - liasLength * n);
      // ctx.stroke();
      // ctx.draw();

      // 绘制进度条
      ctx.moveTo(-1 / 2, 1);
      let Start, End, Rand;
      Start = -1 / 2;
      End = 1;
      Rand = End - Start; //1.5
      ctx.setLineWidth(this.strokeWidth); // 设置圆环的宽度
      ctx.setStrokeStyle(this.strokeColor); // 设置圆环的颜色
      ctx.setLineCap(this.lineCap); // 设置圆环端点的形状
      ctx.beginPath(); // 开始一个新的路径
      // 画弧线
      ctx.arc(
        width / 2, //圆心的x坐标
        height / 2, //圆心的y坐标
        R, //圆的半径
        Start * Math.PI, //起始弧度（3点钟方向）
        (Start + Rand * percent) * Math.PI, //终止弧度
        false //弧度方向是否逆时针
      );
      ctx.stroke(); //画出当前路径的边框
      // ctx.draw();

      //绘制红色线条/*  */
      ctx.moveTo(redStartX, redStartY);
      ctx.setLineWidth(2);
      ctx.lineTo(redStartX + liasLength, redStartY + liasLength * n);
      // 绘制横线
      // ctx.moveTo(redStartX + liasLength, redStartY + liasLength * n);
      // ctx.setLineWidth(2);
      // ctx.lineTo(redStartX + liasLength * 3, redStartY + liasLength * n);
      ctx.stroke();

      ctx.draw();

      //上面的代码改成纯primose的
      // new Promise(resolve => {
      //   ctx.draw(true, function() {
      //     resolve();
      //   });
      // })
      //   .then(() => {
      //     return new Promise((resolve, reject) => {
      //       wx.canvasToTempFilePath({
      //         x: 0,
      //         y: 0,
      //         width: 650,
      //         height: 850,
      //         canvasId: canvasId,
      //         fileType: "jpg",
      //         quality: 1,
      //         success(res) {
      //           resolve(res);
      //         }
      //       });
      //     });
      //   })
      //   .then(res => {
      //     //这里面就是生成的图片数据了
      //     console.log(res);
      //     this.tmpCanvasImage = res.tempFilePath;
      //   });
    },
    // 进度条
    drawProgress(rpx, value, canvasId) {
      let ctxStart, ctxEnd, ctxRand;
      ctxStart = -1 / 2;
      ctxEnd = 1;

      ctxRand = ctxEnd - ctxStart;
      let ctx = wx.createCanvasContext(canvasId);
      ctx.draw();
      ctx.setLineWidth(this.strokeWidth); // 设置圆环的宽度
      ctx.setStrokeStyle(this.strokeColor); // 设置圆环的颜色
      ctx.setLineCap(this.lineCap); // 设置圆环端点的形状
      ctx.beginPath(); // 开始一个新的路径
      // 画弧线
      ctx.arc(
        (37 * rpx * parseInt(this.unit)) / CANVAS_UNIT, //圆心的x坐标
        (37 * rpx * parseInt(this.unit)) / CANVAS_UNIT, //圆心的y坐标
        (27 * rpx * parseInt(this.unit)) / CANVAS_UNIT, //圆的半径
        ctxStart * Math.PI, //起始弧度（3点钟方向）
        (ctxStart + ctxRand * value) * Math.PI, //终止弧度
        false //弧度方向是否逆时针
      );
      ctx.stroke(); //画出当前路径的边框
      ctx.draw();

      // 画线
      // const endHX = 160 / 2 + (radiusD + strokeW / 2.) * Math.sin(gain / total * Math.PI);
      // const endHY = 160 / 2 - (radiusD + strokeW / 2.) * Math.cos(gain / total * Math.PI);
      // ctx.moveTo(80, 80); //需要移动到圆环的中点

      // ctx.setLineWidth(1);
      // ctx.lineTo(0, 0);
      // ctx.stroke()
      // ctx.draw()
    },
    onClickTip(type) {
      if (type == "loss") {
        this.showLoss = true;
      } else {
        this.showLoss = false;
      }

      if (type == "get") {
        this.showGet = true;
      } else {
        this.showGet = false;
      }

      this.showTip = !this.showTip;
    }
  },
  components: {},
  mounted() {
    this.getRpx().then(rpx => {
      let canvasBg = this.canvasId + "-inner";
      this.drawProgressbg(rpx, this.canvasId);
      this.drawProgress(rpx, this.percent, canvasBg);
    });
  }
};
</script>

<style scoped>
.hut-progressbar {
  position: relative;
  width: 100%;
  height: 250px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hut-progressbar .hut-progress-inner,
.hut-progressbar .hut-text-box,
.hut-progressbar .hut-progress {
  position: absolute;
  width: 100%;
  height: 250px;
}
.hut-progress {
  width: 80px;
  height: 80px;
}
.hut-progressbar .hut-text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.btnBaseStyle {
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  position: absolute;
  height: 44;
  justify-content: space-between;
}
.lossContent{
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #1AAD67;
}
.gainContent{
   display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #F85B52;
}
.tip-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.tip-title {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}
.tip-content {
  background-color: white;
  width: 200px;
  position: absolute;
  top: 35%;
  left: 20%;
  border-radius: 5px;
  color: #333;
  padding: 18px;
}
.tip-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #00ae65;
}
</style>