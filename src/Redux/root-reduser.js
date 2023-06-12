import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './../Redux/Filter/filter-slice';
import authReducer from '../Redux/auth/auth-slice';
import contactReducer from '../Redux/Contacts/contact-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;