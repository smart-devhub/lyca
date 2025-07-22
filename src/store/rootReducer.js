// @import dependencies
import { combineReducers } from '@reduxjs/toolkit';
// @import slices
import authReducer from './slices/authSlice';
import alertReducer from './slices/alertSlice';
import commonReducer from './slices/commonSlice';
import loaderReducer from './slices/loaderSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  loader: loaderReducer,
  commonState: commonReducer,
});
