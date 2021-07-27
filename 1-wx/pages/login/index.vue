<template>
	<view>
		<Login v-if="this.formtype==='login'" :formtype="this.formtype" @send="switchType"></Login>
		<Register v-if="this.status===register" @send="switchType"></Register>
	</view>
</template>
<script>
	import Login from "./login.vue"
	import Register from "./register.vue"
	export default {
		components: {
			Login,
			Register
		},
		data() {
			return {
				formtype: 'login'
			};
		},
		onShow() {},
		methods: {
			switchType(value) {
				// console.log('---------------')
				// console.log(value)
				this.formtype=value
			}
		}
	}
</script>

<style scoped>
</style>
