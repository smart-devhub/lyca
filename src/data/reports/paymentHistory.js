import commonCrudFactory from '../commonCrudFactory';
import api from 'libs/api';

async function getPaymentHistory(query) {
  const payload = {
    pageNo: query.pageNumber,
    pageSize: query?.size,
  };
  return api.post('/postpaid/payment-history', payload);
}

async function downloadReport(payload) {
  return await api.post('/invoice/history-download', payload);
}

const usePaymentHistory = commonCrudFactory({
  key: 'payment-history',
  interval: 300000, //3000 sec
  api: {
    getItems: getPaymentHistory,
    editItem: downloadReport,
  },
});

export default usePaymentHistory;
