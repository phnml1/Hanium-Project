import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
import { useQueryClient } from 'react-query';
// for when we need functions for useMutation
async function Alert(): Promise<void> {
  const response = await axiosInstance.delete(`/notice`,{
    headers: getJWTHeader(),
  });
  return response.data;
}

// TODO: update type for React Query mutate function

export function useAlertAllDelete() {
  //   const toast = useCustomToast();
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isError } = useMutation(() => {
    const response = Alert();
    console.log(response);
    return response;
  }, {
    onSuccess() {
      queryClient.invalidateQueries(["alert"],{ refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
    },
  });
  // TODO: replace with mutate function
  return { mutate, isSuccess, isError };
}
