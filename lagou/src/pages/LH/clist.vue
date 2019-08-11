<template>
  <div>
    <div class="company_list">
      <div class="c-wrap">
        <ul id="clist">
          <li class="company_item" v-for="(item,index) in nowTableData" :key="index">
            <div class="item_top">
              <img :src="item.src" />
              <p>
                <a href="#">{{item.coporate}}</a>
              </p>
              <p class="scale">移动互联网/C轮/150-500人</p>
              <p class="brief">{{item.brief}}</p>
            </div>
            <div class="item_bottom">
              <a href="#">
                <span>{{item.interview_comments}}</span>
                <p>面试评价</p>
              </a>
              <a href="#">
                <span>{{item.recruit_position}}</span>
                <p>在招职位</p>
              </a>
              <a href="#">
                <span>{{item.timeliness}}</span>
                <p>简历处理率</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
<el-pagination
			  background
			  :current-page.sync="currentPage"
			  :page-size="pageSize"
			  layout="prev, pager, next"
			  :total="clistArr.length">
</el-pagination> 
  
  </div>
</template>

<script>
export default {
  data() {
    return {
	  clistArr: [],
	    currentPage:1,
      pageSize:12
    };
  },
   mounted(){
  	this.getCompanyDate();
  },
   computed:{
  	nowTableData(){
  		return this.clistArr.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)||[];
  	}
  },
  methods: {
    getCompanyDate(){
      this.$axios.get('../../static/data/company_list.json').then(res => {
      this.clistArr = res.data;
  })
    }
  },
	
}

</script>

<style lang="less">
.el-pagination{
  text-align:center;
  padding:20px 0;
  margin-bottom:50px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #00b38a;
}
.company_list {
  color: #555;
}
.company_list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.company_list .company_item {
  box-sizing: border-box;
  float: left;
  width: 24%;
  height: 270px;
  margin: 10px 0;
  border: 1px solid #eee;
  text-align: center;
  padding: 20px 14px 5px;
  &:hover{
   box-shadow: 0px 0px 10px #eeeeee;
  }
}
.company_list .company_item .item_top {
  border-bottom: 1px dashed #e0e0e0;
  padding-bottom:10px;
  .scale{
    color:#999;
  }
  p{
    font-size:14px;
    a{
    color:#555;
    font-size:16px;
    }   
    padding-bottom:6px;
  }
}
.company_list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
  
}
.company_list .company_item {
  box-sizing: border-box;
  float: left;
  width: 24%;
  height: 270px;
  margin-bottom: 10px;
  margin-right:12px;
  border: 1px solid #eee;
  text-align: center;
  padding: 20px 14px 5px;
  cursor: pointer;
}

.company_list .company_item .item_top img {
  height:80px;
  width:80px;
}
.company_list .company_item .brief {
  height: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.company_list .company_item .item_bottom a {
  position: relative;
}
.company_list .company_item .item_bottom a span {
  color: #00b38a;
}
.company_list .company_item .item_bottom a p {
  margin-top: 4px;
  font-size: 12px;
  color: #999;
}
.company_list .company_item .item_bottom a:after {
  position: absolute;
  top: 0;
  right: -24px;
  content: "";
  height: 30px;
  width: 1px;
  background: #ededed;
}
.company_list .company_item .item_bottom {
  display: flex;
  justify-content: space-around;
  padding:12px 0;
  overflow:hidden;
}
.pagination {
  height: 50px;
  margin-top: 10px;
  padding-left: 50px;
}
</style>
