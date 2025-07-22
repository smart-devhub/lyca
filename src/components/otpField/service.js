// @import apiService
import { PostData } from 'data/apiService';
// @import redux slices
import { openAlert, openModal } from 'store/slices/alertSlice';
import { setLoader } from 'store/slices/loaderSlice';

// Handle Forget Password
const handleGenerateOtp = async ({ payload, dispatch, setValue }) => {
  dispatch(setLoader(true));
  try {
    const response = await PostData('/otp/generateOtp', payload);
    if (response?.responseCode === '4000') {
      if (setValue) {
        setValue('isOtpGenerated', true);
      }
      dispatch(
        openAlert({
          message: response?.message,
          alertType: 'success_alert',
        })
      );
      return;
    }
  } catch (error) {
    dispatch(
      openModal({
        title: 'Failed',
        message: error?.message || 'An unexpected error occurred',
        alertType: 'error_alert',
      })
    );
  } finally {
    dispatch(setLoader(false));
  }
};

export { handleGenerateOtp };
