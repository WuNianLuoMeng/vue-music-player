
<template>
  <div>
    <div style="padding-bottom: 5px;"></div>
    <mt-swipe :auto="4000" style="height: 200px;">
      <mt-swipe-item >
        <img :src="img" style="width: 100%;height: 100%;">
      </mt-swipe-item>
    </mt-swipe> 
    
    <div>
    	<ul class="mui-table-view" style="">
        <li class="mui-table-view-cell" v-if="flog" v-for="(musicname,index) in list" :key="index">
          <a @click="play(index)"> {{ (index+1)+" "+musicname }}</a>
        </li>
      </ul>
    </div>
    <div style="padding-bottom: 30px;"></div>
    
  </div>
</template>

<script>
export default {
  

  data () {
    return {
        img: '',        
        result: [],
        imgs: [],
        Search_content: '',
        Hash: [],
        Album: [],
        flog: false,
        list: [],
        obj: {}        

    }
  },
  created(){
    var id=this.$route.params.id;
    console.log(id);
    var url='/GetAPI'+id+'?json=true';
    this.$axios.get(url).then(res=>{
      console.log(res);
      var s=res.data.info.list.imgurl.split('/');
      this.img=s[0]+'//'+s[2]+'/'+s[3]+'/'+s[4]+'/'+'400'+'/'+s[6]+'/'+s[7]
      this.result=res.data.list.list.info;
      this.result.forEach(r=>{
        this.list.push(r.filename);
        this.Hash.push(r.hash);
        this.Album.push(r.album_id);
      })
    })
    this.flog=true;
  },
  methods:{
    play(index){

      var link2='/GetMusicsLink'+'hash='+this.Hash[index]+'&album_id='+this.Album[index]+'&_=1497972864535';
      this.$axios.get(link2).then(q=>{
        this.obj.lrc='';
        this.music_url=q.data.data.play_url;
        this.music_img=q.data.data.img;
        this.obj.name=q.data.data.song_name
        this.obj.url=this.music_url;
        this.obj.cover=this.music_img;
        this.obj.artist=q.data.data.author_name;
        this.obj.lrc=q.data.data.lyrics;
                


        this.$add.audio={
            name: this.obj.name,
            artist: this.obj.artist,
            url: this.obj.url,
            cover: this.obj.cover,
            lrc: this.obj.lrc,
        };
      this.$router.push('/MusicInterface');
     })
    }
  }
}
</script>
<style scoped>

</style>
