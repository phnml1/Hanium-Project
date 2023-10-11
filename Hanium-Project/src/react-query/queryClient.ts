import { MutationCache, QueryCache, QueryClient } from 'react-query';

function queryErrorHandler(error: unknown): void {
//   // error is type unknown because in js, anything can be an error (e.g. throw(5))
//   const title =
//     error instanceof Error ? error.message : 'error connecting to server';
}
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 3000,
      cacheTime: 900000,
      refetchOnMount: false,//쿼리 unmount될때 inactive로 됨
      refetchOnReconnect: false, //네트워크 재연결시 다시?
      refetchOnWindowFocus: false, //창에 초점다시 맞출때 다시?
    },
  },
});