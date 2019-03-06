<!--排行榜界面-->
<template>
  <div>
    <ul class="panel-img-list" style="padding: 0px; margin: 0px;">
      <li style="padding-top: 10px;" v-for="(item,index) in imgurl" :key="index">
        <a  @click="play(index)" style="display: flex;">
          <div class="panel-img-left" style="width: 5.3751rem;height: 5.3751rem;">
            <img :src="item" style="padding-left:5px;width: 100%;height: 100%">
          </div>
          <div class="panel-img-content" style="padding-left:  30px;padding-top: 30px;">
            <p style="font-size: 1.0714rem;color: #333;">
              {{ name[index] }}
            </p>
            
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	Id: [],
    	flog: false,
    	result: [],
      name: [],
      imgurl:[],
    
    }
  },
  created(){
  	var url='/GetRankLink';
    this.$axios.get(url).then(res=>{
      //console.log(res.data.rank.list);
      this.result=res.data.rank.list;
      this.result.forEach(i=>{
        //console.log(i);
        var s=i.imgurl.split('/');
        var imglink=s[0]+'//'+s[2]+'/'+s[3]+'/'+'400'+'/'+s[5]+'/'+s[6]
        this.imgurl.push(imglink);
        this.Id.push(i.rankid);
        this.name.push(i.rankname);
      })
    })
    //console.log(this.Id);
  },
  methods:{
  	play(index){
        this.$router.push({name:'ranklist',params:{id:this.Id[index]}
      });      }
  }
}
</script>
<style scoped>


</style>
