<template>
  <div class="container">
    <div v-if="isShow">
      <h2>1.swiper</h2>
      <div class="task-content">
        <swiper class="task-content" autoplay="true" interval="5000" duration="1000">
          <template v-for="(taskItem,index) in taskList1">
            <swiper-item :key="index" class="swiper-item">
              <template v-for="(item,index1) in taskItem.taskList">
                <div class="task-content-item" :key="index1">
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
            </swiper-item>
          </template>
        </swiper>
      </div>
    </div>
    <div style="background-color:#f4f4f8">
      <div class="container">
        <div class="msg-nav">
          <div class="msg-nav-item">
            <div class="msg-icon">
              <i class="iconfont order msg-nav-icon"></i>
            </div>

            <text class="msg-nav-text">业务提醒</text>
          </div>

          <div class="msg-nav-item">
            <div class="msg-icon">
              <i class="iconfont order msg-nav-icon"></i>
            </div>
            <text class="msg-nav-text">任务通知</text>
          </div>

          <div class="msg-nav-item">
            <div class="msg-icon">
              <i class="iconfont order msg-nav-icon"></i>
            </div>
            <text class="msg-nav-text">系统预警</text>
          </div>
        </div>

        <div class="msg-list-container">
          <!-- <text style='margin-top:200rpx'>您暂时没有消息</text> -->
          <div class="list-container">
            <div class="item-title">
              系统消息
              <span style="color:#666">4月15日</span>
            </div>
            <p
              class="item-content"
            >您的店铺~！@##￥￥%%%%…………￥#@！~！#@#￥@￥#%￥#￥@#￥#￥#%#￥@#！@~！~！@~#@！#￥@￥%￥%！@#！#@#@！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "../../components/progress";
export default {
  components: {
    Progress
  },
  data() {
    return {
      isShow: false,
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
      taskList1: [
        {
          id: 1,
          taskList: [
            {
              id: 4,
              title: "留档量",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress"
            },
            {
              id: 5,
              title: "邀约试驾",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress1"
            },
            {
              id: 6,
              title: "回访数量",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress2"
            }
          ]
        },
        {
          id: 2,
          taskList: [
            {
              id: 7,
              title: "留档量",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress3"
            },
            {
              id: 8,
              title: "邀约试驾",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress4"
            },
            {
              id: 9,
              title: "回访数量",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress5"
            }
          ]
        },
        {
          id: 3,
          taskList: [
            {
              id: 10,
              title: "留档量",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress6"
            },
            {
              id: 11,
              title: "邀约试驾",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress7"
            },
            {
              id: 12,
              title: "回访数量",
              progress_txt: "65/106",
              progressbg: "canvasProgressbg",
              progress: "canvasProgress8"
            }
          ]
        }
      ],
      isShowModal: false
    };
  },
  methods: {
    onClick() {
      this.isShowModal = !this.isShowModal;
    }
  }
};
</script>
<style>
.progress-container {
  position: relative;
  font-size: 12px;
  color: #217dde;
}
.task-content {
  display: flex;
  flex-direction: row;
  border: 1px solid #eee;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  background-color: white;
}
.swiper-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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
.modal {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-textarea {
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: white;
  /* top: 50%; */
  bottom: 0;
  left: 0;
}
.msg-nav {
  width: 100%;
  height: 200rpx;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 2rpx solid #e9e9e9;
}

.msg-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.msg-nav-text {
  font-size: 30rpx;
  color: #217dde;
  margin-top: 14rpx;
}

.msg-icon {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  background-color: #217dde;
  line-height: 100rpx;
  text-align: center;
}

.msg-nav-icon {
  color: white;
  font-size: 46rpx;
}

.msg-list-container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.list-container {
  background-color: white;
  padding: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #e9e9e9;
}

.item-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #333;
}
.item-content {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
</style> 