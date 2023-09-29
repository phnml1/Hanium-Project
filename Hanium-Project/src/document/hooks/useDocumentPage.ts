import { useInfiniteQuery } from 'react-query';
import { axiosInstance } from '@/axiosinstance';
// for when we need functions for useMutation
const Document = async ({ pageParam = 0 }) => {
  console.log(pageParam);
  return await axiosInstance.get(`/record/ASC`, { params: { page:pageParam } })
};

export function useDocumentPage() {
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
  useInfiniteQuery(
    ["documents"],
    ({ pageParam = 0 }) => Document(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length < 4 && allPages.length + 1;
      },
    }
  );

  return { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage };
}
