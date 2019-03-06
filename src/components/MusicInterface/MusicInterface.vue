<!--歌曲播放界面-->
<template>
  <div>  
  	<div style="padding-left: 10px;">
  		<img alt="" :src="this.$add.audio.cover" class="image" id="img"> 
  	</div>
  	<aplayer @canplay="palymusic" @pause="pause" @play="rotate" :fixed="true" :audio="this.$add.audio" :lrcType="1" :mini="false" ref="aplayer"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	InterVal: '',    	
    }
  },
  beforeRouteLeave(to, from, next) {
  	clearInterval(this.InterVal);
  	next();
  },
  methods:{
    palymusic(){
      this.$refs.aplayer.play();
    },
  	pause(){
  		clearInterval(this.InterVal)
  	},
  	rotate() {
  		var rotateVal=0
		this.InterVal = setInterval(function() {
		var img = document.getElementById('img')
		rotateVal += 1
		// 设置旋转属性(顺时针)
		img.style.transform = 'rotate(' + rotateVal + 'deg)'
		// 设置旋转属性(逆时针)
		//img.style.transform = 'rotate(-' + rotateVal + 'deg)'
		// 设置旋转时的动画  匀速0.1s
		img.style.transition = '0.1s linear'
	}, 100)
	}
  },
  created(){
    
  	//this.rotate();
  }
}
</script>
<style scoped>
.image {
	width: 250px;
	height: 250px;
	display: inline;
	position: relative;
	top: 70px;
	left: 40px;
}

img {
	border-radius: 50%;
	cursor: pointer;
}
</style>
