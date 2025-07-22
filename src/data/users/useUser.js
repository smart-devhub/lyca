import commonCrudFactory from 'data/commonCrudFactory';
import api from 'libs/api';

async function getUserData(query) {
  const { pageNumber, size } = query;
  const payload = {
    pageNo: pageNumber,
    pageSize: size,
  };

  const response = await api.post('/user/view-user', payload);
  return response;
}

async function addUserData(payload) {
  return api.post(`/user/add-user`, payload);
}

async function editUserData(payload) {
  const response = await api.post('/user/update-user', payload);
  return response;
}

async function deleteUserData(id) {
  const response = await api.post(`/user/delete-user`, { id });
  return response;
}

const useUser = commonCrudFactory({
  key: 'user-list',
  interval: 300000, //3000 sec
  api: {
    getItems: getUserData,
    addItem: addUserData,
    editItem: editUserData,
    deleteItem: deleteUserData,
  },
});

export default useUser;
