import { createSlice, configureStore } from '@reduxjs/toolkit'
const appTheme = createSlice({
    name: 'counter',
    initialState: {
      value: "light"
    },
    reducers: {
      lightTheme: state => {
        state.value = "light"
      },
      decremented: state => {
        state.value = "dark"
      }
    }
  })
export const { lightTheme, lightTheme } = appTheme.actions
const store = configureStore({
    reducer: appTheme.reducer
})