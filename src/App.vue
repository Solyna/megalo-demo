
<script>
export default {
  mpType: "app",
  onLaunch: function(options) {
    // Do something initial when launch.
    console.log("App onLaunch");
  },
  onShow: function(options) {
    // Do something when show.
    console.log("App onShow");
  },
  onHide: function() {
    // Do something when hide.
    console.log("App onHide");
  },
  onError: function(msg) {
    console.log("App onError");
    console.log(msg);
  },
  globalData() {
    return {
      storeName: "乐车邦默认测试店铺"
    };
  }
};
</script>
<style lang="less">
page {
  background-color: #f4f4f8;
  color: #333;
  width: 100%;
  height: 100%;
}
</style>




