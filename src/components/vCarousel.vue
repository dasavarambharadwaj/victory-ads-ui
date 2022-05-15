<template>
    <div class="carousel relative shadow-2xl bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
          checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full text-black bg-yellow-50 text-5xl text-center">
            Slide 1
          </div>
        </div>
        <label for="carousel-3"
          class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold rounded-md bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
          <span class="text-3xl material-symbols-outlined">chevron_left</span>
          </label>
        <label for="carousel-2"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold rounded-md bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
          <span class="text-3xl material-symbols-outlined">chevron_right</span>
          </label>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full text-black bg-yellow-100 text-5xl text-center">Slide 2</div>
        </div>
        <label for="carousel-1"
          class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold rounded-md bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
          <span class="text-3xl material-symbols-outlined">chevron_left</span>
          </label>
        <label for="carousel-3"
          class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold rounded-md bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
          <span class="text-3xl material-symbols-outlined">chevron_right</span>
          </label>

        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full text-black bg-yellow-200 text-5xl text-center">Slide 3</div>
        </div>
        <label for="carousel-2"
          class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold rounded-md bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
          <span class="text-3xl material-symbols-outlined">chevron_left</span>
          </label>
        <label for="carousel-1"
          class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold rounded-md bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
          <span class="text-3xl material-symbols-outlined">chevron_right</span>
          </label>

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label for="carousel-1"
              class="carousel-bullet cursor-pointer block text-4xl hover:text-gray-900">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-2"
              class="carousel-bullet cursor-pointer block text-4xl hover:text-gray-900">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-3"
              class="carousel-bullet cursor-pointer block text-4xl hover:text-gray-900">•</label>
          </li>
        </ol>

      </div>
    </div>
</template>
<script>
  export default {
    name:'VCarousel'
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
				color: rgb(17 24 39 / var(--tw-text-opacity));  /*Set to match the Tailwind colour you want the active one to be */
			}
		</style>