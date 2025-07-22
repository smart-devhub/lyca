import api from 'libs/api';
import { API_PATHS } from 'data/apiPaths';
import commonCrudFactory from '../../commonCrudFactory';

async function getMasking(query) {
  const { pageNumber, size } = query;
  const payload = {
    pageNo: pageNumber,
    pageSize: size,
  };
  const response = await api.post(
    API_PATHS.MANAGE_TEMPLATE_GET_TEMPLATE,
    payload
  );
  return response;
}

async function addMasking(payload) {
  return api.post(API_PATHS.MANAGE_TEMPLATE_ADD_TEMPLATE, payload);
}

async function editMasking(payload) {
  const response = await api.post(
    API_PATHS.MANAGE_TEMPLATE_EDIT_TEMPLATE,
    payload
  );
  return response;
}

async function deleteMasking(id) {
  const response = await api.post(API_PATHS.MANAGE_TEMPLATE_DELETE_TEMPLATE, {
    id,
  });
  return response;
}

const useManageMasking = commonCrudFactory({
  key: 'template-list',
  interval: 300000, //3000 sec
  api: {
    addItem: addMasking,
    getItems: getMasking,
    editItem: editMasking,
    deleteItem: deleteMasking,
  },
});

export default useManageMasking;
