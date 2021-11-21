<template>
  <view class="expression-face">
    <view class="expression-eye eye-left"></view>
    <view class="expression-eye eye-right"></view>

    <!-- 嘴唇 start 覆盖法 -->
    <view class="expression-mouth">
      <view class="expression-mouth-line"></view>
      <view class="expression-mouth-mask"></view>
    </view>
    <!-- 嘴唇 end -->
  </view>
</template>

<script>
// 表情
export default {
  name: "expressionFace",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.expression-face {
  position: relative;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  background: #d4f3d3;
  border-radius: 50%;

  // 眼睛
  .expression-eye {
    position: absolute;
    width: 3.27px;
    height: 6.55px;
    background: #52c873;
    border-radius: 13.0909px;

    top: 12.27px;

    &.eye-left {
      left: 8.18px;
    }

    &.eye-right {
      right: 8.18px;
    }
  }

  // 嘴
  .expression-mouth {
    position: absolute;
    bottom: 17px;
    left: 10px;

    .expression-mouth-line {
      position: absolute;
      height: 5px;
      width: 11px;
      border: 3px solid #52c873;
      border-radius: 50%;
    }
    .expression-mouth-mask {
      position: absolute;
      width: 17px;
      height: 6px;
      background: #d4f3d3;
    }
  }
}
</style>