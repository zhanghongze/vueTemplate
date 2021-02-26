<template>
  <div class="container">首页</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    init() {
      Promise.all([
        //回调函数1
        new Promise((resolve) => {
          // 执行异步操作成功回调：
          setTimeout(() => {
            resolve("执行成功");
          }, 2000);
          // 执行异步操作失败回调：
          // reject("error message");
        }),
        //回调函数2
        new Promise((resolve) => {
          // 执行异步操作成功回调：
          setTimeout(() => {
            resolve("再次执行成功");
          }, 2000);
          // 执行异步操作失败回调：
          // reject("error message");
        }),
      ])
        .then((results) => {
          console.log(results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
      this.init();
  },
};
</script>

<style>
</style>