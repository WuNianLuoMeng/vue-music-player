<!--搜索歌曲界面-->
<template>
  <div>
  	<div class="mui-input-row" style="margin: 8px;">
          <input type="search" v-model="Search_content" class="mui-input-clear mui-input-clear" placeholder="搜索歌手或歌曲">
          <button type="button" class="btn" @click="search">确认搜索</button>
    </div>
  	<ul class="mui-table-view" style="" v-if="flog">
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
    	Search_content: '',
    	flog: false,
    	Hash: [],
        Album: [],
        obj: {}
    }
  },
  methods:{
  	 search(){

  	 	var url='/GetSearchMusic'+this.Search_content+'&page=1&pagesize=20&showtype=1';
  	 	this.$axios.get(url).then(res=>{
  	 		this.musiclink=res.data.data.info;
  	 		this.musiclink.forEach(i=>{
	  			this.Hash.push(i.hash);
	  			this.Album.push(i.album_id);
	  		})
  	 		//console.log(res.data.data.info);
  	 		this.flog=true;
  	 	})
  	 },
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
 .btn{
    margin-left: 30px;
    line-height: 1.1;
      float: right;
      height: 70%;
      padding: 10px 15px;
      color: #fff;
      border: 1px solid #007aff;
      background-color: #007aff;
  }
  .mui-input-row{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
</style>
