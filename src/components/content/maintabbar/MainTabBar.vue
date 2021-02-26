<template>
  <tab-bar>
    <tab-bar-item path="/home" :activeColor="activeColor">
      <img slot="icon-item" src="~assets/images/home.png" />
      <img slot="icon-item-active" src="~assets/images/home-active.png" />
      <span slot="text-item">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category" :activeColor="activeColor">
      <img slot="icon-item" src="~assets/images/category.png" />
      <img slot="icon-item-active" src="~assets/images/category-active.png" />
      <span slot="text-item">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart" :activeColor="activeColor">
      <img slot="icon-item" src="~assets/images/car.png" />
      <img slot="icon-item-active" src="~assets/images/car-active.png" />
      <span slot="text-item">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile" :activeColor="activeColor">
      <img slot="icon-item" src="~assets/images/user.png" />
      <img slot="icon-item-active" src="~assets/images/user-active.png" />
      <span slot="text-item">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  },
  name: "MainTabBar",
  props: {},
  data() {
    return {
      activeColor: "deeppink",
    };
  },
};
</script>

<style scoped>
</style>
