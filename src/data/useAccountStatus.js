import api from 'libs/api';
import { API_PATHS } from 'data/apiPaths';
import commonCrudFactory from 'data/commonCrudFactory';

async function getAccountsStatus(query) {
  const { pageNumber, size } = query;
  const payload = {
    pageNo: pageNumber,
    pageSize: size,
  };
  const response = await api.post(
    API_PATHS.MANAGE_USER_ACCOUNT_GET_STATUS,
    payload
  );
  return response;
}

async function editAccountStatus(payload) {
  const response = await api.post(
    API_PATHS.MANAGE_USER_ACCOUNT_EDIT_STATUS,
    payload
  );
  return response;
}

const useAccountStatus = commonCrudFactory({
  key: 'user-account-status',
  interval: 300000, //3000 sec
  api: {
    getItems: getAccountsStatus,
    editItem: editAccountStatus,
  },
});

export default useAccountStatus;
