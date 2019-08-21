<template>
	<div class="basic-info-dialog">
		<el-dialog
	  		title="基本信息"
	  		:visible.sync="dialogVisible"
	  		width="30%"
	  		:before-close="handleClose">
	  		<span>
	  			<div class="input-div">
		  			<span class="name">姓名</span> 
		  			<el-input
		  				  class="name-input"
						  type="text"
						  placeholder="请输入内容"
						  v-model="name"
						  maxlength="10"
						  show-word-limit
						>
	                 </el-input>
                </div> 
                <div class="input-div">
	                <span class="name">生日</span> 
		  			
		  			<template >
					  <el-select class="birthday-input"  v-model="birthday" multiple placeholder="请选择">
					    <el-option
					    	
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
					
					  <el-select class="right-birthday-input" v-model="sex" multiple collapse-tags style="margin-left:10px;" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.month"
					      :value="item.value">
					    </el-option>
					  </el-select>
					</template> 
                </div>
                
                <div class="input-div">
		  			<span class="name">性别</span> 
		  			<template class="gender">
					
					    <el-radio class="el-radio" v-model="radio1" label="1" border>男</el-radio>
					    <el-radio v-model="radio1" label="2" border>女</el-radio>
					
					</template>
                </div> 
                
                <div class="input-div">
		  			<span class="name">所在城市</span> 
		  			<template>
					  <el-select class="city" v-model="city" placeholder="深圳">
					    <el-option-group
					     
					      v-for="group in cityoptions"
					      :key="group.label"
					      :label="group.label">
					      <el-option
					        v-for="item in group.options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value">
					      </el-option>
					    </el-option-group>
					  </el-select>
					</template>
                </div> 
                
                
                <div class="input-div">
		  			<span class="name">手机号码</span> 
		  			<input class="phone-number" type="text" v-model="phoneNum" value="phoneNum"/>
                </div> 
                
                <div class="input-div">
		  			<span class="name">联系邮箱</span> 
		  			<input class="mailbox" type="text" v-model="emailNum" value="emailNum"/>
                </div> 
                
                <div class="input-div">
		  			<span class="name">当前身份</span> 
		  			<template >
					
					    <el-radio class="identity" v-model="identity1" label="1" border>学生</el-radio>
					    <el-radio v-model="identity1" label="2" border>非学生</el-radio>
					
					</template>
                </div>
                
                
	  		</span>

	  		<span slot="footer" class="dialog-footer">
	    
	    		<el-button class="dialog-button" type="primary" @click="close">保存</el-button>
	  		</span>
		</el-dialog>
	</div>
</template>


<script>
  export default {
    data() {
      return {
        dialogVisible: true,
        name: '',
         /*生日年*/
        options: [
	        {
	        	value: "1",
	          	label: '1990',
	          	month:'01'
	        }, {
	        	value: "2",
	          	label: '1991',
	          	month:'02'
	        }, {
	        	value: "3",
	          	label: '1992',
	          	month:'03'
	        }, {
	        	value: "4",
	          	label: '1993',
	          	month:'04'
	        }, {
				value: "5",
		        label: '1994',
		        month:'05'
	        }, {
	        	value: "6",
	          	label: '1995',
	          	month:'06'
	        }, {
	        	value: "7",
	          	label: '1996',
	          	month:'07'
	        }, {
	        	value: "8",
	          	label: '1997',
	          	month:'08'
	        }, {
				value: "9",
	          	label: '1998',
	          	month:'09'
	        }, {
	        	value: "10",
	          	label: '1999',
	          	month:'10'
	        }
        ],
        birthday: [],
        sex: [],
        /* 性别*/
        radio1: '1', 
        /*所在城市*/
        cityoptions: [
			{
	          	label: '热门城市',
	          	options: [
		          	{
		            	value: '上海',
		            	label: '上海'
		          	}, {
		            	value: '北京',
		            	label: '北京'
		          	}
	          	]
	        }, 
	        {
	          	label: '城市名',
	          	options: [
			        {
			           value: '成都',
			           label: '成都'
			        }, {
			            value: '深圳',
			            label: '深圳'
			        }, {
			            value: '广州',
			            label: '广州'
			        }, {
			            cityvalue: '大连',
			            label: '大连'
			        }
	          	]
	        }
    	],
        city: '',
        /*身份*/
        identity1:'1',
       /*手机号码*/
        phoneNum: "",
        emailNum: ""
      };
    },
    methods: {
      	handleClose(done) {

     		this.$emit("close", false)
     	},
    	close() {
    		let data = {
	    		name: this.name,
	    		birthday: this.birthday,
	    		school:'桂林电子科技大学',
	    		age: '25',
	    		city: this.city,
	    		edu:'大专',
	    		phoneNum: this.phoneNum,
	    		emailNum: this.emailNum,
	    		studId: this.identity1 == "1"?"学生":"非学生",
	    		isShow: false
	    	}
    		localStorage.setItem('basicData', JSON.stringify(data));
			this.$emit("close", data);
			
    	}
    	
    }
  };
</script>
<style>
	.basic-info-dialog .el-dialog__header {
		padding-top:70px;
		padding-left:50px;
	}	
	.el-dialog__body {
	    padding: 0px 20px;
    }
	.input-div{
		margin-top: 20px;
	}
	.basic-info-dialog .name-input{
		width: 80%;
		left: 5%;
	}
    .name{
    	display:inline-block;
		padding-left: 5%;
	}
	
	/*生日*/
	.birthday-input{
		margin-left: 5%;
		
	}
	.birthday-input {
		width:39%;
	}
	.right-birthday-input{
		width: 39%;
	}
	
	/*性别*/
	.el-radio{
		width: 39%;
		left: 5%;
	
	}
	.el-radio .el-radio__inner{
		position: absolute;
		top: -7px;
		left: 172px;
	}
	.el-radio.is-bordered+.el-radio.is-bordered{
		margin-left: -20px;
	}
	/*城市*/
	.city{
		width: 80.5%;
	}
	
	/*手机号码*/
	.phone-number{
		width: 80%;
		line-height: 35px;
		border:1px solid #dcdfe6 ;
		border-radius: 5px;
	}
	/*邮箱*/
	.mailbox{
		width: 80%;
		line-height: 35px;
		border:1px solid #dcdfe6 ;
		border-radius: 5px;
	}
	
	/*性别*/
	.el-radio{
		width: 39%;
		left: 5%;
	
	}
	.el-radio .el-radio__inner{
		position: absolute;
		top: -7px;
		left: 150px;
	}
	.el-radio.is-bordered+.el-radio.is-bordered{
		margin-left: -20px;
	}
	/*身份*/
	.identity{
		width: 39%;
		left:0;
	
	}
	.identity.is-bordered+.el-radio.is-bordered{
		margin-left: -46px;
		
	}
	
	/*保存按钮*/
	.dialog-footer{
	  display: block;
	  height: 80px;
	position: relative;
	}
	.dialog-button{
		position: absolute;
		left:20%;
	}
</style>
