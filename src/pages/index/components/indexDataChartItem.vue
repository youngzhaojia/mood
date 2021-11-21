<template>
  <view class="index-data-chart-item"
        :style="{
    height: `${itemHeight}`,
    background: `${itemColor}`,
  }">
    <!-- 数值 -->
    <view class="chart-item-num">
      {{ moodData.value}}
    </view>

    <!-- 表情 -->
    <view class="chart-item-expression"></view>
  </view>
</template>

<script>
import * as moodConfig from "@/constants/moodConfig";

// 图心情指数柱状
export default {
  name: "indexDataChartItem",
  props: {
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
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.index-data-chart-item {
  width: 44px;
  box-sizing: border-box;
  border-radius: 30px;
  position: relative;

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
  .chart-item-expression {
  }
}
</style>