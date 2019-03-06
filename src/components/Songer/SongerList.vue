
<template>
  <div>
  	<ul class="panel-img-list" style="padding: 0px; margin: 0px;">
      <li style="padding-top: 10px;" v-for="(item,index) in imgurl" :key="index">
        <a  @click="show(index)" style="display: flex;">
          <div class="panel-img-left" style="width: 5.3751rem;height: 5.3751rem;">
            <img :src="item" style="padding-left:5px;width: 100%;height: 100%">
          </div>
          <div class="panel-img-content" style="padding-left:  30px;px;;padding-top: 30px;">
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
    	songer: [],
    	songerId: [],
      Id: [],
      flog: false,
      result: [],
      name: [],
      imgurl:[],
    }
  },
  methods:{
  	show(index){
  		this.$router.push({name:'songerdetail',params:{id:this.songerId[index]}});  		
  	}
  },
  created(){
  	var id=this.$route.params.id;
    //console.log(id);
  	//获取歌手列表
  	var url='/GetSongerLink'+id+'?json=true';
  	this.$axios.get(url).then(res=>{      	
    		this.songer=res.data.singers.list.info;
    		this.songer.forEach(i=>{
  			this.songerId.push(i.singerid);
        var s=i.imgurl.split('/');
        var imglink;
        if(id==88)
        {
          imglink=s[0]+'//'+s[2]+'/'+s[3]+'/'+s[4]+'/'+s[5]+'/'+'400'+'/'+s[7]+'/'+s[8];
        }
        else
        {
          imglink=s[0]+'//'+s[2]+'/'+s[3]+'/'+s[4]+'/'+'400'+'/'+s[6]+'/'+s[7];
        }
        this.imgurl.push(imglink);
        this.name.push(i.singername);
  		})
  	})
  }
}
</script>
<style scoped>

</style>
