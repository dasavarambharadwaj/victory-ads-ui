import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      location: "",
      location_id: null,
      showLocationPopup: false,
    }
  },
  mutations: {
    setLocation(state,location) {
        state.location = location
    },
    setLocationId(state,location_id) {
      state.location_id = location_id
    },
    setshowLocationPopup(state,show) {
      state.showLocationPopup = show
    }
  }
})
export default store;