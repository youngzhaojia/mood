<template>
  <view class="expression-laugh">
    <image src="@/static/laugh.png"></image>
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

  image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>