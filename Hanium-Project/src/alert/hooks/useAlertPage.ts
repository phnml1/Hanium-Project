import { useInfiniteQuery } from 'react-query';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';

// for when we need functions for useMutation
const Alert = async (pageParam:number, selected:string) => {
  if (selected === '진행 알림') {
     return await axiosInstance.get(`/notice/get_list/type`, {
      params: { page: pageParam, type: 'record' },
      headers: getJWTHeader(),
    });
  } else if (selected === '오류 알림') {
     return await axiosInstance.get(`/notice/get_list/type`, {
      params: { page: pageParam, type: 'alert' },
      headers: getJWTHeader(),
    });
  } else {
     return await axiosInstance.get(`/notice/get_list`, {
      params: { page: pageParam },
      headers: getJWTHeader(),
    });
  }
};

export function useAlertPage(selected:string) {
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
  useInfiniteQuery(
    ['alert',`${selected}`],
   ({ pageParam=0}) => Alert(pageParam,selected),
   {
     getNextPageParam: (lastPage) => !(lastPage.data.last) && lastPage.data.pageable.pageNumber+1,
   },
 );

  return { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage };
}
