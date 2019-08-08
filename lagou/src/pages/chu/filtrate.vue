<template>
  <div class="filtrate">
    <div class="filtrateWrap">
		    	<div class="showBig" v-show="isShowSize1">
		        <ul>
		            <li class="cityRow">
		          	
				          		 <p class="mainCity" :class="{green:isShowgreen}">
				              	    <i class="title">工作地点:</i><span class="quanguo" @click="back">全国</span><span class="mainCityItem" v-for="(item,index) in wpList" @click="show">{{item.name}}</span>
				               </p>
				               <div class="cityArea" v-show="isCityAreaShow">
				               	    <i class="title">行政区：</i><i class="cityArea-1"><span v-for="(item,index) in cityarea1">{{item.areaName}}</span></i>
				               </div>
				               <div class="moreCity" v-show="!isShow" @mouseover="rotatechange" @mouseout="rotateNochange">
						               	<p class="mainCity" :class="{green:isShowgreen}">
						               		 <i class="title">工作地点:</i><span class="quanguo" >全国</span><span class="mainCityItem" v-for="(item,index) in wpList" @click="show1">{{item.name}}</span>
						               	</p>
						               	<p class="moreCity-1"><span v-for="(item,index) in wpList7" @click="show1">{{item.morecity}}</span></p>
				               </div>
				               <p class="moreShow" @mouseover="rotatechange" @mouseout="rotateNochange">更多<i :class="isShow?'rotateN':'rotateY'" class="el-icon-caret-bottom"></i></p>
		            </li>
		            <li>
		            	<p><i class="title">工作经验:</i><span v-for="(item,index) in wpList2">{{item.jingyan}}</span></p>
		            </li>
		            <li>
		            	<p><i class="title">学历要求:</i><span v-for="(item,index) in wpList3">{{item.xueli}}</span></p>
		            </li>
		            <li>
		            	<p><i class="title">融资阶段:</i><span class="RZ" v-for="(item,index) in wpList4">{{item.rj}}</span></p>
		            </li>
		            <li>
		            	<p><i class="title">公司规模:</i><span class="GM" v-for="(item,index) in wpList5">{{item.guimo}}</span></p>
		            </li>
		            <li class="LyRow">
		            	     <p class="mainLy" >
				              	    <i class="title">行业领域:</i><span class="LY" v-for="(item,index) in wpList6">{{item.lingyu}}</span>
				               </p>
				               
				               <div class="moreLy" v-show="!isShowLy" @mouseover="rotatechangeLy" @mouseout="rotateNochangeLy">
						               	<p class="mainLy" >
						               		 <i class="title">工作地点:</i><span class="mainLyItem" v-for="(item,index) in wpList6">{{item.lingyu}}</span>
						               	</p>
						               	<p class="moreLy-1"><span v-for="(item,index) in wpList8" >{{item.morejob}}</span></p>
				               </div>
				               <p class="moreShowLu" @mouseover="rotatechangeLy" @mouseout="rotateNochangeLy">更多<i :class="isShowLy?'rotateN':'rotateY'" class="el-icon-caret-bottom"></i></p>
		            	
		            </li>
		        </ul>
		     </div>
		     <div class="showSmall" v-show="isShowSize2">
		        <i class="title">工作地点:</i><span>全国</span>
						<i class="title">工作经验:</i><span>不限</span>
						<i class="title">学历要求:</i><span>不限</span>
						<i class="title">融资阶段:</i><span>不限</span>
						<i class="title">公司规模:</i><span>不限</span>
						<i class="title">行业领域:</i><span>不限</span>
		     </div>
		     <div class="control" @click="changesize">
		     	  <i :class="isShowSize2 ?'rotateN':'rotateY'" class="el-icon-arrow-down"></i>
		     </div>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			isShow:true,
			isShowLy:true,
			isShowSize1:true,
			isShowSize2:false,
			isCityAreaShow:false,
			isShowgreen:false,
			wpList:[],
			wpList2:[],
			wpList3:[],
			wpList4:[],
			wpList5:[],
			wpList6:[],
			wpList7:[],
			wpList8:[],
			cityarea1:[],
			
		}
	},
  components:{
  	
  },
  mounted(){
  	 this.getData();
  },
  methods:{
  	getData(){
    	this.$axios.get("../../../static/data/chuList.json").then(res=>{
			  this.wpList=res.data.wpList;
        this.wpList2=res.data.wpList2;
        this.wpList3=res.data.wpList3;
        this.wpList4=res.data.wpList4;
        this.wpList5=res.data.wpList5;
        this.wpList6=res.data.wpList6;
        this.wpList7=res.data.wpList7;
        this.wpList8=res.data.wpList8;
        this.cityarea1=res.data.cityarea1;
        
		  })
		},
    rotatechange(){
  		this.isShow=false;
  		this.isShowgreen=true;
  	},
  	rotateNochange(){
  		this.isShow=true;
  		this.isShowgreen=false;
  	},
  	rotatechangeLy(){
  		this.isShowLy=false;
  	},
   rotateNochangeLy(){
   	this.isShowLy=true;
   },
    changesize(){
    	this.isShowSize1=!this.isShowSize1;
    	this.isShowSize2=!this.isShowSize2;
    },
    show(){
    	this.isCityAreaShow=true;
    	
    },
    show1(){
    	this.isShow=!this.isShow;
    	this.isCityAreaShow=true;
    },
    back(){
    	this.isShow=true;
    	this.isCityAreaShow=false;
    }
  },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.rotateN{
		transform: rotate(0deg);
		transition:transform 0.5s ;
		
	}
	.rotateY{
		transform: rotate(180deg);
		transition:transform 0.5s ;
		
	}
	.showBig{
		/*padding: 10px 15px;*/
		background:#fafafa ;
		box-sizing: border-box;
	}
	.filtrateWrap span{
		padding: 2px 5px;
		/*border: 1px solid red;*/
		font-size:14px ;
		margin-right: 10px;
	}
	
	.filtrateWrap .title{
		font-weight: bold;
	  padding: 2px 5px;
	  font-size:14px ;
		margin-right: 10px;
	}
	.showBig ul li span:hover{
	  background: #00b38a;
		color: white;
	
	
	}
	.showBig ul li p{
	padding: 10px;
		
	}
	.cityRow{
		position: relative;
		
	}
	
	.moreShow{
		position: absolute;
		right:0;
		top: 0;
		font-size: 14px;
	}
	.control{
		position: absolute;
		left: 50%;
		background: #fafafa;
		width: 50px;
		height: 20px;
		line-height: 20px;
		border: 1px solid #E0E0E0;
		text-align: center;
		border-top: none;
		z-index: 1;
	}
	.moreCity{
		position:absolute ;
		top: 1px;
		background: white;
		border: 1px solid #E0E0E0;
	
	}
	.moreCity .mainCity{
		border-bottom: 1px dashed #E0E0E0;
		padding: 10px;
	}
	
	.el-icon-arrow-down{
		color:#E0E0E0 ;
	}
	.el-icon-caret-bottom{
		color: #00b38a;
	}
	.showSmall {
		padding: 10px 15px;
		
	}
	.showSmall span{
		background: #00b38a;
		color: white;
	}
	.cityArea{
		display: flex;
		background: white;
		border: 1px solid #E0E0E0;
		border-left: none;
		border-right: none;
		width: 100%;
		padding: 10px 15px;
		box-sizing: border-box;
	}
	.cityArea-1{
	/*  display: inline-block;*/
	   
		width: 90%;
		display: flex;
		flex-wrap: wrap;
	}
	.moreCity-1{
	   display: flex;
	   flex-wrap: wrap;
	   /*align-items: auto;*/
	   
	}
	
	.green span:nth-of-type(1){
		background-color: #00b38a;
		color: white;
	
	}
.mainCity span:nth-of-type(1){
		border: 1px solid #E0E0E0;
		background: white!important;
		color: #2c3e50!important;
	}
	.LyRow{
		position: relative;
	}
	.moreShowLu{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 14px;
		z-index: 3;
	}
	.moreLy{
		position:absolute ;
		top: 1px;
		background: white;
		border: 1px solid #E0E0E0;
		z-index: 2;
	}
	.moreLy-1{
		 display: flex;
	   flex-wrap: wrap;
	}
	.moreLy .mainLy{
		border-bottom: 1px dashed #E0E0E0;
		padding: 10px;
	
	}
</style>
