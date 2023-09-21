import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { generateRoutes } from './utils/generateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import LoadingPage from './page/LoadingPage';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './react-query/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route>{generateRoutes(PublicRoutes)}</Route>
        </Routes>
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default App;
