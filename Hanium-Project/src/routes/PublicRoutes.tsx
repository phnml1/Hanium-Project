import { lazy } from 'react';
import { IRoute } from '@/types/route';
const MainPage = lazy(
  () => import(/* webpackChunkName: "home" */ '@/page/MainPage'),
);
const MonitoringPage = lazy(
  () => import(/* webpackChunkName: "productList" */ '@/page/MonitoringPage'),
);
const NotificationPage = lazy(
  () =>
    import(/* webpackChunkName: "productDetail" */ '@/page/NotificationPage'),
);
const DocumentPage = lazy(
  () => import(/* webpackChunkName: "cart" */ '@/page/DocumentPage'),
);
const LogisticsPage = lazy(
  () => import(/* webpackChunkName: "login" */ '@/page/LogisticsPage'),
);

const PublicRoutes: IRoute[] = [
  { path: '/', element: <MainPage /> },
  { path: '/monitoring', element: <MonitoringPage /> },
  { path: '/notification', element: <NotificationPage /> },
  { path: '/document', element: <DocumentPage /> },
  { path: '/logistics', element: <LogisticsPage /> },
];

export { PublicRoutes };
