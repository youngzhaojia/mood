<template>
  <view class="index-data-chart-item-box">
    <view class="index-data-chart-item"
          :class="animationClass"
          :style="{
      height: `${itemHeight}`,
      '--index': dayNum,
    }">

      <!-- 数值 -->
      <view class="chart-item-num">
        {{ moodData.value}}
      </view>

      <!-- 表情组件 -->
      <view class="chart-item-expression">
        <component :is="getExpression()"></component>
      </view>
    </view>
  </view>
</template>

<script>
import * as moodConfig from "@/constants/moodConfig";

import expressionFace from "@/components/expression/expressionFace";
import expressionLaugh from "@/components/expression/expressionLaugh";
import expressionQuestion from "@/components/expression/expressionQuestion";

// 图心情指数柱状
export default {
  name: "indexDataChartItem",
  components: {
    expressionFace,
    expressionLaugh,
    expressionQuestion,
  },
  props: {
    activeIndex: {
      type: Number,
      default: -1,
    },
    activeRemoveIndex: {
      type: Number,
      default: -1,
    },
    dayNum: {
      type: Number,
      default: 0,
    },
    moodData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    // 背景色
    itemColor() {
      return moodConfig.moodTypeColorMap[this.moodData.type];
    },
    // 高度
    itemHeight() {
      if (this.moodData.type === moodConfig.MOOD_TYPE_UNKNOWN) {
        // 未知，固定高度
        return moodConfig.UNKNOWN_CHART_HEIGHT;
      }
      // 有数值，百分比
      return `${this.moodData.value}%`;
    },
    animationClass() {
      // 激活
      if (this.activeIndex === this.dayNum) {
        return {
          "after-init-common": this.isShow,
          [`active-public-${this.moodData.type}`]: true,
          [`active-${this.moodData.type}`]: true,
          [`active-animation-${this.moodData.type}`]: true,
        };
      }

      // 失去激活
      if (this.activeRemoveIndex === this.dayNum) {
        return {
          "after-init-common": this.isShow,
          [`active-remove-animation-${this.moodData.type}`]: true,
        };
      }

      // 默认状态
      return {
        "after-init-common": this.isShow,
        [`background-${this.moodData.type}`]: true,
      };
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShow = true;
    }, (this.dayNum + 1) * 350);
  },
  methods: {
    // 获取表情组件
    getExpression() {
      let expression = moodConfig.moodTypeExpression[this.moodData.type];
      let expressionComponent;
      switch (expression) {
        case "face":
          expressionComponent = expressionFace;
          break;
        case "laugh":
          expressionComponent = expressionLaugh;
          break;
        default:
          expressionComponent = expressionQuestion;
          break;
      }
      return expressionComponent;
    },
  },
};
</script>

<style scoped lang="scss">
.index-data-chart-item-box {
  position: relative;
  width: 50px;
  height: 280px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  .index-data-chart-item {
    position: relative;
    width: 44px;
    box-sizing: content-box;
    border-radius: 30px;

    // 初始化依次展示
    visibility: hidden;
    --time: calc(var(--index) * 250ms);
    animation: animateHeight 0.4s ease-out var(--time) 1 forwards;

    // 默认状态
    &.background-common {
      background: #52c873;
    }
    &.background-great {
      background: #ff823c;
    }
    &.background-unknown {
      background: #cfcfcf;
    }

    // 初始化后，覆盖依次展示动画
    &.after-init-common {
      animation: unset;
      visibility: visible;
    }

    // 激活状态的共态
    &.active-public-common {
      border: 3px solid #dcffd6;
      margin-bottom: -3px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    }

    &.active-public-great {
      border: 3px solid #ffe9d4;
      margin-bottom: -3px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    }

    // 激活状态
    &.active-common {
      background: linear-gradient(180deg, #42f373 42.71%, #a1fd44 100%);
    }

    &.active-great {
      background: linear-gradient(180deg, #ffa14a 35.42%, #ffcc4a 100%);
    }

    // 激活动画
    &.active-animation-common {
      animation: commonActive 1s;
      background: linear-gradient(180deg, #42f373 42.71%, #a1fd44 100%);
    }

    &.active-animation-great {
      animation: greatActive 1s;
      background: linear-gradient(180deg, #ffa14a 35.42%, #ffcc4a 100%);
    }

    // 失去激活
    &.active-remove-animation-common {
      background: #52c873;
    }

    &.active-remove-animation-great {
      background: #ff823c;
    }

    // 数值
    .chart-item-num {
      position: absolute;
      top: 12px;
      width: 100%;
      height: 25px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      color: #ffffff;
    }

    // 表情
    .chart-item-expression {
      position: absolute;
      bottom: 4px;
      padding: 0 4px;
    }
  }
}

// 初始化长高
@keyframes animateHeight {
  0% {
    height: 0;
  }
  100% {
    visibility: visible;
  }
}

// 激活
@keyframes commonActive {
  0% {
    background: #52c873;
  }
  100% {
    background: linear-gradient(180deg, #42f373 42.71%, #a1fd44 100%);
  }
}

// 激活
@keyframes greatActive {
  0% {
    background: #ff823c;
  }
  100% {
    background: linear-gradient(180deg, #ffa14a 35.42%, #ffcc4a 100%);
  }
}
</style>