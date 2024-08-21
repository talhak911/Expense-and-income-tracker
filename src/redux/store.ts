// import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import authReducer from './slices/authSlice';
// import transactionsReducer from './slices/transactionsSlice'
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['auth', 'transactions']
// };
// const rootReducer = combineReducers({
//   auth: authReducer,
//   transactions: transactionsReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const persistor = persistStore(store);

import { configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import transactionsReducer from './slices/transactionsSlice'


export const store = configureStore({
  reducer:
{    auth: authReducer,
    transactions: transactionsReducer}


});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
