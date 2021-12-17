import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialValue = {
  value:{
    theme:"light"
  }
}
const appTheme = createSlice({
    name: 'appStore',
    initialState: initialValue,
    reducers: {
      change: (state,action) => {
        state.value[action.payload.key] = action.payload.value
      }
    }
  })
const store = configureStore({
    reducer: appTheme.reducer
})
export const {change} = appTheme.actions
export default store