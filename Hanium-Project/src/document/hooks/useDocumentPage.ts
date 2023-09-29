import { useInfiniteQuery, useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
import { DocumentData } from '../types';
// for when we need functions for useMutation
async function Document(page: number): Promise<any> {
  const response = await axiosInstance.get(`/record/ASC`, { params: { page } });
  return response.data;
}

export function useDocumentPage() {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      'documents',
      ({ pageParam = 1 }) => Document(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          return nextPage;
        },
      },
    );

  return { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage };
}
