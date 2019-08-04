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
						   <div class="no_collections">暂无记录</div>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
	width: 61%;
	height: 800px;
	margin-left: 50%;
	transform: translateX(-50%);
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
</style>