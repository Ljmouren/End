<template>
  <div class="hello">
  	<loginPublictop></loginPublictop>
  	
    <div class="section-div">
				<div class="left-div">
					<div class="c_delivery">
						<h2><em></em>已投递简历状态</h2>
						<a href="#" class="d_refresh green">刷新</a>
					</div>
					<div class="delivery_tabs">
	                    <ul class="reset">                       
	                        <li v-for="(item,index) in arr" @click='flag=index;dji_li()' :class="{current:flag==index}" >
	                          <a class="green"> {{item.name}}</a>
	                        </li>	                       
	                    </ul>
          </div>
          <!--没有记录的情况-->
						   <div v-show="no" class="no_collections">当前没有符合条件的投递记录</div>
					<!--有记录的情况-->	   
					<div  class="yes_collections"  v-show="!no">					 
							 <div class="text">
							  <p>{{xiangqinglocalStorage.title}}<span>（{{xiangqinglocalStorage.wage}}）</span><span class="text_i"><i class="el-icon-chat-dot-round"></i></span></p>
							  <p>{{xiangqinglocalStorage.jobName}}[{{xiangqinglocalStorage.address}}]</p>
							  <p>使用简历：{{xiangqinglocalStorage.fuli}}</p>
							 </div>							 
							 <div class="collections_right">
							 	<p class="time">2019-08-15 {{xiangqinglocalStorage.date}} <span>投递成功<i class="el-icon-caret-bottom"></i></span></p>							 	  					 	
							 </div>
						</div>	   
				</div>
				<!--引入右边猜你喜欢-->
				<linkes></linkes>
			</div>
			
		
			  <!--引入底部-->
			  <publicfooter></publicfooter>
			  
  </div>
</template>

<script>
import linkes from '../../components/linkes.vue'
import loginPublictop from '../../components/loginPublictop.vue'
import publicfooter from '../../components/publicfooter.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr:[{name:'投递成功'},{name:'被查看'},{name:'待沟通'},{name:'邀请面试'},{name:'不合适'},{name:'删除记录'}],
      flag: 0,
      xiangqinglocalStorage:{},
      no:true
    }
  },
  components:{
			loginPublictop,linkes,publicfooter
	},
	mounted(){
		//得到本地数据
		this.getData();
		//当有了数据时让no_collections不显示
		if(this.xiangqinglocalStorage){
			this.no=false
		}
	},
  methods: {
  	dji_li(){
  		localStorage.removeItem('DetailData')
  		if(this.flag==0){
  		this.yes_collections=true
  		}else if(this.flag!=0){
  			this.yes_collections=false
  		}
  	},
  	getData(){
  		if(this.$store.state.isLogin==true){
  			this.xiangqinglocalStorage= JSON.parse(localStorage.getItem('DetailData'));
  		}
  	}
  }	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
	text-decoration: none;
}
.section-div{
	width: 61%;
	height: 800px;
	margin-left: 50%;
	transform: translateX(-50%);
	position: relative;
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
.left-div {
	width: 63%;
	height:450px ;
  background-color: #fafafa;
  position: absolute;
  top: 25px;
  left: 0;

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
 .left-div .delivery_tabs {
  background-color: #f2f2f2;
  padding: 0;
  margin-top: 20px;

}
.left-div .delivery_tabs ul.reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

.left-div .delivery_tabs ul.reset li.current {
  border-bottom: 2px solid #00b38a;
}
.left-div .delivery_tabs ul.reset li.current a {
  border-left: none ;
}
 .left-div .delivery_tabs ul.reset li {
  padding: 16px 0 13px;
  display: inline-block;
}
 .left-div .delivery_tabs ul.reset li a {
  font-size: 18px;
  line-height: 16px;
  padding-left: 16px;
  padding-right: 16px;
  color: #777;
  border-left: 1px solid #d8d8d8;
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
/*左边的信息*/
.yes_collections .text{
	margin-top: 10px;
	margin-left: 10px;
	line-height: 30px;
}
 .yes_collections .text .text_i{
 	display:inline-block;
 	width: 25px;
 	height: 25px;
 	background-color: #01b289;
 	border-radius: 50%;
 	text-align: center;
 }
 .yes_collections .text .text_i i{
 	color: #2cab8e;
 	background: white;
 	border-radius: 50%;
 	border: none;
 }
.yes_collections .text p:first-child{
	color:#2cab8e ;
}
.yes_collections .text p:first-child span{
	color: red;
}
/*右边信息*/
.yes_collections .time{
	position: absolute;
	bottom: 5px;
	right: 20px;
}
.yes_collections .collections_right{
	margin-top: 10px;
	margin-left: 40px;
}
.yes_collections .collections_right .time{
	color:#b29999 ;
}
.yes_collections .collections_right .time span{
	color:#555555;
}
.yes_collections .collections_right i{
	color:#2cab8e;
}
</style>
