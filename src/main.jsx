import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Redux
import { store } from './services/data/store'
import { Provider } from 'react-redux'
// Redux-persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
