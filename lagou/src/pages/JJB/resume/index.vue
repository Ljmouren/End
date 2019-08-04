<template>
  <div class="hello">
  	<!--导航条-->
  	<loginPublictop></loginPublictop>
  	
  	<!--内容-->

			<div class="box" id="container">
				
				  <!-- 个人信息-->
			        <div class="basic">
			
							<div class="basic-photo" @mouseenter="show()"@mouseleave="gbi()">
								        <img class="mr_headimg user-avatar" src="//www.lgstatic.com/common/image/pc/default_boy_headpic1.png"  width="120" height="120" alt="头像" />
								        <img v-show="tximagshow" src="//www.lgstatic.com/www/static/mycenter/modules/common/img/shadow_tx_a482008.png" width="119" height="119" />
							</div>
							<div class="basic-info">    
						        <el-button @click="openDialog" class="edit-btn basic-info__edit"><i class="el-icon-edit"></i> 编辑</el-button>
						        <div class="basic-name-area" >
						            <p class="basic-name female">{{indexdata.name}}</p>
						            <i class="icon-sex icon-sex__male "></i>
						        </div>
					            <p class="basic-self">
					                <span class="basic-school"  >{{indexdata.school}} / </span>				
					                <span class="basic-edu">{{indexdata.edu}} / </span>					
					                <span class="basic-end-year">{{indexdata.year}} /   </span>					
					                <span class="basic-age">{{indexdata.age}}岁</span>					
					            </p>
					             <p>
						            <span class="basic-tel" >
						                <i class="el-icon-mobile"></i><span>{{indexdata.mobile}}</span>
						            </span>
						            <span class="basic-email" >
						                <i class="el-icon-message"></i><span>{{indexdata.message}}</span>
						            </span>
					            </p>
					        </div>
					</div>    
				
				<div class="detail">
					<!--自我描述-->
					 <div class="mr-template per" id="perAbility">
					    <div class="mr-template_title">
					        <span>自我描述</span>
					    </div>
					    <div class="tagboard">
					        <div class="editor-tool">
					            <em class="edit-btn" >
					                 <i class="el-icon-edit"></i>
					                                编辑
					            </em>
					        </div>
					        <div class="integrative-tag_content">
					            <span class="tagboard-tag">个人能力</span>
					        </div>
					    </div>
					    <div class="per-self_content">
					        <div class="per-self_des">
					            <p>asasa</p>
					        </div>
					        <div class="editor-tool">
					            <em class="edit-btn">
					               <i class="el-icon-edit"></i>
					                               编辑
					            </em>
					        </div>
					    </div>
					</div>
				
					
			   <!--教育经验-->
                <div class="mr-templateedu-exp" id="eduExp">
				    <div class="mr-template_title">
				        <span>教育经历</span>
				        <em class="add-btn">
				                <i class="el-icon-folder-add"></i>
				                添加
				        </em>
				    </div>
				    <ol class="edu-exp_group">
				        <li class="edu-exp_list" >
				            <div class="editor-tool">
				                    <em class="edit-btn" >
				                       <i class="el-icon-edit"></i>
				                                                            编辑
				                    </em>
				            </div>
				            <p  class="exp-list_time">2024-2024</p>
				            <div class="exp-list_top">
				                <img src="//www.lgstatic.com/images/logo_default.png" alt="学校Logo">
				                <div class="exp-list_right">
				                <strong>122</strong>
				                <p>大专 / 213</p>
				                </div>
				            </div>
				        </li>
				    </ol>
			    </div>
			    
			    
			    <!-- 工作经历-->
			    <div class="mr-templateedu-exp" id="eduExp">
				    <div class="mr-template_title">
				        <span>工作经历</span>
				        <em class="add-btn">
				                 <i class="el-icon-folder-add"></i>
				                添加
				        </em>
				    </div>
				  
			    </div>
			    <!--项目经历 -->
			    <div class="mr-templateedu-exp" id="eduExp">
				    <div class="mr-template_title">
				        <span>项目经历</span>
				        <em class="add-btn">
				                 <i class="el-icon-folder-add"></i>
				                添加
				        </em>
				    </div>
				   
			    </div>
			    <!--社交主页 -->
			    <div class="mr-templateedu-exp" id="eduExp">
				    <div class="mr-template_title">
				        <span>社交主页</span>
				        <em class="add-btn">
				                 <i class="el-icon-folder-add"></i>
				                添加
				        </em>
				    </div>
				  
			    </div>
			    <!--图片作品 -->
			    <div class="mr-templateedu-exp" id="eduExp">
				    <div class="mr-template_title">
				        <span>图片作品</span>
				        <em class="add-btn">
				                 <i class="el-icon-folder-add"></i>
				                添加
				        </em>
				    </div>
				   
			    </div>			    
			</div>
			<!--下载-->
			 <div class="mr_bottom">
			         
			            
			            <div class="mr_down">
			                    <span><i class="el-icon-download"></i><span>把这份简历保存到本地</span></span>
			            </div>
			           
			            <div class="mr_bottom_r">
			                <span>简历更新于</span><span class="upResumeTime">2019-07-02 21:05</span>
			            </div>
			        
			    </div>
			
			<div class="mr-myresume-right">
				<!--求职意向-->
                <div class="job-objective">
				     <div class="job-objective__title">
				         <p>求职意向</p>
				         <span class="edit-btn"><i class="el-icon-edit"></i>编辑</span>
				     </div>
				     <ul class="job-objective__list ">
				        <li class="job-objective__name  dn ">
				            <i></i>
				            <span title="产品经理">产品经理</span>
				        </li>
				        <li class="job-objective__type">
				            <i></i>
				            <span title="全职">全职</span>
				        </li>
				        <li class="job-objective__city">
				            <i></i>
				            <span title="深圳">深圳</span>
				        </li>
				        <li class="job-objective__salary">
				            <i></i>
				            <span title="15k-20k">15k-20k</span>
				        </li>
				        <li class="job-objective__info">
				            <i></i>
				             <span title="积极找工作">积极找工作</span>
				                            ／<span title="随时">随时</span>
				         </li>
				    </ul> 
				</div>  
				<!--我要上传附件简历-->
				<div class="annex">
					<a><i class="el-icon-paperclip"></i> 我要上传附件简历</a>
				</div>
				<!--简历完整度-->
				<div class="right-nav__integrity">
		            <div class="mr_top">
		                <span ><span>简历完整度：</span><span class="mr-score">52分</span></span>
		                <a class="active-color" target="_blank" >预览简历</a>
		            </div>
		            
                <el-progress :percentage="64"></el-progress>
                
		        </div>
		        <!--基本信息  -->
		        <div class="message">
			        <ul class="right-nav__content">
			            <li class="right-nav__item active" @click="changeStatus(1)" :style="{'border-left':isActive==1?blueColor:normalColor, 'color':isActive==1?'#00b88d':'#333'}">
			                <i class="el-icon-user"></i>
			                <span class="mr_m_name">基本信息</span> 
			            </li>
			            <li class="right-nav__item" @click="changeStatus(2)" :style="{'border-left':isActive==2?blueColor:normalColor,  'color':isActive==2?'#00b88d':'#333'}">
			               <i class="el-icon-tickets"></i>
			                <span class="mr_m_name">个人能力</span>
			            </li>
			            <li class="right-nav__item" @click="changeStatus(3)" :style="{'border-left':isActive==3?blueColor:normalColor,  'color':isActive==3?'#00b88d':'#333'}">
			                <div class="editor-tool">
			                        <em class="add-btn">添加</em>
			                </div>
			                <i class="el-icon-suitcase"></i>
			                <span class="mr_m_name">工作经历</span>
			            </li>
			            <li class="right-nav__item" @click="changeStatus(4)" :style="{'border-left':isActive==4?blueColor:normalColor,  'color':isActive==4?'#00b88d':'#333'}">
			                <div class="editor-tool">
			                        <em class="add-btn">添加</em>
			                        <em class="del-btn dn">删除</em>
			                </div>
			                <i class="el-icon-s-data"></i>
			                <span class="mr_m_name">项目经验</span>
			            </li>
			            <li class="right-nav__item" @click="changeStatus(5)" :style="{'border-left':isActive==5?blueColor:normalColor,  'color':isActive==5?'#00b88d':'#333'}">
			                <div class="editor-tool">
			                        <em class="add-btn">添加</em>
			                </div>
			                <i class="el-icon-reading"></i>
			                <span class="mr_m_name">教育经历</span>
			            </li>
			            <li class="right-nav__item" @click="changeStatus(6)" :style="{'border-left':isActive==6?blueColor:normalColor,  'color':isActive==6?'#00b88d':'#333'}">
			                <div class="editor-tool">
			                        <em class="add-btn">添加</em>
			                        <em class="del-btn dn">删除</em> 
			                </div>
			                <i class="el-icon-copy-document"></i>
			                <span class="mr_m_name">社交主页</span>
			            </li>
			            <li class="right-nav__item" @click="changeStatus(7)" :style="{'border-left':isActive==7?blueColor:normalColor,  'color':isActive==7?'#00b88d':'#333'}">
			                <div class="editor-tool">
			                        <em class="add-btn">添加</em>
			                        <em class="del-btn dn">删除</em> 
			                </div>
			                <i class="el-icon-picture-outline"></i>
			                <span class="mr_m_name">图片作品</span>
			            </li>
	                </ul>
	            </div>   
	         
			</div>	
			   
		   </div>
		   <!--引入弹出框-->
		   <basic-info v-if="isShow" @close="closeDialog"></basic-info>
	    <!--引入底部-->
			  <publicfooter></publicfooter>
  </div> 
</template>

<script>
	
import loginPublictop from '../../../components/loginPublictop.vue'
import publicfooter from '../../../components/publicfooter.vue';
import BasicInfo from './basic-info-dialog.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      tximagshow:false,
      isShow: false,
      indexdata:
      {
      name:'蒋建斌',
      school:'桂林电子科技大学',
      edu:'大专',
      year:'学生',
      age:'25',
      mobile:'17678458888',
      message:'17678458888@163.com'
      },
      isActive: 1,
      blueColor: "3px solid #00b88d",
      normalColor: "3px solid transparent"
    }
  },
  components:{
			loginPublictop,
			publicfooter,
			BasicInfo
	},
  methods:{
  	show(){
  		this.tximagshow=true;
  	},
  	gbi(){
  		this.tximagshow=false;
  	},
  	openDialog() {
  		this.isShow = true;
  	},
  	closeDialog(config) {
  		console.log(config)
  		this.isShow = config.isShow; 		
  		this.indexdata.name=config.name;
  		this.indexdata.edu=config.city;
  		this.indexdata.year=config.studId;
  		this.indexdata.mobile=config.phoneNum;
  		this.indexdata.message=config.emailNum;
  	},
  	changeStatus(value) {
  		this.isActive = value;
  	},
  	format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
	height: 1200px;
}
.box {
  position: relative;
  height: 200px;
}
.box .basic {
  padding: 50px;
  background: #FAFAFA;
  border-radius: 5px 5px 0 0;
  border: 1px solid #e3ebe9;
  display: flex;
  width: 30%;
  margin-left: 21%;
  margin-top: 40px;
}
.box .basic .basic-photo {
  height: 88px;
  width: 88px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.box .basic .basic-photo img {
  height: 88px;
  width: 88px;
  position: absolute;
  top: 0;
  border-radius: 50%;
}
.box .basic .basic-photo .basic-photo_shadow {
  display: none;
}
.box .basic .basic-info {
  position: relative;
  width: 100%;
  margin-left: 20px;
  flex: 1;
}
.box .basic .basic-info .edit-btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 37px;
  color: #00B38A;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}
.box .basic .basic-info em,
.box .basic .basic-info i {
  font-style: normal;
}
.box .basic .basic-info em .icon-icon_resume_editor:before {
  content: "\e901";
}
.box .basic .basic-info .basic-name-area {
  overflow: hidden;
  height: 37px;
  margin-bottom: 11px;
}
.box .basic .basic-info .basic-name {
  float: left;
  max-width: 250px;
  font-size: 26px;
  color: #333;
  font-weight: 600;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box .basic .basic-info p {
  font-size: 14px;
  color: #333;
  line-height: 20px;
  margin-top: 6px;
}
.box .basic .basic-info .icon-sex.icon-sex__male {
  background-position: -54px -117px;
}
.box .basic .basic-info .icon-sex {
  width: 13px;
  height: 13px;
  float: left;
  margin-top: 16px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-image: url(//www.lgstatic.com/www/static/mycenter/modules/myresume_new/img/basic-sprite_fa961f7.png)
}
.box .basic .basic-info .basic-self {
  margin-top: 20px;
}
.box .detail {
  width: 36%;
  border: 1px solid #e3ebe9;
  margin-left: 21%;
  border-top: none ;
}
.box .mr-template {
  padding: 50px 50px 10px;
  width: 640px;
}
.box .mr-template .mr-template_title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.box .mr-template .mr-template_title span {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  position: relative;
  margin-left: 10px;
}
.box .mr-template .mr-template_title span:before {
  content: '';
  display: block;
  border-left: 3px solid #00B38A;
  height: 16px;
  width: 3px;
  position: absolute;
  left: -7px;
  top: 50%;
  transform: translateY(-50%);
}
.box .mr-template .tagboard {
  position: relative;
}
.box .mr-template .tagboard .editor-tool {
  bottom: 9px;
  top: auto;
  background: #fff;
  justify-content: flex-end;
  width: 50px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  z-index: 1;
  padding: 2px 3px;
}
.box .mr-template .tagboard .integrative-tag_content .tagboard-tag {
  border: 1px solid #949494 ;
  padding: 5px;
  border-radius: 20px ;
  color: #999;
  font-size: 12px;
}
.box .mr-template .per-self_content {
  position: relative;
  padding: 5px 0;
}
.box .mr-template .per-self_content .per-self_des {
  margin-top: 13px;
  font-size: 14px;
  color: #666;
  line-height: 30px;
}
.box .mr-template .per-self_content .editor-tool {
  bottom: 9px;
  top: auto;
  background: #fff;
  justify-content: flex-end;
  width: 50px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  z-index: 1;
  padding: 2px 3px;
}
.box .mr-templateedu-exp {
  padding: 50px 50px 10px;
}
.box .mr-templateedu-exp .mr-template_title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.box .mr-templateedu-exp .mr-template_title span {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  position: relative;
  margin-left: 10px;
}
.box .mr-templateedu-exp .mr-template_title span:before {
  content: '';
  display: block;
  border-left: 3px solid #00B38A;
  height: 16px;
  width: 3px;
  position: absolute;
  left: -7px;
  top: 50%;
  transform: translateY(-50%);
}
.box .mr-templateedu-exp .mr-template_title .add-btn {
  color: #00B38A;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}
.box .mr-templateedu-exp .edu-exp_group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.box .mr-templateedu-exp .edu-exp_group .edu-exp_list {
  position: relative;
  margin-bottom: 30px;
}
.box .mr-templateedu-exp .edu-exp_group .edu-exp_list .edit-btn {
  display: none;
}
.box .mr-templateedu-exp .edu-exp_group .edu-exp_list .edit-btn .icon-icon_resume_editor {
  margin-right: 6px;
}
.box .mr-templateedu-exp .edu-exp_group .edu-exp_list .exp-list_time {
  font-size: 14px;
  color: #666;
  position: absolute;
  right: 0;
}
.box .mr-templateedu-exp .edu-exp_group .edu-exp_list .exp-list_top {
  display: flex;
  align-items: center;
}
.box .mr-templateedu-exp .edu-exp_group .edu-exp_list .exp-list_top img {
  width: 46px;
  height: 46px;
  margin-right: 10px;
}
.box .mr-templateedu-exp .edu-exp_group .edu-exp_list .exp-list_top .exp-list_right {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 46px;
  justify-content: space-between;
}
.box .mr_bottom {
  width: 37%;
  height: 20px;
  margin-left: 20%;
  position: relative;
  margin-top: 5px;
  color: #c5c5c5;
}
.box .mr_bottom .mr_down {
  position: absolute;
  left: 5px;
  top: 0;
}
.box .mr_bottom .mr_down i {
  display: inline-block;
  margin-right: 10px;
  width: 16px;
  height: 12px;
 /* background: url(../img/简历2.png) -90px -140px no-repeat;*/
}
.box .mr_bottom .mr_bottom_r {
  position: absolute;
  right: 0;
  top: 0;
}
.box .mr-myresume-right {
  position: absolute;
  right: 24%;
  top: 0;
  width: 280px;
}
.box .mr-myresume-right .job-objective {
  width: 280px;
  padding: 20px 20px 15px;
  border: 1px solid #F2F2F2;
  border-radius: 1px;
  margin-bottom: 20px;
}
.box .mr-myresume-right .job-objective .job-objective__title {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
}
.box .mr-myresume-right .job-objective .job-objective__title p {
  font-size: 16px;
  color: #333;
  font-weight: 600;
}
.box .mr-myresume-right .job-objective .job-objective__title .edit-btn {
  color: #00B38A;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}
.box .mr-myresume-right .job-objective .job-objective__list {
  color: #666;
  font-size: 14px;
  padding: 0 0 0 10px;
}
.box .mr-myresume-right .job-objective .job-objective__list li {
  margin-bottom: 15px;
  display: flex;
}
.box .mr-myresume-right .job-objective .job-objective__list li i {
  margin-right: 6px;
  background-position: -102px -106px;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-image: url(//www.lgstatic.com/www/static/mycenter/modules/common/img/icon_jobObj_1c9b4bb.png);
  background-repeat: no-repeat;
  background-size: 128px 256px;
}
.box .mr-myresume-right .job-objective .job-objective__list .job-objective__name i {
  background-position: -10px -170px;
}
.box .mr-myresume-right .job-objective .job-objective__list .job-objective__type i {
  background-position: -10px -110px;
}
.box .mr-myresume-right .job-objective .job-objective__list .job-objective__city i {
  margin-right: 6px;
  background-position: -102px -106px;
}
.box .mr-myresume-right .job-objective .job-objective__list .job-objective__salary i {
  background-position: -10px -140px;
}
.box .mr-myresume-right .job-objective .job-objective__list .job-objective__info i {
  background-position: -10px -200px;
}
.box .mr-myresume-right .annex {
  width: 320px;
  border: 1px solid #F2F2F2;
  border-radius: 1px;
  margin-right: 180px;
  display: block;
  text-align: center;
  line-height: 79px;
  font-size: 14px;
  color: #666;
}
.box .mr-myresume-right .right-nav__integrity {
  padding: 16px 16px 18px;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
  border-radius: 3px;
  margin-bottom: 18px;
  width: 288px;
  margin-top: 20px;
}
.box .mr-myresume-right .right-nav__integrity .mr_top {
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.box .mr-myresume-right .right-nav__integrity .mr_top .active-color {
  color: #00B38A;
}
.box .mr-myresume-right .right-nav__integrity .mr_top a {
  color: #555;
  background-color: transparent;
  text-decoration: none;
}
.box .mr-myresume-right .right-nav__integrity .mr_integrity_m {
  position: relative;
  height: 6px;
  background-color: #eee;
  border-radius: 3px;
}
.box .mr-myresume-right .message {
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
  border-radius: 3px;
  width: 320px;
  margin-top: 20px;
}
.box .mr-myresume-right .message .right-nav__content .active {
  color: #00b88d;
  border-color: #00b88d;
  border-width: 3px;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  height: 50px;
  border-left: 3px solid transparent;
  line-height: 50px;
  margin-left: -1.5px;
  position: relative;
  cursor: pointer;
 
}

.box .mr-myresume-right .message .right-nav__content .right-nav__item i {
  display: inline-block;
  width: 18px;
  height: 18px;

  margin: 3px 15px 0 31px;
}
.i-mr_m_name{
	
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .mr_base_i {
  background-position: -23px -117px;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .mr_self_i {
  background-position: -67px -262px;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .mr_works_i {
  background-position: -24px -137px;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .mr_project_i {
  background-position: -67px -177px;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .mr_edu_i {
  background-position: -24px -156px;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .mr_social_account_i {
  background: url(//www.lgstatic.com/www/static/mycenter/modules/common/img/social_account_a5d472f.png) no-repeat;
  background-position: -5px -5px;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .mr_portfolio_account_i {
      background: url(//www.lgstatic.com/www/static/mycenter/modules/myresume_new/img/photo@2x_defa2c7.png) no-repeat;
  background-size: contain;
}
.box .mr-myresume-right .message .right-nav__content .right-nav__item .editor-tool {
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  right: 20px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  z-index: 1;
  padding: 2px 3px;
}

</style>
