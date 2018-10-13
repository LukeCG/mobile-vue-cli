<template>
	<div class="test">{{test}}</div>
</template>
<script>
	export default {
		name: 'test',
    props: {},
		data () {
			return {
				test: '这是test组件'
			}
		}
	}
</script>
<style lang="less" scoped>
	.test{
		background: #00f;
	}
</style>
