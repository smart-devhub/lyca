import commonCrudFactory from '../commonCrudFactory';
import api from 'libs/api';

async function getRolesData(query) {
  const { pageNumber, size } = query;
  const payload = {
    pageNo: pageNumber,
    pageSize: size,
  };
  const response = await api.post('/role/get-roles', payload);
  return response;
}

async function addRoleData(payload) {
  return api.post('/role/add-roles', payload);
}

async function editRoleData(payload) {
  const response = await api.post('/role/update-role', payload);
  return response;
}

async function deleteRoleData(id) {
  const response = await api.post('/role/delete-role', {
    id,
  });
  return response;
}

const useRoles = commonCrudFactory({
  key: 'roles-list',
  interval: 300000, //3000 sec
  api: {
    getItems: getRolesData,
    addItem: addRoleData,
    editItem: editRoleData,
    deleteItem: deleteRoleData,
  },
});

export default useRoles;
