import React from 'react';
import { createRoot } from 'react-dom/client';  
import { RouterProvider } from 'react-router-dom';
// RouterProvider is a component which comes from react-router-dom.  
// RouterProvider wraps the app and gives access to routing functionality throughout the component tree.
import { appRouter } from './App'; 
// Import the router configuration
import './index.css';  

// Get the element which is want to become root from the DOM
const rootElement = document.getElementById('root');

// Create the root using createRoot from 'react-dom/client'
const root = createRoot(rootElement);

// Render the application with RouterProvider

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

 
