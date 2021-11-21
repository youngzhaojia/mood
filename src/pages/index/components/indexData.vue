<template>
  <view class="index-data">
    <!-- 柱状下的线 -->
    <view class="index-data-line"></view>

    <!-- 柱状chart start -->
    <view class="index-data-chat">
      <indexDataChartItem v-for="(dataItem,index) in moodWeekData"
                          :key="index"
                          :dayNum="index"
                          :moodData="dataItem"
                          :activeIndex="activeIndex"
                          :activeRemoveIndex="activeRemoveIndex"
                          @click.native="handleClickItem(index)">
      </indexDataChartItem>
    </view>
    <!-- 柱状chart end -->

    <!-- 日期文案 start -->
    <view class="index-data-label">
      <indexDataLabelItem class="index-data-label-item"
                          v-for="(dataItem,index) in moodWeekData"
                          :key="index"
                          :activeIndex="activeIndex"
                          :activeRemoveIndex="activeRemoveIndex"
                          :dayNum="index"
                          :moodData="dataItem"></indexDataLabelItem>
    </view>
    <!-- 日期文案 end -->
  </view>
</template>

<script>
import * as moodConfig from "@/constants/moodConfig";

import indexDataChartItem from "@/pages/index/components/indexDataChartItem";
import indexDataLabelItem from "@/pages/index/components/indexDataLabelItem";

// 图展示
export default {
  name: "indexData",
  components: {
    indexDataChartItem,
    indexDataLabelItem,
  },
  data() {
    return {
      moodWeekData: moodConfig.moodWeekData,
      activeIndex: -1,
      activeRemoveIndex: -1,
    };
  },
  methods: {
    handleClickItem(index) {
      // 不是common、great 不激活
      if (this.moodWeekData[index].type === moodConfig.MOOD_TYPE_UNKNOWN) {
        return;
      }

      if (this.activeIndex > -1) {
        // 旧的激活记录
        this.activeRemoveIndex = this.activeIndex;
      }
      // 新激活
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang="scss">
.index-data {
  position: relative;
  // 柱状下的线
  .index-data-line {
    position: absolute;
    top: 144px;
    width: 100%;
    height: 2px;
    background: #f2f2f2;
    border-radius: 16px;
  }

  .index-data-chat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .index-data-label {
    margin-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>