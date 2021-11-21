<template>
  <view class="index-summary">
    <view class="user-info">
      <image :src="userImg"
             class="user-avatar"></image>
      <view class="user-name">{{ userName }}</view>
    </view>

    <view class="user-average-value">88</view>
    <view class="user-average-label">周平均心情指数</view>
  </view>
</template>

<script>
// 概览
export default {
  name: "indexSummary",
  data() {
    return {
      userImg: require("@/static/defaultAvatar.png"),
      userName: "李强",
      averageValue: 88,
    };
  },
};
</script>

<style scoped lang="scss">
.index-summary {
  box-sizing: border-box;
  height: 238px;
  padding-top: 45px;
  background: #ffffff;
  box-shadow: 0px -6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 24px 24px 0 0;

  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;

    .user-avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      object-fit: cover;
    }
    .user-name {
      margin-left: 20px; // 这个间距设计稿拿不到

      font-family: PingFang HK;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      color: #2d2f33;
    }
  }
  .user-average-value {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93px;

    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    color: #2d2f33;
  }
  .user-average-label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;

    font-family: PingFang HK;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #929292;
  }
}
</style>