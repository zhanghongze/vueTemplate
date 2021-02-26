<template>
<div class="goods-item">
	<img :src="goodsItem.image" />
	<div class="goods-info">
		<p class="goods-title">{{goodsItem.title}}</p>
		<p class="goods-price">{{goodsItem.price}}</p>
	</div>
</div>
</template>
<script>
export default {
	name:"GoodsItem",
	props: {
		goodsItem: {
			type:Object,
			default:()=> {}
		}
	},
	data() {
		return {

		}
	}
}
</script>

<style scoped>
.goods-item {
	width: 160px;
}
.goods-item img{
	width: 100%;
	height: 200px;
	border-radius: 5px;
}
.goods-item div{
	margin: 5px 0;
}
.goods-price{
	color: deeppink;
}
</style>
