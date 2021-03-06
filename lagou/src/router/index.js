import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/yu/Login'
import Register from '@/pages/yu/Register'
import Index from '@/pages/LJ/index'
import HelloWorld from '@/components/HelloWorld'
import company_home from '../pages/tang/company_home'
import company from '../pages/LH/company'
import jobHome from '@/pages/chu/jobHome'
import xiangqing from '@/pages/chu/xiangqing'
import dropbox from '@/pages/JJB/dropbox'
import favorites from '@/pages/JJB/favorites'
import resume from '@/pages/JJB/resume/index'
Vue.use(Router)

export default new Router({
	routes: [
	{
    path: '/',
    name: 'Register',
    component: Register
   },
	{
      path: '/Login',
      name: 'Login',
      component: Login
    },
	{
		path: '/Index',
		name: 'Index',
		component: Index
	},
	{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/company_home',
      name: 'company_home',
      component: company_home
    },
   {   
      path: '/company',
      name: 'company',
      component: company
    },
    {
    path: '/Register',
    name: 'Register',
    component: Register
   }, 
   {
      path: '/Login',
      name: 'Login',
      component: HelloWorld
    },

   {
      path: '/jobHome',
      name: 'jobHome',
      component: jobHome
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: favorites
    },
    {
      path: '/dropbox',
      name: 'dropbox',
      component: dropbox
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
	]
})
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};