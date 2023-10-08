<template>
  <nav id="header" class="w-full z-30 top-0 py-1 lg:py-2 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mt-0 px-2 py-2 lg:py-2 mx-2">
      <div class="flex items-center shrink-0">
        <router-link to="/">
          <a
            class="flex flex-col justify-center self-center items-center font-bold"
          >
            <h1 class="text-xl lg:text-2xl text-cyan-400">Victory Ads</h1>
            <h2 class="text-xs lg:text-base">Sangareddy</h2>
          </a>
        </router-link>
      </div>
      <search-bar class="mx-4 max-w-3xl w-full hidden sm:inline-block" />
      <div class="flex flex-row items-center text-base shrink-0 gap-2">
        <div
          class="flex justify-center items-center cursor-pointer"
          @click="askLocation"
        >
          <span class="material-symbols-outlined text-base">pin_drop</span>
          <span>{{ location || "Location" }}</span>
        </div>
        <div
          class="inline-block sm:hidden p-2 rounded-full aspect-square border-2 border-gray-200 bg-gray-200 text-gray-900"
          @click="toggleShowSearch"
        >
          <div
            class="material-symbols-outlined text-base aspect-square w-6 text-center"
          >
            search
          </div>
        </div>
      </div>
    </div>
    <div
      class="inline-block sm:hidden z-30 h-full left-0 right-0 bg-gray-900 bg-opacity-75 m-auto w-full max-w-md"
      v-if="showSearch"
    >
      <search-bar
        @optionSelected="
          () => {
            showSearch = false;
          }
        "
        class="w-full"
      />
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "@/pages/search/index.vue";
export default {
  name: "NavBar",
  components: {
    SearchBar,
  },
  data() {
    return {
      showSearch: false,
    };
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["location"]),
  },
  methods: {
    askLocation() {
      this.$store.commit("setLocation", "");
      this.$store.commit("setLocationId", null);
      this.$store.commit("setshowLocationPopup", true);
    },
    toggleShowSearch() {
      this.showSearch = !this.showSearch;
    },
  },
};
</script>
