<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
  	return{
  		reload:this.reload
  	}
  },
  data(){
  	return{
  		isRouterAlive:true
  	}
  },
  mounted(){
	if(this.$store.state.isLogin==false){
		this.$router.push('/Register')
	}
else{
		this.$router.push('/index')
	}
    window.onbeforeunload=function(e){
      localStorage.removeItem('likes');
    }
  },
  methods:{
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
	color: black;
}
i,
em,
strong,
h1,
h2,
h2,
h3,
h4,
h5 {
    font-weight: normal;
    font-style: normal;
}
h5,a {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
}
</style>
