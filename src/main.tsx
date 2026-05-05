import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"

import { createTheme, MantineProvider } from "@mantine/core"
import { BrowserRouter } from "react-router"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { App } from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Notifications } from "@mantine/notifications"

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
})

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <Notifications />
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
