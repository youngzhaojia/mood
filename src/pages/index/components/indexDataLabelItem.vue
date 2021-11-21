<template>
  <view class="index-data-label-item"
        :style="{
      '--index': dayNum,
    }">
    <view class="label-item-box"
          :class="animationClass">
      {{ moodData.dayLabel }}
    </view>
  </view>
</template>

<script>
import * as moodConfig from "@/constants/moodConfig";

// 星期文字
export default {
  name: "indexDataLabelItem",
  components: {},
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
    animationClass() {
      // 今天
      if (this.moodData.today) {
        return {
          today: true,
        };
      }
      // 激活
      if (this.activeIndex === this.dayNum) {
        return {
          "label-item-box-active": true,
          [`active-animation-${this.moodData.type}`]: true,
        };
      }
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.index-data-label-item {
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: PingFang HK;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #2d2f33;

  visibility: hidden;
  --time: calc(var(--index) * 250ms);
  animation: animateHeight 0.4s ease-out var(--time) forwards;

  .label-item-box {
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    // 今天的，加黑
    &.today {
      background: #2d2f33;
      color: #fff;
    }

    // 激活状态
    &.label-item-box-active {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    // 激活动画
    &.active-animation-common {
      animation: commonActive 1s;
      color: #52c873;
    }

    &.active-animation-great {
      animation: greatActive 1s;
      color: #f36a1b;
    }

    // 失去激活
    &.active-remove-animation-common {
      animation: commonRemoveActive 1s;
      color: #2d2f33;
    }

    &.active-remove-animation-great {
      animation: greatRemoveActive 1s;
      color: #2d2f33;
    }
  }
}

// 初始化展示
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
    color: #2d2f33;
  }
  100% {
    color: #52c873;
  }
}

// 激活
@keyframes greatActive {
  0% {
    color: #2d2f33;
  }
  100% {
    color: #f36a1b;
  }
}
</style>