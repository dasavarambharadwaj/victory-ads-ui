<template>
  <div
    class="max-w-screen-2xl mt-2 mb-8 px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto backdrop-blur bg-green-600/30 text-gray-200 rounded-lg shadow-lg"
  >
    <div class="flex flex-col">
      <div>
        <h2
          class="text-2xl text-yellow-400 font-bold leading-tight text-center"
        >
          Add Business
        </h2>
        <div class="mt-8 text-center">
          Fill out the form to get your business listed on our website.
        </div>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <search-icon></search-icon>
      </div>
    </div>
    <div class="">
      <div class="px-2">
        <v-input
          placeholder="Enter Business Name"
          @change="validate('business_name')"
          v-model="model.business_name"
          prefixIcon="store"
          size="small"
          label="Business Name"
        ></v-input>
        <p
          v-if="validations.business_name"
          class="text-white relative rounded-md bg-red-500 pl-3 font-light"
        >
          {{ validations.business_name }}
          <span
            class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
          ></span>
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
          <v-select
            class=""
            label="Category"
            @change="validate('category_id')"
            @textChanged="getCategories"
            placeholder="Select Category"
            prefixIcon="pin_drop"
            v-model="model.category_id"
            :list="categoriesList"
            item-text="category_name"
            item-value="category_id"
            size="small"
          ></v-select>
          <p
            v-if="validations.category_id"
            class="text-white relative rounded-md bg-red-500 pl-3 font-light"
          >
            {{ validations.category_id }}
            <span
              class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
            ></span>
          </p>
        </div>
        <div class="px-2 mt-8 lg:w-1/2 w-full inline-block">
          <v-input
            placeholder="Enter Owner Name"
            @change="validate('owner_name')"
            v-model="model.owner_name"
            prefixIcon="person"
            size="small"
            label="Owner Name"
          ></v-input>
          <p
            v-if="validations.owner_name"
            class="text-white relative rounded-md bg-red-500 pl-3 font-light"
          >
            {{ validations.owner_name }}
            <span
              class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
            ></span>
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
          <v-input
            placeholder="Enter Mobile Number"
            @change="validate('mobile_1')"
            v-model="model.mobile_1"
            prefixIcon="call"
            size="small"
            label="Mobile No 1"
          ></v-input>
          <p
            v-if="validations.mobile_1"
            class="text-white relative rounded-md bg-red-500 pl-3 font-light"
          >
            {{ validations.mobile_1 }}
            <span
              class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
            ></span>
          </p>
        </div>
        <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
          <v-input
            placeholder="Enter Mobile Number"
            @change="validate('mobile_2')"
            v-model="model.mobile_2"
            prefixIcon="call"
            size="small"
            label="Mobile No 2"
          ></v-input>
          <p
            v-if="validations.mobile_2"
            class="text-white relative rounded-md bg-red-500 pl-3 font-light"
          >
            {{ validations.mobile_2 }}
            <span
              class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
            ></span>
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
          <v-input
            placeholder="Enter Email Address"
            @change="validate('email')"
            v-model="model.email"
            prefixIcon="alternate_email"
            size="small"
            label="Email"
          ></v-input>
          <p
            v-if="validations.email"
            class="text-white relative rounded-md bg-red-500 pl-3 font-light"
          >
            {{ validations.email }}
            <span
              class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
            ></span>
          </p>
        </div>
        <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
          <v-select
            class=""
            label="City"
            @change="validate('location_id')"
            @textChanged="getLocationData"
            placeholder="Select City"
            prefixIcon="pin_drop"
            v-model="model.location_id"
            :list="locations"
            item-text="location_name"
            item-value="location_id"
            size="small"
          ></v-select>
          <p
            v-if="validations.location_id"
            class="text-white relative rounded-md bg-red-500 pl-3 font-light"
          >
            {{ validations.location_id }}
            <span
              class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
            ></span>
          </p>
        </div>
      </div>
      <div class="px-2 mt-8">
        <v-textarea
          placeholder="Enter Address"
          @change="validate('address')"
          v-model="model.address"
          size="small"
          label="Address"
        ></v-textarea>
        <p
          v-if="validations.address"
          class="text-white relative rounded-md bg-red-500 pl-3 font-light"
        >
          {{ validations.address }}
          <span
            class="absolute bottom-[90%] border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-red-500 left-1/2"
          ></span>
        </p>
      </div>
      <div class="mt-8 text-center">
        <button
          class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium transition-colors bg-yellow-400 text-blue-900 disabled:opacity-50"
          @click="
            () => {
              submit();
            }
          "
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  <div
    class="fixed w-full h-full z-30 top-0 bg-gray-900 bg-opacity-0 overflow-auto transition-all"
    @click="
      () => {
        dataSaved = false;
      }
    "
    :class="dataSaved ? 'max-h-full' : 'max-h-0'"
  >
    <div
      @click.stop
      class="m-auto flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100"
    >
      <i class="material-symbols-outlined text-7xl">priority</i>
      <h2 class="text-xl font-semibold text-center leading-tight tracking-wide">
        Thank you. We have received a request to add your business. We will
        contact you soon.
      </h2>
      <p class="flex-1 text-center dark:text-gray-400"></p>
      <button
        type="button"
        class="px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
        @click="
          () => {
            dataSaved = false;
          }
        "
      >
        Okay
      </button>
    </div>
  </div>
</template>
<script>
import VInput from "@/components/vInput.vue";
import vTextarea from "@/components/vTextarea.vue";
import SearchIcon from "@/assets/illustrations/searchIcon.vue";
import vSelect from "@/components/vSelect.vue";
import apiService from "@/services/apiService";
export default {
  name: "AddBusiness",
  props: {},
  components: {
    VInput,
    vTextarea,
    SearchIcon,
    vSelect,
  },
  data() {
    return {
      model: {
        business_name: "",
        category_id: "",
        owner_name: "",
        mobile_1: "",
        mobile_2: "",
        email: "",
        location_id: "",
        address: "",
      },
      validations: {
        business_name: "",
        category_id: "",
        owner_name: "",
        mobile_1: "",
        mobile_2: "",
        email: "",
        location_id: "",
        address: "",
      },
      locations: [],
      categoriesList: [],
      debounce: null,
      loading: false,
      dataSaved: false,
    };
  },
  created() {
    this.getLocationData("");
    this.getCategories("");
  },
  methods: {
    async getLocationData(search) {
      if (typeof search == "string") {
        let response = await apiService.get("/locations", { search: search });
        this.locations = response?.data[0];
      }
    },
    async getCategories(search) {
      this.loading = true;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(async () => {
        try {
          let response = await apiService.get("/categories", {
            search: search,
          });
          if (response.data) {
            this.categoriesList = response?.data[0];
          } else {
            this.categoriesList = [];
          }
        } catch (e) {
          this.categoriesList = [];
        }
        this.loading = false;
      }, 300);
    },
    async submit() {
      if (this.debounce) {
        clearTimeout(this.debounce);
      }
      this.debounce = setTimeout(async () => {
        this.validate();
        if (
          this.validations.business_name ||
          this.validations.category_id ||
          this.validations.owner_name ||
          this.validations.mobile_1 ||
          this.validations.mobile_2 ||
          this.validations.email ||
          this.validations.location_id ||
          this.validations.address
        ) {
          return false;
        } else {
          this.loading = true;
          let payload = JSON.parse(JSON.stringify(this.model));
          payload.phone = {};
          payload.phone["1"] = this.model.mobile_1;
          if (this.model.mobile_2) {
            payload.phone["2"] = this.model.mobile_2;
          }
          delete payload.mobile_1;
          delete payload.mobile_2;
          let response = await apiService.post("/addBusiness", payload);
          if (response) {
            this.model = {
              business_name: "",
              category_id: "",
              owner_name: "",
              mobile_1: "",
              mobile_2: "",
              email: "",
              location_id: "",
              address: "",
            };
            this.dataSaved = true;
          } else {
            alert("Some error occurred");
          }
          this.loading = false;
        }
      }, 300);
    },
    validate(field) {
      if (!field || field === "business_name") {
        this.validations.business_name = this.fieldRequiredValidation(
          this.model.business_name
        );
      }
      if (!field || field === "category_id") {
        this.validations.category_id = this.fieldRequiredValidation(
          this.model.category_id
        );
      }
      if (!field || field === "owner_name") {
        this.validations.owner_name = this.fieldRequiredValidation(
          this.model.owner_name
        );
      }
      if (!field || field === "mobile_1") {
        this.validations.mobile_1 = this.fieldRequiredValidation(
          this.model.mobile_1
        );
        if (!this.validations.mobile_1) {
          this.validations.mobile_1 = this.phoneNumberValidation(
            this.model.mobile_1
          );
        }
      }
      if (!field || field === "mobile_2") {
        this.validations.mobile_2 = this.phoneNumberValidation(
          this.model.mobile_2
        );
      }
      if (!field || field === "email") {
        this.validations.email = this.emailValidation(this.model.email);
      }
      if (!field || field === "location_id") {
        this.validations.location_id = this.fieldRequiredValidation(
          this.model.location_id
        );
      }
      if (!field || field === "address") {
        this.validations.address = this.fieldRequiredValidation(
          this.model.address
        );
      }
    },
    fieldRequiredValidation(val) {
      if (!val) {
        return "This field is required";
      }
      return "";
    },
    phoneNumberValidation(val) {
      if (val) {
        let exp = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
        let res = exp.test(val);
        if (!res) {
          return "This number is invalid";
        }
      }
      return "";
    },
    emailValidation(val) {
      let exp = /\S+@\S+\.\S+/;
      if (exp.test(val) || val === "") {
        return "";
      }
      return "Invalid email address";
    },
  },
};
</script>
