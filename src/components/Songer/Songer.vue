<!--歌手分类界面-->
<template>
  <div>
    <ul class="mui-table-view">
		<li class="mui-table-view-cell" v-for="(item,index) in Singerclassification" :key="index">
			<a class="mui-navigate-right1" @click="show(index)">
				{{ item.classname }}
			</a>
		</li>
	</ul>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
       Singerclassification: [],
       Id: [],
    }
  },
  created(){
    var url='/GetAllSonger';
    this.$axios.get(url).then(res=>{
      //console.log(res);
      this.Singerclassification=res.data.list;
      this.Singerclassification.forEach(i=>{
        this.Id.push(i.classid);
      })
      //console.log(res.data.list);
    })
  },
  methods:{
  	show(index){
  		this.$router.push({name:'songerlist',params:{id:this.Id[index]}});  		
  	}
  }
}
</script>
<style scoped>

</style>
