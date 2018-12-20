<template>
  <div class="container">
    <p class="title">续保业务规则设置</p>
    <navigator url="../renewClinetSet/index">
      <ListItem>续保客户跟进规则设置<image class="go" src="../../static/imgs/go.svg"/></ListItem>
    </navigator>
    <navigator url="../defeatApproval/index">
      <ListItem>战败客户跟进规则设置<image class="go" src="../../static/imgs/go.svg"/></ListItem>
    </navigator>
    <navigator url="../InsuranceAllotSet/index">
      <ListItem>新增续保客户分配规则设置<image class="go" src="../../static/imgs/go.svg"/></ListItem>
    </navigator>
  </div>
</template>

<script>
import ListItem from "../../components/listItem";
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
.title{
  margin-left: 15px;
  font-size: 12px;
  color: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.go {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
}
</style>