<template>
  <div class="hut-progressbar">
    <canvas v-if="canvasId" :style="canvasUnit" class="hut-progress-inner" :canvas-id="canvasId"></canvas>
    <canvas
      v-if="canvasId"
      :style="canvasUnit"
      class="hut-progress"
      :canvas-id="canvasId + '-inner'"
    ></canvas>
    <div class="hut-text">
      <slot name="txt"></slot>
    </div>
  </div>
</template>

<script>
const CANVAS_UNIT = 150;
export default {
  data() {
    return {
      tmpCanvasImage: null
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
      default: "150"
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
    strokeBgWidth:{
      type:Number,
      default:4
    },
    // 圆形或者圆形缺口
    strokeType: {
      type: String,
      default: "gap"
    }
  },
  computed: {
    canvasUnit() {
      return `width:${this.unit}rpx;height:${this.unit}rpx`;
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
      let ctxStart, ctxEnd;
      ctxStart = 0;
      ctxEnd = 2;

      let ctx = wx.createCanvasContext(canvasId);
      ctx.setLineWidth(this.strokeBgWidth); // 设置圆环的宽度
      ctx.setStrokeStyle(this.strokeBgColor); // 设置圆环的颜色
      ctx.setLineCap(this.lineCap); // 设置圆环端点的形状
      ctx.beginPath();
      ctx.arc(
        (37 * rpx * parseInt(this.unit)) / CANVAS_UNIT,
        (37 * rpx * parseInt(this.unit)) / CANVAS_UNIT,
        (25 * rpx * parseInt(this.unit)) / CANVAS_UNIT,
        ctxStart * Math.PI,
        ctxEnd * Math.PI,
        true
      );
      ctx.stroke();
      // ctx.draw();
      //上面的代码改成纯primose的
      new Promise(resolve => {
        ctx.draw(true, function() {
          resolve();
        });
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: 650,
              height: 850,
              canvasId: canvasId,
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
      // yield new Promise(resolve => {
      //     this.ctx.draw(true, function() {
      //       console.log('ctx.draw')
      //       resolve()
      //     })
      //   })
      //   let { tempFilePath: tmp } = yield wx.canvasToTempFilePath({
      //     x: 0,
      //     y: 0,
      //     width: 650,
      //     height: 850,
      //     canvasId: canvasId,
      //     fileType: 'jpg',
      //     quality: 1
      //   })
      //   this.tmpCanvasImage = tmp
      //   console.log('0000',tmp)
    },
    // 进度条
    drawProgress(rpx, value, canvasId) {
      let ctxStart, ctxEnd, ctxRand;
      ctxStart = - 1 / 2;
      ctxEnd = 1;

      ctxRand = ctxEnd - ctxStart;
      let ctx = wx.createCanvasContext(canvasId);
      ctx.draw();
      ctx.setLineWidth(
        this.strokeWidth); // 设置圆环的宽度
      ctx.setStrokeStyle(this.strokeColor); // 设置圆环的颜色
      ctx.setLineCap(this.lineCap); // 设置圆环端点的形状
      ctx.beginPath(); // 开始一个新的路径
      // 画弧线
      ctx.arc(
        (37 * rpx * parseInt(this.unit)) / CANVAS_UNIT,//圆心的x坐标
        (37 * rpx * parseInt(this.unit)) / CANVAS_UNIT,//圆心的y坐标
        (27 * rpx * parseInt(this.unit)) / CANVAS_UNIT,//圆的半径
        ctxStart * Math.PI,//起始弧度（3点钟方向）
        (ctxStart + ctxRand * value) * Math.PI,//终止弧度
        false//弧度方向是否逆时针
      );
      ctx.stroke();//画出当前路径的边框
      ctx.draw();

    // 画线
      // const endHX = 160 / 2 + (radiusD + strokeW / 2.) * Math.sin(gain / total * Math.PI);
      // const endHY = 160 / 2 - (radiusD + strokeW / 2.) * Math.cos(gain / total * Math.PI);
      // ctx.moveTo(80, 80); //需要移动到圆环的中点

      // ctx.setLineWidth(1);
      // ctx.lineTo(0, 0);
      // ctx.stroke()
      // ctx.draw()
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
  width: 80px;
  height: 80px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hut-progressbar .hut-progress-inner,
.hut-progressbar .hut-text-box,
.hut-progressbar .hut-progress {
  position: absolute;
  width: 80px;
  height: 80px;
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
</style>