<template>
  <view class="expression-question">
    ?
  </view>
</template>

<script>
// 表情
export default {
  name: "expressionQuestion",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.expression-question {
  position: relative;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  background: #f2f2f2;
  border-radius: 50%;

  display: flex;
  align-content: center;
  justify-content: center;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #929292;
}
</style>