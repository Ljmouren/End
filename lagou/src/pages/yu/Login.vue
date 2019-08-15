<template>
	<div class="login">
		<div class="header">
			<div class="bglogo" @click="goindex"></div>
		</div>
		<div class="section">
			<div class="section-con">
				
			</div>
			<div class="leftsec">
				<div class="bg-slogo" @click="changela" v-if="isQ">
					<div class="leftimg"></div>
					<div class="weichat-login"></div>
				</div>
				<div class="bg-spc" @click="changelb" v-else="isQ">
					<div class="pc-img"></div>
					<div class="pc-login"></div>
				</div>
				
              <div class="change" v-if="changel=='saomiao'">
					<img src="../../assets/timg.gif">
					<p>微信扫一扫，快速登录</p>
				</div>
				<div class="form" v-if="changel=='zhanghao'">
					<p class="login-style">
					<a class="password" @click="mimalogin" :class="{act:layout=='password'}">密码登录</a>
					<a class="yanzhengma" @click="yanzhengmalogin" :class="{act:layout=='yanzhengma'}">验证码登录</a>
				</p>
				<p class="passlogin" v-if="layout=='password'">
					<Form>	
						<input type="text" placeholder="请输入常用手机号/邮箱" slot="ainput" class="input1" v-model="phone" @blur="ckph" @focus="checkw">
						<i class="tishi" slot="tishik1" :class="{xian:tiShi!=''}">{{tiShi}}</i>
						<input type="password" placeholder="请输入密码" slot="binput" class="input2" v-model="pwd"  @blur="chpw" @focus="checkp">
					    <p class="tishi" slot="tishik2">{{tiShi3}}</p>
						<a href="#" slot="wangjimima" class="wangjimima">忘记密码？</a>
						<input type="button" value="登录" slot="btn" class="btn" @click="goshouye"></input>
					</Form>
				</p>
					<p class="yzmlogin" v-if="layout=='yanzhengma'">
					<Form>
						<span slot="phonenum" class="phonenum">0086</span>
						<input type="text" placeholder="请输入常用手机号" slot="ainput" class="input1-1" v-model="phone" @blur="ckph" @focus="checkw">
						  <p class="tishi" slot="tishik1">{{tiShi}}</p>
						<input type="text" placeholder="请输入验证码" slot="binput" class="input2-2" v-model="phoneyz" @blur="ckyzm" @focus="checkp">
							<p class="tishi" slot="tishik2">{{tiShi2}}</p>
						<a class="huoquyzm" slot="wangjimima" :disabled="disabled" @click="sendcode">{{btntxt}}</a>
						<input type="button" value="登录" slot="btn" class="btn1" @click="goshouye"></input>	
					</Form>
				</p>
				</div>
			</div>
				
			
			<div class="rightsec">
				<div class="total">
					<h5>还没有账号：</h5>
					<a @click="goreg">立即注册</a>
					<h5 class="dierh">使用以下账号直接登录:</h5>
					<p class="logo">
						<span class="fa fa-weibo" @mouseenter="add" @mouseleave="leave" :class="{pink:isRight}"></span>
						<span class="fa fa-weixin" @mouseenter="add1" @mouseleave="leave1" :class="{green:isRight1}"></span>
						<span class="fa fa-qq" @mouseenter="add2" @mouseleave="leave2" :class="{blue:isRight2}"></span><span></span>
					</p>
				</div>
			</div>
		</div>
	</div>
	
	
	
</template>

<script>
	import Form from '../../components/Form'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				layout: 'password',
				  tiShi:'',         // 获取验证码部分
                  tiShi2:'',  // 获取验证码部分
                  tiShi3:'',
                  tiShi4:'', 
                phoneyz:'',  // 获取验证码部分
				   phone:'',
				   disabled:false,
				   time:0, 
				   pwd:'',
				   btntxt:"获取验证码",
				   xiahuaxian:true ,//登录方式的绿色下划线
				   changel:'zhanghao',
				   isRight:false,
				   isRight1:false,
				   isRight2:false,
				   isQ:true,
			    }	
		    },
		components: {
			Form
		},
		computed:{
			storep:function(){
				return this.$store.state.phonenum;
			},
			storew:function(){
				return this.$store.state.passwd
			},
			
		},
		methods:{
			goindex(){
				this.$router.push('/index')
			},
			 goshouye(){ 
			 	if(this.sendt&&this.sendm){	
			 		this.$store.commit('stateLogin',true);
          	  		this.$router.push('/index');
          	 	 }
			 	else if(this.sendt&& !this.sendm){
         		this.chpw();
         		this.ckyzm();
         	}else if(!this.sendt&& !this.sendm){
         		this.chpw();
         		this.ckyzm();
         		 this.ckph();
         	}
         	else{
         		 this.ckph();
         	}
         	 },
			goreg(){				
					 this.$router.push('/Register')
               },
             ckph(){
				var reg=11&& /^[1][3,4,5,6,7,8][0-9]{9}$/;
				if(this.phone==''){
					this.tiShi="请输入手机号码"
				}else if(!reg.test(this.phone)){
					this.tiShi="手机格式不正确"
				
				}else if(this.phone!=this.$store.state.phonenum){
					this.tiShi="该手机尚未注册"
				}
				else{
					this.tiShi='';
					this.sendt=true;
				}
			},
			checkp(){
				  if(this.phone==''){
				  	this.tiShi="请输入手机号码"
				  }
			},
			checkw(){
				this.tiShi3='';
				this.tiShi2='';
			},
         sendcode(){
				var reg=11&& /^[1][3,4,5,6,7,8][0-9]{9}$/;
				if(this.phone==''){
					this.tiShi="请输入手机号码"
				}else if(!reg.test(this.phone)){
					this.tiShi="手机格式不正确"
				}
				else{
					this.sendm=true;
					this.time=60;
					this.disabled=true;
					this.timer();
					this.tiShi='';
					this.tiShi2='验证码已发送';
				}
			      },
         timer(){
         	if(this.time>0){
         		this.time--;
         		this.btntxt=this.time+"s后重新获取";
         		setTimeout(this.timer,1000);
         	}else{
         		this.time=0;
         		this.btntxt="获取验证码";
         		this.disabled=false;
         		this.tiShi='';
				this.tiShi2='';
         	}
         },
         // 验证密码部分
			chpw(){
				if(this.pwd==''){
					this.tiShi3="密码不能为空！"
				}
				else if(this.pwd!=this.$store.state.passwd){
						this.tiShi3="密码不正确"		
			}else{
				this.tiShi3='';
				this.sendm=true;	
			}
         },
         //验证码部分
         ckyzm(){
         	var regg=/^\d{6}$/;
         	if(this.phoneyz==''){
					this.tiShi2="验证码不能为空"
				}
				else if(!regg.test(this.phoneyz)){
						this.tiShi2="请输入6位数验证码"		
			}else{
				this.tiShi2='';
				this.sendm=true;
			}
		},
		
		mimalogin(){
			 this.layout='password';
			 this.tiShi='';
			 this.tiShi2='';
			 this.phone='';
			 this.tiShi3='';
		},
		yanzhengmalogin(){
			this.layout='yanzhengma';
			this.tiShi='';
			this.tiShi2='';
			this.phone='';
			this.tiShi3='';
		},
		changela(){
			this.changel='saomiao';
			this.isQ=!this.isQ;
			
		},
		changelb(){
			this.changel='zhanghao';
			this.isQ=!this.isQ;
		},
		add(){
			this.isRight=true;
		},
		leave(){
			this.isRight=false;
		},
		add1(){
			this.isRight1=true;
		},
		leave1(){
			this.isRight1=false;
		},
		add2(){
			this.isRight2=true;
		},
		leave2(){
			this.isRight2=false;
		},
	  }
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	*{	padding: 0;
		margin:0;
	}
	.pink{
		color:#f76563!important;
	}
	.green{
		color:#79ce4c!important;
	}
	.blue{
		color:#49b9ec!important;
	}
.tishi{
	text-align: left;
	width: 100%;
	font-size: 12px;
	color:#fd5f39;
	display: inline-block;
	}
.header{
		height: 360px;
		position: relative;
		z-index: 1;
		background-color:#00b38a;
	}
	.bglogo{
		position: absolute;
		top: 80px;
        left: 50%;
        transform: translate(-50%);
        z-index: 10;
        width: 685px;
        height: 42px;
		background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/logo_e420e46.png) no-repeat;
		background-size:112px 42px;
	}
	.section{
		padding: 7px;
		background-color: white;
		width: 685px;
		height: 405px;
		display: flex;	
		position: absolute;
		z-index: 5;
		margin-top:-200px;
		left:50%;
		transform: translate(-50%);
		border:0.1px solid gainsboro;
		
		
		}
	.leftimg{
		width: 52px;
        height: 52px;
        background:url(//www.lgstatic.com/passport/static/common/static/img/qrcode-normal_bb3ab97.svg) no-repeat;
		}
	.weichat-login{
		width: 106px;
	    height: 34px;
	    position: absolute;
	    top:5px;
	    left: 55px;
	    background: url(//www.lgstatic.com/passport/static/common/static/img/wx-login_c936a5c.svg) left center no-repeat;
		}
	.form{
		position: relative;
		margin:0 30px 60px 60px;
		width: 290px;
		height: 273px;
		text-align: center;
	}
	.huoquyzm{
		display: inline-block;
		color:#00b3a7;
		font-size: 14px;
		position: absolute;
		right:15px;
		top:125px;
		
	}
	.phonenum{
		position: absolute;
		left:0px;
		top:63.5px;
	}
	.phonenum:after{
 	position: absolute;
 	top:4px;
 	left:50px;
 	content: "";
	display: inline-block;
    width: 10px;
    height: 10px;
    background:url(../../assets/sprites.png) no-repeat;
    background-size:150px 150px;
    background-position:-136px -9px;
    z-index:2;
}
	
	.input1-1{
		text-indent:4.5rem;
	}
	input{
		width: 290px;
		height:44px;
         outline: 0;
         font-size: 15px;
        border:none;
        border-bottom: 1px solid #ebebeb;
	}
	input::-webkit-input-placeholder{
		color: #b5b5b5;
		    font-size: 14px;
	}
	input:-moz-placeholder{
		color: #b5b5b5;
		    font-size: 14px;
	}
	input::-moz-placeholder{
		color: #b5b5b5;
		    font-size: 14px;
	}
	input:-ms-input-placeholder{
		color: #b5b5b5;
		 font-size: 14px;
	}
.login-style a{
	  cursor:pointer;
	   font-size: 16px;
	   color: #333;
       line-height: 24px;
       border-bottom: 1px solid #ebebeb;  
       padding:0px 30px 10px 30px;
}
	.login-style{
		margin-bottom:26px;
	}
.wangjimima{
	text-decoration: none;
	position: absolute;
	right: 0px;
	margin: -5px 0;
	color: #00b38a;
	font-size:14px;
}	
form .btn{
	height: 45px;
	font-size: 20px;
	position: absolute;
	bottom: 15px;
	right: 0px;
	color: #fff;
    border-color: #00b38a;
    background-color: #00b38a;
    border-radius: 3px;
}
form .btn1{
	height: 45px;
	font-size: 20px;
	position: absolute;
	bottom: 40px;
	right: 0px;
	color: #fff;
    border-color: #00b38a;
    background-color: #00b38a;
    border-radius: 3px;
}
.total a{
	text-align: left;
	display: inline-block;
	text-decoration: none;
	color:#00b3a7;
	width:90px;
	background: url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-arrow-right_ea91505.png) right center no-repeat;
}
.rightsec .total{
	text-align: left;
	width: 150px;
	height: 111px;
	border-left:1px dashed gainsboro;
	margin-top:70px;
	margin-left:30px;
	padding:50px;
}
.total h5{
	font-size: 14px;
	line-height: 35px;
	color:#666;
}
.rightsec span:nth-of-type(1){
	display: inline-block;
	width: 23%;
	height: 16px;
	color: #b5b5b5;
	/*background: url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-sina_e161002.png) no-repeat;*/
}
.rightsec span:nth-of-type(2){
	display: inline-block;
	width: 23%;
	height: 16px;
	color: #b5b5b5;
	/*background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-wechat_823d4eb.png) no-repeat;*/
}
.rightsec span:nth-of-type(3){
	display: inline-block;
	width: 23%;
	height: 16px;
	color: #b5b5b5;
	/*background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-tencent_c85c20a.png) no-repeat;*/
}	
.rightsec span:nth-of-type(4){
	display: inline-block;
	width: 23%;
	height: 16px;
	color: #b5b5b5;
	background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-baidu_d1ad2b6.png) no-repeat;
}
.rightsec .logo{
	line-height: 30px;
}
.dierh{
	margin-top: 20px;
}
.change{
	 width: 380px;
	 height: 270px;
	 font-size: 14px;
     color: #999;
	 text-align: center;
}
.change img{
	padding-left: 20px;
	padding-top: 20px;
	width: 220px;
	height: 210px;
} 
.pc-img{
	    width: 52px;
        height: 52px;
	background: url(//www.lgstatic.com/passport/static/common/static/img/pc-normal_98450bc.svg) left center no-repeat;
}
.pc-login{
	    width: 106px;
	    height: 34px;
	    position: absolute;
	    top:5px;
	    left: 55px;
	background: url(//www.lgstatic.com/passport/static/common/static/img/mobile-login_438f9b2.svg) left center no-repeat;
}
.act{
	color:#00b3a7 !important;
	border-bottom: 1px #00b3a7 solid!important;
}






</style>