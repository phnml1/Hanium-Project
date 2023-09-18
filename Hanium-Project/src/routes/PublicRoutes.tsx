import { lazy } from 'react';
import { IRoute } from '@/types/route';
const MainPage = lazy(
  () => import('@/page/MainPage'),
);
const MonitoringPage = lazy(
  () => import('@/page/MonitoringPage'),
);
const NotificationPage = lazy(
  () =>
    import( '@/page/NotificationPage'),
);
const DocumentPage = lazy(
  () => import('@/page/DocumentPage'),
);
const LogisticsPage = lazy(
  () => import('@/page/LogisticsPage'),
);

const PublicRoutes: IRoute[] = [
  { path: '/', element: <MainPage /> },
  { path: '/monitoring', element: <MonitoringPage /> },
  { path: '/notification', element: <NotificationPage /> },
  { path: '/document', element: <DocumentPage /> },
  { path: '/logistics', element: <LogisticsPage /> },
];

export { PublicRoutes };
