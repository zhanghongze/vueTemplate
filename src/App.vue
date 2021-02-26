<template>
  <div id="app" v-cloak>
    <router-view />
    <tabbar>
      <tabbaritem path="/home" :activeColor="activeColor">
        <img slot="icon-item" src="./assets/images/home.png" />
        <img slot="icon-item-active" src="./assets/images/home-active.png" />
        <div slot="text-item">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" :activeColor="activeColor">
        <img slot="icon-item" src="./assets/images/category.png" />
        <img slot="icon-item-active" src="./assets/images/category-active.png" />
        <div slot="text-item">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" :activeColor="activeColor">
        <img slot="icon-item" src="./assets/images/car.png" />
        <img slot="icon-item-active" src="./assets/images/car-active.png" />
        <div slot="text-item">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" :activeColor="activeColor">
        <img slot="icon-item" src="./assets/images/user.png" />
        <img slot="icon-item-active" src="./assets/images/user-active.png" />
        <div slot="text-item">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "./components/tabbar/Tabbar";
import tabbaritem from "./components/tabbar/Tabbaritem";
// import "@/assets/css/cover.css"
export default {
  components: {
    tabbar,
    tabbaritem,
  },
  name: "App",
  data() {
    return {
      activeColor: "deeppink",
    };
  },
};
</script>
<style>
@import "./assets/css/cover.css";
[v-cloak] {
  display: none;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
