<template>
  <div id="app" v-cloak>
    <router-view />
    <main-tab-bar />
  </div>
</template>
<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
export default {
  components: {
    MainTabBar,
  },
  name: "App",
  data() {
    return {};
  },
  created() {},
};
</script>
<style>
@import "assets/css/base.css";
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
