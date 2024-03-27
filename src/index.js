import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './static/iconfont/iconfont.css'
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
// import TopBar from '@/components/TopBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
