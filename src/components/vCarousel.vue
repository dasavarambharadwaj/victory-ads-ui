<template>
	<div class="w-full">
		<div class="relative w-full transition-all delay-500"  @mousedown="sliderStop" @mouseup="sliderStart" v-for="(item, index) in ads" :key="index" v-show="showIndex === index">
			<component :is="item"></component>
			<div class="absolute flex invisible justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a  @click="back" class=" cursor-pointer material-symbols-outlined p-2 rounded-full bg-gray-900">chevron_left</a> 
				<a @click="front" class="material-symbols-outlined cursor-pointer  p-2 rounded-full bg-gray-900">chevron_right</a>
			</div>
		</div>
	</div>
</template>
<script>
import {Ad_1,Ad_2} from '@/scrollAds'
export default {
  name:"VCarousel",
  components:{
    Ad_1,
    Ad_2
  },
  data() {
    return {
      showIndex: 0,
      ads:[
        'Ad_1',
        'Ad_2'
      ],
      slideInverval: null
    }
  },
  created() {
    this.ads = this.shuffleArray(this.ads)
    this.sliderStart()
    
  },
  methods:{
    sliderStart() {
      this.slideInverval = setInterval(() => {
        if(this.showIndex == this.ads.length - 1) {
          this.showIndex = 0
        } else {
          this.showIndex += 1
        }
      }, 5000);
    },
    sliderStop() {
      if(this.slideInverval) {
        clearInterval(this.slideInverval)
      }
    },
    back() {
      this.sliderStop()
      if(this.showIndex == 0) {
        this.showIndex = this.ads.length -1
      } else {
        this.showIndex -= 1;
      }
      this.sliderStart()
    },
    front() {
      this.sliderStop()
      if(this.showIndex == this.ads.length - 1) {
        this.showIndex = 0
      } else {
        this.showIndex += 1
      }
      this.sliderStart()
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array

}
  }
  
}
</script>
<style scoped>
			.carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 0.6s ease-out;
			}
			#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
				display: block;
			}
			.carousel-indicators {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 2%;
				left: 0;
				right: 0;
				text-align: center;
				z-index: 10;
			}
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
			}
		</style>