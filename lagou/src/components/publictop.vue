<template>
  <div class="top">
      <!--导航条-->
			<nav class="public-nav">
				<a href="#" class="company"><span class="company-logo"></span></a>
				<span class="address">全国站</span><span href="#" class="city login">[切换城市]</span>
				<ul>
					<li  v-for="(item,index) in arr" :class="{hs:flag==index}"   @click='fn(index)' ><a class="login">{{item.name}}</a></li>
					<!--<li :index="1"><a href="#" @click="flag=1" :class="{hs:flag==1}">首页</a></li>
					<li :index="2"><a href="#" @click="flag=2" :class="{hs:flag==2}">首页</a></li>
					<li :index="3"><a href="#" @click="flag=3" :class="{hs:flag==3}">首页</a></li>
					<li :index="4"><a href="#" @click="flag=4" :class="{hs:flag==4}">首页</a></li>-->
				</ul>

				<div class="register">
					<span class="register-log"></span>
					<a class="login" @click="log">登录</a>
					<a href="#">|</a>
					<a class="login" @click="res">注册</a>
				</div>
				<a href="#" class="app green"><span class="app-log"><i class="el-icon-mobile-phone"></i></span>拉勾APP</a>
				<a href="#" class="version login">进入企业版</a>
			</nav>
			
			
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data(){
		return {
			arr:[{name:'首页'},{name:'公司'},{name:'校园'},{name:'言职'}],
			mark:0,
			flag:0
		}
	},
	mounted(){
		if(this.$route.path=="/company"){
			this.flag=1
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
			}
	},
	methods:{
		fn(index){
			this.flag=index;
			if(index=='0'){
				this.$router.push('/index')
			}else if(index=='1'){
				this.$router.push('/company')
			}
		},
		log(){
			this.$router.push('/Login')
		},
		res(){
			this.$router.push('/Register')
		}
	},
	computed:{

	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  cursor: pointer;
}
.public-nav span {
  display: inline-block;
}
.public-nav .company-logo {
  cursor: pointer;
  width: 45px;
  height: 20px;
  background: url(http://www.lgstatic.com/www/static/common/widgets/header_c/modules/img/sprite_361857f.png) no-repeat;
  background-size: 60px;
  background-position: -7px -9px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 65px;
}
.public-nav .address {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 140px;
  color: #0dca9f;
}
.public-nav .city {
	width: 80px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 200px;
  color: #afb5c0;
}
.public-nav ul {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 315px;
  overflow: hidden;
}
.public-nav ul li {
  display: inline-block;
  width: 70px;
  line-height: 40px;
  text-align: center;
  float: left;
  color: #afb5c0;
}
.hs{
 background-color: #24282c;

}
.login:hover{
	color:white !important;
}
.green:hover{
	color:#05eaaf !important;

}
.public-nav .register {
  position: absolute;
  right: 310px;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
}
.public-nav .register a {
  margin-left: 10px;
}
.public-nav .register .register-log {
  width: 20px;
  height: 20px;
  background: url(http://www.lgstatic.com/www/static/common/widgets/header_c/modules/img/sprite_361857f.png) no-repeat;
  background-size: 60px;
  background-position: -6px -36px;
  position: absolute ;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  &:hover{
  	color:white !important;
  }
}
.public-nav .app {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 190px;
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
.public-nav .version {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 70px;
  color: #afb5c0;
}
</style>
