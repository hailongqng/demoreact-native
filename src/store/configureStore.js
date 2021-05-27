/* eslint-disable no-console */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createReducer from './reducers';
import rootSaga from './saga';

const persistConfig = {
  key: 'campusx',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  // whitelist: [''],
};

const configureStore = (initialState = {}) => {
  const rootReducer = createReducer();
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger({collapsed: true});
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(sagaMiddleware, loggerMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
