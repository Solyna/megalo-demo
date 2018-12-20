<template>
  <div class="container">
    <template v-for="(item,index) in list">
      <div class="all-item" :key="index" @click="onClick(item.name)">
        <image src="../../static/imgs/tick.svg" class="tick"/>
        <div class="right-item">
          <image src="../../static/imgs/store.png" class="logo"/>
          <span class="name">{{item.name}}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "乐车邦测试架构店"
        },
        {
          name: "SASS测试架构店"
        },
        {
          name: "8888测试架构店"
        }
      ]
    };
  },
  created() {},
  methods: {
    onClick(name) {
      // this.$emit("changeName", name);
      var app = getApp();
      
      app.globalData.storeName = name;
      console.log(app.globalData.storeName);
      wx.navigateBack();
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 10px;
  // border: 1px solid black;
}
.all-item {
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: white;
  align-items: center;
  padding-left: 15px;
}
.right-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f8f8f8;
}
.tick {
  width: 20px;
  height: 20px;
}
.logo {
  width: 50px;
  height: 50px;
  margin-left: 15px;
}
.name {
  font-size: 13px;
  color: #333;
  margin-left: 15px;
}
</style>