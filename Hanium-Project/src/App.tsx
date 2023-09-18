import { useState } from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { generateRoutes } from './utils/generateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import LoadingPage from './page/LoadingPage';

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route>{generateRoutes(PublicRoutes)}</Route>
      </Routes>
    </Suspense>
  );
}
export default App;
