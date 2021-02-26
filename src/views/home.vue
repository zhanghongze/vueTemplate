<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper
      class="home-swiper"
      :banners="banners"
      :autoplay="autoplay"
      :height="height"
      :autoplayColor="autoplayColor"
    ></swiper>
    <recommend-view :recommendList="recommendList" />
    <feature-view :featureList="featureList" />
    <tab-control :tabControls="tabControls" :tabControlColor="tabControlColor">
				<goods-list :goodsList="goodsList"/>
		</tab-control>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import RecommendView from "components/content/recommendview/RecommendView";
import FeatureView from "components/content/featureview/FeatureView";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from 'components/content/goods/GoodsList';
export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
		GoodsList
  },
  name: "Home",
  data() {
    return {
      banners: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
      ],
      autoplay: "3000",
      height: "400",
      autoplayColor: "deeppink",
      recommendList: [
        {
          image: require("assets/images/recommend1.png"),
          title: "春暖花开",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "万物迎生",
        },
        {
          image: require("assets/images/recommend3.png"),
          title: "福满天地",
        },
        {
          image: require("assets/images/recommend4.png"),
          title: "合家团圆",
        },
      ],
      featureList: [
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐1",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐2",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐3",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐4",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐5",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐6",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐7",
        },
        {
          image: require("assets/images/recommend2.png"),
          title: "推荐8",
        },
      ],
      tabControls: [
        {
          title: "综合",
          image: require("assets/images/recommend1.png"),
        },
        {
          title: "新品",
          image: require("assets/images/recommend2.png"),
        },
        {
          title: "销量",
          image: require("assets/images/recommend3.png"),
        },
      ],
      tabControlColor: "deeppink",
			goodsList:[
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				},
				{
					image:"https://s5.mogucdn.com/mlcdn/c45406/190320_198f9c710h5k6hg2128dk39aceef1_777x1332.jpg_440x587.v1cAC.40.webp",
					title:"网红爱心图案T恤",
					price:"￥79"
				}
			]
    };
  },
  methods: {
    //Promise是异步编程的一种解决方案
    init() {
      //Promise 静态方法
      Promise.all([
        //回调函数1
        new Promise((resolve) => {
          // 执行异步操作成功回调：
          setTimeout(() => {
            //Promise 静态方法
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
    // this.init();
		if(this.goodsList.length>0 && this.goodsList.length%2 != 0){
			this.goodsList.push({
				image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3738246599,3514550209&fm=26&gp=0.jpg",
				title:"预备上新"
			})
		}
  },
};
</script>

<style scoped>
.home-nav {
  background-color: deeppink;
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 999;
}
.home-swiper {
  padding: 44px 0 0;
}
</style>


