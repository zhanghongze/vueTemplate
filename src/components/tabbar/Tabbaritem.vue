<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="icon-item-box" v-show="!isActive"><slot name="icon-item"></slot></div>
    <div class="icon-item-box" v-show="isActive"><slot name="icon-item-active"></slot></div>
    <div :style="activeStyle"><slot name="text-item"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    //接收父组件参数
    path: {
        type: String,
        default: "",
    },
    activeColor:{
        type: String,
        default: "red",
    }
  },
  computed: {
    isActive() {
        return this.$route.path.indexOf(this.path) !== -1 //判断当前路由活跃状态时 isActive 为 true
    },
    activeStyle() {
        return this.isActive?{color:this.activeColor} : {} //判断当前路由活跃状态时 动态改变tabbar 字体颜色
    }
  },
  methods: {
    //tabbar 跳转
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  min-width: 0;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: auto;
}
.tab-bar-item .icon-item-box{
  margin-top: 5px;
}
</style>