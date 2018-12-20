<template>
  <div class="container">
    <ListItem no-bottom-line="true" type="input" input-placeholder="请输入天数" left-text="订单类型" no-right-icon="true">
        <div class="day" slot="inputRightView">天</div>
    </ListItem>
    <p class="title">客户维护周期</p>
     <ListItem type="input" input-placeholder="请输入天数" left-text="进入续保期第一次跟进" no-right-icon="true">
        <div class="day" slot="inputRightView">天</div>
    </ListItem>
     <ListItem type="input" input-placeholder="请输入天数" left-text="高意向客户" no-right-icon="true">
        <div class="day" slot="inputRightView">天</div>
    </ListItem>
     <ListItem type="input" input-placeholder="请输入天数" left-text="中意向客户" no-right-icon="true">
        <div class="day" slot="inputRightView">天</div>
    </ListItem>
     <ListItem no-bottom-line="true" type="input" input-placeholder="请输入天数" left-text="低意向客户" no-right-icon="true">
        <div class="day" slot="inputRightView">天</div>
    </ListItem>
  </div>
</template>

<script>
import ListItem from "../../components/leftRightView";
export default {
  data() {
    return {};
  },
  components: {
    ListItem
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.day{
    font-size: 15px;
    color: #333;
    margin-left: 5px;
}
.title{
  margin-left: 15px;
  font-size: 12px;
  color: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>