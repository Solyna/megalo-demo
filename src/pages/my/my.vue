<template>
  <div class="container">
    <!-- banner -->
    <div style="margin-bottom:10px">
      <div class="banner">
        <image class="avator" src="../../static/imgs/nini.jpg"/>
        <div class="content">
          <div class="content-top">
            <span class="name">钱多多</span>
            
            <a class="character" href="../card/index">个人名片 ></a>
          </div>
        </div>
      </div>
      <navigator class="storeName" url="/pages/changeStore/index">
        <div class="left-store">
          <image src="/static/imgs/bonus.png" class="store-icon"/>
          <span class="store-name">{{storeName}}</span>
        </div>
        <span class="store-change">切换店铺 <image class="change" src="../../static/imgs/go.svg"/></span>
        
      </navigator>
    </div>
    <!-- list -->
    <div class="list-container">
      <template v-for="(item,index) in myList">
        <div :key="index" class="list-wrap" @click="()=>onClickItem(item)">
          <img src="/static/imgs/bonus.png" class="store-icon"/>
          <span class="list-item">
            {{item.name}}
          </span>
          <image class="go" src="../../static/imgs/go.svg"/>
        </div>
      </template>
    </div>
    <bottom-modal v-if="isShow" v-on:child-say="onClick" :list="list" :is-show="isShow"></bottom-modal>
  </div>
</template>

<script>
import BottomModal from "../../components/BottomModal";
export default {
  components: {
    "bottom-modal": BottomModal
  },
  data() {
    return {
      isShow: false,
      myList: [
        {
          id: 1,
          name: "我的奖金",
          href: "/pages/bonus/index",
          svgColor: "#e5493a"
        },
        {
          id: 2,
          name: "业务规则设置",
          href: "/pages/rule/index",
          svgColor: "#14c0be"
        },
        {
          id: 3,
          name: "联系客服",
          href: "",
          svgColor: "#7591df"
        },
        {
          id: 4,
          name: "常见问题",
          href: "/pages/problem/index",
          svgColor: "#1eafe5"
        },
        {
          id: 5,
          name: "意见反馈",
          href: "/pages/suggest/index",
          svgColor: "#6cafef"
        },
        {
          id: 6,
          name: "设置",
          href: "/pages/setting/index",
          svgColor: "#3bc2d0"
        }
      ],
      list: [
        {
          id: 1,
          name: "新车销售类"
        },
        {
          id: 2,
          name: "保养类"
        },
        {
          id: 3,
          name: "保险类"
        },
        {
          id: 4,
          name: "其他"
        }
      ],
      storeName: ""
    };
  },
  created() {},
  mounted() {
    this.init();
  },

  watch: {},
  computed: {},
  onShow: function(options) {
    console.log("My onShow");
    this.init();
  },
  methods: {
    init() {
      var app = getApp();
      let name = app.globalData.storeName;
      this.storeName = name;
      console.log(this.storeName);
    },
    showModal() {
      let that = this;
      that.isShow = !that.isShow;
    },
    onClick(data) {
      console.log("father", data);
      this.isShow = data;
    },
    onClickItem(item) {
      if (item.id == 3) {
        wx.makePhoneCall({
          phoneNumber: "13800000000" // 仅为示例，并非真实的电话号码
        });
      }else{
        wx.navigateTo({
          url: item.href
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #f4f4f8;
}
.list-container {
  width: 100%;
  height: 100%;
  background-color: white;
  // border: 1px solid black;
}
.list-wrap{
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  line-height: 50px;
}

.list-item {
  width: 100%;
  border-bottom: 1px solid #f9f6f6;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  color: #666;
}
.banner {
  background-color: #297fde;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
}
.avator {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid white;
}
.content {
  display: flex;
  flex-direction: column;
}
.content-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
.name {
  font-size: 15px;
  color: white;
}
.character {
  width: 60px;
  height: 18px;
  border: 1px solid white;
  font-size: 12px;
  color: white;
  text-align: center;
  line-height: 18px;
  margin-left: 15px;
  border-radius: 2px;
}
.company {
  font-size: 16px;
  color: white;
}
.storeName {
  background-color: white;
  border-bottom: 1px solid #f4f4f4;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.store-icon {
  width: 15px;
  height: 15px;
  margin-right: 8px;
}
.left-store {
  line-height: 40px;
}
.store-name {
  font-size: 15px;
  color: #666;
}
.store-change {
  font-size: 13px;
  color: #666;
}
.change{
  width: 12px;
  height: 12px;
}
.go{
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
}
</style>


