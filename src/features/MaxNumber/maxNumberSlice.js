// Redux
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  maxNumber: '',
}

export const maxNumberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    addMaxNumber: (state, action) => {
      state.maxNumber = action.payload
    },
    // clearMaxNumber: (state, action) => {
    //   state.maxNumber = ''
    // },
    clearMaxNumber: () => {
      return {
        maxNumber: '',
      }
    },
  },
})
// Actions to manage state
export const { addMaxNumber, clearMaxNumber } = maxNumberSlice.actions
// Grab data
export const maxNumberSlector = (state) => state.number.maxNumber

export default maxNumberSlice.reducer
