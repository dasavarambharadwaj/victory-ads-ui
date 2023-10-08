<template>
  <div class="text-center inline-block">
    <VSelect
      @textChanged="search"
      class="my-3"
      @change="gotoBusinessPage"
      :list="businesses"
      v-model="selectedId"
      item-text="name"
      item-value="id"
      placeholder="Search"
      prefixIcon="search"
    ></VSelect>
  </div>
</template>
<script>
import VSelect from "@/components/vSelect";
import { mapState } from "vuex";
import apiService from "@/services/apiService";
export default {
  name: "SearchBar",
  props: {
    msg: String,
  },
  components: {
    VSelect,
  },
  computed: mapState(["location", "location_id"]),
  data() {
    return {
      businesses: [],
      selectedId: -1,
      timeout: null,
    };
  },
  methods: {
    gotoBusinessPage() {
      if (this.selectedId) {
        let id = parseInt(this.selectedId);
        let object = this.businesses.filter((item) => item.id === id);
        if (object.length > 0) {
          if (object[0].is_category) {
            this.$router.push({
              name: "Category",
              params: { id: id, name: object[0].name },
            });
          } else {
            this.$router.push({ name: "BusinessDetails", params: { id: id } });
          }
          this.$emit("optionSelected", true);
        }
      }
    },
    async search(val) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(async () => {
        if (val.length > 2 && this.location_id) {
          let response = await apiService.get("/search", {
            search: val,
            location_id: this.location_id,
          });
          this.businesses = response?.data[0];
        } else {
          this.businesses = [];
        }
      }, 300);
    },
  },
};
</script>
