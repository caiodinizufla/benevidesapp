import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
  

const loggerMiddleware = createLogger();
const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(
  persistedReducer,
  applyMiddleware(promise, thunkMiddleware, loggerMiddleware)
)

export let persistor = persistStore(store)
