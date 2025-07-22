const getBaseUrl = () => {
  if (process.env.REACT_APP_ENV === 'staging') {
    return process.env.REACT_APP_STAGING_API_URL;
  } else if (process.env.REACT_APP_ENV === 'production') {
    return process.env.REACT_APP_PROD_API_URL;
  } else {
    return process.env.REACT_APP_BASE_API_URL;
  }
};

export default getBaseUrl;
