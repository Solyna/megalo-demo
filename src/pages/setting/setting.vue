<template>
  <div class="container">
    <div style="margin-top:10px;">
      <ListItem>个人资料</ListItem>
      <ListItem>关于我们</ListItem>
      <ListItem>隐私政策</ListItem>
    </div>
    <div class="btn">退出登录</div>
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
.btn{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18x;
  color: #4E8CEE;
  background-color: white;
  margin-top: 10px;
}
</style>