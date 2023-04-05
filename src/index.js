import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyLayout from './Layouts/Layout/MyLayout';
import MyPhoto from './pages/MyPhoto/MyPhoto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyPhoto/>
  </React.StrictMode>
);


