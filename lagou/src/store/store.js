import Vue from 'vue'
import Vuex from 'vuex' 
Vue.use(Vuex);
import persistedState from 'vuex-persistedstate'
export const store = new Vuex.Store({
state:{
	phonenum:'',
	passwd:'',
	isLogin:false
},
 mutations:{
 	setPhonenum(state,num){
 		state.phonenum=num;

 	},
 	setpasswd(state,pwd){
 		state.passwd=pwd;
 	},
 	stateLogin(state,st){
 		state.isLogin=st;
 	}
 },
	getters:{
		fanhui:function(state){
			return state.phonenum;
			return state.passwd
		}
	},
	plugins: [persistedState({ storage: window.sessionStorage })]
})