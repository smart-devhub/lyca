import { useEffect, useState } from 'react';
// @ import dependencies
import { useDispatch } from 'react-redux';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// @ import libs
import { confirmAction } from 'libs/confirmAction';
// @ import redux slices
import { openAlert, openModal } from 'store/slices/alertSlice';
import { setLoader, setSubmitStatus } from 'store/slices/loaderSlice';

const getKey = (key = 'api-key') => key;
const getIntervalTime = time => (time === Infinity ? 0 : time + 30000);
const getCacheTime = time => (time === Infinity ? Infinity : time + 300000);

function commonCrudFactory(config) {
  return (query = null) => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const { interval = 300000 } = config;
    const key = { key: getKey(config.key), query };

    const [submittingStatus, setSubmittingStatus] = useState('');
    const [numberOfElements, setNumberOfElements] = useState(null);

    const showAlert = (message, alertType) => {
      dispatch(
        openAlert({
          message,
          alertType,
        })
      );
    };

    const showModal = (title, message, alertType) => {
      dispatch(
        openModal({
          title,
          message,
          alertType,
        })
      );
    };

    const showSuccess = (message = 'Processed successfully!') => {
      showAlert(message, 'success_alert');
    };

    const showError = (title, message = 'Something Went Wrong!') => {
      showModal(title, message, 'error_alert');
    };

    const confirmDelete = item => {
      confirmAction({
        callback: async isConfirmed => {
          if (!isConfirmed) {
            return;
          }
          deleteItemMutation(item);
        },
      });
    };

    const customDataCheck = (oldData, newData) => {
      if (!oldData || !config?.customDataCheck) {
        return newData;
      }
      return config.customDataCheck(newData, oldData);
    };

    const getData = async () => {
      if (!config.api.getItems) {
        throw new Error('getItem function is not available');
      }
      const response = await config.api.getItems(query);
      const { data } = response;
      const successCodes = ['4000', '3000'];

      if (!successCodes.includes(data?.responseCode)) {
        showError('Failed', response?.data?.message);
        return [];
      }

      return (
        {
          ...response?.data,
          content: data?.data?.content || [],
          query: {
            size: query?.size,
            count: data?.data?.totalElements,
            pageNumber: query?.pageNumber,
          },
        } || null
      );
    };

    const addData = async item => {
      if (!config.api.addItem) {
        throw new Error('addItem function is not available');
      }
      setSubmittingStatus('submitting');
      const response = await config.api.addItem(item);

      if (response?.status !== 200 || response?.data?.responseCode !== '4000') {
        setSubmittingStatus('error');
        showError('Failed', response?.data?.message);
        throw new Error(response?.data?.message);
      }
      setSubmittingStatus('submitted');
      showSuccess(response?.data?.message);
    };

    const editData = async item => {
      if (!config.api.editItem) {
        throw new Error('editItem function is not available');
      }
      setSubmittingStatus('submitting');
      const response = await config.api.editItem(item);

      if (response?.status !== 200 || response?.data?.responseCode !== '4000') {
        setSubmittingStatus('error');
        showError('Failed', response?.data?.message);
        throw new Error(response?.data?.message);
      }

      setSubmittingStatus('submitted');
      showSuccess(response?.data?.message);
    };

    const deleteData = async item => {
      if (!config.api.deleteItem) {
        throw new Error('deleteItem function is not available');
      }
      setSubmittingStatus('submitting');
      const response = await config.api.deleteItem(item);

      if (response?.status !== 200 || response?.data?.responseCode !== '4000') {
        setSubmittingStatus('error');
        showError('Failed', response?.data?.message);
        throw new Error(response?.data?.message);
      }
      setSubmittingStatus('submitted');
      showSuccess(response?.data?.message);
    };

    const { isLoading, error, data } = useQuery({
      queryKey: [key],
      queryFn: getData,
      staleTime: interval,
      cacheTime: getCacheTime(interval),
      structuralSharing: customDataCheck,
      refetchInterval: getIntervalTime(interval),
    });

    const handleMutateSuccess = mutationType => {
      if (mutationType === 'delete') {
        if (numberOfElements && numberOfElements < 2 && query?.pageNumber) {
          query = {
            ...query,
            pageNumber: query?.pageNumber - 1,
          };
        }
      }
      queryClient.invalidateQueries([key]);
    };

    const useMutationOptions = (mutationFn, mutationType) => ({
      mutationFn,
      onSuccess: () => handleMutateSuccess(mutationType),
    });

    const { mutate: addItemMutation } = useMutation(
      useMutationOptions(addData, 'add')
    );
    const { mutate: editItemMutation } = useMutation(
      useMutationOptions(editData, 'edit')
    );
    const { mutate: deleteItemMutation } = useMutation(
      useMutationOptions(deleteData, 'delete')
    );

    useEffect(() => {
      dispatch(setLoader(isLoading));
    }, [isLoading]);

    useEffect(() => {
      if (data?.data?.content) {
        setNumberOfElements(data?.data?.content?.length);
      }
    }, [data?.data?.content]);

    useEffect(() => {
      if (!isLoading) {
        dispatch(setLoader(submittingStatus === 'submitting'));
      }

      if (submittingStatus === 'submitted' || submittingStatus === 'error') {
        dispatch(setLoader(false));
      }
      dispatch(setSubmitStatus(submittingStatus));
    }, [submittingStatus]);

    useEffect(() => () => dispatch(setLoader(false)), []);

    return {
      data,
      isLoading,
      isError: error,
      submittingStatus,

      addItem: addItemMutation,
      editItem: editItemMutation,
      deleteItem: confirmDelete,

      refetch: handleMutateSuccess,
    };
  };
}

export default commonCrudFactory;
