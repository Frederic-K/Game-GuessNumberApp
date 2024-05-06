// Redux
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
}

export const bestScoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.score = action.payload
    },
    // clearMaxNumber: (state, action) => {
    //   state.maxNumber = ''
    // },
    clearScore: () => {
      return {
        score: 0,
      }
    },
  },
})
// Actions to manage state
export const { addScore, clearScore } = bestScoreSlice.actions
// Grab data
export const bestScoreSelector = (state) => state.score.score

export default bestScoreSlice.reducer
