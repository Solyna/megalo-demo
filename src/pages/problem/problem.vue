<template>
  <div class="container">
    <template v-for="item in content">
      <div class="container-wrap" :key="item.id">
        <div class="item-title" @click="()=>showHide(item.id)">
          <p class="title">{{item.category}}</p>
        </div>
        <div class="item-content" v-if="item.show">
          <template v-for="(items,index) in item.items">
            <div class="item-content-li" :key="index">
              <p class="content-question">{{items.question}}</p>
              <p class="content-answer">{{items.answer}}</p>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import ListItem from "../../components/listItem";
export default {
  data() {
    return {
      content: [
        {
          id: 1,
          show: false,
          category: "保养问题",
          items: [
            {
              question: "Q、保养完成后，客户需要发票，应该如何开具？",
              answer:
                "发票金额按照乐车邦订单派工单中的“开票给用户金额”进行开具，其中用户通过钱包余额支付的部分不参与开票。"
            },
            {
              question: "Q、我应该为用户提供哪些服务项目？",
              answer:
                "用户订单包含的项目可以点击订单列表中的相关订单，进入详情页进行查看，详情页中包括且不限于机油型号等明细项目信息，请按照订单展示内容为用户提供服务。"
            },
            {
              question: "Q、用户到店后想修改/增加保养项目，应该如何处理？",
              answer:
                "暂不提供修改项目功能，请协助用户取消订单后重新进行预约；若要增加保养项目，可以单独下单。"
            },
            {
              question: "Q、客户的车不是本人开来的，我们应该怎么处理？",
              answer:
                "我们会为客户提供代驾服务，请通过车牌号确认车辆是否与预约订单匹配，若匹配，请按照正常服务流程为客户完成保养。"
            }
          ]
        },
        {
          id: 2,
          show: false,
          category: "钣金喷漆问题",
          items: [
            {
              question: "Q、用户在乐车邦上选择的服务包括哪些？",
              answer:
                "客户下的基本订单只包括所选部位的喷漆服务或含直径20cm以内钣金修复的喷漆服务，如果受损面过大，或有穿孔、卷边、伤到转角等情况，需要到店与服务顾问协商后在线补差价（补差价功能不支持换件）。"
            },
            {
              question: "Q、用户到店后需要加项，应该如何引导客户在线补差价？",
              answer:
                "若用户仅需要补20cm以内的钣金差价，请引导用户在补差价页面选择补该项目的钣金差价，并按照乐车邦标示价格进行支付；若用户需要自行输入补差价金额，请与用户协商确定，并确保用户输入的是补差价项目的店铺指导价（补差价功能不支持换件）。"
            },
            {
              question: "Q、怎么确认需要给用户服务的项目？",
              answer:
                "请根据后台订单打印的派工单内容为客户提供服务，若用户到店通过补差价选择了更多服务，请在用户补差价成功后重新打印派工单。"
            }
          ]
        },
        {
          id: 3,
          show: false,
          category: "奖励问题",
          items: [
            {
              question: "Q、如何提现？",
              answer:
                "当账户余额大于等于100元时，可以在“我的奖金”中发起提现申请，按照提示录入银行账号并提交申请，待乐车邦财务审核后即可提现。"
            },
            {
              question: "Q、我提起申请，大概多久才能提现成功？",
              answer:
                "乐车邦财务会在每周周五统一审核并进行发放，一般会在审核通过后3个工作日内到账。"
            },
            {
              question: "Q、在哪里看我的提现记录？",
              answer: "“我的奖金”模块有详细的提现记录和奖金的获得明细。"
            }
          ]
        },
        {
          id: 4,
          show: false,
          category: "其他问题",
          items: [
            {
              question: "Q：为什么收不到抢单/催单短信？",
              answer: "请查看手机是否安装了防骚扰软件。"
            },
            {
              question: "Q、为什么没有权限查看订单？",
              answer: "请联系店铺管理员查看用户权限是否正确。"
            },
            {
              question: "Q、如何下载乐车邦商户端？",
              answer:
                "请至appstore/安卓各大应用市场搜索“乐车邦商户端”并下载使用。"
            }
          ]
        }
      ]
    };
  },
  components: {
    ListItem
  },
  computed: {},
  created() {},
  methods: {
    showHide(id) {
      let data = this.content;
      for (let i = 0; i < data.length; i++) {
        if (id == data[i].id) {
          if (this.content[i].show) {
            this.content[i].show = false;
          } else {
            this.content[i].show = true;
          }
        } else {
          this.content[i].show = false;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.container-wrap {
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: white;
}
.item-title {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin-left: 15px;
  padding-right: 15px;
  line-height: 50px;
  border-bottom: 1px solid #f0f0f0;
}
.title {
  color: #333;
  font-size: 14px;
}
.item-content {
  padding: 15px 25px;
  box-sizing: border-box;
  // border-top: 1px solid #f0f0f0;
}
.content-question {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}
.content-answer {
  font-size: 12px;
  color: #999;
}
.item-content-li {
  margin-top: 10px;
}
</style>