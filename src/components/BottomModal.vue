<template>
  <div class="container">
    <div class="content">
      <div class="title" v-if="title">{{title}}</div>

      <ul class="list" @click="onClick">
        <template v-for="item in list">
          <li class="list-item" :key="item.id">{{item.name}}</li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "bottom-modal",
  props: ["isShow", "list", "title"],
  data() {
    return {
      //   isShow: false
    };
  },
  computed: {
    is_show() {
      return this.isShow;
    }
  },
  mounted() {},
  methods: {
    onClick() {
      console.log("onClick", this.is_show);
      let data = !this.is_show;
      this.$emit("child-say", data);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.content {
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title {
  font-size: 16px;
  color: #333;
  text-align: center;
  line-height: 50px;
  border-bottom: 0.5px solid #e9e9e9;
}
.list {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.list-item {
  height: 50px;
  margin-left: 15px;
  font-size: 14px;
  color: #666;
  border-bottom: 0.5px solid #e9e9e9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>
