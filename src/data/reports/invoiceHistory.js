import commonCrudFactory from 'data/commonCrudFactory';
import api from 'libs/api';

async function getInvoiceHistory(query) {
  const { pageNumber, size } = query;
  const payload = {
    pageNo: pageNumber,
    pageSize: size,
  };
  const response = await api.post('/invoice/history', payload);
  return response;
}

const useInvoiceHistory = commonCrudFactory({
  key: 'invoice-history',
  interval: 300000, //3000 sec
  api: {
    getItems: getInvoiceHistory,
  },
});

export default useInvoiceHistory;
