<template>
  <div class="goods-list">
    <goods-item v-for="(item, index) in goodsList" :key="index" :goodsItem="item" />
  </div>
</template>
<script>
import GoodsItem from "components/content/goods/GoodsItem";
export default {
  name: "GoodsList",
  components: {
    GoodsItem,
  },
  props: {
    goodsList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.goods-list{
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	justify-content: space-evenly;
	padding: 15px 0 0;
	margin-bottom: 49px;
}
</style>
