import { useMutation,useQueryClient } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
import { DocumentData } from '../types';
async function Document(data: DocumentData): Promise<void> {
  const response = await axiosInstance.post(`/record`, data, {
    headers: getJWTHeader(),
  });
  return response.data;
}

export function useDocumentAdd() {
  const queryClient = useQueryClient();
  const { mutate, isSuccess, isError } = useMutation(
    (data: DocumentData) => {
      const response = Document(data);
      console.log(response);
      return response;
    },{
      onSuccess() {
        queryClient.invalidateQueries(["documents"], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
      },
    }
  );
  return { mutate, isSuccess, isError };
}

