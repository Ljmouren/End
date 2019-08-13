<template>
	<div>
		<div class="search">
			<span class="glass"></span><button @click="itemsli">搜索职位</button>
			<input type="text" placeholder="搜索“职位”填写一份简历，涨薪59%" v-model="content" @input="mohufn" @blur="qingkong" />
		</div>
		<div class="mohusearch" v-show="whriteshow">
			<div class="sanlan">
				<ul v-for="(item1,index1) in arr" v-if="index1<7">
				  <li class="mohuli"><span>{{item1.jobName}}</span>
					<span>{{item1.title}}</span>
					<span>{{item1.desc}}</span>
				  </li>
			   </ul>
			</div>
			<ul v-for="(item2,index2) in arr0"  v-if="index2<7" class="yilan">
				<li class="mohuli2">{{item2.title}}</li>	
			</ul>
			<p class="close" @click="close0" v-if="sanl"><span>关闭</span><span>查看更多关于<i>{{content}}</i>岗位></span></p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [], //input下拉框
				arr0: [],
				content: '', //input下拉框
				whriteshow: false,
				sanl:false
			}
		},
		methods: {
			close0() {
				this.whriteshow = false;
				this.content = ""
			},
			mohufn: function() {
				this.whriteshow = true;
				this.qingkong();
				this.$axios.get('../../../static/data/yusearch.json')
					.then(res => {
						var shuruzhi = this.content;
						if(shuruzhi) {
							this.arr0 = res.data.searchjob.filter((m) => {
								if(m.title.indexOf(shuruzhi) != -1 || m.jobName.indexOf(shuruzhi) != -1 || m.desc.indexOf(shuruzhi) != -1) {
									return m
								}
							})
						}
					})
			},
			itemsli: function() {
				this.qingkong();
				this.sanl=true;
				this.$axios.get('../../../static/data/yusearch.json')
					.then(res => {
						var vvalue = this.content;
						if(vvalue) {
							this.arr = res.data.searchjob.filter((v) => {
								if(v.title.indexOf(vvalue) != -1 || v.jobName.indexOf(vvalue) != -1 || v.desc.indexOf(vvalue) != -1) {
									return v
								}
							})
						}

					})
			},
			// input输入框失去焦点后清空
			qingkong() {
				this.arr0 = "";
				this.arr = "";
				this.sanl=false;
			}
		}
	}
</script>
<style scoped lang="less">
  /*.xiaotankuang{
  	position: absolute;
  	top:60px;
  	left: 120px;
    width: 346px;
    height: 205px;
    background: #fff;
    z-index: 5;
    padding: 69px 73px;
    box-sizing: border-box;
    border-radius: 4px;
    background-image: url(//www.lgstatic.com/lg-landingpage-fed/pc/images/icon-safe_1a7990a5.png);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 90px 80px;
  }*/
	.mohuli {
		position: relative;
		font-size: 16px;
		color: #333;
		letter-spacing: 0;
		height: 56.5px;
		border-bottom: #ced6d4 solid 1px;
		line-height: 56px;
		margin: 0 1px;
		display: flex;
		justify-content: space-between;
	}
	.mohuli:hover{
		background: #ccc;
	}
	.mohuli2{
		position: relative;
		font-size: 16px;
		color: #333;
		letter-spacing: 0;
		height: 57.2px;
		line-height: 57px;
		margin: 0 1px;
	}
	.mohuli span:nth-of-type(1) {
		padding-left: 40px;
		width: 40%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.mohuli span:nth-of-type(2) {
		text-align: left;
		width: 30%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.mohuli span:nth-of-type(3) {
		padding-right: 40px;
		text-align: right;
		width: 25%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #fa6041;
        font-weight: 600;
		font-size: 16px;
	}
	
	.close {
		i{
			color:#e1deb7;
		}
		position: absolute;
		right: 0;
		bottom: 0;
		padding: 15px 40px;
		width:530px;
	    background: #717372;
	    border-radius: 0 0 4px 4px;
	    display: flex;
	    justify-content: space-between;
	    font-size: 14px;
	    color:white;
	    margin-top: 13px;
	}
	.mohusearch {
		margin-top: 11px;
		position: absolute;
		z-index: 2;
		background: ghostwhite;
		opacity: 0.95;
		width: 610px;
		border-radius: 10px;
	}
	.glass {
		display: inline-block;
		position: absolute;
		margin: 15px 11px 5px 22px;
		background: url(../assets/sprites.png) no-repeat;
		background-position: -82px 0px;
		background-size: 200px 200px;
		width: 18px;
		height: 16px;
	}
	
	.search input {
		box-sizing: border-box;
		font-size: 14px;
		color: #666;
		width: 608px;
		padding-left: 49px;
		flex: 1;
		line-height: 46px;
		border: none;
		outline: none;
		padding-right: 10px;
	}
	
	.search {
		border-radius: 2px;
		height: 46px;
		background:#fbfefd;
		position: relative;
	}
	
	.search button {
		position: absolute;
		top: 5px;
		right: 5px;
		font-size: 16px;
		color: #fff;
		background: #00b38a;
		border-radius: 2px;
		border: none;
		padding: 7px 25px;
		outline: none;
	}
</style>