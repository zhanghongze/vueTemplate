<template>
  <div class="feature-view">
		<div class="feature-view-item" v-for="(item,index) in featureList" :key="index">
			<img :src="item.image"/>
			<div class="feature-view-title">{{item.title}}</div>
		</div>
  </div>
</template>
<script>
export default {
  name: "FeatureView",
  props: {
    //接收父组件参数
		featureList: {
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
.feature-view{
	display: flex;
	flex-wrap: wrap;
	text-align: center;
}
.feature-view-item{
	flex: 1;
}
.feature-view-item img{
	width: 80px;
	height: 80px;
	margin: auto;
	margin-bottom: 10px;
}


</style>
