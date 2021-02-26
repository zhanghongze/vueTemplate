<template>
  <div class="recommend-view">
		<div class="recommend-view-item" v-for="(item,index) in recommendList" :key="index">
			<img :src="item.image"/>
			<div class="recommend-title">{{item.title}}</div>
		</div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    //接收父组件参数
		recommendList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend-view{
	display: flex;
	text-align: center;
	padding: 10px 0 15px;
	border-bottom: 5px solid #eee;
}
.recommend-view-item{
	flex: 1;
}
.recommend-view-item img{
	width: 80px;
	height: 80px;
	margin: auto;
	margin-bottom: 10px;
}


</style>
