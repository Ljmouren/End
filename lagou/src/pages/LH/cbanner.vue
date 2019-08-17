   
<template>
  <div>
   <div class="block">
      <el-carousel trigger="click" height="398px" indicator-position='none' >
        <el-carousel-item v-for="(item,index) in 4" :key="index">
              <h3 class="small"> 什么值得投 </h3>
			  <div class="company_banner" v-if='index==0'>
				<ul class="it_content">
					<li v-for='(item1,index1) in cbanner1' :id="item1.coporate_id" @click='toDetail' @mouseenter="change(index1)" @mouseleave="leave()">
						<img :src="item1.src" />
						<p>{{item1.coporate}}</p>
						<div class="time">
							{{item1.updateTime}}
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
						<div class="it_content_hover" v-show="index1==current">
								<p>{{item1.brief}}</p>
								<a class="company-home" @click="toDetail">进入公司主页</a>
						</div>
					</li>
				</ul>
    </div>
		  <div class="company_banner" v-if='index==1'>
				<ul class="it_content" @click='toDetail'>
					<li v-for='(item2,index2) in cbanner2'  :id="item2.coporate_id" @mouseenter='change(index2)' @mouseleave='leave'>
							<img :src="item2.src" alt="" />
						<p>{{item2.coporate}}</p>
						<div class="time">
							{{item2.updateTime}}
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
						<div class="it_content_hover" v-show='current==index2'>
								<p>{{item2.brief}}</p>
								<a class="company-home" @click="toDetail">进入公司主页</a>
						</div>
					</li>
					
				</ul>
    </div>
	<div class="company_banner" v-if='index==2'>
				<ul class="it_content" @click='toDetail'>
					<li v-for='(item3,index) in cbanner3' :id="item3.coporate_id" @mouseenter='change(index)' @mouseleave='leave'>
							<img :src="item3.src" alt="" />
						<p>{{item3.coporate}}</p>
						<div class="time">
							{{item3.updateTime}}
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
						<div class="it_content_hover" v-show='current==index'>
								<p>{{item3.brief}}</p>
								<a class="company-home" @click="toDetail">进入公司主页</a>
						</div>
					</li>
				</ul>
    </div>
	<div class="company_banner" v-if='index==3'>
				<ul class="it_content" @click='toDetail'>
					<li v-for='(item4,index) in cbanner4' :id="item4.coporate_id" @mouseenter='change(index)' @mouseleave='leave'>
							<img :src="item4.src" alt="" />
						<p>{{item4.coporate}}</p>
						<div class="time">
							{{item4.updateTime}}
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
						<div class="it_content_hover" v-show='current==index'>
								<p>{{item4.brief}}</p>
								<a class="company-home" @click="toDetail">进入公司主页</a>
						</div>	
					</li>
					
				</ul>
    </div>
	
        </el-carousel-item>
      </el-carousel>
    </div>
   
  </div>
</template>

<script>
export default {
data(){
	return{
		cbanner1:[],
		cbanner2:[],
		cbanner3:[],
		cbanner4:[],
		currId:100,
		current:-1
	}
},
mounted(){
	this.getBanner()
},
methods:{
	getBanner(){
		this.$axios.get('../../static/data/cbanner.json').
		then(res=>{
			this.cbanner1=res.data.banner_one;
			this.cbanner2=res.data.banner_two;
			this.cbanner3=res.data.banner_three;
			this.cbanner4=res.data.banner_four;
		})
	},
	toDetail(e){
		this.currId=e.target.parentNode.parentNode.id;
		this.$router.push({path:'/company_home',query:{
			'eleId':this.currId
		}});
		
	},
	change(index){
		this.current=index;
	},
	leave(){
		this.current=-1;
	}
}


};
</script>

<style lang="less">
  .el-carousel__item h3 {
	color: white;
	text-align: center;
	padding: 20px 0 30px;
	font-size: 30px;
  }
  
  .el-carousel__item:nth-child(2n) {
     background-color: #00b38b;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color:#00b38b;
  }
  .it_content{
	  position:relative;
  }
.it_content_hover{
	border:1px solid #03fe56;
	width:235px;
	background:white;
	height: 250px;
	position:absolute;
	top:-8px;
	left:-15px;
	opacity: 0.9;
	box-sizing: border-box;
	overflow:hidden;
	text-align:center;
}
.it_content_hover p{
	height:144px;
	padding: 20px;
	margin-top: 20px;
	text-align:left;
}

.company-home{
	position:relative;
	bottom:0px;
	left: 30px;
	width:70%;
	height: 30px;
	line-height: 30px;
	background-color:#00b38b;
	display:block;
	color:white;
	padding: 5px;
	text-decoration: center; 
}
</style>