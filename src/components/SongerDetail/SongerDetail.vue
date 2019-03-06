
<template>
  <div>    


     <mt-swipe :auto="4000" style="height: 300px;">
      <mt-swipe-item>
        <img :src="img" style="width: 100%;height: 100%;">
      </mt-swipe-item>
    </mt-swipe> 

  	<ul class="mui-table-view" style="">
        <li class="mui-table-view-cell" v-if="flog" v-for="(item,index) in musiclink" :key="index">
          <a @click="play(index)"> {{ (index+1)+" "+item.filename }}</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: '',
    	musiclink: [],
    	Hash: [],
        Album: [],
        obj: {},
        flog: false
    }
  },
  created(){
  	var id=this.$route.params.id;
  	var url='/GetSongerDetail'+id+'&json=true';
  	this.$axios.get(url).then(res=>{
      //console.log(res);
      var s=res.data.info.imgurl.split('/');
      this.img=s[0]+'//'+s[2]+'/'+s[3]+'/'+s[4]+'/'+'400'+'/'+s[6]+'/'+s[7];
  		this.musiclink=res.data.songs.list;
  		this.musiclink.forEach(i=>{
  			this.Hash.push(i.hash);
  			this.Album.push(i.album_id);
  		})
  		//console.log(res.data.songs.list);
  	})
  	this.flog=true;
  },
  methods:{
  	   play(index){
  	   	//console.log(index);

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
