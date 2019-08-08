<template>
	<div>
		<top v-show='!isLogin'></top>
		<logintop v-show='isLogin'></logintop>
		<logo v-show='!isLogin'></logo>
		<search></search>
		<banner></banner>
		<itemjob></itemjob>
		<company></company>
		<current></current>
		<backtop></backtop>
		<foot></foot>
	</div>
</template>

<script>
	import logo from './logo'
	import search from './search'
	import itemjob from './itemjob'
	import company from './company'
	import current from './current'
	import top from '../../components/publictop'
	import foot from '../../components/publicfooter'
	import banner from './lunbo'
	import backtop from '../tang/backTop'
	import logintop from '../../components/loginPublictop'
	export default {
		data() {
			return {
				isLogin: false
			}
		},
		components: {
			logo,
			search,
			itemjob,
			company,
			top,
			foot,
			current,
			banner,
			backtop,
			logintop
		},
		mounted() {
			this.fn
		},
		methods: {
		},
		computed: {
			fn: function() {
				this.isLogin = this.$store.state.isLogin
				//console.log(this.$store.state.phonenum)
				//console.log(this.$store.state.isLogin)
			}
		}
	}
</script>

<style>

</style>