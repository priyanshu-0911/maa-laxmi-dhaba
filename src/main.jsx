// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';

// Define the routes for your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The main App component is the layout
    children: [
      {
        index: true, // This makes HomePage the default page
        element: <HomePage />,
      },
      {
        path: 'menu', // This creates the your-site.com/menu page
        element: <MenuPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);