<template>
  <div class="container">
    <!-- 售后部 -->
    <div class="sh-container">
      <div class="sh-container-child">
        <div class="sh-title">
          售后部
          <i class="iconfont shezhi sh-icon"></i>
        </div>
        <div class="sh-content">
          <div class="sh-content-item">
            <span class="sh-content-num">1</span>
            <span class="sh-content-text">店铺排名</span>
          </div>
          <div class="sh-content-item">
            <span class="sh-content-num">2301</span>
            <span class="sh-content-text">完成订单</span>
          </div>
          <div class="sh-content-item">
            <span class="sh-content-num">98%</span>
            <span class="sh-content-text">好评率</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 新车销售个人任务 -->
    <div class="task-container">
      <div class="task-container-child">
        <div class="task-title">
          新车销售部个人任务
          <i class="iconfont shezhi task-icon"></i>
        </div>
        <div class="task-content">
          <template v-for="(item,index) in taskList">
            <div class="task-content-item" :key="index">
              <div class="progress-container">
                <Progress
                  :unit="150"
                  :strokeWidth="6"
                  :percent="item.progress_txt"
                  :canvasId="item.progress"
                >
                  <span slot="txt">10/100</span>
                </Progress>
              </div>
              <span class="task-content-text">{{item.title}}</span>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- 九宫格列表 -->
    <div class="grid-container">
      <div class="grid-item" v-for="item in gridList" :key="item.id">
        <navigator :url="item.url">
          <div class="icon-content" :style="{backgroundColor: item.bgColor}">
            <!-- <image class="grid-content-icon" src="/static/imgs/header@2x.png"/> -->
          </div>
          <span class="grid-content-text">{{ item.name }}</span>
        </navigator>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "./progress";
export default {
  name: "Home",
  props: {
    // msg: String
  },
  data() {
    return {
      percent: 0.1,
      taskList: [
        {
          id: 1,
          title: "留档量",
          progress_txt: "65/106",
          progressbg: "canvasProgressbg",
          progress: "canvasProgress"
        },
        {
          id: 2,
          title: "邀约试驾",
          progress_txt: "15/46",
          progressbg: "canvasProgressbg1",
          progress: "canvasProgress1"
        },
        {
          id: 3,
          title: "回访数量",
          progress_txt: "65/250",
          progressbg: "canvasProgressbg2",
          progress: "canvasProgress2"
        }
      ],
      gridList: [
        {
          id: 1,
          name: "新车审批",
          icon: "icon-cheku",
          bgColor: "#5FB9FF",
          url: "/pages/changeStore/index"
        },
        {
          id: 2,
          name: "业务报表",
          icon: "icon-dizhiguanli",
          bgColor: "#3AC14E",
          url: "/pages/changeStore/index"
        },
        {
          id: 3,
          name: "员工业绩",
          icon: "order",
          bgColor: "#4189FF",
          url: "/pages/changeStore/index"
        },
        {
          id: 4,
          name: "潜客分配",
          icon: "order",
          bgColor: "#F5B248",
          url: "/pages/changeStore/index"
        },
        {
          id: 5,
          name: "新车线索",
          icon: "order",
          bgColor: "#F7874B"
        },
        {
          id: 6,
          name: "客户管理",
          icon: "order",
          bgColor: "#1EAFE5"
        },
        {
          id: 7,
          name: "车辆管理",
          icon: "daili",
          bgColor: "#8092FC"
        },
        {
          id: 8,
          name: "营销工具",
          icon: "daili",
          bgColor: "#C089D9"
        },
        {
          id: 9,
          name: "使用帮助",
          icon: "order",
          bgColor: "#C089D9"
        },
        {
          id: 10,
          name: "保险客户",
          icon: "order",
          bgColor: "#5594FC"
        },
        {
          id: 11,
          name: "车辆库存",
          icon: "order",
          bgColor: "#6488ED"
        },
        {
          id: 12,
          name: "新车潜客",
          icon: "order",
          bgColor: "#59A9F4"
        }
      ]
    };
  },
  computed: {},
  components: {
    Progress
  },
  mounted() {},
  watch: {},
  events: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #f4f4f8;
}
.sh-container {
  margin-top: 15px;
  background-color: white;
  padding: 15px;
  padding-top: 0;
}

.sh-container-child {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #41b8e7;
  border-radius: 4px;
  padding: 10px;
  height: 100px;
  /* border: 2px solid black; */
}

.sh-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  line-height: 14px;
  color: white;
}
.sh-icon {
  margin-left: 5px;
  font-size: 20px;
  margin-top: 1px;
}

.sh-content {
  display: flex;
  flex-direction: row;
  /* border: 2px solid black; */
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}

.sh-content-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sh-content-num {
  font-size: 25px;
  color: white;
}

.sh-content-text {
  font-size: 15px;
  color: white;
  margin-top: 9px;
}

.task-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #e9e9e9;
  margin-top: 10px;
  padding: 0 0 15px 15px;
  background-color: white;
}

.task-container-child {
  /* border: 2px solid red; */
  height: 100%;
}

.task-title {
  font-size: 16px;
  color: #333;
  padding: 5px 0;
  border-bottom: 1px solid #e9f9f9;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.task-icon {
  font-size: 20px;
  margin-left: 5px;
  color: #999;
}

.task-content {
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  /* border: 2px solid black; */
  align-items: center;
  justify-content: space-around;
  height: 100px;
  /* padding: 0 15px 20px 15px; */
  margin-top: 10px;
}

.task-content-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.task-content-icon {
  font-size: 35px;
  color: #217dde;
}

.task-content-text {
  font-size: 14px;
  color: #217dde;
}

/* 进度条 */

.grid-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 0;
  margin-top: 10px;
  background-color: white;
}

.grid-item {
  flex: 1;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #faf7f7;
  border-bottom: 1px solid #faf7f7;
}

.grid-content-icon {
  width: 20px;
  height: 20px;
  color: white;
}

.grid-content-text {
  font-size: 13px;
  color: #666;
  margin-top: 4px;
}

.icon-content {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  line-height: 45px;
  text-align: center;
}

.progress-container {
  position: relative;
  font-size: 12px;
  color: #217dde;
}
</style>
