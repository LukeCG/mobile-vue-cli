<template>
	<div id="login">
		<p>{{str}}</p>
		<div class="u-icon"></div>
		<test></test>
	</div>
</template>

<script>
export default {
	name: "login",
	data(){
		return {
			str: '登陆页'
		}
	},
	created (){
		this.$alert('调用成功！')

		// mock数据
		this.http.post(this.url.login, {}).then((res)=>{
			console.log(res);
		})
	}
};
</script>

<style lang="less" scoped>
#login {
	.u-icon{
		width: 300px;
		height: 300px;
		background-image:url('../assets/img/logo.png');
		background-size: 100%;
	}
}
</style>
