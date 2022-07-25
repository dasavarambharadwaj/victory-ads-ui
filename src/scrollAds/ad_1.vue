<template>
	<div class="w-full">
		<div class="relative justify-center flex flex-shrink-0 bg-red-300 w-full max-w-5xl aspect-video sm:aspect-[3/1] m-auto sm:w-auto">
			<div class="justify-center items-center p-2 flex ">
				<div class="h-5/6">
					<announce-icon></announce-icon>
				</div>
				<div class="flex flex-col">
					<div class="text-center flex flex-col flex-grow">
						<div>
							<h1 class="lg:text-xl  text-red-800 font-bold">Show Your Ad Here</h1>
							<p class="mx-auto mt-2 text-xs text-gray-800">Contact Us to display your business
								advertisement.</p>
						</div>
						<router-link to="/about">
							<button
								class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium  transition-colors bg-red-800 text-gray-200 disabled:opacity-50">Contact
								Us</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import AnnounceIcon from '@/assets/illustrations/announceIcon.vue'
export default {
	name: "ad_1",
	components: {
		AnnounceIcon
	}
}
</script>