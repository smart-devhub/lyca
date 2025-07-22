// @import dependencies
import axios from 'axios';
// @import baseurl
import getBaseUrl from './baseUrl';
// @import libs
import formateApiPayload from './formateApiPayload';
// import { logout } from 'hooks/useCrossTabLogout';
// import { confirmAction } from './confirmAction';
// @import store and action
// import { store } from 'store/store';
// import { openAlert } from 'store/slices/alertSlice';

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    return formateApiPayload(config);
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    // Handle network errors (including CORS errors)
    // if (!error.response) {
    //   console.error('Network or CORS Error:', error.message);

    //   // Dispatch an alert for network errors
    //   store.dispatch(
    //     openAlert({
    //       message: 'Network error. Please check your connection.',
    //       alertType: 'error_alert',
    //     })
    //   );

    //   // Return a rejected promise with a custom error object
    //   return Promise.reject({
    //     responseCode: '500',
    //     message: 'Network error. Please check your connection.',
    //   });
    // }

    // Handle 401 Unauthorized error
    // if (error.response?.status === 401) {
    //   confirmAction({
    //     title: 'Your session is expired!',
    //     confirmButtonText: 'Ok',
    //     showCancelButton: false,
    //     callback: logout,
    //   });
    //   return;
    // }

    // For other errors, return the error response as-is
    return error?.response;
  }
);
export default api;
