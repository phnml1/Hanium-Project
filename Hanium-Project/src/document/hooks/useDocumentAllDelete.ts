import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
// for when we need functions for useMutation
async function Document(): Promise<void> {
  const response = await axiosInstance.delete(`/record`,{
    headers: getJWTHeader(),
  });
  return response.data;
}

// TODO: update type for React Query mutate function

export function useDocumentAllDelete() {
  //   const toast = useCustomToast();

  const { mutate, isSuccess, isError } = useMutation(() => {
    const response = Document();
    console.log(response);
    return response;
  });
  // TODO: replace with mutate function
  return { mutate, isSuccess, isError };
}
