<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #ffffff;
}
</style>