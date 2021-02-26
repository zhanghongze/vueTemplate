<template>
  <van-swipe :autoplay="autoplay" :height="height" :indicator-color="autoplayColor">
    <van-swipe-item v-for="(item, index) in banners" :key="index" @click="touchSwiperItem(index)">
      <img v-lazy="item" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
  name: "Swiper",
  props: {
    //接收父组件参数
		banners: {
      type: Array,
      default: () => []
    },
		autoplay: {
			type:String,
			default:""
		},
		height: {
			type:String,
			default:""
		},
		autoplayColor: {
			type:String,
			default:""
		}
  },
  data() {
    return {};
  },
  methods: {
		touchSwiperItem(index){
			console.log(index);
		}
  },
};
</script>

<style scoped>
</style>
