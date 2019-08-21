<template>
  <div class="hello">
  	<loginPublictop></loginPublictop>
  	
    <div class="section-div">
				<div class="left-div">
					<div class="c_delivery">
						<h2><em></em>我收藏的职位</h2>
					</div>
					<div>
						<!--没有记录的情况-->
						   <div v-show="noshow" class="no_collections">暂无记录</div>
						   
						<!--有记录的情况  -->
						<div class="yes_collections" v-for='item in likesData' v-show="!noshow">
							 <div class="collections_img">
							 	<img :src="item.cover_url"/>
							 </div>						 
							 <div class="text">
							  <p @click="c_xq(item.no)" :id="item.no">{{item.title}}<span>（{{item.wage}}）</span></p>
							  <p>{{item.jobName}}/{{item.address}}/{{item.workdate}}</p>
							  <p>{{item.fuli}}</p>
							 </div>							 
							 <div class="collections_right">
							 	<p class="time">发布时间：2019-08-15 {{item.date}}</p>
							 	  <div class="collections_button">
							 	  	<a @click="quxiao(item)">取消收藏</a>
							 	  	    |
							 	  	<a>投个简历</a>
							 	  </div>							 	
							 </div>
						</div>
					</div>
				</div>
				<!--引入右边猜你喜欢-->
				<linkes></linkes>
				
				
				</div>
			   <!--引入底部-->
			  <publicfooter></publicfooter>
			</div>
  </div>
</template>

<script>
	
import loginPublictop from '../../components/loginPublictop.vue'
import linkes from '../../components/linkes.vue'
import publicfooter from '../../components/publicfooter.vue'
export default {
 inject: ['reload'],
  name: 'HelloWorld',
  data () {
    return {
      jianliStorage:{},
	  noshow:true,
	  likesData:[]
    }
  },
  methods:{
  	quxiao(ele){
  		let likesAry=JSON.parse(localStorage.getItem('likes'));
				likesAry.forEach((item,index) => {
					if(item.title==ele.title){
						likesAry.splice(index,1)
					}
				});
				localStorage.setItem('likes', JSON.stringify(likesAry));//更新删除后的数据
				this.reload();
  	},
  	c_xq(ids){
		this.$router.push({
					path: '/xiangqing',
					query: {
						inids: ids
					},
			})
  	}
  },
  mounted(){
	this.likesData=JSON.parse(localStorage.getItem('likes'));//获取本地存储的数据
	if(this.likesData) this.noshow=false;//控制数据显示
	
  	// this.jianliStorage= JSON.parse(localStorage.getItem('DetailData1'));
  	// if(this.jianliStorage){
	// 		this.noshow=false
	// 	}
	},
  components:{
			loginPublictop,linkes,publicfooter
		},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
	text-decoration: none;
}
.section-div{
	width: 75%;
	height: 800px;
	margin: 0 auto;
	position: relative;
}
.left-div {
	width: 63%;
	height:450px ;
  background-color: #fafafa;
  position: absolute;
  top: 25px;
  left: 0;

}

/*没有记录的情况*/
.no_collections{

	  font-size: 18px;
    min-height: 120px;
    background: url(//www.lgstatic.com/www/static/mycenter-sidenav/modules/common/img/noresult_95_d8b37c3.png) 160px 0 no-repeat;
    padding: 60px 0 0 270px;
    margin: 80px 0;
    line-height: 32px;
}
.left-div .c_delivery {
  border-bottom: 1px solid #ebebeb;
  position: relative;

  height: 50px;
  padding: 10px 0 0 20px;
}
.left-div .c_delivery h2 {
  font-weight: 400;
  color: #555555;
}
 .left-div .c_delivery h2 em {
  background: #ffffff url(//www.lgstatic.com/www/static/mycenter-sidenav/modules/common/img/resume_arr_1f2014c.png) no-repeat;
  width: 24px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 0;
}
 .left-div .c_delivery .d_refresh {
  font-size: 18px;
  color: #555;
  background: url(//www.lgstatic.com/www/static/mycenter-sidenav/modules/common/img/refresh_76dc5da.png) left center no-repeat;
  padding-left: 20px;
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
}
/*鼠标移入字体变绿色*/
.green:hover{
	color: #00b38a !important;
}
/*鼠标移入背景颜色变灰色*/
.grays:hover{
	background-color: #fafafa;
}

/*收藏的内容有记录的情况*/
.yes_collections{
	background-color:white;
	width:90%;
	height: 100px;
	margin-left: 5%;
	margin-top: 20px;
	display: flex;
	position: relative;
}
/*左边图片*/
.yes_collections .collections_img{
	width: 15%;
	height: 80px;
	margin-left: 10px;
	margin-top: 10px;
	border: 1px solid #ededed;
	text-align: center;
}
.yes_collections img{
	width: 95%;
	height: 80px;
	margin-left: 10px;
}
/*中间的信息*/
.yes_collections .text{
	margin-top: 10px;
	margin-left: 10px;
	line-height: 30px;
	overflow: hidden;
}
.yes_collections .text p:first-child{
	color:#2cab8e ;
}
.yes_collections .text p:first-child span{
	color: red;
}
/*右边信息*/
.yes_collections .time{
	font-size: 14px;
	margin-left: 20px;
	position: absolute;
  top: 10px;
  right: 10px;
}
.yes_collections .collections_right{
	margin-top: 10px;
	margin-left: 40px;
}
.yes_collections .collections_button{
margin-top: 27px;
position: absolute;
right: 5px;
bottom: 6px;
}
.yes_collections .collections_button a{
	color: #2cab8e;
}
</style>