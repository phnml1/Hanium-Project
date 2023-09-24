import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
import { DocumentData } from '../types';
// for when we need functions for useMutation
async function Document(data: DocumentData): Promise<void> {
  const response = await axiosInstance.post(`/record`, data,{
    headers:getJWTHeader()});
  return response.data;
}

// TODO: update type for React Query mutate function

export function useDocumentAdd() {
  //   const toast = useCustomToast();

  const { mutate, isSuccess, isError } = useMutation(
    (data: DocumentData) => {
      const response = Document(data);
      console.log(response);
      return response;
    },
  );
  // TODO: replace with mutate function
  return { mutate, isSuccess, isError };
}
