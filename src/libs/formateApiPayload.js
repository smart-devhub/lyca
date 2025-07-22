const generateFormDataPayload = (payload, commonData) => {
  const { file, fileName, ...restPayload } = payload;
  const formData = new FormData();

  if (file) {
    const newFileName = fileName || 'converted_csv.csv';
    formData.append('file', file, newFileName);
  } else {
    const emptyFile = new File(
      [new Blob([''], { type: 'application/json' })],
      'request',
      {
        type: 'application/json',
      }
    );
    formData.append('file', emptyFile);
  }

  const requestJsonObj = JSON.stringify({ ...commonData, ...restPayload });
  const uploadFile = new File(
    [new Blob([requestJsonObj], { type: 'application/json' })],
    'request',
    {
      type: 'application/json',
    }
  );

  formData.append('request', uploadFile);

  return formData;
};

const formateApiPayload = config => {
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');
  const vendorName = localStorage.getItem('vendorName');

  const commonData = {
    userName,
    vendorName,
    channel: 'web',
    language: 'en',
    // languageType: 'English',
    senderIp: '0.0.0.0',
    accountType: '',
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data) {
    //if file exists
    if (config.data.file !== undefined) {
      config.data = generateFormDataPayload(config.data, commonData);
      delete config.headers['Content-Type'];
    } else {
      config.data = { ...commonData, ...config.data };
    }
  } else {
    config.data = { ...commonData };
  }

  return config;
};

export default formateApiPayload;
