// Redux
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerName: '',
}

export const playerNameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    addPlayerName: (state, action) => {
      state.playerName = action.payload
    },
    clearPlayerName: () => {
      return {
        playerName: '',
      }
    },
  },
})
// Actions to manage state
export const { addPlayerName, clearPlayerName } = playerNameSlice.actions
// Grab data
export const playerNameSlector = (state) => state.name.playerName

export default playerNameSlice.reducer
