<template>
	<div class="registerwrap">
		<div class="app"></div>
		<div class="header">
			<div class="lefthead">
				<img src="../../assets/logo-slogan_443548c6.png" class="headerlogo" @click="goshouye">
			</div>
			<div class="righthead">
				<a class="show" @mouseover='showw'>
					<i class="fa fa-mobile fa-lg"></i> 拉勾APP
					<span class="shuxian">|</span>
					<img class="qrcode_app" src="//www.lgstatic.com/lg-landingpage-fed/pc/images/qrcode-new_69efb8b8.png" v-show="isShow">
				</a>
				<a @click="goto">
					去登录 >
				</a>
			</div>
		</div>
		<div class="middle">
			<div class="middle-slogo">
				<img class="middle-slgon" src="//www.lgstatic.com/lg-landingpage-fed/pc/images/slgon_47bdda44.png">
			</div>
			<div class="bgop" v-show="mengcen"></div>
			<div class="juzhong imgurl">
				<div class="leftmiddle">
					<reSearch></reSearch>
					<!--<img src="../../assets/goright.jpg" class="thumb" v-show="mengcen"/>-->
					<i class="fa fa-hand-o-right thumb" v-show="mengcen"/></i>
					<reimgUrl @sendshow="imgUrl"></reimgUrl>
				</div>
				<div class="rightmiddle">
					<p class="mid-title"><span class="green">8秒</span>注册 轻松获高薪</p>
					<form class="form-right">
						<p>
							<Form>
								<span slot="phonenum" class="updowm">0086</span>
								<input type="text" placeholder="请输入常用手机号" slot="ainput" class="input1-1" v-model="phone" @blur="sendcode" @focus="checkw">
								<p class="tishi" slot="tishik1" :class="{xian:tiShi!=''}">{{tiShi}}</p>
								<input type="password" placeholder="请设置登录密码" slot="binput" class="dierge" v-model="pwd" @blur="chpw" @focus="checkp">
								<p class="tishi" slot="tishik2" :class="{xian:tiShi2}">{{tiShi2}}</p>
							</Form>
						</p>
						<el-button type="text" @click="isD" class="zhuce">立即注册</el-button>
						<p class="xieyi">注册代表你已同意
							<a href="#">「拉勾用户协议」</a>
						</p>
					</form>
					<div class="yiyouzhanhao">
						<a @click="goto">
							已有账号，直接登录
						</a>
					</div>
				</div>
			</div>
		</div>
		<refoot></refoot>
	</div>
</template>

<script>
	import Form from '../../components/Form'
	import refoot from '../../components/refoot'
	import reimgUrl from '../../components/reimgUrl'
	import reSearch from '../../components/reSearch'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				isShow: false, //右上角二维码
				disabled: false, // 获取验证码部分
				time: 0, // 获取验证码部分
				tiShi: '', // 获取验证码部分
				tiShi2: '',
				phone: '', // 获取验证码部分
				pwd: '', //验证密码部分
				isGo: false, //点击注册按钮
				sendt: false,
				sendm: false,
				mengcen: false
			}
		},
		components: {
			Form,
			reSearch,
			reimgUrl,
			refoot
		},
		mounted() {
			this.imgUrl();
		},
		methods: {
			imgUrl(invalue) {
				this.mengcen = invalue;
			},
			// 验证手机号码部分
			//..........
			sendcode() {
				var reg = 11 && /^[1][3,4,5,6,7,8][0-9]{9}$/;
				if(this.phone == '') {
					this.tiShi = "请输入手机号码"
				} else if(!reg.test(this.phone)) {
					this.tiShi = "手机格式不正确"
				} else {
					this.tiShi = '';
					this.sendt = true;
				}
			},
			checkp() {
				if(this.phone == '') {
					this.tiShi = "请输入手机号码"
				}
			},
			checkw() {
				this.tiShi2 = '';
			},
			// 验证密码部分
			chpw() {
				var patrn = /^(\w){6,20}$/;
				if(this.pwd == '') {
					this.tiShi2 = "请设置6-16位密码"
				} else if(!patrn.test(this.pwd)) {
					this.tiShi2 = "密码必须由字母，数字，特殊字符组成，字母区分大小写"
				} else {
					this.tiShi2 = '';
					this.sendm = true;
				}
			},
			isD() {
				if(this.sendt && this.sendm) {
					this.open();
				} else if(this.sendt && !this.sendm) {
					this.chpw();
				} else if(!this.sendt && !this.sendm) {
					this.chpw();
					this.sendcode();
				} else {
					this.sendcode();
				}
			},
			// 点击注册后弹出提示框
			open() {
				this.$confirm('点击确定将跳转到登录页面，是否继续？', '您已成功注册拉勾网', {
						distinguishCancelAndClose: true,
						confirmButtonText: '确定',
						cancelButtonText: '取消'
					})
					.then(() => {
						this.$store.commit('setPhonenum', this.phone);
						this.$store.commit('setpasswd', this.pwd);
						this.$router.push('/Login')
					})
					.catch(action => {
						this.$router.push('/Register')
					});
			},
			goto() {
				this.$router.push('/Login')
			},
			showw() {
				this.isShow = !this.isShow;
			},
			//点击高亮显示
			goshouye() {
				this.$router.push('/index')
			},

		},
	}
</script>
<style scoped lang="less">
	.bgop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
	}
	
	.imgurl {
		position: fixed;
		z-index: 15;
		height: 100%;
	}
	
	.thumb {
		width: 24px;
		height: 24px;
		position: absolute;
		top: 30%;
		left: 61%;
		font-size: 24px;
		color: white;
		animation: name2 5s 0s ease alternate;
	}
	@keyframes name2 {
		0% {
			transform: translateX(-5px);
		}
		30% {
			transform: translateX(6px);
		}
		45% {
			transform: translateX(-8px);
		}
		60% {
			transform: translateX(6px);
		}
		75% {
			transform: translateX(-8px);
		}
		90% {
			transform: translateX(0);
		}
	}
	
	input::-webkit-input-placeholder {
		color: #b5b5b5;
		font-weight: 400;
	}
	
	input:-moz-placeholder {
		color: #b5b5b5;
		font-weight: 400;
	}
	
	input::-moz-placeholder {
		color: #b5b5b5;
		font-weight: 400;
	}
	
	input:-ms-input-placeholder {
		color: #b5b5b5;
		font-weight: 400;
	}
	
	.xian {
		border-top: .5px #fd5f39 solid;
		width: 100%;
		height: 23px;
		font-size: 12px;
		color: #fd5f39;
		padding: 8px 0px 0px 0px;
		display: inline-block;
	}
	
	.tishi {
		width: 100%;
		height: 23px;
		font-size: 12px;
		color: #fd5f39;
		padding: 8px 0px 0px 0px;
		display: inline-block;
	}
	
	* {
		padding: 0;
		margin: 0;
	}
	
	.headerlogo {
		width: 220px;
		height: 35px;
	}
	
	.header {
		line-height: 60px;
		width: 1014px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
	
	.lefthead {
		width: 222px;
		height: 35px;
	}
	
	.lefthead img {
		margin: 15px 0;
	}
	
	.righthead {
		display: flex;
	}
	
	.righthead a {
		font-size: 30px;
	}
	
	.shuxian {
		display: inline-block;
		padding: 0px 15px 0px 8px;
		color: gainsboro;
	}
	
	.fa {
		padding: 0 5px;
	}
	
	.show {
		position: relative;
		z-index: 200;
	}
	
	.qrcode_app {
		position: absolute;
		right: 20px;
		top: 45px;
		width: 128px;
		height: 128px;
		padding: 11px;
		z-index: 6;
		box-shadow: 0 0 5px hsla(0, 0%, 80%, .6);
		background-color: #fff;
	}
	
	.righthead>a {
		text-decoration: none;
		font-size: 14px;
		color: #999999;
	}
	
	.middle {
		position: relative;
		height: 695px;
		width: 100%;
		background: #00b38a url(//www.lgstatic.com/lg-landingpage-fed/pc/images/bg_49338802.png) bottom no-repeat;
		background-size: auto 110px;
	}
	
	.juzhong {
		box-sizing: border-box;
		position: absolute;
		display: flex;
		left: 50%;
		transform: translate(-50%);
	}
	
	.middle-slogo {
		text-align: left;
		margin: 0 auto;
		background-color: #00b38a;
		padding: 28px 0 8px;
		height: 34px;
		width: 1010px;
	}
	
	.middle-slogo img {
		width: 234px;
		height: 34px;
	}
	
	.leftmiddle {
		width: 610px;
		height: 480px;
		box-sizing: border-box;
		margin-right: 20px;
	}
	
	.rightmiddle {
		margin-left: 20px;
		width: 360px;
		height: 460px;
		padding: 57px 50px 35px;
		float: right;
		background: #fff;
		border-radius: 4px;
		box-sizing: border-box;
		animation: name1 0.5s 0s ease alternate;
	}
	
	@keyframes name1 {
		15% {
			transform: rotate(-3deg);
		}
		30% {
			transform: rotate(3deg);
		}
		45% {
			transform: rotate(-3deg);
		}
		60% {
			transform: rotate(3deg);
		}
		75% {
			transform: rotate(-3deg);
		}
		90% {
			transform: rotate(3deg);
		}
	}
	
	.mid-title {
		font-size: 24px;
		text-align: center;
		font-weight: 600;
		line-height: 26px;
		margin-bottom: 47px;
	}
	
	.green {
		color: #00b38a;
	}
	
	.rightmiddle .input1-1 {
		text-indent: 4.5rem;
		font-weight: lighter;
		width: 100%;
		height: 38px;
		box-sizing: border-box;
		font-size: 16px;
		color: #333;
		border: none;
		border-bottom: .5px solid #e6e6e6;
		outline: none;
	}
	
	.rightmiddle .dierge {
		font-weight: lighter;
		width: 100%;
		height: 38px;
		box-sizing: border-box;
		font-size: 16px;
		color: #333;
		border: none;
		border-bottom: .5px solid #e6e6e6;
		outline: none;
	}
	
	.form-right {
		position: relative;
	}
	
	.updowm {
		font-size: 15px;
		color: #122B40;
		font-weight: 400;
		position: absolute;
		left: 0;
		top: 10px;
		z-index: 2;
		width: 50px;
		height: 38px;
		padding-right: 22px
	}
	
	.updowm:after {
		position: absolute;
		top: 4px;
		left: 50px;
		content: "";
		display: inline-block;
		width: 10px;
		height: 10px;
		background: url(../../assets/sprites.png) no-repeat;
		background-size: 150px 150px;
		background-position: -136px -9px;
		z-index: 2;
	}
	
	.zhuce {
		width: 100%;
		height: 48px;
		line-height: 48px;
		margin-bottom: 16px;
		font-size: 16px;
		color: #fff;
		background-color: #02b389;
		text-align: center;
		text-decoration: none;
		border-radius: 3px;
	}
	
	.xieyi {
		text-align: center;
		font-size: 14px;
		color: #999;
	}
	
	.xieyi>a {
		font-size: 14px;
		color: #00b38a;
		text-decoration: none;
	}
	
	.yiyouzhanhao {
		text-align: center;
		margin-top: 44px;
	}
	
	.yiyouzhanhao>a {
		font-size: 14px;
		color: #00b38a;
		text-decoration: underline;
	}
	
	.aa {
		position: absolute;
		z-index: 3;
	}
</style>