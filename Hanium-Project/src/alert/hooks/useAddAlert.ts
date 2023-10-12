import { useMutation } from 'react-query';
import { axiosInstance } from '@/axiosinstance';
import { AlertData } from '../types';
import { useQueryClient  } from 'react-query';

// for when we need functions for useMutation
async function Alert(data: AlertData): Promise<void> {
  const response = await axiosInstance.post(`/notice`, data);
  return response.data;
}

// TODO: update type for React Query mutate function

export function useAddAlert() {
  //   const toast = useCustomToast();
  const queryClient = useQueryClient();
  const { mutate, isSuccess, isError } = useMutation(
    (data: AlertData) => {
      const response = Alert(data);
      console.log(response);
      return response;
    },{
      onSuccess() {
        queryClient.invalidateQueries(["alert"], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
      },
    }
  );
  // TODO: replace with mutate function
  return { mutate, isSuccess, isError };
}
