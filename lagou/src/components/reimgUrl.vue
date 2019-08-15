<template>
	<div class="fenlei">
		<div class="leftfenlei">
			<ul v-for="(item,index) in stylelist" @click="fn(index)">
				<li :class="{activet:active==item.title}" @click="selected(item.title)">{{item.title}}</li>
			</ul>
		</div>
		<div class="rightfenlei">
			<div v-for="(item,index1) in imgUrl">
				<img :src="item.url" class="hover_img" @click="tank(index1)">
			</div>
		</div>
		<div class="hello" v-show="isShow">
			<i class="el-icon-close" @click="close"></i>
			<div class="zhuti">
				<div class="header">
					<img :src="strlist.url">
					<div>
						<h2>{{strlist.title}}</h2>
						<p class="desc">{{strlist.desc}}</p>
					</div>
				</div>
				<div class="content1">
					<h3>热招职位</h3>
					<p><span>服务端测试开发</span><span>移动端测试开发</span><span>web前端工程师</span></p>
					<p><span>Java开发实习生</span><span>硬件开发</span><span>战略分析师</span></p>
				</div>
				<div class="content2">
					<h3>福利</h3>
					<p><span>年底双薪</span><span>节日福利</span><span>弹性工作</span><span>大平台</span><span>高薪酬</span></p>
				</div>
				<div class="footer">
					<p>注册，即可查看更多职位信息</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				stylelist: [{
						title: '技术'
					},
					{
						title: '产品'
					},
					{
						title: '设计'
					},
					{
						title: '市场'
					},
					{
						title: '运营'
					},
					{
						title: '销售'
					},
				],
				isShow: false,
				strlist: {},
				active: '技术',
				imgUrl: [], //左侧图片渲染
				indes: 0, //左侧图片渲染
				inid: ''
			}
		},
		mounted: function() {
			this.$axios.get('../../../static/data/yu.json').then(res => {
				this.imgUrl = res.data.data0;
			})
		},
		methods: {
			tank(index1) {
				this.inid = index1;
				this.getdata();
			},
			imgload() {
				this.$axios.get('../../../static/data/yu.json')
					.then(res => {
						if(this.indes == 0) {
							this.imgUrl = res.data.data0;
						} else if(this.indes == 1) {
							this.imgUrl = res.data.data1;
						} else if(this.indes == 2) {
							this.imgUrl = res.data.data2;
						} else if(this.indes == 3) {
							this.imgUrl = res.data.data3;
						} else if(this.indes == 4) {
							this.imgUrl = res.data.data4;
						} else if(this.indes == 5) {
							this.imgUrl = res.data.data5;
						}
					})
			},
			fn(index) {
				this.indes = index;
				this.imgload();
			},
			selected(title) {
				this.active = title;
			},
			getdata() {
				this.$axios.get('../../static/data/reimgurl.json')
					.then(res => {
						console.log(res.data.dataa)
						this.strlist = res.data.dataa[this.inid]
					})
					this.isShow=true;
			},
			close() {
				this.isShow = false;
				this.inid=-1;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.hello {
		position: absolute;
		left: 50px;
	}
	
	.el-icon-close {
		position: absolute;
		right: 20px;
		top: 8px;
		color: #ccc;
		font-size: 18px;
	}
	
	.desc {
		line-height: 40px;
	}
	
	.hello {
		font-weight: 500;
		color: #666666;
		width: 525px;
		height: 395px;
		position: absolute;
		z-index: 3;
		background: white;
	}
	
	.header {
		display: flex;
		margin-bottom: 20px;
	}
	
	.header img {
		margin-right: 10px;
		border: 1px solid #ccc;
	}
	
	.content1 {
		line-height: 30px;
		margin-bottom: 20px;
	}
	
	.content1 span {
		font-size: 15px;
		display: inline-block;
		width: 30%;
		margin-right: 10px;
	}
	
	.content2 {
		line-height: 30px;
		margin-bottom: 35px;
	}
	
	.content2 span {
		border-radius: 3px;
		font-size: 13px;
		padding: 7px;
		margin-right: 13px;
		border: 1px solid #ccc;
	}
	
	.zhuti {
		padding: 20px 10px 30px 30px;
	}
	
	h3 {
		color: #122B40;
		font-weight: 600;
		line-height: 50px;
	}
	
	.footer {
		font-size: 14px;
		line-height: 40px;
	}
	
	.hover_img {
		background: #ccc;
		opacity: 0.7;
	}
	
	.hover_img:hover {
		opacity: 1;
	}
	
	.fenlei {
		height: 415px;
		width: 110px;
	}
	
	.activet {
		border-radius: 4px;
		color: #007d61!important;
		background-color: #7fc8b7;
	}
	
	.fenlei ul {
		padding: 7px 7px 0px 7px;
	}
	
	.fenlei li {
		list-style: none;
		width: 100px;
		height: 59px;
		line-height: 59px;
		text-align: center;
		color: white;
		font-size: 16px;
	}
	
	.leftfenlei {
		margin-top: 10px;
		background: #00906f;
		border-radius: 4px;
		box-sizing: border-box;
	}
	
	.fenlei {
		width: 610px !important;
		display: flex;
	}
	
	.rightfenlei {
		margin-top: 7px;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		padding: 3px 0px 0px 10px;
	}
	
	.rightfenlei img {
		border-radius: 4px;
	}
</style>