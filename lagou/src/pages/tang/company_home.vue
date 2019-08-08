<template>
	<div>
		<publictop></publictop>
		<topH :itemData='dataArr'>
			<div slot='first'>
				<Contents :itemData='dataArr'></Contents>
			</div>
			<div slot='second' class="main">
				招聘人数
			</div>
			<div slot='third'>
				公司问答
			</div>
		</topH>
		<backtop></backtop>
		<publicfooter></publicfooter>
	</div>
</template>

<script>
	import topH from './topH'
	import Contents from './Contents'
	import publictop from '../../components/publictop'
	import publicfooter from '../../components/publicfooter'
	import c_right from './c_right'
	import backtop from './backTop'
	export default {
		components: {
			publictop,
			publicfooter,
			topH,
			Contents,
			c_right,
			backtop
		},
		data() {
			return {
				eleId: 100,
				dataArr: {}
			}
		},
		created(){
			this.menu();
		},
		mounted() {
			this.getEleId();
			this.getData();
			this.getList();

		},
		methods: {
			menu() {
				window.scrollTo(0, 0);
			},
			getEleId() {
				this.eleId = this.$route.query.eleId;
			},
			getData() {
				this.$axios.get('../../static/data/cbanner.json').
				then(res => {
					if(this.eleId < 200) {
						let list = res.data.banner_one
						console.log(list);
						for(let i = 0; i < list.length; i++) {
							if(this.eleId == list[i].coporate_id) {
								this.dataArr = list[i];
								console.log(this.dataArr.coporate)
							}

						}
					}
					if(this.eleId < 300) {
						let list = res.data.banner_two
						console.log(list);
						for(let i = 0; i < list.length; i++) {
							if(this.eleId == list[i].coporate_id) {
								this.dataArr = list[i];
								console.log(this.dataArr.coporate)
							}

						}
					}

					if(this.eleId < 400) {
						let list = res.data.banner_three
						console.log(list);
						for(let i = 0; i < list.length; i++) {
							if(this.eleId == list[i].coporate_id) {
								this.dataArr = list[i];
								console.log(this.dataArr.coporate)
							}

						}
					}
					if(this.eleId < 500) {
						let list = res.data.banner_four
						console.log(list);
						for(let i = 0; i < list.length; i++) {
							if(this.eleId == list[i].coporate_id) {
								this.dataArr = list[i];
								console.log(this.dataArr.coporate)
							}

						}
					}
				})
			},
			getList() {
				let routerParams = this.$route.query.dataObj;
				console.log(routerParams);
				this.dataArr = routerParams;
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.commen {
		margin-top: 50px;
	}
</style>