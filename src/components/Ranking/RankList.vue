
<template>
  <div>
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
    	musiclink: [],
    	flog: false,
    	obj: {},
    	Hash: [],
        Album: [],
    }
  },
  created(){
    var id=this.$route.params.id;
    console.log(id);
  	var url='/GetRankDetail'+'?rankid='+id+'&page=1&json=true';
  	this.$axios.get(url).then(res=>{
      //console.log(url);
      //console.log(res);
  		this.musiclink=res.data.songs.list;
  		this.musiclink.forEach(i=>{
  			this.Hash.push(i.hash);
  			this.Album.push(i.album_id);
  		})
  		this.flog=true;
  	})
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
