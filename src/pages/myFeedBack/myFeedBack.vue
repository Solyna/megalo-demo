<template>
  <div class="container">
      <!-- tip -->
      <div class="tip-content">
        <span class="tip-text">提交优质反馈，经采纳后可获得500元现金奖励！</span>
      </div>
      <!-- list -->
      <navigator url="../feedBackDetail/index">
        <div class="list-content">
          <div class="list-item">
            <div class="list-top">
              <div class="top-container">
                <div class="top-title">
                  <div class="line"></div>
                  <span class="category">新车销售类</span>
                </div>
                <div class="suggest">建议新车零售可以按照自己的编辑查看业务报表建议新车零售可以按照自己的编辑查看业务报表建议新车零售可以按照自己的编辑查看业务报表！</div>
                
              </div>
              <div class="image-status">
                <image src="../../static/imgs/c1@2x.png" class="image-item"/>
              </div>
            </div>
            <span class="list-time">2018-10-23 20:33</span>
          </div>
        </div>
      </navigator>
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
   
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // border: 1px solid black;
}
.tip-content{
  padding: 10px 20px;
  background-color: #fffae6;
  margin-bottom: 10px;
  display: flex;
}
.tip-text{
  font-size: 13px;
  color: #fa5a4b;
}
.list-content{
  width: 100%;
  background-color: white;
}
.list-item{
  margin-left: 15px;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 15px 0;
}
.list-top{
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.top-container{
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  width: 85%;
}
.top-title{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 7px;
}
.suggest{
  font-size: 14px;
  color: #333;
  margin-left: 8px;
  line-height: 20px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.line{
  width: 4px;
  height: 12px;
  background-color: #5FB9FF;
  margin-right: 5px;
}
.category{
  font-size: 14px;
  color: #5FB9FF;
}
.image-status{
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-item{
  width: 50px;
  height: 45px;
}
.list-time{
  font-size: 13px;
  color: #999;
  text-align: right;
}
</style>