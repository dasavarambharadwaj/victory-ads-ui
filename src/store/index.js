import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      location: "",
      showLocationPopup: false,
    }
  },
  mutations: {
    setLocation(state,location) {
        state.location = location
    },
    setshowLocationPopup(state,show) {
      state.showLocationPopup = show
    }
  }
})
export default store;