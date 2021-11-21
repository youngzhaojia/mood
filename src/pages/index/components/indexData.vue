<template>
  <view class="index-data">
    <!-- 柱状chart start -->
    <view class="index-data-chat">
      <indexDataChartItem v-for="(dataItem,index) in moodWeekData"
                          :key="index"
                          :dayNum="index"
                          :moodData="dataItem">
      </indexDataChartItem>
    </view>
    <!-- 柱状chart end -->

    <!-- 日期文案 start -->
    <view class="index-data-label">
      <view class="index-data-label-item"
            v-for="(dataItem,index) in moodWeekData"
            :key="index">
        {{ dataItem.dayLabel }}
      </view>
    </view>
    <!-- 日期文案 end -->
  </view>
</template>

<script>
import * as moodConfig from "@/constants/moodConfig";

import indexDataChartItem from "@/pages/index/components/indexDataChartItem";

// 图展示
export default {
  name: "indexData",
  components: {
    indexDataChartItem,
  },
  data() {
    return {
      moodWeekData: moodConfig.moodWeekData,
    };
  },
};
</script>

<style scoped lang="scss">
.index-data {
  .index-data-chat {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 280px;
  }

  .index-data-label {
    margin-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    }
  }
}
</style>