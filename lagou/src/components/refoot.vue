	<template>
	 <div class="footer">
				<ul class="footerlist">
					<li>
						<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon1_37bdd49e.png">
						<div>
							<p class="foottitle">极速入职</p>
							<p class="footcontent">最快24小时拿到企业offer</p>
						</div>
					</li>
					<li>
						<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon2_e42a2c4a.png">
						<div>
							<p class="foottitle">隐私保护</p>
							<p class="footcontent">安全私密快速投简历</p>
						</div>
					</li>
					<li>
						<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon3_c6a75262.png">
						<div>
							<p class="foottitle">薪资透明</p>
							<p class="footcontent">薪资透明真实谢绝面议</p>
						</div>
					</li>
					<li>
						<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon4_85c5b151.png">
						<div>
							<p class="foottitle">海量信息</p>
							<p class="footcontent">海量互联网职位实时更新</p>
						</div>
					</li>
				</ul>
				<div class="footbottom">
					<div class="footimg">
						<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/logo-footer_521e1f40.png">
					</div>
					<p class="footbottom-info">
						<span>&copy;拉勾网 京ICP备14023790号-2</span><span class="footerline"></span>
						<span>京公网安备 11010802024043号</span><span class="footerline"></span>
						<span>违法和不良信息举报电话：4006 2828 35 (9:00 -18:00)</span><span class="footerline"></span>
						<span>举报邮箱：cc@lagou.com</span>
					</p>
				</div>
			</div>
	</template>
	
	<script>
	export default {
	  
	}
	</script>
	
	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped lang="less">
		.footerlist img {
		margin: 0px 8px 0px;
		width: 43px;
		height: 43px;
	}
	
	.footerlist {
		padding-bottom: 40px;
		margin: 0 auto;
		width: 1014px;
		display: flex;
		justify-content: space-between;
	}
	
	.footerlist li {
		display: flex;
		list-style: none;
	}
	
	.foottitle {
		font-size: 18px;
		color: #333;
		height: 20px;
		line-height: 20px;
	}
	
	.footcontent {
		font-weight: 400;
		font-size: 13px;
		color: #666;
		height: 32px;
		line-height: 32px;
	}
	
	.footer {
		padding-top: 50px;
		padding-bottom: 30px;
	}
	
	.footbottom img {
		width: 175px;
		height: 18px;
	}
	
	.footbottom-info {
		margin: 0 auto;
		color: #999;
		font-size: 12px;
		width: 1014px;
		text-align: center;
		line-height: 22px;
	}
	
	.footimg {
		height: 26px;
		padding-top: 25px;
		width: 1014px;
		border-top: 0.6px solid #d5dadf;
		margin: 0 auto;
		text-align: center;
	}
	
	.footerline {
		display: inline-block;
		width: 1px;
		height: 10px;
		margin: 0 5px;
		background: #ccc;
		overflow: hidden;
	}
	
	</style>
