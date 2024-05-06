import { combineReducers, configureStore } from '@reduxjs/toolkit'
import playerNameReducer from '../../features/PlayerName/playerNameSlice'
import maxNumberReducer from '../../features/MaxNumber/maxNumberSlice'
import counterReducer from '../../features/Counter/counterSlice'
import bestScoreReducer from '../../features/BestScore/bestScoreSlice'
import modeThemeReducer from '../../features/ModeTheme/modeThemeSlice'

// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storage from 'redux-persist/lib/storage/session'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}
const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]

const rootReducer = combineReducers({
  name: playerNameReducer,
  number: maxNumberReducer,
  counter: counterReducer,
  score: bestScoreReducer,
  modeTheme: modeThemeReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...reduxPersistActions],
      },
    }),
})
