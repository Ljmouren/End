<template>
	<div class="top">
		<!--导航条-->
		<nav class="public-nav">
			<div class="left-positi">
				<a @click="goshouye()" class="company"><span class="company-logo"></span></a>
				<!--<span class="address">全国站</span><a href="#" class="city login">[切换城市]</a>-->
			</div>
			<ul class="nav-ul">
				<li v-for="(item,index) in arr" :class="{hs:flag==index}" @click="fn(index)">
					<a class="login">{{item.name}}</a>
				</li>
			</ul>
			<div href="#" class="register">
				<a class="login">消息</a>
				<router-link to='/resume' class="login">简历</router-link>
				<router-link to='/dropbox' class="login">投递箱</router-link>
				<router-link to='/favorites' class="login">收藏夹</router-link>
				<a class="login" @mouseenter="changeArrow('arrow-up')" @mouseleave="changeleave('arrow-down')">
					<span class="userName">{{userName}}</span>
					<i class="el-icon-caret-bottom" :class="arrow"></i>
					<ul class="drop-down" v-show="dropsurr">
						<li class="show">我的订阅</li>
						<li class="show">职位邀请</li>
						<li class="show">我的问答</li>
						<li class="show">账号设置</li>
						<li class="show">去企业版</li>
						<li class="show" @click="tuichu()">退出</li>
					</ul>
				</a>
			</div>
			<span class="app green"><span class="app-log"><i class="el-icon-mobile-phone"></i></span>拉勾APP</span>
			<a href="#" class="version login">进入企业版</a>
		</nav>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		inject: ['reload'],
		data() {
			return {
				arr: [{
					name: '首页'
				}, {
					name: '公司'
				}, {
					name: '校园'
				}, {
					name: '言职'
				}, {
					name: '课程'
				}],
				mark: 0,
				flag: '',
				arrow: "",
				dropsurr: false,
				userName: '用户名'
			}
		},
		mounted() {
			if(this.$route.path == "/company") {
				this.flag = 1
			}if(this.$route.path == "/xiangqing") {
				this.flag = -1
			}if(this.$route.path == "/company_home") {
				this.flag = -1
			}if(this.$route.path == "/favorites") {
				this.flag = -1
			}if(this.$route.path == "/dropbox") {
				this.flag = -1
			}if(this.$route.path == "/resume") {
				this.flag = -1
			}if(this.$store.state.isLogin == true && this.$store.state.phonenum != '') {
				this.userName = '拉勾用户' + this.$store.state.phonenum.toString().substring(7, 11);
			}
		},
		methods: {
			changeArrow(value) {
				this.arrow = value;
				this.dropsurr = true;
			},
			changeleave(value) {
				this.arrow = value;
				this.dropsurr = false;
			},
			fn(index) {
				this.flag = index;
				if(index == '0') {
					this.$router.push('/index')
				} else if(index == '1') {
					this.$router.push('/company')
				}
			},
			tuichu: function() {
				this.$store.commit('stateLogin', false);
				this.reload()
			},
			goshouye() {
				this.$router.push('/index')
			},
		},
		computed: {

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top {
		font-size: 14px;
	}
	
	a {
		list-style-type: none;
		text-decoration: none;
		color: #afb5c0;
	}
	
	.public-nav {
		width: 100%;
		height: 40px;
		background-color: #32373e;
		position: relative;
		z-index: 999;
	}
	
	.public-nav span {
		display: inline-block;
	}
	
	.public-nav .company-logo {
		width: 45px;
		height: 20px;
		background: url(http://www.lgstatic.com/www/static/common/widgets/header_c/modules/img/sprite_361857f.png) no-repeat;
		background-size: 60px;
		background-position: -7px -9px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 110px;
	}
	
	.public-nav .address {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 140px;
		color: #0dca9f;
	}
	
	.public-nav .city {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 200px;
		color: #afb5c0;
	}
	
	.public-nav .nav-ul {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 215px;
	}
	
	.public-nav .nav-ul li {
		display: inline-block;
		width: 70px;
		line-height: 40px;
		text-align: center;
		float: left;
		color: #afb5c0;
	}
	
	.hs {
		background-color: #24282c;
	}
	
	.login {
		display: inline-block;
	}
	
	.login:hover {
		color: white !important;
	}
	
	.green:hover {
		color: #05eaaf !important;
	}
	
	.public-nav .register {
		position: absolute;
		right: 310px;
		top: 50%;
		text-align: center;
		transform: translateY(-50%);
	}
	
	.public-nav .register a {
		margin-left: 15px;
	}
	
	.public-nav .register .register-log {
		width: 20px;
		height: 20px;
		background: url(http://www.lgstatic.com/www/static/common/widgets/header_c/modules/img/sprite_361857f.png) no-repeat;
		background-size: 60px;
		background-position: -6px -36px;
		position: absolute;
		top: 50%;
		left: -20px;
		transform: translateY(-50%);
	}
	.public-nav .app {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 200px;
		color: #0dca9f;
	}
	
	.public-nav .app .app-log {
		width: 15px;
		height: 20px;
		background-size: 60px;
		background-position: -6px -88px;
		margin-left: -20px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.public-nav .app .app-log i{
		font-size: 16px;
		margin-top: 2px;
		margin-left: 4px;
	}
	.public-nav .version {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 110px;
		color: #afb5c0;
	}
	
	.arrow-down {
		transform: rotate(0deg);
		transition: 0.5s;
	}
	
	.arrow-up {
		transform: rotate(180deg);
		transition: 0.5s;
	}
	/*消息 简历nav的高度*/
	
	.register a {
		line-height: 40px;
	}
	/*下拉*/
	
	.drop-down {
		width: 80px;
		position: absolute;
		top: 40px;
		left: 73%;
		color: #afb5c0;
	}
	
	.drop-down li {
		background-color: #333333;
		line-height: 32px;
		list-style-type: none;
	}
	
	.show:hover {
		background-color: #474747;
		color: white;
	}
</style>