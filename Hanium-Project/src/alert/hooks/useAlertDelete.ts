import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';

// for when we need functions for useMutation
async function Alert(number:number): Promise<void> {
  const response = await axiosInstance.delete(`/notice/${number}`,{
    headers: getJWTHeader(),
  });
  return response.data;
}

// TODO: update type for React Query mutate function

export function useAlertDelete() {
  //   const toast = useCustomToast();
  const queryClient = useQueryClient();
  const { mutate, isSuccess, isError } = useMutation((number: number) => {
    const response = Alert(number);
    console.log(response);
    return response;
  },{
    onSuccess() {
      queryClient.invalidateQueries(["alert"], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
    },
  });
  // TODO: replace with mutate function
  return { mutate, isSuccess, isError };
}
