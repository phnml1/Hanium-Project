import { useMutation } from 'react-query';
import { axiosInstance } from '@/axiosinstance';
import { LoginData } from '../types';
// for when we need functions for useMutation
async function Login(data: LoginData): Promise<void> {
  const response = await axiosInstance.post(`/jwt/login`, data);
  return response.data;
}

// TODO: update type for React Query mutate function

export function useLogin() {
  //   const toast = useCustomToast();

  const { mutateAsync } = useMutation(
    (data: LoginData) => {
      console.log(data);
      const response = Login(data);
      console.log(response);
      return response;
    },
    {
      // onSuccess 콜백을 사용하여 response를 처리하고 반환합니다.
      onSuccess: (response) => {
        // 원하는 작업을 수행하고 response를 반환합니다.
        return response;
        alert(response);
      },
    },
  );
  // TODO: replace with mutate function
  return mutateAsync;
}
