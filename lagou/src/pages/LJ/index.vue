<template>
	<div>
	<top></top>
	<logo></logo>
	<search></search>
	<banner></banner>
	<itemjob></itemjob>
	<company></company>
	<current></current>
	<backtop></backtop>
	<foot></foot>
	</div>
</template>

<script>
import logo from './logo'
import search from './search'
import itemjob from './itemjob'
import company from './company'
import current from './current'
import top from '../../components/publictop'
import foot from '../../components/publicfooter'
import banner from './lunbo'
import backtop from '../tang/backTop'
export default{
	components:{
		logo,search,itemjob,company,top,foot,current,banner,backtop
		}
}
</script>

<style>
</style>