import api from 'libs/api';
import { API_PATHS } from 'data/apiPaths';
import commonCrudFactory from 'data/commonCrudFactory';

async function getPackages(query) {
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

async function addPackage(payload) {
  return api.post(API_PATHS.MANAGE_TEMPLATE_ADD_TEMPLATE, payload);
}

async function editPackage(payload) {
  const response = await api.post(
    API_PATHS.MANAGE_TEMPLATE_EDIT_TEMPLATE,
    payload
  );
  return response;
}

async function deletePackage(id) {
  const response = await api.post(API_PATHS.MANAGE_TEMPLATE_DELETE_TEMPLATE, {
    id,
  });
  return response;
}

const useManagePackages = commonCrudFactory({
  key: 'template-list',
  interval: 300000, //3000 sec
  api: {
    addItem: addPackage,
    getItems: getPackages,
    editItem: editPackage,
    deleteItem: deletePackage,
  },
});

export default useManagePackages;
