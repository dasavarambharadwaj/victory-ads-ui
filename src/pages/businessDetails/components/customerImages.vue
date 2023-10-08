<template>
  <div>
    <section
      class="py-6 dark:bg-gray-800 dark:text-gray-100"
      v-if="list.length > 0"
    >
      <div class="container p-4 mx-auto space-y-16 sm:p-10">
        <div
          class="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div class="space-y-4" v-for="item in list" :key="item">
            <img
              class="object-cover h-56 mx-auto mb-4 bg-center dark:bg-gray-500 rounded-md"
              alt="profile"
              :src="getUrlByName(item.image_location)"
            />
            <div class="flex flex-col items-center">
              <h4 class="text-xl font-semibold">{{ item.customer_name }}</h4>
              <p class="text-sm dark:text-gray-400 text-center">
                {{ item.customer_role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "customerImages",
  props: {
    list: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  methods: {
    getUrlByName(name) {
      return process.env.VUE_APP_BACKEND_URL + "/image/" + name;
    },
  },
};
</script>
