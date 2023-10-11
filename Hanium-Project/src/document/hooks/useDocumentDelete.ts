import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
// for when we need functions for useMutation
async function Document(number:number): Promise<void> {
  const response = await axiosInstance.delete(`/record/${number}`,{
    headers: getJWTHeader(),
  });
  console.log(response.data);
  return response.data;
}

// TODO: update type for React Query mutate function

export function useDocumentDelete() {
  //   const toast = useCustomToast();

  const { mutate, isSuccess, isError } = useMutation((number: number) => {
    const response = Document(number);
    console.log(response);
    return response;
  });
  // TODO: replace with mutate function
  return { mutate, isSuccess, isError };
}
