'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode } from 'react'
// import { ReactQueryDevtools } from 'react-query/devtools'

declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: ReactNode
  }
}

const queryClient = new QueryClient()

export function TanstackProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
