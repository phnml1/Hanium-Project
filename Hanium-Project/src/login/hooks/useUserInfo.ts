import { useQuery } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
import { LoginData } from '../types';
// for when we need functions for useMutation
async function UserInfo(): Promise<void> {
  return await axiosInstance.get(`/jwt/info`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
  });
}

// TODO: update type for React Query mutate function

export function useUserInfo() {
  //   const toast = useCustomToast();

  const { data } = useQuery(['user'], UserInfo);
  // TODO: replace with mutate function
  return data;
}
