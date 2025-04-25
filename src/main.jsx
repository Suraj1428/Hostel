import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import AdminPanel from './AdminPanel';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
    <AdminPanel />
  </React.StrictMode>
);
