import { useState } from 'react';
import MainPage from '@/page/MainPage';
import MonitoringPage from '@/page/MonitoringPage';
import DocumentPage from '@/page/DocumentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/monitoring" element={<MonitoringPage />} />
        <Route path="/document" element={<DocumentPage />} />
      </Routes>

  );
}
export default App;
