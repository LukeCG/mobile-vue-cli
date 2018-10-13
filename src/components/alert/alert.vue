<template>
  <div class="alert-body" v-show="visible">
		<div>{{msg}}</div>
		<button class="alert-btn" @click="hide">隐藏按钮</button>		
	</div>
</template>
<script>
  export default {
    name: 'alert',
    props: {},
    data () {
      return {
				visible: false,
				msg: 'alert组件'
      };
    },
    methods: {
      show (options = {}) {
        if (typeof options === 'string') {
					this.msg = options;
        }
        this.visible = true;
      },
      hide () {
        this.visible = false;
      }
    },
  };
</script>
<style lang="less" scoped>
	.alert-body{
		font-size: 16px;
		border: 1px solid #ccc; /*no*/
		position: absolute;
		z-index: 10000;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.alert-btn{
		background: #0f0;
	}
</style>

