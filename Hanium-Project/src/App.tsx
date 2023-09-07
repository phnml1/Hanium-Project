import { useState } from 'react';
import MainPage from '@/page/MainPage';
import MonitoringPage from '@/page/MonitoringPage';
import DocumentPage from '@/page/DocumentPage';
import LogisticsPage from '@/page/LogisticsPage';
import NotificationPage from '@/page/NotificationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/monitoring" element={<MonitoringPage />} />
      <Route path="/document" element={<DocumentPage />} />
      <Route path="/logistics" element={<LogisticsPage />} />
      <Route path="/notification" element={<NotificationPage />} />
    </Routes>
  );
}
export default App;
