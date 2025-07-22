import api from 'libs/api';
import { API_PATHS } from 'data/apiPaths';
import commonCrudFactory from '../../commonCrudFactory';

async function getMaskingCategorys(query) {
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

async function addMaskingCategory(payload) {
  return api.post(API_PATHS.MANAGE_TEMPLATE_ADD_TEMPLATE, payload);
}

async function editMaskingCategory(payload) {
  const response = await api.post(
    API_PATHS.MANAGE_TEMPLATE_EDIT_TEMPLATE,
    payload
  );
  return response;
}

async function deleteMaskingCategory(id) {
  const response = await api.post(API_PATHS.MANAGE_TEMPLATE_DELETE_TEMPLATE, {
    id,
  });
  return response;
}

const useManageMaskingCategory = commonCrudFactory({
  key: 'template-list',
  interval: 300000, //3000 sec
  api: {
    addItem: addMaskingCategory,
    getItems: getMaskingCategorys,
    editItem: editMaskingCategory,
    deleteItem: deleteMaskingCategory,
  },
});

export default useManageMaskingCategory;
