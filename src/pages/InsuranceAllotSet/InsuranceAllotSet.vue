<template>
  <div class="container">
      <div class="all-item">
        <image src="../../static/imgs/tick.svg" class="tick"/>
        <div class="right-item">
          <span class="name">按照客户类型平均分配</span>
        </div>
      </div>
      <div class="all-item">
        <image src="../../static/imgs/tick.svg" class="tick"/>
        <div class="right-item" style="border-bottom:0;">
          <span class="name">按照成交率分配，成交率高的续保员分配更多客户</span>
        </div>
      </div>
      <div class="last-item">
          <div class="input-item">
              <span class="name">成交率第一分配比例上浮</span>
              <input placeholder="成交率" class="input"/>
              <span class="name">%</span>
          </div>
          <!-- 表格数据 -->
          <table class="table-container">
              <thead class="thead-container">
                  <th class="thead-th">排名</th>
                  <th class="thead-th">续保员</th>
                  <th class="thead-th">成交率</th>
                  <th class="thead-th">分配比例</th>
              </thead>
              <tbody>
                  <tr class="tbody-container">
                      <td class="tbody-td">1</td>
                      <td class="tbody-td">李白</td>
                      <td class="tbody-td">23%</td>
                      <td class="tbody-td">88%</td>
                  </tr>
                  <tr class="tbody-container">
                      <td class="tbody-td">2</td>
                      <td class="tbody-td">李白</td>
                      <td class="tbody-td">23%</td>
                      <td class="tbody-td">88%</td>
                  </tr>
                  <tr class="tbody-container">
                      <td class="tbody-td">3</td>
                      <td class="tbody-td">李白</td>
                      <td class="tbody-td">23%</td>
                      <td class="tbody-td">88%</td>
                  </tr>
              </tbody>
          </table>
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
//   height: 55px;
  padding: 5px 15px;
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
.last-item{
    padding:5px 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
}
.input-item{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.input{
    border: 1px solid #ccc;
    width: 50px;
    height: 30px;
    border-radius: 3px;
    margin-left: 10px;
    color: #999;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
}

input::placeholder {
  color: #999;
  font-size: 12px;
}
.table-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex:1;
    margin-top: 10px;
}
.thead-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.tbody-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.thead-th{
    color: #666;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
}
.tbody-td{
    color: #333;
    font-size: 13px;
    line-height: 40px;
    text-align: center;
}
</style>