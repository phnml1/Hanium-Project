import { useMutation } from 'react-query';
import { axiosInstance } from '@/axiosinstance';
import { SignUpData } from '../types';
// for when we need functions for useMutation
async function SignUp(data: SignUpData): Promise<void> {
  const response = await axiosInstance.post(`/jwt/join`, data);
  return response.data;
}

// TODO: update type for React Query mutate function

export function useSignUp() {
  //   const toast = useCustomToast();

  const { mutateAsync } = useMutation(
    (data: SignUpData) => {
      console.log(data);
      const response = SignUp(data);
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
