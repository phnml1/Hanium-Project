import { useMutation } from 'react-query';
import { axiosInstance } from '@/axiosinstance';
import { AlertData } from '../types';
// for when we need functions for useMutation
async function Alert(data: AlertData): Promise<void> {
  const response = await axiosInstance.post(`/notice`, data);
  return response.data;
}

// TODO: update type for React Query mutate function

export function useAddAlert() {
  //   const toast = useCustomToast();

  const { mutate, isSuccess, isError } = useMutation(
    (data: AlertData) => {
      const response = Alert(data);
      console.log(response);
      return response;
    },
  );
  // TODO: replace with mutate function
  return { mutate, isSuccess, isError };
}
