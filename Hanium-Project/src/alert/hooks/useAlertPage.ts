import { useInfiniteQuery } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
// for when we need functions for useMutation
const Alert = async (pageParam:number, selected = '전체 알림') => {
  let response;

  if (selected === '진행 알림') {
    response = await axiosInstance.get(`/notice/get_list/type`, {
      params: { page: pageParam, type: 'record' },
      headers: getJWTHeader(),
    });
  } else if (selected === '오류 알림') {
    response = await axiosInstance.get(`/notice/get_list/type`, {
      params: { page: pageParam, type: 'alert' },
      headers: getJWTHeader(),
    });
  } else {
    response = await axiosInstance.get(`/notice/get_list`, {
      params: { page: pageParam },
      headers: getJWTHeader(),
    });
  }

  return response.data;
};

export function useAlertPage(selected:string) {
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
  useInfiniteQuery(
    [`alert${selected}`],
    ({ pageParam = 0 }) => Alert(pageParam,selected),
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length < 4 && allPages.length;
      },
    }
  );

  return { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage };
}
