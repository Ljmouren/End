<template>
	<div class="itemjob">
		<div class="itemBig">
			<ul class="jobTab">
				<li @click="layout='hot'" :class="{active:layout=='hot'}">24Hour热门</li>
				<li @click="layout='now'" :class="{active:layout=='now'}">最新职位</li>
			</ul>
			<div class="hot_tips" :class="{show:isshow}" v-show="layout=='hot'">
				<span class="icon"><i>?</i></span>
				<div>过去24小时，最多人看过的岗位在这里</div>
				<span class="know" @click="change()">我知道了</span>
			</div>
			<div class="hot_tips" :class="{show:isshow1}" v-show="layout=='now'">
				<span class="icon"><i>?</i></span>
				<div>刚刚发布的职位！</div>
				<span class="know" @click="change1()">我知道了</span>
			</div>
			<div class="itembox">
				<ul class="items" v-for="(item,index) in arr" v-show="layout=='hot'" :key="index">
					<li :class="current==index?'itemsli shadow':'itemsli'" v-if='index<9' @mouseenter="over(index)" @mouseleave="out()">
						<div :class="item.hasbgurl?'bgimg no':'no'"></div>
						<div class="itemt">
							<p>
								<span @click="goXiang(item)">{{item.title}}</span>
								<em>[{{item.date}}发布]</em>
								<i></i>
								<strong>{{item.wage}}</strong>
							</p>
							<p class="jy">经验{{item.workdate}}</p>
							<a v-for="(item,index) in item.type">{{item}}</a>
						</div>
						<div class="itemb">
							<img :src="item.cover_url" />
							<div>
								<p>{{item.jobName}}</p>
								<span>{{item.desc}}</span>
							</div>
						</div>
					</li>
				</ul>
				<ul class="items" v-for="(item,index) in arr2" v-show="layout=='now'">
					<li :class="current==index?'itemsli shadow':'itemsli'" v-if='index>16' @mouseenter="over(index)" @mouseleave="out()">
						<div :class="item.hasbgurl?'bgimg no':'no'"></div>
						<div class="itemt">
							<p>
								<span>{{item.title}}</span>
								<em>[{{getDate(index)}}发布]</em>
								<i></i>
								<strong>{{item.wage}}</strong>
							</p>
							<p class="jy">经验{{item.workdate}}</p>
							<a v-for="(item,index) in item.type">{{item}}</a>
						</div>
						<div class="itemb">
							<img :src="item.cover_url" />
							<div>
								<p>{{item.jobName}}</p>
								<span>{{item.desc}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="a">
				<div class="list-more" @click="fn()" :class="{showgreen:isS}" @mousemove="yiru" @mouseout="yichu">查看更多</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
				arr2: [],
				isshow: false,
				isshow1: false,
				isS: false,
				isS: false,
				layout: 'hot',
				current: '',
				currlist: {}
			}
		},
		mounted() {
			this.itemjob();
			this.itemjob2();
			this.current = -1;
		},
		methods: {
			itemjob() {
				this.$axios.get('../../static/data/chuJob.json').then(res => {
					this.arr = res.data.recommend_one
				})
			},
			itemjob2() {
				this.$axios.get('../../static/data/chuJob.json').then(res => {
					this.arr2 = res.data.recommend_one
				})
			},
			change() {
				this.isshow = !this.isshow;
			},
			change1() {
				this.isshow1 = !this.isshow1;
			},
			yiru() {
				this.isS = true;
			},
			yichu() {
				this.isS = false;
			},
			fn() {
				this.$router.push('/jobHome');
			},
			over(index) {
				this.current = index;
			},
			out() {
				this.current = -1;
			},
			getDate(index) {
				var date = new Date();
				return date.getHours() + ":" + (date.getMinutes() - index + 16);
			},
			goXiang(item) {
				this.currlist = item;
				this.$router.push({
					path: '/xiangqing',
					query: {
						dataObj: this.currlist
					},
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.bgimg {
		background: url(//www.lgstatic.com/www/static/index/modules/job_list/img/direct-recruit@2x_0d49da5.png) no-repeat;
		background-size: cover;
	}
	
	.no {
		width: 36px;
		height: 36px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.shadow {
		box-shadow: 0px 0px 12px #eeeeee;
	}
	
	.a {
		margin-top: 10px;
		width: 100%;
		height: 80px;
		text-align: center;
		transform: translateX(-1%);
		.list-more {
			width: 31%;
			height: 42px;
			line-height: 42px;
			margin: 20px auto 0;
			background: #FFF;
			border: 1px solid #00B38A;
			font-size: 16px;
			color: #00b38a;
			text-align: center;
			outline: none;
		}
		.showgreen {
			background: #00B38A;
			color: white;
		}
	}
	
	.hot_tips {
		font-size: 14px;
		display: flex;
		margin-top: 30px;
		margin-left: 5px;
		div {
			color: #888;
		}
		.icon {
			width: 18px;
			height: 18px;
			border-radius: 50%;
			background-color: #e6e6e6;
			text-align: center;
			color: #fff;
			margin-right: 10px;
		}
		.know {
			color: #13ca86;
			padding-left: 40px;
			cursor: pointer;
		}
	}
	
	.show {
		display: none;
	}
	
	.itemjob {
		width: 88%;
		margin: 0 auto;
		.itemBig {
			width: 100%;
			overflow: hidden;
			.jobTab {
				width: 97%;
				box-sizing: border-box;
				margin-top: 30px;
				border-bottom: 1px solid #ccc;
				margin-left: 5px;
				overflow: hidden;
				li {
					float: left;
					line-height: 60px;
					margin-right: 45px;
					color: #999999;
					&.active {
						border-bottom: 2px solid #333333;
						color: black;
					}
				}
			}
		}
		.itembox {
			overflow: hidden;
			.items {
				width: 100%;
				font-size: 15px;
				.itemsli {
					float: left;
					width: 31%;
					height: 200px;
					padding: 15px;
					border: 1px solid #EAEEED;
					background-color: #fff;
					box-sizing: border-box;
					margin: 20px 20px 5px 5px;
					position: relative;
					.itemt {
						position: relative;
						line-height: 30px;
						a {
							display: inline-block;
							width: 61px;
							height: 26px;
							padding: 0 5px;
							font-size: 12px;
							line-height: 26px;
							color: #999;
							border: 1px solid #F0F0F0;
							border-radius: 3px;
							text-align: center;
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
							margin-right: 3px;
						}
						.jy {
							color: #999;
						}
						span {
							font-size: 16px;
							width: 100px;
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
						i {
							display: inline-block;
							position: relative;
							width: 16px;
							height: 16px;
							background: url(//www.lgstatic.com/www/static/index/modules/job_list/img/icon_chat2_d162651.png) no-repeat 0 0;
							cursor: pointer;
							top: 2px;
							margin-left: 6px;
						}
						em {
							color: #999;
							margin-left: 6px;
						}
						strong {
							float: right;
							color: red;
						}
					}
					.itemb {
						overflow: hidden;
						margin-top: 18px;
						padding-top: 18px;
						border-top: 1px dashed #E0E0E0;
						div {
							margin-left: 54px;
							span {
								display: inline-block;
								color: #999;
							}
							p {
								text-overflow: ellipsis;
								white-space: nowrap;
								overflow: hidden;
							}
						}
						img {
							width: 40px;
							height: 40px;
							float: left;
						}
					}
				}
			}
		}
	}
</style>