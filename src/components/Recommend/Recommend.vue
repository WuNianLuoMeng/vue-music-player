<!--推荐歌单界面-->
<template>
  <div>
    <mt-swipe :auto="4000" style="height: 200px;">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" style="width: 100%;height: 100%;">
      </mt-swipe-item>
    </mt-swipe>
    <div style="padding-bottom: 5px;"></div>
    <ul class="panel-img-list" style="padding: 0px; margin: 0px;">
      <li style="padding-top: 10px;" v-for="(item,index) in imgurl" :key="index">
        <a  @click="play(index)" style="display: flex;">
          <div class="panel-img-left" style="width: 5.3751rem;height: 5.3751rem;">
            <img :src="item" style="width: 100%;height: 100%">
          </div>
          <div class="panel-img-content" style="padding-left:  30px;px;;padding-top: 20px;">
            <p style="font-size: 1.0714rem;color: #333;">
              {{ name[index] }}
            </p>
            <p>
              {{"收听量： "+count[index]}}
            </p>
          </div>
        </a>
        <div style="width:400px;height:2px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;"></div>
      </li>

    </ul>
    <div style="padding-bottom: 30px;"></div>
    
  </div>
</template>

<script>
export default {
  

  data () {
    return {
        imgs: [],        
        result: [],
        imgurl: [],
        name: [],
        count: [],
        Id: [],
        flog: false,
    }
  },
  created(){
    var link1='/GetSongsheet';
    this.$axios.get(link1).then(res=>{
      //console.log(res);
      this.result=res.data.plist.list.info;
      this.result.forEach((i,index)=>{

        var s=i.imgurl.split('/');
        var imglink=s[0]+'//'+s[2]+'/'+s[3]+'/'+s[4]+'/'+'400'+'/'+s[6]+'/'+s[7]
        this.imgurl.push(imglink);
        if(index<=2){
          this.imgs.push(imglink);
        }
        this.count.push(i.playcount);
        this.name.push(i.specialname);
        this.Id.push(i.specialid);
      })
      //console.log(res.data.plist.list.info);    
    })
    this.flog=true;
  },
  methods:{
    play(index){
      this.$router.push({name:'recommenddetail',params:{id:this.Id[index]}}); 
    }
  }
}
</script>
<style scoped>

</style>