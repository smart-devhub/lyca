import api from 'libs/api';

export const PostData = async (path, payload) => {
  try {
    const response = await api.post(path, payload);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getData = async path => {
  try {
    const response = await api.get(path);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const editData = async (path, payload) => {
  try {
    const response = await api.put(`${path}`, payload);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteData = async (path, payload) => {
  try {
    const response = await api.delete(`${path}/${payload?.id}`);
    return response?.data;
  } catch (error) {
    return error;
  }
};
