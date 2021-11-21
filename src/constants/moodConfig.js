// 分数种类
const MOOD_TYPE_COMMON = "common"; // 正常
const MOOD_TYPE_GREAT = "great"; // 优秀
const MOOD_TYPE_UNKNOWN = "unknown"; // 未知

// 分数种类对应展示颜色
const moodTypeColorMap = {
  [MOOD_TYPE_COMMON]: "#52C873",
  [MOOD_TYPE_GREAT]: "#FF823C",
  [MOOD_TYPE_UNKNOWN]: "#CFCFCF",
};

// 种类对应的表情
const moodTypeExpression = {
  [MOOD_TYPE_COMMON]: "face",
  [MOOD_TYPE_GREAT]: "laugh",
  [MOOD_TYPE_UNKNOWN]: "question",
};

// 未知种类高度
const UNKNOWN_CHART_HEIGHT = "87px";

// 周心情指数数据
const moodWeekData = [
  {
    type: MOOD_TYPE_COMMON,
    dayLabel: "六",
    value: 86,
  },
  {
    type: MOOD_TYPE_COMMON,
    dayLabel: "日",
    value: 80,
  },
  {
    type: MOOD_TYPE_UNKNOWN,
    dayLabel: "一",
    value: "",
  },
  {
    type: MOOD_TYPE_GREAT,
    dayLabel: "二",
    value: 90,
  },
  {
    type: MOOD_TYPE_GREAT,
    dayLabel: "三",
    value: 92,
  },
  {
    type: MOOD_TYPE_GREAT,
    dayLabel: "四",
    value: 97,
  },
  {
    type: "common",
    dayLabel: "五",
    value: 81,
  },
];

export {
  MOOD_TYPE_COMMON,
  MOOD_TYPE_GREAT,
  MOOD_TYPE_UNKNOWN,
  UNKNOWN_CHART_HEIGHT,
  moodTypeColorMap,
  moodTypeExpression,
  moodWeekData,
};
