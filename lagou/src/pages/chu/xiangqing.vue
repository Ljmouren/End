<template>
	<div class="xiangqing">
		<publictop v-show='!isLogin'></publictop>
		<logintop v-show='isLogin'></logintop>
		<!-------------------吸顶---------------------->
		<div id="boxFixed" :class="{'is_fixed' : isFixed}" v-show="isFixed">
			<div class="ding">
				<p class="ding-job">{{detailArr.title}}/ <span> {{detailArr.wage}}</span></p>
				<div class="tou-2">
					<div class="tou-2-1">
						<!--<p @click="shoucang()"><i class="fa fa-star-o fa-lg"></i> <span>收藏</span></p>-->
						<p v-show="isshoucangShow" @click="shoucang()"><i class="fa fa-star-o fa-lg"></i> <span>收藏</span></p>
						<p v-show="!isshoucangShow" @click="shoucang2()"><i class="fa fa-star fa-lg"></i> <span>已收藏</span></p>

					</div>
					<div class="tou-2-2">
						<p>投个简历</p>
						<!--	<p><i class="fa fa-paperclip fa-lg  fa-rotate-270"></i>上传附件简历</p>-->

					</div>
				</div>
			</div>
		</div>
		<!---------------详情-------------------------------->
		<div class="xiangTop">
			<div class="toubu">
				<div class="tou">
					<div class="tou-1">
						<p>{{detailArr.id}}</p>
						<p>{{detailArr.title}}</p>
						<p><span class="price">{{detailArr.wage}}</span> / {{detailArr.address}} / {{detailArr.workdate}} / 全职</p>
						<p class="zhi"><span>CAD</span><span>智能硬件</span><span>硬件开发</span><span>电路设计</span></p>
						<p>{{detailArr.date}} 发布与拉勾网</p>
					</div>
					<div class="tou-2">
						<div class="tou-2-1">
							<p v-show="isshoucangShow" @click="shoucang()"><i class="fa fa-star-o fa-lg"></i> <span>收藏</span></p>
							<p v-show="!isshoucangShow" @click="shoucang2()"><i class="fa fa-star fa-lg"></i> <span>已收藏</span></p>
							<p><i class="fa fa-address-card-o fa-lg"></i> 完善在线简历</p>
						</div>
						<div class="tou-2-2">
							<p>
								<el-button class='send' type="text" @click="open">投个简历</el-button>
							</p>
							<p><i class="fa fa-paperclip fa-lg  fa-rotate-270"></i>上传附件简历</p>
							<p><i class="fa fa-exclamation-triangle fa-lg"></i><i class="fa fa-weixin fa-lg"></i><i class="fa fa-jsfiddle fa-lg"></i></p>

						</div>
					</div>
				</div>
			</div>
		</div>
		<xiangMiddle>
			<p class="p1" slot="tutu">
				<img class="tu-1" :src="detailArr.cover_url" />
				<a class="kai">{{detailArr.jobName}}</a>
				<span class="tu-2">	<i class="fa fa-get-pocket fa-lg"></i></span>
			</p>

			<i slot="dizhia"><span>{{detailArr.address}}</span><span>-</span><span></span><span>-</span><span></span><span>-</span><span>{{detailArr.type}}</span></i>
		</xiangMiddle>

		<!--<div class="huojiankuang" v-show="isshow" @click="change" :class="{up:ischange}"></div>-->
		<backtop></backtop>
		<!-- <xiangBottom></xiangBottom>-->
		<publicfooter></publicfooter>
	</div>
</template>

<script>
	import xiangTop from '../../components/xiangTop'
	import xiangMiddle from '../../components/xiangMiddle'
	import xiangBottom from '../../components/xiangBottom'
	import publictop from '../../components/publictop'
	import publicfooter from '../../components/publicfooter'
	import logintop from '../../components/loginPublictop'
	import backtop from '../tang/backTop'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				isFixed: "",
				isshow: false,
				ischange: false,
				isLogin: false,
				isshoucangShow: true,
				detailArr: {},
				dialogVisible: false,
				inids:''//获取收藏页面的下标
			}
		},
		components: {
			xiangTop,
			xiangMiddle,
			xiangBottom,
			publictop,
			publicfooter,
			logintop,
			backtop
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
			window.addEventListener('scroll', this.hujianScroll)
			this.fn
			//收藏页面跳转
			this.inids=this.$route.query.inids;
			if(this.inids){
				this.$axios.get('../../static/data/chuJob.json').then(res=>{
				let arrlist=res.data.recommend_one;
				for (let i=0;i<arrlist.length;i++) {
					if(arrlist[i].no==this.inids){
						this.isshoucangShow=false
						this.detailArr=arrlist[i]
					}
				}
			})
			}
			if(this.$route.query.dataObj){
				this.detailArr = this.$route.query.dataObj;//获取上个页面传过来的数据
			}
			if(this.$store.state.isLogin) {
				this.setIcon();
			}
		},

		computed: {
			fn: function() {
				this.isLogin = this.$store.state.isLogin
			}
		},
		created() {
			this.menu();
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},
		methods: {
			//控制收藏图标状态
			setIcon() {
				let currObj = this.detailArr;
				let likesAry = JSON.parse(localStorage.getItem('likes')) || [];
				likesAry.forEach((item, index) => {
					if(item.title == currObj.title) {
						this.isshoucangShow = false;
					}
				})
			},
			//点击收藏
			shoucang() {
				if(this.$store.state.isLogin == true) {
					this.isshoucangShow = false;
					let addObj = this.detailArr; //把本次要添加的数据存进addObj中	
					// addObj.isLike=true;	
					let likesAry = JSON.parse(localStorage.getItem('likes')) || []; //获取本地存储中的值放入likesAry 中,若不存在则给它赋一个空数组
					if(JSON.stringify(likesAry).indexOf(JSON.stringify(addObj)) == -1) {
						//判断本地存储中是否已存在当前要添加的数据
						likesAry.push(addObj);
					}
					localStorage.setItem('likes', JSON.stringify(likesAry));
				}
			},
			//取消收藏
			shoucang2() {
				this.isshoucangShow = true;
				let delObj = this.detailArr; //获取本次要取消收藏的数据存进delObj中				
				let likesAry = JSON.parse(localStorage.getItem('likes'));
				likesAry.forEach((item, index) => {
					if(item.title == delObj.title) {
						likesAry.splice(index, 1)
					}
				});
				localStorage.setItem('likes', JSON.stringify(likesAry)); //更新删除后的数据
				// console.log('删除后：',likesAry)				
			},
			//投递简历					
			open() {
				if(this.$store.state.isLogin == true) {
					let sendObj = this.detailArr; //把本次要添加的数据存进addObj中	
					let sendAry = JSON.parse(localStorage.getItem('send')) || []; //获取本地存储中的值放入sendAry中,若不存在则给它赋一个空数组
					if(JSON.stringify(sendAry).indexOf(JSON.stringify(sendObj)) !== -1) {
						//已存在当前要添加的数据
						this.$message('请勿重复投递！！');
					} else {
						this.$confirm('确认要投递吗？ ', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {							
								//添加数据
							sendAry.push(sendObj);
							localStorage.setItem('send', JSON.stringify(sendAry));
							this.$message({
								type: 'success',
								message: '投递成功!'
							});
						}).catch(() => {
							this.$message({
								type: 'info',
								message: '已取消投递'
							});
						})

					}

				}
			},
			menu() {
				window.scrollTo(0, 0);
			},

			getDetailData() {
				
			},
			handleScroll() {
				let scrollTopa = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
				let offsetTopa = document.querySelector('#boxFixed').offsetTop; // 要滚动到顶部吸附的元素的偏移量
				this.isFixed = scrollTopa > offsetTopa ? true : false; // 如果滚动到顶部了，this.isFixed就为true
			},

			change() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
				this.ischange = true;
				const that = this;
				let timer = setInterval(function() {
					let ispeed = Math.floor(-that.scrollTop / 4);
					document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
					if(that.scrollTop === 0) {
						clearInterval(timer)
					}
				}, 10);

				if(scrollTop === 0) {
					this.isshow = false;
				}
			},
			hujianScroll() {
				const that = this;
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if(that.scrollTop > 60) {
					that.isshow = true;
				} else {
					that.isshow = false

				}
				if(that.scrollTop == 0) {
					this.ischange = false;
				}
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.send {
		padding: 0;
	}
	
	.el-button--text {
		color: white;
	}
</style>
<style scoped lang="less">
	#boxFixed {
		width: 100%;
	}
	
	.is_fixed {
		position: fixed;
		top: 0;
		z-index: 999;
	}
	
	.ding {
		display: flex;
		background: #f2f5f4;
		align-items: center;
	}
	
	.ding-job {
		box-sizing: border-box;
		padding-left: 250px;
		font-weight: bold;
		font-size: 20px;
		width: 62.4%;
		color: black;
	}
	
	.ding-job span {
		color: #fd5f39;
	}
	
	.tou-2 {
		width: 30%;
		display: flex;
		padding: 15px;
	}
	
	.tou-2-1 {
		margin-right: 15px;
		text-align: center;
	}
	
	.tou-2-2 {
		text-align: center;
	}
	
	.tou-2-1 p:nth-of-type(1) {
		border: 1px solid #00b38a;
		color: #00b38a;
		font-size: 14px;
		text-align: center;
		padding: 15px 30px;
		border-radius: 5px;
		margin-bottom: 10px;
		box-sizing: border-box;
	}
	
	.tou-2-1 p:nth-of-type(2) {
		border: 1px solid #00b38a;
		color: #00b38a;
		text-align: center;
		padding: 15px 30px;
		border-radius: 5px;
		margin-bottom: 10px;
	}
	
	.tou-2-1 p:nth-of-type(2) .fa-star {
		color: gold;
	}
	
	.tou-2-2 p:nth-of-type(1) {
		border: 1px solid #00b38a;
		color: white;
		background: #00b38a;
		text-align: center;
		padding: 11px 21px;
		border-radius: 5px;
		margin-bottom: 10px;
		font-size: 20px;
	}
	/*.tou-2-2 p:nth-of-type(2){
	font-size: 14px;
	margin-bottom: 10px;
}*/
	/*.tou-2-2 p:nth-of-type(3){
	text-align: center;
}*/
	
	.huojiankuang {
		width: 30px;
		height: 48px;
		position: fixed;
		bottom: 150px;
		right: 250px;
		background: url(../../assets/img/company/backtop-new_0e4bcbc.png) no-repeat;
		/*background-position-x: -37px;*/
	}
	
	.up {
		background-position-x: -37px;
	}
	/*-----------------详情---------------*/
	
	.toubu {
		background: #f2f5f4;
	}
	
	.tou {
		display: flex;
		width: 70%;
		margin: 0 auto;
		padding-top: 30px;
	}
	
	.tou-1 {
		width: 70%;
		padding: 15px;
		box-sizing: border-box;
	}
	
	.tou-1 p {
		margin-bottom: 10px;
	}
	
	.tou-1 p:nth-of-type(1) {
		font-size: 14px;
	}
	
	.tou-1 p:nth-of-type(2) {
		font-size: 35px;
		color: black;
	}
	
	.tou-1 p:nth-of-type(3) {
		font-size: 19px;
	}
	
	.price {
		color: #fd5f39;
		font-size: 19px;
	}
	
	.tou-1 p:nth-of-type(5) {
		font-size: 13px;
		color: #a499a4;
	}
	
	.zhi span {
		background: white;
		font-size: 12px;
		padding: 1px 3px;
		border-radius: 10px;
		margin-right: 5px;
	}
	
	.tou-2 {
		width: 30%;
		display: flex;
		padding: 15px;
	}
	
	.tou-2-1 {
		margin-right: 15px;
		text-align: center;
	}
	
	.tou-2-2 {
		text-align: center;
	}
	
	.tou-2-1 p:nth-of-type(1) {
		border: 1px solid #00b38a;
		color: #00b38a;
		text-align: center;
		padding: 15px 30px;
		border-radius: 5px;
		margin-bottom: 10px;
	}
	
	.tou-2-1 p:nth-of-type(2) {
		font-size: 14px;
	}
	
	.tou-2-2 p:nth-of-type(1) {
		border: 1px solid #00b38a;
		color: white;
		background: #00b38a;
		text-align: center;
		padding: 11px 21px;
		border-radius: 5px;
		margin-bottom: 10px;
		font-size: 20px;
	}
	
	.tou-2-2 p:nth-of-type(2) {
		font-size: 14px;
		margin-bottom: 10px;
	}
	
	.tou-2-2 p:nth-of-type(3) {
		text-align: center;
	}
	
	.el-message-box__title {
		background-color: red;
	}
	
	.el-message-box__btns button:nth-child(2) {
		background-color: red!important;
	}
</style>