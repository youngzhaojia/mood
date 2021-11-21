<template>
  <view class="expression-laugh">
    <view class="eye-left"></view>

    <view class="eye-right"></view>

    <view class="expression-mouth">
    </view>
  </view>
</template>

<script>
// 大笑表情
export default {
  name: "expressionLaugh",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.expression-laugh {
  position: relative;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  background: #ffdec9;
  border-radius: 50%;

  .eye-left {
    position: absolute;
  }

  .eye-right {
    position: absolute;
  }

  // 嘴
  .expression-mouth {
    position: absolute;
  }
}
</style>