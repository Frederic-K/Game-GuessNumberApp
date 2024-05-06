// Redux
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1
    },
    resetCounter: (state) => {
      state.counter = 0
    },
  },
})
// Actions to manage state
export const { incrementCounter, resetCounter } = counterSlice.actions
// Grab data
export const counterSelector = (state) => state.counter.counter

export default counterSlice.reducer
