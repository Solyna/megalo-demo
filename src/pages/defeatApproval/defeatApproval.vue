<template>
  <div class="container">
      <div class="all-item">
        <image src="../../static/imgs/tick.svg" class="tick"/>
        <div class="right-item">
          <span class="name">续保员可直接标记续保客户战败</span>
        </div>
      </div>
      <div class="all-item" style="border-bottom:1px solid #f4f4f4;margin-left:0;padding-left:15px;">
        <image src="../../static/imgs/tick.svg" class="tick"/>
        <div class="right-item" style="border-bottom:0;">
          <span class="name">续保员可直接标记续保客户战败</span>
        </div>
      </div>
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
  background-color: white;
  // border: 1px solid black;
}
.all-item {
  display: flex;
  flex-direction: row;
  height: 55px;
  background-color: white;
  align-items: center;
  margin-left: 15px;
  border-bottom: 1px solid #f4f4f4;
}
.tick {
  width: 20px;
  height: 20px;
}
.right-item {
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
  align-items: center;
 
}
.name {
  font-size: 16px;
  color: #333;
  margin-left: 15px;
}
</style>