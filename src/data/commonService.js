// @import apiService
import { PostData } from 'data/apiService';

// @import redux slices
import { store } from 'store/store';
import { openAlert, openModal } from 'store/slices/alertSlice';
import { setLoader } from 'store/slices/loaderSlice';
import { handleSetSmsMaksing } from 'store/slices/commonSlice';
// @import paths
import { API_PATHS } from './apiPaths';
// @import libs
import { convertBinaryToExcel } from 'libs/binaryToExcel';

// Generic function for submit
const handleGenericApiCall = async ({
  path,
  reset,
  setValue,
  onSuccessCallback,
  payload = {},
  setLocalLoader,
  isSuccessToaster = true,
}) => {
  setLocalLoader ? setLocalLoader(true) : store.dispatch(setLoader(true));
  try {
    const response = await PostData(path, payload);
    const successCodes = ['4000', '3000'];

    if (successCodes?.includes(response?.responseCode)) {
      if (setValue) {
        setValue('isOtpGenerated', true);
      }

      if (reset) {
        reset();
      }

      if (onSuccessCallback) {
        onSuccessCallback(response);
      }

      if (isSuccessToaster) {
        store.dispatch(
          openAlert({
            message: response?.message,
            alertType: 'success_alert',
          })
        );
      }

      return response;
    }

    store.dispatch(
      openAlert({
        message: response?.message,
        alertType: 'error_alert',
      })
    );
    return response;
  } catch (error) {
    store.dispatch(
      openModal({
        title: 'Failed',
        message: error?.message || 'An unexpected error occurred',
        alertType: 'error_alert',
      })
    );
    return error;
  } finally {
    setLocalLoader ? setLocalLoader(false) : store.dispatch(setLoader(false));
  }
};

// Handle Forget Password
const handleGenerateOtp = async ({ payload, setValue }) => {
  handleGenericApiCall({
    path: '/otp/generate-otp',
    payload,
    setValue,
  });
};

const handleGetSmsMasking = async () => {
  handleGenericApiCall({
    isSuccessToaster: false,
    path: '/sms-masking/name-dropdown',
    payload: {},
    onSuccessCallback: res => {
      const data =
        res?.data?.map(el => ({ ...el, value: el?.id, label: el?.name })) || [];
      store.dispatch(handleSetSmsMaksing(data));
    },
  });
};

const handleExport = payload => {
  handleGenericApiCall({
    isSuccessToaster: false,
    payload: payload,
    path: API_PATHS.DOWNLOAD_REPORT,
    onSuccessCallback: async res => {
      convertBinaryToExcel(res?.data?.fileData, res?.data?.fileName);
    },
  });
};

export {
  handleGenerateOtp,
  handleGenericApiCall,
  handleGetSmsMasking,
  handleExport,
};
