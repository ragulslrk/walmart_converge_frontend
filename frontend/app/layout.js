"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { StyledEngineProvider } from "@mui/material/styles";
const inter = Inter({ subsets: ['latin'] })
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
export const metadata = {
  title: 'Severus Ecommerce',
  description: 'This is severus Ecommerce.',
}
const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>

      <StyledEngineProvider injectFirst>
      <body className={inter.className}>{children}</body>

      </StyledEngineProvider>
      </QueryClientProvider>

    </html>
  )
}
