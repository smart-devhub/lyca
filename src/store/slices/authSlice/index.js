// @ import redux slice
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signInVerifyOtp } from './thunkapi';

const initialState = {
  authLoader: false,
  message: '',
  authData: {},
  token: null,
  userId: null,
  changePasswordLoader: false,
  changePasswordError: '',
  roles: '',
  userName: '',
  vendorName: '',
  mobileNumber: '',
  isShowOtpScreen: false,
  packageTypeCharging: '',
  rights: [],
  isUserLoggedIn: false,
  passwordExpiration: '',
  userDetails: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    goBackFromOtpScreen: state => {
      state.isShowOtpScreen = false;
    },
    updateUserDetails: (state, action) => {
      state.userDetails = { ...state?.userDetails, ...action.payload };
    },
  },
  extraReducers: builder => {
    // login cases
    builder
      .addCase(loginUser.pending, state => {
        state.authLoader = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { data, userData } = action.payload;
        const token = data?.jwtToken;
        state.authLoader = false;

        localStorage.setItem('token', token);
        localStorage.setItem('userName', userData.userName);
        localStorage.setItem('vendorName', userData.vendorName);

        state.token = token;
        state.userName = userData.userName;
        state.userDetails = data.userDetails;
        state.mobileNumber = data.mobileNumber;
        state.vendorName = userData.vendorName;
        state.passwordExpiration = data.passwordExpiration;
        if (data?.passwordExpiration === 'true') {
          action.payload?.navigate('/authentication-control');
        } else {
          state.isShowOtpScreen = true;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authLoader = false;
      });

    // login verify otp cases
    builder
      .addCase(signInVerifyOtp.pending, state => {
        state.authLoader = true;
      })
      .addCase(signInVerifyOtp.fulfilled, (state, action) => {
        const { res } = action.payload;
        state.authLoader = false;

        const rights = res?.data?.rights;
        const packageTypeCharging = res?.data?.packageTypeCharging;
        const token = res?.data?.jwt;

        if (token) {
          localStorage.setItem('token', token);
          state.token = token;
          state.rights = rights;
          state.isUserLoggedIn = true;
          state.authLoader = false;
          state.isShowOtpScreen = false;
          state.packageTypeCharging = packageTypeCharging;
          action.payload?.navigate('/');
        }
      })
      .addCase(signInVerifyOtp.rejected, state => {
        state.authLoader = false;
      });
  },
});

export const { reset, goBackFromOtpScreen, updateUserDetails } =
  authSlice.actions;

export default authSlice.reducer;
