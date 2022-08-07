import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      location: "",
      location_id: null,
      showLocationPopup: false,
    };
  },
  mutations: {
    setLocation(state, location) {
      state.location = location;
      try{
        localStorage.setItem("location",location)
      } catch(e) {
        console.log("Unable to access local storage")
      }
    },
    setLocationId(state, location_id) {
      state.location_id = location_id;
      try{
        localStorage.setItem("location_id",location_id)
      } catch(e) {
        console.log("Unable to access local storage")
      }
    },
    setshowLocationPopup(state, show) {
      state.showLocationPopup = show;
    },
  },
});
export default store;
