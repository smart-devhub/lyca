// @import dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';
// @import libs
import api from 'libs/api';
import { openAlert } from '../alertSlice';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payloadData, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post('/auth/sign-in', payloadData.payload);
      const { data } = response;

      if (data?.responseCode === '4000') {
        dispatch(
          openAlert({
            message: data.data?.generatedOtpStatus,
            alertType: 'success_alert',
          })
        );
      } else {
        dispatch(
          openAlert({ message: data.message, alertType: 'error_alert' })
        );
        return rejectWithValue(data.message);
      }

      return {
        ...data,
        userData: payloadData.payload,
        navigate: payloadData.navigate,
      };
    } catch (error) {
      dispatch(
        openAlert({ message: error?.data.message, alertType: 'error_alert' })
      );
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const signInVerifyOtp = createAsyncThunk(
  'auth/signInVerifyOtp',
  async (payloadData, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post(
        '/auth/sign-in-verify-otp',
        payloadData.payload
      );
      const { data } = response;

      if (data?.responseCode === '4000') {
        dispatch(
          openAlert({ message: data.message, alertType: 'success_alert' })
        );
      } else {
        dispatch(
          openAlert({ message: data.message, alertType: 'error_alert' })
        );
        return rejectWithValue(data.message);
      }

      return { res: data, navigate: payloadData.navigate };
    } catch (error) {
      dispatch(
        openAlert({ message: error?.data.message, alertType: 'error_alert' })
      );
      return rejectWithValue(error?.response?.data);
    }
  }
);
