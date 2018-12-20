<template>
  <div>
    <div class="container">
      <!-- 进度条 -->
      <div class="canvas-container">
        <Circle
          strokeBgColor="#00AE65"
          strokeColor="#FA5A4B"
  
          strokeWidth="37.5"
          percent="0.2"
          canvasId="progress"
          lineCap="butt"
          strokeBgWidth="30"
        ></Circle>
      </div>
      <!-- 当前余额 -->
      <div class="balance">当前余额
        <div class="right-balance">
          <span class="money">￥</span>
          <span class="money">2500</span>
          <button class="withdraw">提现</button>
        </div>
      </div>
      <div style="background-color:white">
        <!-- tab -->
        <div>
          <div class="tab-title">
            <div :class="tabClass" @click="onClickTab(0)">奖励明细</div>
            <div :class="tabClass1" @click="onClickTab(1)">提现明细</div>
          </div>
        </div>
        <!-- 列表 -->
        <div class="detail-list" v-if="tabNum==0">
          <div class="detail-left">
            <div class="left-top">保养订单好评奖励（5分）</div>
            <div class="left-bot">2016-08-10 15：26</div>
          </div>
          <div class="detail-right">+ ￥15</div>
        </div>
        <!-- 提现明细 -->
        <div class="detail-list" v-if="tabNum==1">
          <div class="detail-left">
            <div class="left-top left-top-review">提现
              <div class="under-review">审核中</div>
            </div>
            <div class="left-bot">2016-08-10 15：26</div>
          </div>
          <div class="detail-right">- ￥150</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Circle from "../../components/Circle";
export default {
  data() {
    return {
      tabNum: 0,
    };
  },
  components: {
    Circle
  },
  computed: {
    tabClass() {
      if (this.tabNum == 0) {
        return "tab-item-act";
      } else {
        return "tab-item";
      }
    },
    tabClass1() {
      if (this.tabNum == 1) {
        return "tab-item-act";
      } else {
        return "tab-item";
      }
    }
  },
  created() {},
  methods: {
    onClickTab(num) {
      this.tabNum = num;
    },
 
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
.canvas-container {
  // position: relative;
  height: 250px;
  background-color: #233c55;
  // padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.balance {
  height: 60px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  color: #666;
  border-bottom: 1px solid #f4f4f8;
  font-size: 16px;
}
.right-balance {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.money {
  color: #fa5a4b;
  font-size: 18px;
}
.withdraw {
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #4e8cee;
  font-size: 13px;
  color: white;
  line-height: 30px;
  text-align: center;
  margin-left: 10px;
}
.tab-title {
  height: 35px;
  background-color: white;
  border-bottom: 1px solid #f4f4f8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 15px;
  margin-right: 15px;
}
.tab-item {
  font-size: 14px;
  color: #666;
  line-height: 35px;
  width: 80px;
  text-align: center;
}
.tab-item-act {
  font-size: 14px;
  color: #4e8cee;
  line-height: 35px;
  border-bottom: 3px solid #4e8cee;
  width: 80px;
  text-align: center;
}
.detail-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px 10px 0;
  background-color: #fff;
  margin-left: 15px;
  border-bottom: 1px solid #f4f4f8;
}
.detail-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.left-top {
  font-size: 15px;
  color: #666;
}
.left-bot {
  font-size: 13px;
  color: #999;
}
.detail-right {
  color: #fa5a4b;
  font-size: 18px;
}
.left-top-review {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.under-review {
  width: 40px;
  height: 15px;
  line-height: 15px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #fa5a4b;
  font-size: 12px;
  color: #fa5a4b;
  margin-left: 5px;
}
.tips {
  position: absolute;
  right: 20px;
  top: 100px;
  color: white;
  font-size: 15px;
}
.lossTips {
  position: absolute;
  left: 20px;
  top: 100px;
  color: white;
  font-size: 15px;
}

</style>