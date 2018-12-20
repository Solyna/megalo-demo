<template>
  <div class="container">
    <div class="list">
        <!-- <span>{{leftName}}</span>
        <image v-if="imageSrc" class="avator" :src="imageSrc"/>  -->
      <!-- <slot name="leftName"></slot> -->
      <!-- <slot name="imageSrc"></slot> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        leftName:{
            type: String,
        },
       imageSrc:{
           type: String, 
       } 
    },
//   props: ['leftName','imageSrc'],
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
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #333;
}
</style>
