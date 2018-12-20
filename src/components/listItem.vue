<template>
  <div class="container">
    <div class="list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: ""
  },
  data() {
    return {
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.container {
  background-color: white;
}
.list {
  border-bottom: 1px solid #f4f4f4;
  height: 45px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  color: #666;
}
</style>
