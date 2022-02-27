import Page404 from '@/views/error/Page404';
import ScrollContents from '@/views/main/ScrollContents';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollContents />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
