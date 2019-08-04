<template>
  <div class="hello">
  	<div class="right-div">
					 <div class="mr_r_nav">
					    <ul class="clearfix">
					        <li>
					            <span  href="#" class="green drop">
					                                             投递箱<i class="el-icon-box" ></i>
					            </span>
					 
					        </li>
					        <li>
					            <span href="#" class="green drop">邀请函<i class="el-icon-message"></i>
					            </span>
					        </li>
					        <li>
					            <span href="#" class="green drop">收藏夹<i class="el-icon-star-off"></i></span>
					        </li>
					        <li>
					            <span href="#" class="green drop">订阅栏<i class="fa fa-rss fa-lg i-fa"></i></span>
					        </li>
					    </ul>
				    </div>
                    <div class="like">
	                    <ul class="reset">
	                       
	                        <li  class="current" >
	                            <a href="#">猜你喜欢</a>
	                        </li>
	                       
	                    </ul>
	                    
	                    <div class="position_detail_content grays">
	                    	<div class="guess_like_list_item_logo grays">
                                <img src="http://www.lgstatic.com/i/image/M00/6C/2A/CgpEMlmssvqAOmqwAAAaf54VvvM398.jpg" alt="亚桐集团" width="56" height="56" />
                            </div>
                            
                            <div class="guess_like_list_item_pos">
                            <p class="tit">高级产品经理</p>
                            <p>15k-20k</p>
                            <p class="company_name">
                                <span class="company_name_span">亚桐集团</span><span class="company_position_span" data-lg-tj-id="1ke0" data-lg-tj-no="0001" data-lg-tj-cid="6090846">[深圳·民治]</span>
                            </p>
                            </div>
                        
	                    </div>
	                    
	                     <div class="position_detail_content grays">
	                    	<div class="guess_like_list_item_logo">
                                <img src="http://www.lgstatic.com/images/logo_default.png" alt="亚桐集团" width="56" height="56" />
                            </div>
                            
                            <div class="guess_like_list_item_pos">
                            <p class="tit">产品经理/产品策划</p>
                            <p>10k-20k</p>
                            <p class="company_name">
                                <span class="company_name_span">泽邦创思</span><span class="company_position_span" data-lg-tj-id="1ke0" data-lg-tj-no="0001" data-lg-tj-cid="6090846">[深圳·西丽]</span>
                            </p>
                            </div>
                        
	                    </div>
	                    
	                     <div class="position_detail_content grays">
	                    	<div class="guess_like_list_item_logo">
                                <img src="http://www.lgstatic.com/i/image2/M00/1A/1A/CgotOVoAIUSANnkrAAD0AYEPLzo86.jpeg" alt="亚桐集团" width="56" height="56" />
                            </div>
                            
                            <div class="guess_like_list_item_pos">
                            <p class="tit">产品经理</p>
                            <p>15k-20k</p>
                            <p class="company_name">
                                <span class="company_name_span">蜜平台</span><span class="company_position_span" data-lg-tj-id="1ke0" data-lg-tj-no="0001" data-lg-tj-cid="6090846">[深圳·皇岗]</span>
                            </p>
                            </div>
                        
	                    </div>
	                    
	                     <div class="position_detail_content grays">
	                    	<div class="guess_like_list_item_logo">
                                <img src="http://www.lgstatic.com/i/image2/M00/0A/E4/CgotOVndfsKAVKfDAABgELl1LmE189.jpg" alt="亚桐集团" width="56" height="56" />
                            </div>
                            
                            <div class="guess_like_list_item_pos">
                            <p class="tit">捕鱼产品经理</p>
                            <p>15k-20k</p>
                            <p class="company_name">
                                <span class="company_name_span">花色互娱</span><span class="company_position_span" data-lg-tj-id="1ke0" data-lg-tj-no="0001" data-lg-tj-cid="6090846">[深圳·南山区]</span>
                            </p>
                            </div>
                        
	                    </div>
	                    
	                     <div class="position_detail_content grays">
	                    	<div class="guess_like_list_item_logo">
                                <img src="http://www.lgstatic.com/i/image/M00/73/04/Cgp3O1gteKCAMVdbAAApNp8Trz8758.png" alt="亚桐集团" width="56" height="56" />
                            </div>
                            
                            <div class="guess_like_list_item_pos">
                            <p class="tit">信贷产品经理</p>
                            <p>15k-25k</p>
                            <p class="company_name">
                                <span class="company_name_span">AKULAKU</span><span class="company_position_span" data-lg-tj-id="1ke0" data-lg-tj-no="0001" data-lg-tj-cid="6090846">[深圳·科技园]</span>
                            </p>
                            </div>
                        
	                    </div>
	                    
	                     <a href="#" class="similar_position_footer green" >更多猜你喜欢职位</a>
	                    
                   </div>
			</div>
  	
  </div> 
</template>

<script>
	
import loginPublictop from '../components/loginPublictop.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.right-div {
  width: 300px;
  position: absolute;
  right: 4%;
  top: 30px;
}
 .right-div .mr_r_nav {
  margin-bottom: 18px;
}
 .right-div .mr_r_nav .clearfix {
  list-style: none;
  padding: 0;
}
 .right-div .mr_r_nav .clearfix li {
  float: left;
  width: 70px;
  margin-right: 3px;
  border: 1px solid #f2f2f2;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
 .right-div .mr_r_nav .clearfix li .drop {
  position: relative;
  display: block;
  padding-top: 40px;
  height: 26px;
  text-align: center;
  background-color: #fafafa;
  color: #555;
}
 .right-div .mr_r_nav .clearfix li .drop i {
  position: absolute;
  left: 50%;
  margin-left: -14px;
  top: 8px;
  font-size: 25px;
  font-weight:10px;
}
.i-fa{
	margin-top: 5px;
}
 .right-div .mr_r_nav .clearfix li .drop .td {
  background-position: 0 -316px;
}
.right-div .mr_r_nav .clearfix li .drop .yq {
  background-position: -101px -316px;
}
.right-div .mr_r_nav .clearfix li .drop .sc {
  background-position: -35px -316px;
}
 .right-div .mr_r_nav .clearfix li .drop .dy {
  background-position: -67px -316px;
}
.right-div .like {
  width: 300px;
  padding: 0;
  margin-top: 70px;
}
.right-div .like ul.reset {
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 2px solid #e9e9e9 ;
}
 .right-div .like ul.reset li.current {
  border-bottom: 2px solid #00b38a;
}
 .right-div .like ul.reset li.current a {
  border-left: none ;
  margin-left: -20px;
}
 .right-div .like ul.reset li {
  padding: 16px 0 13px;
  display: inline-block;
}
.right-div .like ul.reset li a {
  font-size: 15px;
  line-height: 16px;
  padding-left: 26px;
  padding-right: 26px;
  color: black;
  font-weight: bold;
  border-left: 1px solid #d8d8d8;
}
.right-div .like .position_detail_content {
  border-bottom: 1px dashed #e5e5e5;
  position: relative;
  width: 300px;
  height: 80px;
  vertical-align: top;
}
 .right-div .like .position_detail_content .guess_like_list_item_logo {
  width: 58px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid #f2f2f2;
}
 .right-div .like .position_detail_content .guess_like_list_item_logo img {
  display: block;
}
 .right-div .like .position_detail_content .guess_like_list_item_pos {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30%;
  width: 210px;
}
 .right-div .like .position_detail_content .guess_like_list_item_pos .tit {
  font-size: 18px;
  color: black;
}
 .right-div .like .position_detail_content .guess_like_list_item_pos p {
  color: #e6775c;
  margin: -2px 0 0 0;
  padding: 0;
  font-size: 16px;
}
 .right-div .like .position_detail_content .guess_like_list_item_pos .company_name {
  color: #999999;
}
.right-div .like .position_detail_content .guess_like_list_item_pos .company_name .company_name_span {
  text-overflow: ellipsis;
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  width: 100px;
  display: block;
  float: left;
}
.right-div .like .position_detail_content .guess_like_list_item_pos .company_name .company_position_span {
  position: absolute;
  right: 0;
  font-size: 10px;
}
.right-div .like .similar_position_footer {
  display: block;
  color: #555;
  height: 35px;
  line-height: 35px;
  background: #fafafa url(//www.lgstatic.com/www/static/common/widgets/mycenter-recommend/img/similar_position_triangle_ef2979b.png) no-repeat 220px 10px;
  margin-bottom: 10px;
  margin-top: 12px;
  text-align: center;
}
/*鼠标移入字体变绿色*/
.green:hover{
	color: #00b38a !important;
}
/*鼠标移入背景颜色变灰色*/
.grays:hover{
	background-color: #fafafa;
}
</style>
