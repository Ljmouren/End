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
		<retankuang></retankuang>
	</div>
</template>

<script>
   import retankuang from './retankuang'
	export default {
		data() {
			return{
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
				active: '技术',
				imgUrl: [], //左侧图片渲染
				indes: 0, //左侧图片渲染
				inid:''
			}
		},
		components: {
		   retankuang
		},
		mounted: function() {
			this.$axios.get('../../../static/data/yu.json').then(res => {
				this.imgUrl = res.data.data0;
			})
		},
		methods:{
            tank(index1){
            	this.inid=index1;
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
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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