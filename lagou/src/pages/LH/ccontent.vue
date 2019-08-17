<template>
  <div>
    <div class="c-wrap">
      <!--筛选-->
      <ul class="filter">
        <li id="city" @click="chooseCity">
          <strong>公司地点：</strong>
          <a class="active">全国</a>
          <a>北京</a>
          <a>上海</a>
          <a>广州</a>
          <a>深圳</a>
          <a>成都</a>
          <a>南京</a>
          <a>武汉</a>
        </li>

        <li id="finance" @click="chooseFinance">
          <strong>融资阶段：</strong>
          <a class="active">不限</a>
          <a>未融资</a>
          <a>天使轮</a>
          <a>A轮</a>
          <a>B轮</a>
          <a>C轮</a>
          <a>D轮</a>
          <a>D轮以上</a>
        </li>
        <li id="scale" @click="chooseScale">
          <strong>公司规模：</strong>
          <a class="active">不限</a>
          <a>少于15人</a>
          <a>15-50人</a>
          <a>50-150人</a>
          <a>150-500人</a>
          <a>500-2000人</a>
          <a>2000人以上</a>
        </li>
        <li id="type" @click="chooseType">
          <strong>行业领域：</strong>
          <a class="active">不限</a>
          <a>移动互联网</a>
          <a>电商</a>
          <a>金融</a>
          <a>企业服务</a>
          <a>教育</a>
          <a>文娱</a>
          <a>游戏</a>
        </li>
      </ul>
      <!--排序方式-->
      <ul class="filter">
        <li>
          <strong>排序方式：</strong>
          <a class="active">默认排序</a>
          <a>职位数量↓</a>
          <a>面试评价数↓</a>
          <a>简历处理率↓</a>
          <span class="check">
            <i></i>有面试评价
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import empty from './empty/empty.js'
export default {
  data() {
    return {
      show: true,
      filtersData: [],
    };
  },
   mounted(){
     this. getCompanyDate();
   },
  methods:{
     getCompanyDate(){
      this.$axios.get('../../static/data/company_list.json').then(res => {
      this.clistArr = res.data;
  })
    },
  
    //筛选城市
chooseCity(e){
  let city=document.getElementById('city');
  let cityList=city.getElementsByTagName('a');
  let companys=this.clistArr;
  let str=e.target.innerHTML;
  //调整选择中样式
  for(let i=0;i<cityList.length;i++){
    cityList[i].className='';
  }
  e.target.className='active';
  let filtersData=[];
  
  companys.forEach(item => {
    let cityStr=item.city;
      if(cityStr.indexOf(str)>-1){
        filtersData.push(item);
      }
  });
  if(str==='全国'|| str==='不限'){
     filtersData=companys
  }
  this.filtersData=filtersData;
  empty.$emit('sendData',this.filtersData);
},
//筛选融资阶段
chooseFinance(e){
  let finance=document.getElementById('finance');
  let financeList=finance.getElementsByTagName('a');
  let companys=this.clistArr;
  let str=e.target.innerHTML;
  //调整选择中样式
  for(let i=0;i<financeList.length;i++){
    financeList[i].className='';
  }
  e.target.className='active';
  let filtersData=[];
  
  companys.forEach(item => {
    let financeStr=item.finance;
      if(financeStr.indexOf(str)>-1){
        filtersData.push(item);
      }
  });
  if(str==='全国'|| str==='不限'){
     filtersData=companys
  }
  this.filtersData=filtersData;
  empty.$emit('sendData',this.filtersData);
},
//筛选公司规模
chooseScale(e){
  let scale=document.getElementById('scale');
  let scaleList=scale.getElementsByTagName('a');
  let companys=this.clistArr;
  let str=e.target.innerHTML;
  //调整选择中样式
  for(let i=0;i<scaleList.length;i++){
    scaleList[i].className='';
  }
  e.target.className='active';
  let filtersData=[];
  companys.forEach(item => {
    let scaleListStr=item.scale;
      if(scaleListStr.indexOf(str)>-1){
        filtersData.push(item);
      }
  });
  if(str==='全国'|| str==='不限'){
     filtersData=companys
  }
  this.filtersData=filtersData;
  empty.$emit('sendData',this.filtersData);
},
//筛选行业领域
chooseType(e){
  let type=document.getElementById('type');
  let typeList=type.getElementsByTagName('a');
  let companys=this.clistArr;
  let str=e.target.innerHTML;
  //调整选择中样式
  for(let i=0;i<typeList.length;i++){
    typeList[i].className='';
  }
  e.target.className='active';
  let filtersData=[];
  companys.forEach(item => {
    let typeStr=item.type;
      if(typeStr.indexOf(str)>-1){
        filtersData.push(item);
      }
  });
  if(str==='全国'|| str==='不限'){
     filtersData=companys
  }
  this.filtersData=filtersData;
  empty.$emit('sendData',this.filtersData);
},

//封装筛选方法
filterItem:function(e,id){
  let myItem=document.getElementById('id');
  console.log(myItem)
  let itemList=myItem.getElementsByTagName('a');
  let companys=this.clistArr;
  let str=e.target.innerHTML;
  //调整选择中样式
  for(let i=0;i<itemList.length;i++){
    itemList[i].className='';
  }
  e.target.className='active';
  let filtersData=[];
  companys.forEach(item => {
    let itemStr=item.id;
      if(itemStr.indexOf(str)>-1){
        filtersData.push(item);
      }
  });
  if(str==='全国'|| str==='不限'){
     filtersData=companys
  }
  this.filtersData=filtersData;
  empty.$emit('sendData',this.filtersData);
}
  }
};
</script>

<style lang="less">
.c-wrap {
  width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}
.filterlast {
  display: none;
}
.filter {
  background: #fafafa;
  border: 1px solid #ededed;
  padding: 5px 15px;
  margin: 20px 0px;
  cursor: pointer;
}
.filter li {
  margin: 5px 0px;
}
.filter li a {
  margin-right: 5px;
  display: inline-block;
  padding: 4px 8px;
  color: #555;
}
.filter li a.active {
  color: white;
  background: #00b38a;
}
.filter li a:hover {
  color: white;
  background: #00b38a;
}

.filter li .more {
  float: right;
  margin: 0 16px;
  position: relative;
}
// .filterlast{
//   background: #fafafa;
//   padding: 5px 15px;
//   margin: 20px 0px;
//   font-size: 12px;

// .filterlast li {
//   margin: 5px 0px;
// }
// .filterlast li a  {
//   margin-right:5px;
//   display: inline-block;
//   padding: 4px 8px;
//   color: #555;
// }
// .filterlast li a.active {
//   color: white;
//   background: #00b38a;
// }

.content .filter li .more i {
  position: absolute;
  top: 9px;
  right: -3px;
  font-size: 0;
  height: 0;
  width: 0;
  border-width: 6px 6px 0;
  border-style: solid dashed;
  border-color: #00b38a transparent transparent;
  overflow: hidden;
}
.filter li .check {
  float: right;
  margin: 0 16px;
  position: relative;
  color: #555;
}
.filter li .check i {
  display: inline-block;
  vertical-align: middle;
  margin: -3px 3px 0;
  width: 18px;
  height: 15px;
  background: url(../../assets/img/company/check_f5603cd.png) no-repeat;
}
</style>


