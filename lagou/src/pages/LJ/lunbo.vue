<template>
	<div class="bannerbox">
		<div class="itemlists">
			<div class="sidebar">
				<div class="menu-box">
					<h2>技术</h2>
					<a href="#">java</a>
					<a href="#">PHP</a>
					<a href="#">C++</a>
					<a href="#">区块链</a>
					<i class="icon"></i>
				</div>
				<div class="menu-box">
					<h2>产品</h2>
					<a href="#">产品总监</a>
					<a href="#">产品经理</a>
					<i class="icon"></i>
				</div>
				<div class="menu-box">
					<h2>设计</h2>
					<a href="#">UI设计师</a>
					<a href="#">交互设计</a>
					<a href="#">网页设计师</a>
					<i class="icon"></i>
				</div>
				<div class="menu-box">
					<h2>运营</h2>
					<a href="#">新媒体运营</a>
					<a href="#">编辑</a>
					<a href="#">数据运营</a>
					<i class="icon"></i>
				</div>
				<div class="menu-box">
					<h2>市场</h2>
					<a href="#">市场营销</a>
					<a href="#">市场推广</a>
					<a href="#">市场策划</a>
					<i class="icon"></i>
				</div>
				<div class="menu-box">
					<h2>销售</h2>
					<a href="#">销售专业</a>
					<a href="#">销售经理</a>
					<a href="#">销售总监</a>
					<i class="icon"></i>
				</div>
				<div class="menu-box">
					<h2>职能</h2>
					<a href="#">HR</a>
					<a href="#">行政</a>
					<a href="#">财务</a>
					<a href="#">审计</a>
					<i class="icon"></i>
				</div>
				<div class="menu-box">
					<h2>游戏</h2>
					<a href="#">小游戏开发</a>
					<a href="#">U3D</a>
					<a href="#">游戏策划</a>
					<i class="icon"></i>
				</div>
			</div>
			<div class="swiper-container">
				<div class="swiper-wrapper" @mouseover="fn()" @mouseout="fn1()">
					<div class="swiper-slide">
						<img src="../../assets/banner1.jpg" />
					</div>
					<div class="swiper-slide">
						<img src="../../assets/banner2.jpg" />
					</div>
					<div class="swiper-slide">
						<img src="../../assets/banner3.jpg" />
					</div>
				</div>
				<!--如果需要分页器-->
				<div class="swiper-pagination active"></div>

				<!--如果需要导航按钮-->
				<div class="swiper-button-prev" v-show="isShow" @mouseover="fn()"></div>
				<div class="swiper-button-next" v-show="isShow" @mouseover="fn()"></div>
			</div>
		</div>

	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		mounted() {
				var mySwiper = new Swiper('.swiper-container', {
					loop: true, // 循环模式选项
					autoplay: true,
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
					},
					// 如果需要前进后退按钮
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},

				})
			},
			data() {
				return {
					isShow: false
				}
			},
			methods: {
				fn() {
					this.isShow = true;
				},
				fn1() {
					this.isShow = false;
				}
			}
	}
</script>

<style lang="less" scoped>
	.bannerbox {
		width: 85%;
		margin: 0 auto;
		display: flex;
	}
	
	.itemlists {
		width: 100%;
		display: flex;
	}
	
	.sidebar {
		width: 25%;
		padding-top: 50px;
		height: 346px;
		.menu-box {
			position: relative;
			line-height: 20px;
			height: 20px;
			margin-bottom: 26px;
			h2 {
				font-style: normal;
				font-weight: normal;
				font-size: 18px;
				display: inline-block;
			}
			a {
				color: #666;
				font-size: 14px;
				line-height: 20px;
				display: inline-block;
				padding: 0 6px;
				&:hover {
					text-decoration: underline;
					color: #00b38a;
				}
			}
			.icon {
				width: 6px;
				height: 10px;
				background: url(../../assets/arrow_92b8589.png) 0 0 no-repeat;
				display: inline-block;
				position: absolute;
				right: 0px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	
	.swiper-container {
		width: 70%;
		height: 346px;
		margin-bottom: 30px;
		margin-top: 50px;
		text-align: center;
		margin-left: 40px;
	}
	
	.swiper-button-prev {
		width: 34px;
		height: 64px;
		background: url(../../assets/img/company/icons1_b3ea05c.png) no-repeat 0 -136px;
	}
	
	.swiper-slide {
		width: 845px;
		height: 346px;
	}
	
	img {
		width: 100%;
		height: 346px;
	}
	
	.swiper-button-next {
		width: 34px;
		height: 64px;
		background: url(../../assets/img/company/icons1_b3ea05c.png) no-repeat -42px -136px;
	}
	
	.swiper-pagination-bullet {
		width: 6px;
		height: 6px;
		background: #00b38a;
	}
</style>