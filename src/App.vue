<template>
  <div id="app">
    <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">music</h1>
    </header>
    <div id="slider" class="mui-slider" style="padding-top: 45px;">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <router-link class="mui-control-item" to="/Recommend" data-wid="tab-top-subpage-1.html"@click.native='jump1'>
              推荐
            </router-link>
            &nbsp&nbsp&nbsp
            <router-link class="mui-control-item" to="/Songer" data-wid="tab-top-subpage-2.html" @click.native='jump2'>
              歌手
            </router-link>
            &nbsp&nbsp&nbsp&nbsp
            <router-link class="mui-control-item" to="/Ranking" data-wid="tab-top-subpage-3.html"@click.native='jump3'>
              排行
            </router-link>
            &nbsp&nbsp&nbsp
            <router-link class="mui-control-item" to="/Search" data-wid="tab-top-subpage-4.html"@click.native='jump4'>
              搜索
            </router-link>
          </div>
      </div>
    </div>


    <transition>
      <router-view></router-view>
    </transition>

        
      
   
    
    <!--<aplayer :fixed="true" :audio="this.$add.audio" :lrcType="3" :mini="false"/>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
     }
  },
  watch:{
    $route(to,from){
      if(to.path=="/Ranking"||to.path=="/Recommend"||to.path=="/Search"||to.path=="/Songer"){
        this.show=false;
      } else{
        this.show=true;
      }
    }
  },
  methods:{
    jump1(){
      this.$router.push('/Recommend');
      //console.log("asd");
    },
    jump2(){
      this.$router.push('/Songer');
      //console.log("asd");
    },
    jump3(){
      this.$router.push('/Ranking');
      //console.log("asd");
    },
    jump4(){
      this.$router.push('/Search');
      //console.log("asd");
    },
    back(){
      this.$router.go(-1);//返回上一层
    },
  }
}
</script>

<style scoped>
* { touch-action: none; }
.v-enter,
{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
