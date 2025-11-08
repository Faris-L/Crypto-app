import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import { Notifications } from "@mantine/notifications";
import "boxicons/css/boxicons.min.css";
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MantineProvider>
    <QueryClientProvider client={queryClient}>
      <Notifications
  position="bottom-left"
  zIndex={1000}
  limit={5}
  autoClose={2500}
  transition="slide-up"
  transitionDuration={300}
/>

      <App />
      </QueryClientProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
