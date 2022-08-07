<template>
  <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold">Sorry, we couldn't find this page.</p>
        <p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our
          homepage.</p>
        <router-link to="/" class="flex flex-col items-center">
          <button
            class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium  transition-colors bg-gray-200 hover:text-blue-700 text-gray-900 disabled:opacity-50">Back
            to homepage</button>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PageNotFound"
}
</script>