<template>
  <view class="mood-index-container">
    <!-- 概览 -->
    <indexSummary></indexSummary>

    <!--  -->
    <view class="line-hr"></view>

    <!-- 图展示 -->
    <indexData></indexData>
  </view>
</template>

<script>
import indexSummary from "@/pages/index/components/indexSummary";
import indexData from "@/pages/index/components/indexData";

export default {
  name: "index",
  components: {
    indexSummary,
    indexData,
  },
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.mood-index-container {
  box-sizing: border-box;
  padding: 18px 12px;

  // 分割线
  .line-hr {
    height: 2px;
    background: #f2f2f2;
    border-radius: 16px;
  }
}
</style>
