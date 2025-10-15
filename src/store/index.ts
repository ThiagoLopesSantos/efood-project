import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import cartReducer from './reducers/cart'
import api from '../services/api'

// Combina os reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  [api.reducerPath]: api.reducer
})

// Configuração do persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // só o carrinho será salvo
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Cria a store com o persist
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // evita erros de serialização com o persist
    }).concat(api.middleware)
})

// Persistor
export const persistor = persistStore(store)

// Tipagens
export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
