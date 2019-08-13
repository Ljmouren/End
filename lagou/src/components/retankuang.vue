	<template>
	  <div class="hello" v-show="isShow">
	  	<i class="el-icon-close" @click="close"></i>
	  	<div class="zhuti">
	  		<div class="header" v-for="(item,index) in strlist">
	  		<img :src="item.url">
		     <div>
		     	<h2>{{item.title}}</h2>
		     	<p class="desc">{{item.desc}}</p>
		     </div>
	  	</div>
	     <div class="content1">
	     	<h3>热招职位</h3>
	     	<p><span>服务端测试开发</span><span>移动端测试开发</span><span>web前端工程师</span></p>
	     	<p><span>Java开发实习生</span><span>硬件开发</span><span>战略分析师</span></p>
	     </div>
	      <div class="content2">
	     	<h3>福利</h3>
	     	<p><span>年底双薪</span><span>节日福利</span><span>弹性工作</span><span>大平台</span><span>高薪酬</span></p>
	     </div>
	     <div class="footer">
	     	<p>注册，即可查看更多职位信息</p>
	     </div>
	  	</div>	
	  </div>
	</template>
	
	<script>
	export default {
		data(){
			return{
				isShow:true,
				strlist:[]
			}
		},
	  methods:{
	  	getdata(){
	  		this.$axios.get('../../static/data/reimgurl.json')
	  		.then(res=>{
	  			this.str=res.data[inid]
	  			console.log(res.data);
	  		})
	  	},
	  	close(){
	  		this.isShow=false;
	  	}
	  }
	}
	</script>
	
	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped lang="less">
	.hello{
		position: absolute;
		left:50px;
	}
	.el-icon-close{
		position: absolute;
		right: 20px;
		top:8px;
		color:#ccc;
		font-size: 18px;
	}
	.desc{
		line-height: 40px;
	}
		.hello{
			font-weight: 500;
			color:#666666;
			width: 525px;
			height: 395px;
			position: absolute;
			z-index: 3;
			background: white;
		}
		.header{
			display: flex;
			margin-bottom: 20px;
		}
		.header img{
			margin-right: 10px;
			border:1px solid #ccc;
		}
		.content1{
			line-height: 30px;
			margin-bottom: 20px;
		}
		.content1 span{
			font-size: 15px;
			display: inline-block;
			width: 30%;
			margin-right: 10px;
		}
		.content2{
			line-height: 30px;
			margin-bottom: 35px;
		}
		.content2 span{
			border-radius: 3px;
			font-size: 13px;
			padding: 7px;
			margin-right: 13px;
			border:1px solid #ccc;
		}
		.zhuti{
			padding:20px 10px 30px 30px;
		}
		h3{
			color:#122B40;
			font-weight: 600;
			line-height: 50px;
		}
		.footer{
			font-size: 14px;
			line-height: 40px;
		}
	</style>
