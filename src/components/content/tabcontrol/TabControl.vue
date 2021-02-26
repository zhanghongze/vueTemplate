<template>
<div class="tab-control">
	<van-tabs :color="tabControlColor" :swipeable="true">
		<van-tab v-for="(item,index) in tabControls" :key="index" :title="item.title" >
			<slot></slot>
		</van-tab>
</van-tabs>
</div>

</template>

<script>
export default {
  name: "TabControl",
	props: {
		tabControls: {
			type:Array,
			default: () => []
		},
		tabControlColor: {
			type:String,
			default:""
		}
	},
  data() {
    return {
		};
  },
};
</script>

<style scoped>
.tab-control{
	padding: 15px 0;
}
</style>
